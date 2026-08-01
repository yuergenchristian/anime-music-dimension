import "./HiddenPage.css";

type HiddenPageProps = {
	onReturnHome: () => void;
};

export function HiddenPage({ onReturnHome }: HiddenPageProps) {
	return (
		<section className="hidden-page app-screen">
			<div className="hidden-card">
				<p>Secret Dimension</p>
				<h1>Hidden Song Locked In</h1>
				<span>The final hidden video system will be added later.</span>

				<button onClick={onReturnHome}>Return Home</button>
			</div>
		</section>
	);
}