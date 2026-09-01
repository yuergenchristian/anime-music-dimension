import { useState } from "react";
import "./RestingSkillPanel.css";

const restModes = [
	{
		id: "paperwork",
		label: "Task 01",
		title: "Paperwork Chase",
		description:
			"Ganyu tries to outrun endless documents, meetings, and responsibilities before the music finally lets her breathe.",
		status: "Workload Rising",
		value: "82%"
	},
	{
		id: "cryo",
		label: "Task 02",
		title: "Cryo Rain",
		description:
			"Soft blue frost falls over the stage, cooling the chaos and turning stress into calm rhythm.",
		status: "Cooling Active",
		value: "68%"
	},
	{
		id: "flower",
		label: "Task 03",
		title: "Flower Snack",
		description:
			"A tiny peaceful moment where Ganyu forgets the pressure and enjoys a strange but cute snack break.",
		status: "Snack Located",
		value: "45%"
	},
	{
		id: "sleep",
		label: "Task 04",
		title: "Peaceful Sleep",
		description:
			"The final rest phase. Paperwork fades, snow becomes quiet, and the song ends with a softer heart.",
		status: "Rest Achieved",
		value: "96%"
	}
];

export function RestingSkillPanel() {
	const [activeModeIndex, setActiveModeIndex] = useState(0);
	const activeMode = restModes[activeModeIndex];

	return (
		<div className="resting-skill-panel">
			<div className="resting-skill-panel__header">
				<p>Unique Feature</p>
				<h2>Rest Cycle System</h2>
				<span>
					A Ganyu-only interactive rest tracker. Choose a phase to inspect her journey from overworked chaos to peaceful sleep.
				</span>
			</div>

			<div className="resting-skill-panel__body">
				<div className="resting-skill-panel__mode-list">
					{restModes.map((mode, index) => (
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

				<div className="resting-skill-panel__display">
					<div className="resting-skill-panel__moon">
						<span>{activeMode.value}</span>
					</div>

					<div className="resting-skill-panel__details">
						<p>{activeMode.status}</p>
						<h3>{activeMode.title}</h3>
						<span>{activeMode.description}</span>

						<div className="resting-skill-panel__meter">
							<div style={{ width: activeMode.value }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}