import { useState } from "react";
import "./ThemedSkillPanel.css";

export type ThemedSkillMode = {
	id: string;
	label: string;
	title: string;
	description: string;
	status: string;
	value: string;
};

type ThemedSkillPanelProps = {
	kicker: string;
	title: string;
	description: string;
	modes: ThemedSkillMode[];
};

export function ThemedSkillPanel({
	kicker,
	title,
	description,
	modes
}: ThemedSkillPanelProps) {
	const [activeModeIndex, setActiveModeIndex] = useState(0);
	const activeMode = modes[activeModeIndex];

	return (
		<div className="themed-skill-panel">
			<div className="themed-skill-panel__header">
				<p>{kicker}</p>
				<h2>{title}</h2>
				<span>{description}</span>
			</div>

			<div className="themed-skill-panel__body">
				<div className="themed-skill-panel__mode-list">
					{modes.map((mode, index) => (
						<button
							key={mode.id}
							type="button"
							className={index === activeModeIndex ? "is-active" : ""}
							onClick={() => setActiveModeIndex(index)}
						>
							<span>{mode.label}</span>
							<strong>{mode.title}</strong>
						</button>
					))}
				</div>

				<div className="themed-skill-panel__display">
					<div className="themed-skill-panel__core">
						<span>{activeMode.value}</span>
					</div>

					<div className="themed-skill-panel__details">
						<p>{activeMode.status}</p>
						<h3>{activeMode.title}</h3>
						<span>{activeMode.description}</span>

						<div className="themed-skill-panel__meter">
							<div style={{ width: activeMode.value }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}