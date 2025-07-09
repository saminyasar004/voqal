import About from "./About";
import CountingGlimps from "./CountingGlimps";
import Faq from "./FAQ";
import Hero from "./Hero";
import HowVoqualWorks from "./HowVoqualWorks";
import Pricing from "./Pricing";
import WhatWeDo from "./WhatWeDo";

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
