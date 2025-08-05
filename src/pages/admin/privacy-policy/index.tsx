import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import PrivacySectionsList from "./privacy-data-edit";
import { CalendarIcon, OctagonX, Pencil } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

interface Privacy {
    id: number;
    title: string;
    description: string;
    list: string[];
}

interface PrivacyPolicy {
    id: number;
    title: string;
    version: string;
    effectiveDate: Date;
    lastUpdate: Date;
    data: Privacy[];
}

export default function PrivacyPolicyEdit() {
    const [initialValue, setInitialValue] = useState<PrivacyPolicy>({
        id: 1,
        title: "Voqal Privacy Policy",
        version: "2.1",
        effectiveDate: new Date("2024-01-20"),
        lastUpdate: new Date("2024-01-20"),
        data: [
            {
                id: 1,
                title: "Information We Collect",
                description:
                    "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
                list: [
                    "Your name, email address, and password.",
                    "Usage data such as pages visited and time spent.",
                    "Support requests, chat logs, or other communication.",
                    "Technical data like IP address, browser, and device information.",
                ],
            },
            {
                id: 2,
                title: "How We Use Your Information",
                description:
                    "We use your data to operate, maintain, and improve our services, as well as to communicate with you.",
                list: [
                    "To personalize content and recommendations.",
                    "To provide customer support and respond to inquiries.",
                    "To send important updates, alerts, and newsletters.",
                    "To monitor and analyze usage patterns for optimization.",
                ],
            },
            {
                id: 3,
                title: "Data Sharing and Disclosure",
                description:
                    "We may share your information with trusted third parties in specific circumstances, including:",
                list: [
                    "With service providers who help us deliver our services.",
                    "With legal authorities when required by law or subpoena.",
                    "During business transfers such as mergers or acquisitions.",
                    "With your explicit consent.",
                ],
            },
            {
                id: 4,
                title: "Your Rights and Choices",
                description:
                    "You have the right to access, update, or delete your personal data. You can also:",
                list: [
                    "Opt out of promotional communications.",
                    "Request data portability.",
                    "Withdraw consent for data processing.",
                    "Review and update your account information.",
                ],
            },
        ],
    });

    const [isTopLevelEditing, setIsTopLevelEditing] = useState(false);

    const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>(() =>
        structuredClone(initialValue),
    );

    function isChanged(): boolean {
        return JSON.stringify(initialValue) !== JSON.stringify(privacyPolicy);
    }

    function resetChange() {
        setPrivacyPolicy(() => structuredClone(initialValue));
    }

    async function saveChange() {
        try {
            const updatedPolicy = {
                ...privacyPolicy,
                lastUpdate: new Date(),
            };

            setPrivacyPolicy(updatedPolicy);

            // API CALL HERE
            setInitialValue(structuredClone(updatedPolicy));
        } catch (err) {
            console.log(err);
        }
    }

    function handleTopLevelChange<K extends keyof Omit<PrivacyPolicy, "data">>(
        field: K,
        value: PrivacyPolicy[K],
    ) {
        setPrivacyPolicy((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    function handleSectionsChange(newSections: Privacy[]) {
        setPrivacyPolicy((prev) => ({
            ...prev,
            data: newSections,
        }));
    }

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
                <Card className="bg-white group">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                            Current Privacy Policy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Card className="border group/parent relative">
                            <CardContent className="py-6 space-y-4">
                                {isTopLevelEditing ? (
                                    <div className="flex gap-6 justify-between">
                                        <div className="w-2/3">
                                            <Label
                                                htmlFor="title"
                                                className="text-sm font-medium text-gray-900 block mb-1"
                                            >
                                                Privacy Title
                                            </Label>
                                            <Input
                                                id="title"
                                                placeholder="Enter privacy title"
                                                className="w-full"
                                                value={privacyPolicy.title}
                                                onChange={(e) =>
                                                    handleTopLevelChange("title", e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="w-1/3">
                                            <Label
                                                htmlFor="effectiveDate"
                                                className="text-sm font-medium text-gray-900 block mb-1"
                                            >
                                                Effective Date
                                            </Label>

                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-left font-normal rounded-lg h-10"
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {privacyPolicy.effectiveDate ? (
                                                            format(privacyPolicy.effectiveDate, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={privacyPolicy.effectiveDate}
                                                        onSelect={(date) => {
                                                            if (date) {
                                                                handleTopLevelChange("effectiveDate", date);
                                                                setPrivacyPolicy((prev) => ({
                                                                    ...prev,
                                                                    effectiveDate: date,
                                                                }));
                                                            }
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                ) : (
                                    <h4 className="text-xl font-semibold">
                                        {privacyPolicy.title}
                                    </h4>
                                )}
                                <div className="flex w-full justify-between text-sm opacity-60">
                                    <span>Version: {privacyPolicy.version}</span>
                                    <span>
                                        Last Updated: {privacyPolicy.lastUpdate.toDateString()}
                                    </span>
                                    <span>
                                        Effective Date: {privacyPolicy.effectiveDate.toDateString()}
                                    </span>
                                </div>

                                {isTopLevelEditing && (
                                    <div className="pt-4">
                                        <Button onClick={() => setIsTopLevelEditing(false)}>
                                            Done
                                        </Button>
                                    </div>
                                )}
                            </CardContent>

                            <div className="absolute top-2 right-4 hidden group-hover/parent:flex gap-2 z-10">
                                <button
                                    className="rounded-lg hover:bg-slate-900/10 p-2 text-blue-800 transition"
                                    onClick={() => setIsTopLevelEditing(true)}
                                >
                                    <Pencil className="h-4 w-4" />
                                </button>
                                <button className="rounded-lg hover:bg-slate-900/10 p-2 text-red-800 transition">
                                    <OctagonX className="h-4 w-4" />
                                </button>
                            </div>
                        </Card>

                        <PrivacySectionsList
                            sections={privacyPolicy.data}
                            onSectionsChange={handleSectionsChange}
                        />
                    </CardContent>

                    {isChanged() && (
                        <div className="flex gap-4 pl-5 pb-4">
                            <Button
                                variant="outline"
                                className="px-8 py-3 bg-transparent"
                                onClick={resetChange}
                            >
                                Reset
                            </Button>
                            <Button
                                className="bg-primary hover:bg-gray-800 text-white px-8 py-3"
                                onClick={saveChange}
                            >
                                Update
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </section>
    );
}
