import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
	return (
		<section className="h-screen max-h-max bg-hero bg-no-repeat bg-center bg-cover">
			<div className="container py-24">
				<div className="w-full flex flex-col items-center text-center gap-3">
					<h1 className="lg:w-[70%] font-semibold text-3xl lg:text-5xl leading-tight capitalize">
						An AI voice assistant that answers your calls and
						schedules your bookings
					</h1>
					<p className="text-[#373737] text-sm">
						Every Call Answered, Every Booking Captured, No
						Interruptions.
					</p>
					<div className="flex items-center justify-center py-4 -z-0">
						<Button size="lg">Get Started</Button>
					</div>
				</div>

				<div className="w-full py-24">
					<HeroCarousel />
				</div>
			</div>
		</section>
	);
}
