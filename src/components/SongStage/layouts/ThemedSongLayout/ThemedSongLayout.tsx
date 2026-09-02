import type { CSSProperties } from "react";
import type { Song } from "../../../../types/song";
import { CharacterHero } from "../../shared/CharacterHero/CharacterHero";
import { ThemedSkillPanel, type ThemedSkillMode } from "./components/ThemedSkillPanel/ThemedSkillPanel";
import "./ThemedSongLayout.css";

type ThemedSongLayoutProps = {
	song: Song;
};

type ThemedLayoutConfig = {
	id: string;
	characterName: string;
	fallbackInitial: string;
	heroTitle: string;
	subtitle: string;
	briefTitle: string;
	briefText: string;
	meta: string[];
	status: string[];
	spectrumTitle: string;
	profileText: string;
	profileTags: string[];
	skill: {
		title: string;
		description: string;
		modes: ThemedSkillMode[];
	};
};

const spectrumBarPattern = [30, 62, 44, 78, 52, 90, 36, 66, 48, 84, 58, 72];

const layoutConfigs: Record<string, ThemedLayoutConfig> = {
	"festival-nostalgia": {
		id: "nostalgia",
		characterName: "Yoimiya",
		fallbackInitial: "Y",
		heroTitle: "Nostalgia",
		subtitle: "Festival Memory",
		briefTitle: "Festival Brief",
		briefText: "A warm night sky, ancient festival colors, and fireworks turning every memory into light.",
		meta: ["Fireworks", "Festival Night", "Warm Memory"],
		status: ["Festival: Active", "Firework Trail: Ready", "Nostalgia: Rising"],
		spectrumTitle: "Firework Music Signal",
		profileText:
			"Yoimiya turns the song into a festival memory: playful sparks, warm lights, cliffside fireworks, and happy chaos glowing in the night.",
		profileTags: ["Fireworks", "Festival Soul", "Warm Smile", "Golden Spark"],
		skill: {
			title: "Firework Memory Launcher",
			description:
				"A Yoimiya-only interactive fireworks system. Choose a firework pattern to reveal different festival memories from the song.",
			modes: [
				{
					id: "bloom",
					label: "Burst 01",
					title: "Golden Bloom",
					description: "Launches a warm golden burst that represents the first nostalgic memory.",
					status: "Bloom Ready",
					value: "76%"
				},
				{
					id: "trail",
					label: "Burst 02",
					title: "Sky Trail",
					description: "A firework trail climbs upward with the rhythm before exploding into light.",
					status: "Trail Ignited",
					value: "64%"
				},
				{
					id: "cliff",
					label: "Burst 03",
					title: "Cliffside Spark",
					description: "Marks the peaceful night-view moment where fireworks fill the sky.",
					status: "View Locked",
					value: "88%"
				},
				{
					id: "klee",
					label: "Burst 04",
					title: "Klee Fire Alert",
					description: "Detects the moment the cute fire chaos becomes slightly too powerful.",
					status: "Chaos Warm",
					value: "99%"
				}
			]
		}
	},

	"ghost-carnival": {
		id: "otona",
		characterName: "Hu Tao",
		fallbackInitial: "H",
		heroTitle: "Otona",
		subtitle: "Ghost Carnival",
		briefTitle: "Ghost Brief",
		briefText: "A spooky-happy carnival of ghosts, coupons, mischief, dancing, and dramatic funeral business.",
		meta: ["Ghost Deal", "Coupon", "Qiqi Chase"],
		status: ["Ghost: Nearby", "Discount: Active", "Mischief: High"],
		spectrumTitle: "Ghost Carnival Signal",
		profileText:
			"Hu Tao makes the song playful and mysterious: spooky energy, strange business ideas, ghostly rhythm, and funny chaos.",
		profileTags: ["Ghost Smile", "Mischief", "Coupon Queen", "Spooky Fun"],
		skill: {
			title: "Ghost Coupon Carnival",
			description:
				"A Hu Tao-only interactive ghost business system. Choose a carnival card to activate a spooky-funny event.",
			modes: [
				{
					id: "coupon",
					label: "Deal 01",
					title: "Funeral Coupon",
					description: "A suspicious discount coupon appears with perfectly legal spooky timing.",
					status: "Coupon Printed",
					value: "66%"
				},
				{
					id: "ghost",
					label: "Deal 02",
					title: "Ghost Visitor",
					description: "A small ghost signal dances around the stage and reacts to the music.",
					status: "Visitor Found",
					value: "78%"
				},
				{
					id: "qiqi",
					label: "Deal 03",
					title: "Qiqi Chase",
					description: "Tracks the legendary chase sequence between business plan and zombie escape.",
					status: "Target Escaping",
					value: "92%"
				},
				{
					id: "ikuyo",
					label: "Deal 04",
					title: "Ikuyo Moment",
					description: "Activates the dancing/rapping energy of the Otona stage.",
					status: "Performance Live",
					value: "84%"
				}
			]
		}
	},

	"cat-lounge": {
		id: "friendship",
		characterName: "Diona",
		fallbackInitial: "D",
		heroTitle: "Friendship",
		subtitle: "Cat Lounge",
		briefTitle: "Lounge Brief",
		briefText: "A cute cat-lounge stage with bartender energy, friendship sparks, and jumpy rhythm.",
		meta: ["Cat Lounge", "Mocktail", "Friendship"],
		status: ["Cats: Gathered", "Drink Mix: Active", "Friendship: Warm"],
		spectrumTitle: "Cat Lounge Signal",
		profileText:
			"Diona brings a cute bartender friendship mood: cats, drinks, soft colors, and playful jumpy music energy.",
		profileTags: ["Cat Energy", "Bartender", "Cute Jump", "Friendship"],
		skill: {
			title: "Friendship Mocktail Mixer",
			description:
				"A Diona-only interactive mixer. Choose ingredients to blend a friendship signal for the song.",
			modes: [
				{
					id: "sweet",
					label: "Mix 01",
					title: "Sweet Base",
					description: "Adds a soft friendship flavor to the rhythm and warms the cat lounge.",
					status: "Sweetness Added",
					value: "72%"
				},
				{
					id: "fizz",
					label: "Mix 02",
					title: "Sparkle Fizz",
					description: "Creates a bubbly jumpy reaction that matches Diona’s cute energy.",
					status: "Fizz Rising",
					value: "81%"
				},
				{
					id: "cat",
					label: "Mix 03",
					title: "Cat Paw Stir",
					description: "Activates paw-print signals and tiny lounge decorations.",
					status: "Paws Active",
					value: "68%"
				},
				{
					id: "friend",
					label: "Mix 04",
					title: "Friendship Serve",
					description: "Completes the drink and sends the friendship signal across the stage.",
					status: "Served",
					value: "95%"
				}
			]
		}
	},

	"memory-pet": {
		id: "pets",
		characterName: "Qiqi",
		fallbackInitial: "Q",
		heroTitle: "Pets",
		subtitle: "Memory Journal",
		briefTitle: "Memory Brief",
		briefText: "A soft pastel memory journal full of cocomilk reminders, forgetful notes, and tiny pet-like warmth.",
		meta: ["Cocomilk", "Wakaranai", "Memory Notes"],
		status: ["Memory: Searching", "Cocomilk: Missing", "Reminder: Active"],
		spectrumTitle: "Memory Pet Signal",
		profileText:
			"Qiqi makes the song soft, funny, and forgetful: cocomilk, little reminders, gentle zombie energy, and pastel memories.",
		profileTags: ["Forgetful", "Cocomilk", "Soft Zombie", "Tiny Notes"],
		skill: {
			title: "Memory Note Collector",
			description:
				"A Qiqi-only interactive memory system. Choose a note to recover small fragments from the song.",
			modes: [
				{
					id: "note",
					label: "Note 01",
					title: "Forgotten Task",
					description: "A small note appears, but Qiqi already forgot why it was written.",
					status: "Note Found",
					value: "44%"
				},
				{
					id: "milk",
					label: "Note 02",
					title: "Cocomilk Search",
					description: "Tracks the legendary cocomilk request across the soft pastel stage.",
					status: "Search Active",
					value: "62%"
				},
				{
					id: "pet",
					label: "Note 03",
					title: "Pet Signal",
					description: "Detects tiny cute warmth hidden inside the song’s gentle moments.",
					status: "Signal Soft",
					value: "73%"
				},
				{
					id: "wakaranai",
					label: "Note 04",
					title: "Wakaranai",
					description: "The system does not fully understand, but somehow the result is adorable.",
					status: "Unknown Cute",
					value: "88%"
				}
			]
		}
	},

	"spark-knight-adventure": {
		id: "kokoroe",
		characterName: "Klee",
		fallbackInitial: "K",
		heroTitle: "Kokoroe",
		subtitle: "Spark Knight",
		briefTitle: "Adventure Brief",
		briefText: "A cute explosive finale with running, discoveries, fish danger, Jean warnings, and innocent chaos.",
		meta: ["Spark Knight", "Bomb Radar", "Adventure"],
		status: ["KABOOM: Armed", "Fish: Nervous", "Jean Warning: High"],
		spectrumTitle: "Spark Knight Signal",
		profileText:
			"Klee turns the finale into a happy adventure: bombs, fish, trouble, excitement, and innocent explosive energy.",
		profileTags: ["KABOOM", "Spark Knight", "Fish Radar", "Happy Chaos"],
		skill: {
			title: "Bomb Fish Radar",
			description:
				"A Klee-only interactive adventure radar. Choose a signal to track explosive trouble across the finale.",
			modes: [
				{
					id: "bomb",
					label: "Radar 01",
					title: "Bomb Signal",
					description: "Detects suspiciously cute explosive energy nearby.",
					status: "Bomb Found",
					value: "91%"
				},
				{
					id: "fish",
					label: "Radar 02",
					title: "Fish Alert",
					description: "Marks fish locations that are definitely not safe from Spark Knight experiments.",
					status: "Fish Detected",
					value: "86%"
				},
				{
					id: "jean",
					label: "Radar 03",
					title: "Jean Warning",
					description: "A warning meter rises when the adventure becomes too loud.",
					status: "Warning Rising",
					value: "74%"
				},
				{
					id: "kaboom",
					label: "Radar 04",
					title: "Final KABOOM",
					description: "Activates the finale chaos marker for the last explosive moment.",
					status: "KABOOM Ready",
					value: "100%"
				}
			]
		}
	}
};

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

export function ThemedSongLayout({ song }: ThemedSongLayoutProps) {
	const config = layoutConfigs[song.theme] ?? layoutConfigs["festival-nostalgia"];

	return (
		<div className={`themed-layout themed-layout--${config.id}`}>
			<div className="themed-layout__fx">
				<div className="themed-layout__vignette" />
				<div className="themed-layout__gradient" />
				<div className="themed-layout__grid" />
				<div className="themed-layout__particles themed-layout__particles--one" />
				<div className="themed-layout__particles themed-layout__particles--two" />
			</div>

			<div className="themed-layout__section-nav" aria-label={`${config.characterName} section navigation`}>
				<button type="button" onClick={() => scrollToSection(`${config.id}-hero`)}>Hero</button>
				<button type="button" onClick={() => scrollToSection(`${config.id}-spectrum`)}>Spectrum</button>
				<button type="button" onClick={() => scrollToSection(`${config.id}-feature`)}>Skill</button>
				<button type="button" onClick={() => scrollToSection(`${config.id}-profile`)}>Profile</button>
			</div>

			<main className="themed-layout__scroll">
				<section id={`${config.id}-hero`} className="themed-section themed-section--hero">
					<div className="themed-hero__content">
						<aside className="themed-info-panel">
							<div className="themed-info-panel__tag">{song.ui.label}</div>
							<h1 className="themed-info-panel__title">{config.heroTitle}</h1>
							<p className="themed-info-panel__subtitle">{config.subtitle}</p>
							<h2 className="themed-info-panel__artist">{song.artist}</h2>
							<p className="themed-info-panel__description">{song.mood}</p>

							<div className="themed-info-panel__meta-list">
								{config.meta.map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</aside>

						<div className="themed-hero__brief-panel">
							<p>{config.briefTitle}</p>
							<span>{config.briefText}</span>
						</div>
					</div>

					<CharacterHero
						song={song}
						characterName={config.characterName}
						fallbackInitial={config.fallbackInitial}
						className="themed-hero__character"
					/>

					<div className="themed-status themed-status--one">{config.status[0]}</div>
					<div className="themed-status themed-status--two">{config.status[1]}</div>
					<div className="themed-status themed-status--three">{config.status[2]}</div>

					<div className="themed-scroll-hint">
						<span>Scroll to explore</span>
						<strong>↓</strong>
					</div>
				</section>

				<section id={`${config.id}-spectrum`} className="themed-section themed-section--spectrum">
					<div className="themed-spectrum-card">
						<div className="themed-spectrum-card__header">
							<p>Audio Spectrum</p>
							<h2>{config.spectrumTitle}</h2>
						</div>

						<div className="themed-spectrum-card__bars" aria-hidden="true">
							{Array.from({ length: 44 }, (_, index) => {
								const barHeight = spectrumBarPattern[index % spectrumBarPattern.length];

								const style = {
									"--bar-height": `${barHeight}%`,
									"--bar-delay": `${index * -0.055}s`
								} as CSSProperties;

								return <span key={index} style={style} />;
							})}
						</div>

						<span className="themed-spectrum-card__note">
							Placeholder for now. Later this becomes a real Web Audio API spectrum synced to the video music.
						</span>
					</div>
				</section>

				<section id={`${config.id}-feature`} className="themed-section themed-section--feature">
					<ThemedSkillPanel
						kicker="Unique Feature"
						title={config.skill.title}
						description={config.skill.description}
						modes={config.skill.modes}
					/>
				</section>

				<section id={`${config.id}-profile`} className="themed-section themed-section--profile">
					<div className="themed-profile-card">
						<div className="themed-profile-card__header">
							<p>Character Profile</p>
							<h2>{config.characterName}</h2>
							<span>{config.profileText}</span>
						</div>

						<div className="themed-profile-card__tags">
							{config.profileTags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}