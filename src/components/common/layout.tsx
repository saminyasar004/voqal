import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1)); // Remove the '#' from hash
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
