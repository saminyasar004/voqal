import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";

export const PricingCard = ({ plan }) => {
    return (
        <div
            className={cn(
                "bg-gray-50 max-w-sm relative rounded-lg p-6 border-2 border-primary-gray/10",
                plan.isPopular && "border-primary scale-110",
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
                    <li key={idx} className="flex items-center text-primary-gray">
                        <span className="text-primary-gray mr-2">
                            <CircleCheckBig size={16} />
                        </span>
                        {feature}
                    </li>
                ))}
            </ul>
            <Button className="w-full">{plan.buttonText}</Button>
        </div>
    );
};
