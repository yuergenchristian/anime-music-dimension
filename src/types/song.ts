export type AppView = "home" | "song" | "hidden";

export type TransitionDirection = "none" | "up" | "down" | "left" | "right" | "secret";

export type SongTheme =
	| "dendro-observation"
	| "cryo-resting"
	| "festival-nostalgia"
	| "ghost-carnival"
	| "cat-lounge"
	| "memory-pet"
	| "spark-knight-adventure";

export type SongColors = {
	primary: string;
	secondary: string;
	accent: string;
	dark: string;
	glow: string;
};

export type SongAssets = {
	video: string;
	audio: string;
	cover: string;
	character: string;
};

export type SongUI = {
	label: string;
	status: string;
	alert: string;
	transition: string;
	secretLetter: string;
};

export type Song = {
	id: string;
	order: number;
	title: string;
	artist: string;
	source: string;
	youtubeUrl: string;
	mood: string;
	theme: SongTheme;
	colors: SongColors;
	assets: SongAssets;
	ui: SongUI;
	hidden: boolean;
};