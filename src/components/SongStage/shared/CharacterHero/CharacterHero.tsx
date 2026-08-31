import { useState } from "react";
import type { Song } from "../../../../types/song";
import "./CharacterHero.css";

type CharacterHeroProps = {
	song: Song;
	characterName: string;
	fallbackInitial: string;
	className?: string;
};

export function CharacterHero({
	song,
	characterName,
	fallbackInitial,
	className = ""
}: CharacterHeroProps) {
	const [imageFailed, setImageFailed] = useState(false);

	return (
		<div className={`character-hero ${className}`} aria-label={`${characterName} character visual`}>
			{!imageFailed ? (
				<img
					className="character-hero__image"
					src={song.assets.character}
					alt={`${characterName} character artwork`}
					onError={() => setImageFailed(true)}
				/>
			) : (
				<div className="character-hero__placeholder">
					<span>{fallbackInitial}</span>
					<p>Add character PNG</p>
				</div>
			)}
		</div>
	);
}