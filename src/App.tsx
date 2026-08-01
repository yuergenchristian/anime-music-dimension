import { useState } from "react";
import { HomePage } from "./components/HomePage/HomePage";
import { HiddenPage } from "./components/HiddenPage/HiddenPage";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { SongStage } from "./components/SongStage/SongStage";
import { SECRET_WORD, secretLetters } from "./data/secretLetters";
import { songs } from "./data/songs";
import type { AppView, TransitionDirection } from "./types/song";

function App() {
	const [currentView, setCurrentView] = useState<AppView>("home");
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>("none");
	const [isLoading, setIsLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState("Loading Dimension");
	const [collectedLetters, setCollectedLetters] = useState<Array<string | null>>(
		Array(SECRET_WORD.length).fill(null)
	);

	const currentSong = songs[currentSongIndex];
	const secretUnlocked = collectedLetters.join("") === SECRET_WORD;

	function runTransition(
		message: string,
		direction: TransitionDirection,
		nextAction: () => void
	) {
		setLoadingMessage(message);
		setTransitionDirection(direction);
		setIsLoading(true);

		window.setTimeout(() => {
			nextAction();
			setIsLoading(false);
		}, 650);
	}

	function enterSongs() {
		runTransition(`Loading ${currentSong.title}`, "down", () => {
			setCurrentView("song");
		});
	}

	function selectSong(index: number) {
		runTransition(`Loading ${songs[index].title}`, "down", () => {
			setCurrentSongIndex(index);
			setCurrentView("song");
		});
	}

	function returnHome() {
		runTransition("Returning to Home", "up", () => {
			setCurrentView("home");
		});
	}

	function goPreviousSong() {
		if (currentSongIndex <= 0) {
			return;
		}

		const previousIndex = currentSongIndex - 1;

		runTransition(`Loading ${songs[previousIndex].title}`, "left", () => {
			setCurrentSongIndex(previousIndex);
			setCurrentView("song");
		});
	}

	function goNextSong() {
		if (currentSongIndex >= songs.length - 1) {
			return;
		}

		const nextIndex = currentSongIndex + 1;

		runTransition(`Loading ${songs[nextIndex].title}`, "right", () => {
			setCurrentSongIndex(nextIndex);
			setCurrentView("song");
		});
	}

	function collectSecretLetter() {
		runTransition("Sending Letter to Secret Code Paper", "up", () => {
			setCollectedLetters((currentLetters) => {
				const updatedLetters = [...currentLetters];
				updatedLetters[currentSongIndex] = secretLetters[currentSongIndex].letter;
				return updatedLetters;
			});

			setCurrentView("home");
		});
	}

	function openHiddenPage() {
		if (!secretUnlocked) {
			return;
		}

		runTransition("Opening Hidden Dimension", "secret", () => {
			setCurrentView("hidden");
		});
	}

	return (
		<div className={`app-shell transition-${transitionDirection}`}>
			{isLoading && (
				<LoadingScreen label="Dimension Loader" message={loadingMessage} />
			)}

			{currentView === "home" && (
				<HomePage
					songs={songs}
					currentSongIndex={currentSongIndex}
					collectedLetters={collectedLetters}
					secretUnlocked={secretUnlocked}
					onEnterSongs={enterSongs}
					onSelectSong={selectSong}
					onOpenHidden={openHiddenPage}
				/>
			)}

			{currentView === "song" && (
				<SongStage
					song={currentSong}
					currentSongIndex={currentSongIndex}
					totalSongs={songs.length}
					letterCollected={Boolean(collectedLetters[currentSongIndex])}
					onPrevious={goPreviousSong}
					onNext={goNextSong}
					onReturnHome={returnHome}
					onCollectLetter={collectSecretLetter}
				/>
			)}

			{currentView === "hidden" && (
				<HiddenPage onReturnHome={returnHome} />
			)}
		</div>
	);
}

export default App;