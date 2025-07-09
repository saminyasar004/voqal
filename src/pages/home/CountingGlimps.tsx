export default function CountingGlimps() {
	const glimps = [
		{
			id: 1,
			content: "Business Trust Voqal",
			value: "500",
			suffix: "+",
		},
		{
			id: 2,
			content: "Calls Handled Monthly",
			value: "50",
			suffix: "K+",
		},
		{
			id: 3,
			content: "Customer Satisfaction",
			value: "98",
			suffix: "%",
		},
		{
			id: 4,
			content: "Always Available",
			value: "24/7",
			suffix: "",
		},
	];

	return (
		<section className="py-5 bg-[#F5F5F5]">
			<div className="container grid grid-cols-1 lg:grid-cols-4 gap-5">
				{glimps.map((glimp) => (
					<div
						key={glimp.id}
						className="flex flex-col items-center justify-center p-5"
					>
						<div className="flex items-center">
							<span className="text-4xl font-semibold">
								{glimp.value}
							</span>
							<span className="text-4xl font-semibold">
								{glimp.suffix}
							</span>
						</div>
						<p className="text-sm text-[#373737]">
							{glimp.content}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
