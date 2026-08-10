import type { Song } from "../../../../types/song";
import "./ObservationLayout.css";

type ObservationLayoutProps = {
	song: Song;
};

export function ObservationLayout({ song }: ObservationLayoutProps) {
	return (
		<div className="observation-layout">
			<div className="observation-layout__fx">
				<div className="observation-layout__vignette" />
				<div className="observation-layout__gradient" />
				<div className="observation-layout__scanlines" />
				<div className="observation-layout__grid" />
				<div className="observation-layout__ring" />
				<div className="observation-layout__spark observation-layout__spark--one" />
				<div className="observation-layout__spark observation-layout__spark--two" />
			</div>

			<div className="observation-layout__scroll">
				<section className="observation-section observation-section--intro">
					<aside className="observation-info-panel">
						<div className="observation-info-panel__tag">{song.ui.label}</div>
						<h1 className="observation-info-panel__title">{song.title}</h1>
						<p className="observation-info-panel__subtitle">Observation</p>
						<h2 className="observation-info-panel__artist">{song.artist}</h2>
						<p className="observation-info-panel__description">{song.mood}</p>

						<div className="observation-info-panel__meta-list">
							<span>Mind Reading</span>
							<span>Dendro Signal</span>
							<span>Fantasy Scan</span>
						</div>
					</aside>

					<div className="observation-hud observation-hud--one">Terminal Link: Active</div>
					<div className="observation-hud observation-hud--two">Subject: Nahida</div>
					<div className="observation-hud observation-hud--three">Mode: Observation</div>
				</section>

				<section className="observation-section observation-section--character">
					<div className="observation-character-card">
						<div className="observation-character-card__portrait">
							<span>N</span>
						</div>

						<div className="observation-character-card__content">
							<p>Character Signal</p>
							<h2>Nahida</h2>
							<span>Lesser Lord Kusanali - soft wisdom, hidden power, and playful observation.</span>
						</div>
					</div>

					<div className="observation-bio-panel">
						<p>Bio Description</p>
						<h3>Mind Reader of the Stage</h3>
						<span>
							This zone is reserved for the future character PNG, name tag, and longer character story. The video stays alive behind it while this foreground panel moves.
						</span>
					</div>
				</section>

				<section className="observation-section observation-section--spectrum">
					<div className="observation-spectrum-card">
						<div className="observation-spectrum-card__header">
							<p>Audio Spectrum</p>
							<h2>Live Music Signal</h2>
						</div>

						<div className="observation-spectrum-card__bars" aria-hidden="true">
							{Array.from({ length: 36 }, (_, index) => (
								<span key={index} style={{ "--bar-index": index } as React.CSSProperties} />
							))}
						</div>

						<span className="observation-spectrum-card__note">
							Placeholder for now. Later this will become a real Web Audio API waveform synced to the video music.
						</span>
					</div>
				</section>

				<section className="observation-section observation-section--trait">
					<div className="observation-trait-card">
						<p>Unique Trait</p>
						<h2>Observation Scan</h2>
						<span>
							A future interactive scan feature can live here: mind-reading UI, target lock, floating memory fragments, dendro symbols, or special scene notes.
						</span>

						<div className="observation-trait-card__matrix">
							<span>SCAN 01</span>
							<span>DENDRO TRACE</span>
							<span>MEMORY LOCK</span>
							<span>KABOOM MARKER</span>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}