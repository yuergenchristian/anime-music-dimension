import type { Song } from "../types/song";

export const homeAssets = {
	video: "/assets/home/bg.mp4",
	bgm: "/assets/home/video-bgm.mp3",
	ambient: "/assets/home/video-play.mp3"
};

export const songs: Song[] = [
	{
		id: "observation",
		order: 1,
		title: "「観　察」",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=h515pLUeP_o",
		mood: "Nahida observation, mind-reading, cute chaos, Klee KABOOM energy.",
		theme: "dendro-observation",
		colors: {
			primary: "#99d274",
			secondary: "#3f6625",
			accent: "#d9ff9a",
			dark: "#10230f",
			glow: "rgba(153, 210, 116, 0.65)"
		},
		assets: {
			video: "/assets/songs/01-observation/video.mp4",
			audio: "/assets/songs/01-observation/audio.mp3",
			cover: "/assets/songs/01-observation/cover.jpg"
		},
		ui: {
			label: "Observation Mode",
			status: "Mind Link Active",
			alert: "KABOOM Detected",
			transition: "dendro-scan-burst",
			secretLetter: "M"
		},
		hidden: false
	},
	{
		id: "resting",
		order: 2,
		title: "「休　息」",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=3SJ5f6oAU-w",
		mood: "Sleepy Ganyu, paperwork rush, icy elegance, peaceful daytime rest.",
		theme: "cryo-resting",
		colors: {
			primary: "#abb8ec",
			secondary: "#1a9a9b",
			accent: "#dff4ff",
			dark: "#103449",
			glow: "rgba(171, 184, 236, 0.55)"
		},
		assets: {
			video: "/assets/songs/02-resting/video.mp4",
			audio: "/assets/songs/02-resting/audio.mp3",
			cover: "/assets/songs/02-resting/cover.jpg"
		},
		ui: {
			label: "Rest Mode",
			status: "Workload Overflow",
			alert: "Nap Sequence Pending",
			transition: "paper-sweep-frost-fade",
			secretLetter: "E"
		},
		hidden: false
	},
	{
		id: "nostalgia",
		order: 3,
		title: "Nostalgia. [Genshin Impact]",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=cl1VKdWOEEo",
		mood: "Yoimiya fireworks, traditional festival night, nostalgia, warm celebration.",
		theme: "festival-nostalgia",
		colors: {
			primary: "#7fb3ff",
			secondary: "#7f6a67",
			accent: "#ffd36b",
			dark: "#1a1d36",
			glow: "rgba(255, 211, 107, 0.65)"
		},
		assets: {
			video: "/assets/songs/03-nostalgia/video.mp4",
			audio: "/assets/songs/03-nostalgia/audio.mp3",
			cover: "/assets/songs/03-nostalgia/cover.jpg"
		},
		ui: {
			label: "Festival Memory",
			status: "Firework Signal Active",
			alert: "Spark Bloom Ready",
			transition: "firework-bloom-reveal",
			secretLetter: "L"
		},
		hidden: false
	},
	{
		id: "otona",
		order: 4,
		title: "Otona. [Genshin Impact]",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=ZDh8mDYsr2U",
		mood: "Hu Tao mystery, ghost comedy, Qiqi chase, rap dance energy.",
		theme: "ghost-carnival",
		colors: {
			primary: "#ff80b3",
			secondary: "#7c5351",
			accent: "#ff7a2f",
			dark: "#1b0b10",
			glow: "rgba(255, 128, 179, 0.6)"
		},
		assets: {
			video: "/assets/songs/04-otona/video.mp4",
			audio: "/assets/songs/04-otona/audio.mp3",
			cover: "/assets/songs/04-otona/cover.jpg"
		},
		ui: {
			label: "Ghost Business",
			status: "Coupon Mode Active",
			alert: "Qiqi Chase Detected",
			transition: "ghost-coupon-pyro-burst",
			secretLetter: "O"
		},
		hidden: false
	},
	{
		id: "friendship",
		order: 5,
		title: "Friendship. [Genshin Impact]",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=bLRFtukb4Es",
		mood: "Diona cat vibe, bartender fun, cute jumpy friendship energy.",
		theme: "cat-lounge",
		colors: {
			primary: "#7eb3ff",
			secondary: "#d3c4cb",
			accent: "#f2c94c",
			dark: "#2c3557",
			glow: "rgba(126, 179, 255, 0.6)"
		},
		assets: {
			video: "/assets/songs/05-friendship/video.mp4",
			audio: "/assets/songs/05-friendship/audio.mp3",
			cover: "/assets/songs/05-friendship/cover.jpg"
		},
		ui: {
			label: "Cat Lounge",
			status: "Bartender On Duty",
			alert: "Friendship Mode Active",
			transition: "paw-crystal-bubble",
			secretLetter: "D"
		},
		hidden: false
	},
	{
		id: "pets",
		order: 6,
		title: "Pets. [Genshin Impact]",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=tczJxzuJmoM",
		mood: "Qiqi pastel zombie mood, pets, cocomilk, forgetful cute comedy.",
		theme: "memory-pet",
		colors: {
			primary: "#e6bffe",
			secondary: "#a9c9fa",
			accent: "#d7efff",
			dark: "#5d6f9e",
			glow: "rgba(230, 191, 254, 0.55)"
		},
		assets: {
			video: "/assets/songs/06-pets/video.mp4",
			audio: "/assets/songs/06-pets/audio.mp3",
			cover: "/assets/songs/06-pets/cover.jpg"
		},
		ui: {
			label: "Pet Journal",
			status: "Memory Mode",
			alert: "Cocomilk Reminder Active",
			transition: "memory-note-fade",
			secretLetter: "I"
		},
		hidden: false
	},
	{
		id: "kokoroe",
		order: 7,
		title: "Kokoroe. [Genshin Impact]",
		artist: "PIKASONIC",
		source: "Genshin Impact GMV",
		youtubeUrl: "https://www.youtube.com/watch?v=-vbt-a0G6sA",
		mood: "Klee bomb adventure, cute troublemaker, fish blasting, Jean warning.",
		theme: "spark-knight-adventure",
		colors: {
			primary: "#fe8081",
			secondary: "#90462b",
			accent: "#ffd166",
			dark: "#351616",
			glow: "rgba(254, 128, 129, 0.6)"
		},
		assets: {
			video: "/assets/songs/07-kokoroe/video.mp4",
			audio: "/assets/songs/07-kokoroe/audio.mp3",
			cover: "/assets/songs/07-kokoroe/cover.jpg"
		},
		ui: {
			label: "Spark Knight Log",
			status: "Bomb Bag Ready",
			alert: "Jean Warning Rising",
			transition: "storybook-bomb-pop",
			secretLetter: "A"
		},
		hidden: false
	}
];