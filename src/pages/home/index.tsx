import About from "./about";
import CountingGlimps from "./counting-glimps";
import Faq from "./faq";
import Hero from "./hero";
import HowVoqualWorks from "./how-voqal-works";
import Pricing from "./pricing";
import WhatWeDo from "./what-we-do";

export default function Home() {
	return (
		<>
			<Hero />
			<CountingGlimps />
			<About />
			<WhatWeDo />
			<HowVoqualWorks />
			<Pricing />
			<Faq />
		</>
	);
}
