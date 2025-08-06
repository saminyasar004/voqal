import { PricingCard } from "@/components/common/pricing-card";
import CreateSubscription from "@/components/modals/create-subscription";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { PricingPlan } from "@/interfaces";
import { Plus } from "lucide-react";
import { useState } from "react";

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

const Subscription = () => {
    const [showSubscriptionModal, setShowSubscriptionModal] =
        useState<boolean>(false);

    return (
        <TabsContent value="subscription-plans">
            <Card className="bg-white">
                <CardHeader>
                    <div className="flex justify-end">
                        <Button
                            className="py-6 rounded-lg px-3"
                            onClick={() => setShowSubscriptionModal(true)}
                        >
                            Create New Plan
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6 flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-14 items-center py-20">
                        {pricingPlans.map((plan, idx) => (
                            <PricingCard key={idx} plan={plan} />
                        ))}
                    </div>
                </CardContent>
            </Card>

            <CreateSubscription
                isOpen={showSubscriptionModal}
                onClose={() => {
                    setShowSubscriptionModal(false);
                }}
            />
        </TabsContent>
    );
};

export default Subscription;
