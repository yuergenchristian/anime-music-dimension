import { type ChangeEvent, useEffect, useRef, useState } from "react";
import type { Song } from "../../types/song";
import { formatTime } from "../../utils/formatTime";
import "./SongVideoPlayer.css";

type SongVideoPlayerProps = {
	song: Song;
	onReady?: () => void;
};

export function SongVideoPlayer({ song, onReady }: SongVideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const [isReady, setIsReady] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isEnded, setIsEnded] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.75);
	const [isBuffering, setIsBuffering] = useState(false);

	useEffect(() => {
		setIsReady(false);
		setIsPlaying(false);
		setIsBuffering(false);
		setIsEnded(false);
		setHasError(false);
		setCurrentTime(0);
		setDuration(0);
	}, [song.id]);

	useEffect(() => {
		if (!videoRef.current) {
			return;
		}

		videoRef.current.volume = volume;
	}, [volume]);

	async function playVideo() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		try {
			await video.play();
			setIsPlaying(true);
			setIsEnded(false);
		} catch {
			setIsPlaying(false);
		}
	}

	function pauseVideo() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		video.pause();
		setIsPlaying(false);
	}

	function togglePlay() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		if (isEnded) {
			video.currentTime = 0;
			setCurrentTime(0);
			setIsEnded(false);
			void playVideo();
			return;
		}

		if (video.paused) {
			void playVideo();
			return;
		}

		pauseVideo();
	}

	function replayVideo() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		video.currentTime = 0;
		setCurrentTime(0);
		setIsEnded(false);
		void playVideo();
	}

	function handleLoadedMetadata() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		setDuration(video.duration || 0);
		setHasError(false);
	}

	function handleCanPlay() {
		setIsReady(true);
		setIsBuffering(false);
		setHasError(false);
		onReady?.();
	}

	function handleTimeUpdate() {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		setCurrentTime(video.currentTime);
	}

	function handleVideoEnded() {
		setIsPlaying(false);
		setIsBuffering(false);
		setIsEnded(true);
	}

	function handleProgressChange(event: ChangeEvent<HTMLInputElement>) {
		const video = videoRef.current;
		const nextTime = Number(event.target.value);

		if (!video) {
			return;
		}

		video.currentTime = nextTime;
		setCurrentTime(nextTime);
	}

	function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
		setVolume(Number(event.target.value));
	}

	return (
		<div className="song-video-player">
			<div className="song-video-frame">
				<video
					key={song.id}
					ref={videoRef}
					className="song-video"
					poster={song.assets.cover}
					preload="auto"
					playsInline
					onLoadedMetadata={handleLoadedMetadata}
					onCanPlay={handleCanPlay}
					onTimeUpdate={handleTimeUpdate}
					onEnded={handleVideoEnded}
					onWaiting={() => setIsBuffering(true)}
					onPlaying={() => setIsBuffering(false)}
					onSeeking={() => setIsBuffering(true)}
					onSeeked={() => setIsBuffering(false)}
					onError={() => {
						setIsBuffering(false);
						setHasError(true);
						onReady?.();
					}}
				>
					<source src={song.assets.video} type="video/mp4" />
				</video>

				{!isReady && !hasError && (
					<div className="song-video-loading">
						<span>Loading video signal...</span>
					</div>
				)}

				{isBuffering && isReady && !hasError && !isEnded && (
					<div className="song-video-buffering">
						<span>Buffering Signal...</span>
					</div>
				)}

				{hasError && (
					<div className="song-video-error">
						<strong>Video file not found</strong>
						<span>{song.assets.video}</span>
					</div>
				)}

				{isEnded && !hasError && (
					<div className="song-video-ended">
						<p>Song ended</p>
						<button onClick={replayVideo}>Replay</button>
					</div>
				)}
			</div>

			<div className="song-player-panel">
				<div className="song-player-header">
					<div>
						<p>Now Playing</p>
						<h3>{song.title}</h3>
						<span>{song.artist}</span>
					</div>

					<button className="song-play-button" onClick={togglePlay} disabled={hasError}>
						{isEnded ? "Replay" : isPlaying ? "Pause" : "Play"}
					</button>
				</div>

				<div className="song-progress-row">
					<span>{formatTime(currentTime)}</span>

					<input
						type="range"
						min="0"
						max={duration || 0}
						step="0.01"
						value={duration ? currentTime : 0}
						onChange={handleProgressChange}
						disabled={!isReady || hasError}
					/>

					<span>{formatTime(duration)}</span>
				</div>

				<div className="song-volume-row">
					<span>Volume</span>

					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={volume}
						onChange={handleVolumeChange}
					/>
				</div>
			</div>
		</div>
	);
}