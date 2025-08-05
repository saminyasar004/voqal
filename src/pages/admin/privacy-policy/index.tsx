import DashboardHeader from "@/components/common/dashboard-header";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Card } from "@mantine/core";

export default function PrivacyPolicyEdit() {
    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            <DashboardHeader />
            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">
                        Privacy Policy Management
                    </h3>
                    <p className="text-sm text-foreground">
                        Create and manage your platform's privacy policy
                    </p>
                </div>
            </div>
        </section>
    );
}
