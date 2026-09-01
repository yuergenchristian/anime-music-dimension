import type { CSSProperties } from "react";
import type { Song } from "../../types/song";
import { SongVideoPlayer } from "../SongVideoPlayer/SongVideoPlayer";
import { ObservationLayout } from "./layouts/ObservationLayout/ObservationLayout";
import { RestingLayout } from "./layouts/RestingLayout/RestingLayout";
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

	function renderSongLayout() {
		switch (song.theme) {
			case "dendro-observation":
				return <ObservationLayout song={song} />;
		
			case "cryo-resting":
				return <RestingLayout song={song} />;
		
			default:
				return <ObservationLayout song={song} />;
		}
	}

	return (
		<section className={`song-stage app-screen song-stage--${song.theme}`} style={style}>
			<div className="song-stage__video-layer">
				<SongVideoPlayer song={song} onReady={onStageReady} />
			</div>

			{renderSongLayout()}

			<button className="song-stage__home-button" onClick={onReturnHome} aria-label="Return to homepage">
				↑
			</button>

			{canGoPrevious && (
				<button className="song-stage__nav song-stage__nav--left" onClick={onPrevious} aria-label="Go to previous song">
					&lt;
				</button>
			)}

			{canGoNext && (
				<button className="song-stage__nav song-stage__nav--right" onClick={onNext} aria-label="Go to next song">
					&gt;
				</button>
			)}

			{!letterCollected && (
				<button className="song-secret-letter" onClick={onCollectLetter} aria-label={`Collect secret letter ${song.ui.secretLetter}`}>
					<span>{song.ui.secretLetter}</span>
				</button>
			)}
		</section>
	);
}