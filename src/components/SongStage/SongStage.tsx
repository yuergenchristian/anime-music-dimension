import type { CSSProperties } from "react";
import type { Song } from "../../types/song";
import { SongVideoPlayer } from "../SongVideoPlayer/SongVideoPlayer";
import "./SongStage.css";

type SongStageProps = {
	song: Song;
	currentSongIndex: number;
	totalSongs: number;
	letterCollected: boolean;
	onPrevious: () => void;
	onNext: () => void;
	onReturnHome: () => void;
	onCollectLetter: () => void;
	onStageReady: () => void;
};

export function SongStage({
	song,
	currentSongIndex,
	totalSongs,
	letterCollected,
	onPrevious,
	onNext,
	onReturnHome,
	onCollectLetter,
	onStageReady
}: SongStageProps) {
	const canGoPrevious = currentSongIndex > 0;
	const canGoNext = currentSongIndex < totalSongs - 1;

	const style = {
		"--song-primary": song.colors.primary,
		"--song-secondary": song.colors.secondary,
		"--song-accent": song.colors.accent,
		"--song-dark": song.colors.dark,
		"--song-glow": song.colors.glow
	} as CSSProperties;

	return (
		<section className={`song-stage app-screen song-stage--${song.theme}`} style={style}>
			<div className="song-stage__video-layer">
				<SongVideoPlayer song={song} onReady={onStageReady} />
			</div>
			
			{/* <div className="song-stage-bg"></div> */}

			<div className="song-stage__fx-layer">
				<div className="song-stage__vignette" />
				<div className="song-stage__gradient" />
				<div className="song-stage__scanlines" />
				<div className="song-stage__grid" />
				<div className="song-stage__ring" />
				<div className="song-stage__spark spark-1" />
				<div className="song-stage__spark spark-2" />
			</div>

			<button className="song-stage__home-button" onClick={onReturnHome} aria-label="Return to homepage">
				↑
			</button>

			{canGoPrevious && (
				<button className="song-stage__nav song-stage__nav--left" onClick={onPrevious} disabled={!canGoPrevious} aria-label="Go to previous song">
					&lt;
				</button>
			)}

			{canGoNext && (
				<button className="song-stage__nav song-stage__nav--right" onClick={onNext} disabled={!canGoNext} aria-label="Go to next song">
					&gt;
				</button>
			)}

			{!letterCollected && (
				<button className="song-secret-letter" onClick={onCollectLetter} aria-label={`Collect secret letter ${song.ui.secretLetter}`}>
					<span>{song.ui.secretLetter}</span>
				</button>
			)}

			<div className="song-stage__content">
				<aside className="song-stage__info-panel">
					<div className="song-stage__panel-tag">{song.ui.label}</div>
					<h1 className="song-stage__title">{song.title}</h1>
					<h2 className="song-stage__artist">{song.artist}</h2>
					<p className="song-stage__description">{song.mood}</p>

					<div className="song-stage__meta-list">
						<span>Mind Reading</span>
						<span>Dendro Signal</span>
						<span>Fantasy Scan</span>
					</div>
				</aside>

				<div className="song-stage__hud-chip chip-1">TERMINAL LINK: ACTIVE</div>
				<div className="song-stage__hud-chip chip-2">SUBJECT: NAHIDA</div>
				<div className="song-stage__hud-chip chip-3">MODE: OBSERVATION</div>
			</div>

			{/* <div className="song-stage-content">
				<div className="song-info-panel">
					<p>{song.ui.label}</p>
					<h1>{song.title}</h1>
					<h2>{song.artist}</h2>
					<span>{song.mood}</span>
				</div>

				<button
					className="song-arrow-button song-arrow-button--left"
					onClick={onPrevious}
					disabled={!canGoPrevious}
					aria-label="Go to previous song"
				>
					&lt;
				</button>

				<button
					className="song-arrow-button song-arrow-button--right"
					onClick={onNext}
					disabled={!canGoNext}
					aria-label="Go to next song"
				>
					&gt;
				</button>

				<button
					className="song-up-button"
					onClick={onReturnHome}
					aria-label="Return to homepage"
				>
					↑
				</button>

				{!letterCollected && (
					<button
						className="song-secret-letter"
						onClick={onCollectLetter}
						aria-label={`Collect secret letter ${song.ui.secretLetter}`}
					>
						<span>{song.ui.secretLetter}</span>
					</button>
				)}
			</div> */}
		</section>
	);
}