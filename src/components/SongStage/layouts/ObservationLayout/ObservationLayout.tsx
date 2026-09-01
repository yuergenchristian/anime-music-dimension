import type { CSSProperties } from "react";
import type { Song } from "../../../../types/song";
import { CharacterHero } from "../../shared/CharacterHero/CharacterHero";
import { ObservationScanOverlay } from "./components/ObservationScanOverlay/ObservationScanOverlay";
import { ObservationSkillPanel } from "./components/ObservationSkillPanel/ObservationSkillPanel";
import "./ObservationLayout.css";

type ObservationLayoutProps = {
	song: Song;
};

const spectrumBarPattern = [28, 54, 38, 72, 48, 86, 62, 34, 78, 44, 92, 58];

function scrollToSection(sectionId: string) {
	const section = document.getElementById(sectionId);

	if (!section) {
		return;
	}

	section.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}

export function ObservationLayout({ song }: ObservationLayoutProps) {
	return (
		<div className="observation-layout">
			<div className="observation-layout__fx">
				<div className="observation-layout__vignette" />
				<div className="observation-layout__gradient" />
				<div className="observation-layout__scanlines" />
				<div className="observation-layout__grid" />
			</div>

			<ObservationScanOverlay />

			<div className="observation-layout__section-nav" aria-label="Observation section navigation">
				<button type="button" onClick={() => scrollToSection("observation-hero")}>Hero</button>
				<button type="button" onClick={() => scrollToSection("observation-spectrum")}>Spectrum</button>
				<button type="button" onClick={() => scrollToSection("observation-feature")}>Feature</button>
				<button type="button" onClick={() => scrollToSection("observation-profile")}>Profile</button>
			</div>

			<main className="observation-layout__scroll">
				<section id="observation-hero" className="observation-section observation-section--hero">
					<div className="observation-hero__content">
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

						<div className="observation-hero__quote-panel">
							<p>Observation Brief</p>
							<span>
								A soft dream waits inside the signal. Observe first, then understand.
							</span>
						</div>
					</div>

					<CharacterHero
						song={song}
						characterName="Nahida"
						fallbackInitial="N"
						className="observation-hero__character"
					/>
				</section>

				<section id="observation-spectrum" className="observation-section observation-section--spectrum">
					<div className="observation-spectrum-card">
						<div className="observation-spectrum-card__header">
							<p>Audio Spectrum</p>
							<h2>Live Music Signal</h2>
						</div>

						<div className="observation-spectrum-card__bars" aria-hidden="true">
							{Array.from({ length: 44 }, (_, index) => {
								const barHeight = spectrumBarPattern[index % spectrumBarPattern.length];

								const style = {
									"--bar-height": `${barHeight}%`,
									"--bar-delay": `${index * -0.055}s`
								} as CSSProperties;

								return <span key={index} style={style} />;
							})}
						</div>

						<span className="observation-spectrum-card__note">
							Placeholder for now. Later this becomes a real Web Audio API spectrum synced to the video music.
						</span>
					</div>
				</section>

				<section id="observation-feature" className="observation-section observation-section--feature">
					<ObservationSkillPanel />
				</section>

				<section id="observation-profile" className="observation-section observation-section--profile">
					<div className="observation-profile-card">
						<p>Character Profile</p>
						<h2>Nahida</h2>
						<span>
							This section is reserved for the full character bio, name tag, quote, personality notes, and song-specific story connection.
						</span>

						<div className="observation-profile-card__tags">
							<span>Soft Wisdom</span>
							<span>Hidden Power</span>
							<span>Dream Signal</span>
							<span>Dendro Mind</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}