import { PricingCard } from "@/components/common/pricing-card";
import { PricingPlan } from "@/interfaces";


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
                    <h2 className="text-5xl font-semibold">Transparent Pricing</h2>
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

