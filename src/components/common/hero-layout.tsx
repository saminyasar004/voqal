import Footer from "./footer";
import Header from "./header";

export default function HeroLayout({ children }) {
	return (
		<>
			<section className="min-h-screen bg-hero bg-no-repeat bg-center bg-cover">
				<Header />
				{children}
			</section>

			<Footer />
		</>
	);
}
