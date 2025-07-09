import HowVoqalWorksBannerImg from "@/assets/images/how-voqal-works-banner.svg";
import { Button } from "@/components/ui/button";
import { BellRing, BotMessageSquare, LucideProps, Phone } from "lucide-react";

interface StepCardProps {
	title: string;
	description: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
}

const StepCard: React.FC<StepCardProps> = ({
	title,
	description,
	icon: Icon,
}) => {
	return (
		<div className="rounded-lg p-4 border border-primary-gray/30 flex items-start gap-4 bg-[#F5F5F5]">
			<div className="rounded-lg bg-[#D9D9D9] p-3 flex items-center justify-center">
				<Icon size={24} />
			</div>
			<div className="space-y-2">
				<h4 className="font-medium text-lg">{title}</h4>
				<p className="text-[#6B6B6B] text-sm">{description}</p>
			</div>
		</div>
	);
};

const HowVoqualWorks: React.FC = () => {
	return (
		<section id="how-it-works" className="py-32">
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="flex flex-col gap-8">
					<div className="w-full flex items-center text-center lg:items-start lg:text-inherit flex-col gap-3">
						<h2 className="text-5xl font-semibold">
							How Voqal Works
						</h2>
						<p className="lg:w-[50%] text-[#373737] text-sm mt-2">
							Simple 3-step process that works seamlessly
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<StepCard
							title="Customer Calls Your Business"
							description="Customer dials your business number as usual. No change needed to their experience"
							icon={Phone}
						/>
						<StepCard
							title="AI Answers & Schedules"
							description="Our AI assistant handles the conversation naturally, checks availability, and books the appointment."
							icon={BotMessageSquare}
						/>
						<StepCard
							title="You Get Notified & Updated"
							description="Instant notifications sent to you and your calendar is automatically updated. Customer gets confirmation."
							icon={BellRing}
						/>

						<div className="w-full pt-8">
							<Button size="lg">Get Started</Button>
						</div>
					</div>
				</div>

				<div className="w-full h-full flex items-end">
					<img
						src={HowVoqalWorksBannerImg}
						alt="how-voqal-works-banner"
						className="max-w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default HowVoqualWorks;
