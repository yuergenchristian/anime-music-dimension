import type { CSSProperties } from "react";
import type { Song } from "../../types/song";
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
};

export function SongStage({
	song,
	currentSongIndex,
	totalSongs,
	letterCollected,
	onPrevious,
	onNext,
	onReturnHome,
	onCollectLetter
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
			<div className="song-stage-bg"></div>

			<div className="song-stage-content">
				<div className="song-info-panel">
					<p>{song.ui.label}</p>
					<h1>{song.title}</h1>
					<h2>{song.artist}</h2>
					<span>{song.mood}</span>
				</div>

				<div className="song-video-placeholder">
					<p>Video system will be added in the next phase.</p>
					<strong>{song.ui.status}</strong>
					<small>{song.assets.video}</small>
				</div>

				<div className="song-control-panel">
					<button onClick={onPrevious} disabled={!canGoPrevious}>
						Previous
					</button>

					<button onClick={onReturnHome}>Return Home</button>

					<button onClick={onNext} disabled={!canGoNext}>
						Next
					</button>
				</div>

				<button
					className={`song-secret-letter ${letterCollected ? "collected" : ""}`}
					onClick={onCollectLetter}
				>
					{letterCollected ? "Collected" : song.ui.secretLetter}
				</button>
			</div>
		</section>
	);
}