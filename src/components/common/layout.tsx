import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
