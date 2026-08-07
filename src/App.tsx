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
		setLoadingMessage(`Loading ${currentSong.title}`);
		setTransitionDirection("down");
		setIsLoading(true);
		setCurrentView("song");
	}

	function selectSong(index: number) {
		setLoadingMessage(`Loading ${songs[index].title}`);
		setTransitionDirection("down");
		setIsLoading(true);
		setCurrentSongIndex(index);
		setCurrentView("song");
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

		setLoadingMessage(`Loading ${songs[previousIndex].title}`);
		setTransitionDirection("left");
		setIsLoading(true);
		setCurrentSongIndex(previousIndex);
		setCurrentView("song");
	}

	function goNextSong() {
		if (currentSongIndex >= songs.length - 1) {
			return;
		}

		const nextIndex = currentSongIndex + 1;

		setLoadingMessage(`Loading ${songs[nextIndex].title}`);
		setTransitionDirection("right");
		setIsLoading(true);
		setCurrentSongIndex(nextIndex);
		setCurrentView("song");
	}

	function collectSecretLetter() {
		setCollectedLetters((currentLetters) => {
			if (currentLetters[currentSongIndex]) {
				return currentLetters;
			}

			const updatedLetters = [...currentLetters];
			updatedLetters[currentSongIndex] = secretLetters[currentSongIndex].letter;

			return updatedLetters;
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

	function finishLoading() {
		window.setTimeout(() => {
			setIsLoading(false);
		}, 350);
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
					key={currentSong.id}
					song={currentSong}
					currentSongIndex={currentSongIndex}
					totalSongs={songs.length}
					letterCollected={Boolean(collectedLetters[currentSongIndex])}
					onPrevious={goPreviousSong}
					onNext={goNextSong}
					onReturnHome={returnHome}
					onCollectLetter={collectSecretLetter}
					onStageReady={finishLoading}
				/>
			)}

			{currentView === "hidden" && (
				<HiddenPage onReturnHome={returnHome} />
			)}
		</div>
	);
}

export default App;