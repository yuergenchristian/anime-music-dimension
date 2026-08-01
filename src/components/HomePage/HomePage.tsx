import { useRef, useState } from "react";
import { homeAssets } from "../../data/songs";
import { SECRET_WORD, secretLetters } from "../../data/secretLetters";
import type { Song } from "../../types/song";
import "./HomePage.css";

type HomePageProps = {
	songs: Song[];
	currentSongIndex: number;
	collectedLetters: Array<string | null>;
	secretUnlocked: boolean;
	onEnterSongs: () => void;
	onSelectSong: (index: number) => void;
	onOpenHidden: () => void;
};

export function HomePage({
	songs,
	currentSongIndex,
	collectedLetters,
	secretUnlocked,
	onEnterSongs,
	onSelectSong,
	onOpenHidden
}: HomePageProps) {
	const bgmRef = useRef<HTMLAudioElement | null>(null);
	const ambientRef = useRef<HTMLAudioElement | null>(null);
	const [audioStarted, setAudioStarted] = useState(false);

	async function handleActivateAudio() {
		const playTasks: Promise<void>[] = [];

		if (bgmRef.current) {
			bgmRef.current.volume = 0.3;
			playTasks.push(bgmRef.current.play());
		}

		if (ambientRef.current) {
			ambientRef.current.volume = 0.18;
			playTasks.push(ambientRef.current.play());
		}

		await Promise.allSettled(playTasks);
		setAudioStarted(true);
	}

	return (
		<section className="home-page app-screen">
			<video className="home-bg-video" src={homeAssets.video} autoPlay muted loop playsInline />

			<div className="home-overlay"></div>
			<div className="home-light"></div>

			<audio ref={bgmRef} src={homeAssets.bgm} loop preload="auto"></audio>
			<audio ref={ambientRef} src={homeAssets.ambient} loop preload="auto"></audio>

			<div className="home-content">
				<div className="home-hero">
					<p className="home-eyebrow">GTV Music Dimension</p>

					<h1>Anime Music Dimension</h1>

					<p className="home-description">
						A cinematic React music showcase with seven animated song worlds, synced
						GMV playback, loading screens, button-only navigation, and a hidden secret code.
					</p>

					<div className="home-actions">
						<button className="home-primary-button" onClick={onEnterSongs}>
							Enter Current Song
						</button>

						<button className="home-secondary-button" onClick={handleActivateAudio}>
							{audioStarted ? "Home Audio Active" : "Activate Home Audio"}
						</button>
					</div>

					<div className="secret-paper">
						<div className="secret-paper-header">
							<span>Secret Code Paper</span>
							<small>Find letters across the 7 songs</small>
						</div>

						<div className="secret-slots" aria-label={`Secret code has ${SECRET_WORD.length} letters`}>
							{SECRET_WORD.split("").map((_, index) => {
								const savedLetter = collectedLetters[index];
								const secretStyle = secretLetters[index];

								return (
									<span
										key={secretStyle.songId}
										className={`secret-slot ${savedLetter ? "is-filled" : ""} ${secretStyle.className}`}
									>
										{savedLetter ?? "_"}
									</span>
								);
							})}
						</div>

						{secretUnlocked ? (
							<button className="hidden-unlock-button" onClick={onOpenHidden}>
								Open Hidden Dimension
							</button>
						) : (
							<p className="secret-hint">Collect all letters to unlock the hidden page.</p>
						)}
					</div>
				</div>

				<aside className="song-menu">
					<div className="song-menu-header">
						<p>Song Selector</p>
						<span>{String(songs.length).padStart(2, "0")}</span>
					</div>

					<div className="song-list">
						{songs.map((song, index) => (
							<button
								key={song.id}
								className={index === currentSongIndex ? "song-menu-item active" : "song-menu-item"}
								onClick={() => onSelectSong(index)}
							>
								<span>{String(song.order).padStart(2, "0")}</span>

								<div>
									<strong>{song.title}</strong>
									<small>{song.ui.label}</small>
								</div>
							</button>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}