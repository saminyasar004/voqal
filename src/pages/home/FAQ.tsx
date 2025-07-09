import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Faq() {
	const faqs = [
		{
			id: 0,
			question:
				"can the Ai work 24/7  and handle multiple call simultaneously?",
			answer: "Yes! Voqal AI works 24/7 and can handle multiple calls simultaneously. You can configure business hours and set different behaviors for after-hours calls. The system scales automatically to handle peak call volumes.",
		},
		{
			id: 1,
			question: "How Do I Cancel My Subscription?",
			answer: "To cancel your subscription, please visit the account settings on the platform where you subscribed (e.g., grok.com or x.com) and follow the cancellation instructions provided.",
		},
		{
			id: 2,
			question: "How Do Affiliate Links Work?",
			answer: "Affiliate links are used to track referrals. When you click an affiliate link and make a purchase, the merchant may share a small commission with us, at no extra cost to you.",
		},
		{
			id: 3,
			question: "What Happens If A Recommended Product Is Unavailable?",
			answer: "If a recommended product is unavailable, we will suggest alternative products that match your preferences or notify you when the product becomes available again.",
		},
	];

	const [expandedFaqId, setExpandedFaqId] = useState<number>(0);

	return (
		<section id="faq" className="py-24 bg-[#F5F5F5]">
			<div className="container relative overflow-hidden">
				<div className="">
					<div className="w-full flex flex-col items-center justify-center gap-4 text-center">
						<h2 className="font-semibold text-3xl md:text-5xl text-primary">
							Frequently Asked Questions
						</h2>

						<p className="lg:w-[50%] text-base md:text-lg text-[#373737] leading-relaxed">
							Find quick answers about our AI recommendations,
							subscriptions, and shopping process. Need more help?
							Just ask!
						</p>
					</div>

					<div className="py-10 w-full h-auto flex flex-col gap-5">
						{faqs.map((faq, index) => (
							<FaqCard
								key={index}
								id={faq.id}
								question={faq.question}
								answer={faq.answer}
								expandedFaqId={expandedFaqId}
								onClick={() => setExpandedFaqId(faq.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function FaqCard({
	id,
	question,
	answer,
	expandedFaqId,
	onClick,
}: {
	id: number;
	question: string;
	answer: string;
	expandedFaqId: number;
	onClick: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className="w-full h-auto border-[1px] border-primary-gray/20 rounded-lg flex flex-col gap-4 overflow-hidden relative cursor-pointer transition-all duration-300"
		>
			<div className="bg-white p-6 lg:pl-8 w-full flex items-center justify-between">
				<h3 className="text-black text-sm font-medium lg:text-xl">
					{question}
				</h3>
				{expandedFaqId === id ? (
					<div className="min-w-max">
						<svg
							className="text-black"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 15l7-7 7 7" />
						</svg>
					</div>
				) : (
					<div className="min-w-max">
						<svg
							className="text-black"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 9l7 7 7-7" />
						</svg>
					</div>
				)}
			</div>
			<div
				className={cn(
					"transition-all duration-300 ease-in-out overflow-hidden bg-[#F5F5F5]",
					expandedFaqId === id
						? "max-h-[500px]"
						: "max-h-0 hidden h-0"
				)}
				style={{
					transitionProperty: "max-height",
					transitionDuration: "0.3s",
					transitionTimingFunction: "ease-in-out",
				}}
			>
				<p className="text-sm lg:text-base pt-2 text-[#373737] p-5">
					{answer}
				</p>
			</div>
		</div>
	);
}
