import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";

interface PricingPlan {
	title: string;
	subtitle: string;
	price: string;
	features: string[];
	isPopular?: boolean;
	buttonText: string;
}

const pricingPlans: PricingPlan[] = [
	{
		title: "Starter",
		subtitle: "Perfect For Small Businesses",
		price: "$99/Month",
		features: [
			"Up To 200 Calls/Month",
			"Email Support",
			"Calendar Integration",
		],
		buttonText: "Select",
	},
	{
		title: "Professional",
		subtitle: "For Growing Businesses",
		price: "$199/Month",
		features: [
			"Up To 1000 Calls/Month",
			"Email Support",
			"Calendar Integration",
			"Advanced Analytics",
			"Custom AI Personality",
		],
		isPopular: true,
		buttonText: "Select",
	},
	{
		title: "Starter",
		subtitle: "Perfect For Small Businesses",
		price: "$99/Month",
		features: [
			"Up To 200 Calls/Month",
			"Email Support",
			"Calendar Integration",
		],
		buttonText: "Select",
	},
];

export default function Pricing() {
	return (
		<section id="pricing" className="py-24">
			<div className="container">
				<div className="w-full flex flex-col items-center text-center gap-3">
					<h2 className="text-5xl font-semibold">
						Transparent Pricing
					</h2>
					<p className="lg:w-[50%] text-[#373737] text-sm mt-2">
						Choose the plan that fits your business size{" "}
					</p>
				</div>

				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-5 items-center py-20">
					{pricingPlans.map((plan, idx) => (
						<PricingCard key={idx} plan={plan} />
					))}
				</div>
			</div>
		</section>
	);
}

const PricingCard = ({ plan }) => {
	return (
		<div
			className={cn(
				"bg-gray-50 max-w-sm relative rounded-lg p-6 border-2 border-primary-gray/10",
				plan.isPopular && "border-primary scale-110"
			)}
		>
			{plan.isPopular && (
				<div className="w-60 bg-primary text-primary-foreground text-xs font-medium px-2 py-1.5 text-center rounded-full absolute -top-4 left-1/2 -translate-x-1/2">
					Most Popular (50% Discount)
				</div>
			)}
			<h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
			<p className="text-primary-gray mb-4">{plan.subtitle}</p>
			<p className="text-5xl font-bold my-7 bg-gradient-to-r from-[#F9F9F9] via-[#D7D7D7]/50 to-[#F9F9F9] py-6">
				{plan.price}
			</p>
			<ul className="text-primary-gray space-y-2 mb-6 py-5">
				{plan.features.map((feature, idx) => (
					<li
						key={idx}
						className="flex items-center text-primary-gray"
					>
						<span className="text-primary-gray mr-2">
							<CircleCheckBig size={16} />
						</span>{" "}
						{feature}
					</li>
				))}
			</ul>
			<Button className="w-full">{plan.buttonText}</Button>
		</div>
	);
};
