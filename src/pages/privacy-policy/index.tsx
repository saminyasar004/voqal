const privacyPolicyData = [
	{
		title: "Information We Collect",
		description:
			"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
		items: [
			"Usage Data: How you interact with our AI voice assistant platform",
			"Technical Data: IP address, browser type, device information",
			"Communication Data: Call recordings and transcripts (with consent)",
			"Payment Information: Billing details and transaction history",
		],
	},

	{
		title: "Information We Collect",
		description:
			"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
		items: [
			"Usage Data: How you interact with our AI voice assistant platform",
			"Technical Data: IP address, browser type, device information",
			"Communication Data: Call recordings and transcripts (with consent)",
			"Payment Information: Billing details and transaction history",
		],
	},

	{
		title: "Information We Collect",
		description:
			"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
		items: [
			"Usage Data: How you interact with our AI voice assistant platform",
			"Technical Data: IP address, browser type, device information",
			"Communication Data: Call recordings and transcripts (with consent)",
			"Payment Information: Billing details and transaction history",
		],
	},

	{
		title: "Information We Collect",
		description:
			"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
		items: [
			"Usage Data: How you interact with our AI voice assistant platform",
			"Technical Data: IP address, browser type, device information",
			"Communication Data: Call recordings and transcripts (with consent)",
			"Payment Information: Billing details and transaction history",
		],
	},

	{
		title: "Information We Collect",
		description:
			"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
		items: [
			"Usage Data: How you interact with our AI voice assistant platform",
			"Technical Data: IP address, browser type, device information",
			"Communication Data: Call recordings and transcripts (with consent)",
			"Payment Information: Billing details and transaction history",
		],
	},
];

export default function PrivacyPolicy() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="w-full flex flex-col gap-4 items-center text-center">
					<h2 className="text-5xl font-semibold">
						Voqal Privacy Policy
					</h2>
					<p className="lg:w-[50%] font-medium text-[#373737] leading-relaxed">
						Effective Date: June 1st, 2025
					</p>
				</div>

				<div className="w-full flex flex-col gap-8 py-14">
					{privacyPolicyData.map((item, index) => (
						<div
							key={index}
							className="border border-primary-gray/20 p-6 rounded-lg flex flex-col gap-4"
						>
							<h3 className="text-2xl font-semibold">
								{item.title}
							</h3>
							<p className="leading-relaxed">
								{item.description}
							</p>
							<ul className="list-disc list-inside text-[#656565] leading-relaxed flex flex-col gap-2">
								{item.items.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
