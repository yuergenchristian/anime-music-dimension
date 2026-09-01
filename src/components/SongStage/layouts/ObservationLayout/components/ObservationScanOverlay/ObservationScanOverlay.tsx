import "./ObservationScanOverlay.css";

export function ObservationScanOverlay() {
	return (
		<div className="observation-scan-overlay" aria-hidden="true">
			<div className="observation-scan-overlay__ring" />

			<div className="observation-scan-marker observation-scan-marker--terminal">
				<span className="observation-scan-marker__dot" />
				<span className="observation-scan-marker__label">Terminal Link: Active</span>
			</div>

			<div className="observation-scan-marker observation-scan-marker--subject">
				<span className="observation-scan-marker__dot" />
				<span className="observation-scan-marker__label">Subject: Nahida</span>
			</div>

			<div className="observation-scan-marker observation-scan-marker--mode">
				<span className="observation-scan-marker__dot" />
				<span className="observation-scan-marker__label">Mode: Observation</span>
			</div>
		</div>
	);
}