import { Button } from "@/components/ui/button";
import AboutImg from "@/assets/images/about-voqal.jpg";

export default function About() {
	return (
		<section id="about-us" className="py-20">
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-3xl text-primary">
						About Voqal
					</h2>
					<p className="text-sm">
						We're on a mission to help small and medium businesses
						across New Zealand and Australia never miss another
						booking call again.
					</p>

					<h4 className="font-semibold text-2xl">Our Story</h4>

					<div className="w-full flex flex-col gap-2 text-sm">
						<p>
							Voqal was born from a simple observation: too many
							great businesses were losing customers because they
							couldn't answer every phone call. As entrepreneurs
							ourselves, we understood the frustration of knowing
							potential customers were calling but not being able
							to help them immediately
						</p>
						<p>
							That's when we decided to build something different.
							Not just another booking system, but an AI assistant
							that could genuinely help customers and book
							appointments just like a human team member would.
						</p>
						<p>
							Today, Voqal helps hundreds of businesses across New
							Zealand and Australia capture every opportunity and
							grow their revenue.
						</p>
					</div>
					<div className="py-50">
						<Button size="lg">Learn more</Button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div className="w-full h-full flex items-center justify-center relative">
						<img
							src={AboutImg}
							alt="about-voqal"
							className="max-w-full rounded-lg"
						/>

						<div className="absolute w-16 h-16 -top-3 -right-3 bg-transparent rounded-l-none rounded-b-none rounded-lg border-2 border-primary/30 border-l-0 border-b-0"></div>

						<div className="absolute w-16 h-16 -bottom-3 -left-3 bg-transparent rounded-r-none rounded-t-none rounded-lg border-2 border-primary/30 border-r-0 border-t-0"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
