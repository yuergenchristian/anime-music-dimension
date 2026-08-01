import "./LoadingScreen.css";

type LoadingScreenProps = {
	label: string;
	message: string;
};

export function LoadingScreen({ label, message }: LoadingScreenProps) {
	return (
		<div className="loading-screen">
			<div className="loading-card">
				<div className="loading-orbit">
					<span></span>
					<span></span>
				</div>

				<p>{label}</p>
				<h2>{message}</h2>
				<span className="loading-note">Preparing dimension assets...</span>
			</div>
		</div>
	);
}