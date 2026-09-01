import type { CSSProperties } from "react";
import type { Song } from "../../../../types/song";
import { CharacterHero } from "../../shared/CharacterHero/CharacterHero";
import { RestingSkillPanel } from "./components/RestingSkillPanel/RestingSkillPanel";
import "./RestingLayout.css";

type RestingLayoutProps = {
	song: Song;
};

const spectrumBarPattern = [34, 42, 58, 46, 72, 38, 52, 88, 62, 44, 76, 56];

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

export function RestingLayout({ song }: RestingLayoutProps) {
	return (
		<div className="resting-layout">
			<div className="resting-layout__fx">
				<div className="resting-layout__vignette" />
				<div className="resting-layout__gradient" />
				<div className="resting-layout__snow resting-layout__snow--one" />
				<div className="resting-layout__snow resting-layout__snow--two" />
				<div className="resting-layout__grid" />
			</div>

			<div className="resting-layout__section-nav" aria-label="Resting section navigation">
				<button type="button" onClick={() => scrollToSection("resting-hero")}>Hero</button>
				<button type="button" onClick={() => scrollToSection("resting-spectrum")}>Spectrum</button>
				<button type="button" onClick={() => scrollToSection("resting-feature")}>Feature</button>
				<button type="button" onClick={() => scrollToSection("resting-profile")}>Profile</button>
			</div>

			<main className="resting-layout__scroll">
				<section id="resting-hero" className="resting-section resting-section--hero">
					<div className="resting-hero__content">
						<aside className="resting-info-panel">
							<div className="resting-info-panel__tag">{song.ui.label}</div>
							<h1 className="resting-info-panel__title">{song.title}</h1>
							<p className="resting-info-panel__subtitle">Resting</p>
							<h2 className="resting-info-panel__artist">{song.artist}</h2>
							<p className="resting-info-panel__description">{song.mood}</p>

							<div className="resting-info-panel__meta-list">
								<span>Cryo Rain</span>
								<span>Paperwork</span>
								<span>Sleep Mode</span>
							</div>
						</aside>

						<div className="resting-hero__brief-panel">
							<p>Rest Brief</p>
							<span>
								Too much work. Too little sleep. The cryo signal turns the stage into a soft resting place.
							</span>
						</div>
					</div>

					<CharacterHero
						song={song}
						characterName="Ganyu"
						fallbackInitial="G"
						className="resting-hero__character"
					/>

					<div className="resting-status resting-status--one">Workload: High</div>
					<div className="resting-status resting-status--two">Cryo Comfort: Active</div>
					<div className="resting-status resting-status--three">Sleepiness: Critical</div>
				</section>

				<section id="resting-spectrum" className="resting-section resting-section--spectrum">
					<div className="resting-spectrum-card">
						<div className="resting-spectrum-card__header">
							<p>Audio Spectrum</p>
							<h2>Soft Cryo Signal</h2>
						</div>

						<div className="resting-spectrum-card__bars" aria-hidden="true">
							{Array.from({ length: 44 }, (_, index) => {
								const barHeight = spectrumBarPattern[index % spectrumBarPattern.length];

								const style = {
									"--bar-height": `${barHeight}%`,
									"--bar-delay": `${index * -0.055}s`
								} as CSSProperties;

								return <span key={index} style={style} />;
							})}
						</div>

						<span className="resting-spectrum-card__note">
							Placeholder for now. Later this becomes a real Web Audio API spectrum synced to the video music.
						</span>
					</div>
				</section>

				<section id="resting-feature" className="resting-section resting-section--feature">
					<RestingSkillPanel />
				</section>

				<section id="resting-profile" className="resting-section resting-section--profile">
					<div className="resting-profile-card">
						<p>Character Profile</p>
						<h2>Ganyu</h2>
						<span>
							This section is reserved for Ganyu’s character bio, overworked secretary mood, sleepy personality notes, and song-story connection.
						</span>

						<div className="resting-profile-card__tags">
							<span>Overworked</span>
							<span>Cryo Calm</span>
							<span>Gentle Soul</span>
							<span>Sleepy Peace</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}