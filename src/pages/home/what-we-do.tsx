interface FeatureCardProps {
	title: string;
	description: string;
	items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	description,
	items,
}) => {
	return (
		<div className="bg-white rounded-lg p-6 w-full border-[1px] border-[#C8C8C8]">
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-primary-gray text-sm mb-6">{description}</p>
			<ul className="list-disc list-inside text-primary-gray text-sm space-y-1">
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const WhatWeDo: React.FC = () => {
	return (
		<section id="what-we-do" className="py-32 bg-[#F5F5F5]">
			<div className="container">
				<div className="text-center mb-8 flex items-center justify-center flex-col gap-8">
					<h2 className="text-5xl font-semibold">What We Do</h2>
					<p className="lg:w-[50%] text-[#373737] text-sm mt-2">
						Voqual provides AI voice assistants that handle your
						phone calls and bookings automatically, so you can focus
						on your customers.
					</p>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
					<FeatureCard
						title="AI-Powered Phone Assistant"
						description="Natural kiwi & aussie accents with human-like conversation"
						items={[
							"Selection of kiwi and aussie voices",
							"Natural conversation with small talk",
							"Customizable personality & tone",
						]}
					/>
					<FeatureCard
						title="Real-Time Booking System"
						description="Instant Availability Checking With Conflict Resolution"
						items={[
							"Multi-service bookings in one call",
							"Staff & equipment management",
							"Calendar Integrations",
						]}
					/>
					<FeatureCard
						title="Customisable Voice & Personality"
						description="Tailor AI To Match Your Business Style"
						items={[
							"Friendly to formal tones",
							"Staff & equipment management",
							"Industry-Specific Scripts",
						]}
					/>
					<FeatureCard
						title="Works Outside Business Hours"
						description="24/7 Availability With Smart Scheduling"
						items={[
							"After-Hours Booking",
							"Configurable Availability",
							"Human Transfer When Needed",
						]}
					/>
					<FeatureCard
						title="Integrated Payments & Reminders"
						description="Stripe Integration With Automated Notifications"
						items={[
							"Optional upfront payments",
							"Reduce no-shows",
							"Sms & email reminders",
						]}
					/>
					<FeatureCard
						title="Quick And Easy Set Up"
						description="Get Started In Minutes With Our Simple Process"
						items={[
							"Seamless Onboarding Wizard",
							"Use existing phone numbers",
							"Free local phone numbers available",
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;
