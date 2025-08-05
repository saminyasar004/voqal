import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
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

            <div className="p-6 space-y-6">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                            Current Privacy Policy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="p-6 border rounded-lg space-y-2 shadow">
                            <h4 className="text-xl font-semibold">Voqal Privacy Policy</h4>
                            <div className="flex w-full justify-between text-sm opacity-60">
                                <span>Version: 2.1</span>
                                <span>Last Updated: 2024-01-20</span>
                                <span>Effective Date: 2024-01-20</span>
                            </div>
                        </div>

                        <div className="p-6 border rounded-lg space-y-4 shadow">
                            <h4 className="text-xl font-semibold">Information We Collect</h4>
                            <p>
                                We collect information you provide directly to us, such as when
                                you create an account, use our services, or contact us for
                                support. This includes:{" "}
                            </p>
                            <ul className="flex flex-col space-y-1 text-sm opacity-60 list-disc list-inside">
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 border rounded-lg space-y-4 shadow">
                            <h4 className="text-xl font-semibold">Information We Collect</h4>
                            <p>
                                We collect information you provide directly to us, such as when
                                you create an account, use our services, or contact us for
                                support. This includes:{" "}
                            </p>
                            <ul className="flex flex-col space-y-1 text-sm opacity-60 list-disc list-inside">
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                                <li>
                                    We collect information your provide directly to us, such as
                                    when you create an account.
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <div className="flex gap-4 pl-5">
                        <Button variant="outline" className="px-8 py-3 bg-transparent">
                            Cancel
                        </Button>
                        <Button className="bg-primary hover:bg-gray-800 text-white px-8 py-3">
                            Update
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
}
