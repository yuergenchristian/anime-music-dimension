import { useState } from "react";
import "./ObservationSkillPanel.css";

const scanModes = [
	{
		id: "mind",
		label: "Scan 01",
		title: "Mind Reading",
		description:
			"Nahida observes emotional signals, hidden thoughts, and small story fragments inside the music scene.",
		status: "Signal Stable",
		value: "87%"
	},
	{
		id: "dendro",
		label: "Scan 02",
		title: "Dendro Trace",
		description:
			"A green trace follows the rhythm of the song and marks important visual moments from the video.",
		status: "Trace Active",
		value: "64%"
	},
	{
		id: "memory",
		label: "Scan 03",
		title: "Memory Lock",
		description:
			"Small memory fragments are collected and locked into the secret-code system for later discovery.",
		status: "Memory Found",
		value: "42%"
	},
	{
		id: "kaboom",
		label: "Scan 04",
		title: "KABOOM Marker",
		description:
			"The system detects cute chaos energy when Klee appears and marks it as a special reaction point.",
		status: "Chaos Detected",
		value: "99%"
	}
];

export function ObservationSkillPanel() {
	const [activeModeIndex, setActiveModeIndex] = useState(0);
	const activeMode = scanModes[activeModeIndex];

	return (
		<div className="observation-skill-panel">
			<div className="observation-skill-panel__header">
				<p>Unique Feature</p>
				<h2>Observation Scan</h2>
				<span>
					A Nahida-only interactive scan system. Choose a scan mode to inspect different signals from the song world.
				</span>
			</div>

			<div className="observation-skill-panel__body">
				<div className="observation-skill-panel__mode-list">
					{scanModes.map((mode, index) => (
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

				<div className="observation-skill-panel__display">
					<div className="observation-skill-panel__scan-circle">
						<span>{activeMode.value}</span>
					</div>

					<div className="observation-skill-panel__details">
						<p>{activeMode.status}</p>
						<h3>{activeMode.title}</h3>
						<span>{activeMode.description}</span>

						<div className="observation-skill-panel__meter">
							<div style={{ width: activeMode.value }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}