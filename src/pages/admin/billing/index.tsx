import AvatarImg from "@/assets/images/avatar.jpg";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, MoreHorizontal, Wallet, ArrowLeft } from "lucide-react";
import DashboardHeader from "@/components/common/dashboard-header";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BillingHistory } from "./billing-history";
import { Invoice } from "./invoice";
import { Link } from "react-router-dom";

export interface SubscriptionItem {
    id: number;
    owner: string;
    businessId: string;
    location: string;
    joinDate: string;
    contact: string;
    email: string;
    phone: string;
    plan: PlanType;
    status: "Active" | "Expired" | "Past Due";
    amount: string;
    nextBilling: string;
    avatar: string;
}

type PlanType = "Basic" | "Professional" | "Premium";

export default function AdminBilling() {
    const subscriptionData: SubscriptionItem[] = [
        {
            id: 1,
            businessId: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$299/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 2,
            businessId: "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Professional",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 3,
            businessId: "c3d4e5f6-a7b8-9012-cdef-3456789012cd",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Basic",
            status: "Past Due",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 4,
            businessId: "d4e5f6a7-b8c9-0123-def0-4567890123de",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 5,
            businessId: "e5f6a7b8-c9d0-1234-ef01-5678901234ef",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 6,
            businessId: "f6a7b8c9-d0e1-2345-f012-6789012345f0",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 7,
            businessId: "a7b8c9d0-e1f2-3456-0123-7890123456a1",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 8,
            businessId: "b8c9d0e1-f2a3-4567-1234-8901234567b2",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 9,
            businessId: "c9d0e1f2-a3b4-5678-2345-9012345678c3",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Expired",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
        {
            id: 10,
            businessId: "d0e1f2a3-b4c5-6789-3456-0123456789d4",
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+998 91 6254654",
            plan: "Premium",
            status: "Active",
            amount: "$199/Month",
            nextBilling: "2024-02-15",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
        },
    ];

    const [activeTab, setActiveTab] = useState("all-subscriptions");

    type PlanFilter = PlanType | "all-plan";
    const [planFilter, setPlanFilter] = useState<PlanFilter>("all-plan");

    const [filteredSubscriptions, setFilteredSubscription] =
        useState<SubscriptionItem[]>(subscriptionData);

    useEffect(() => {
        if (planFilter === "all-plan")
            return setFilteredSubscription(subscriptionData);

        const filtered = subscriptionData.filter(
            (subscription) => subscription.plan === planFilter,
        );

        setFilteredSubscription(filtered);
    }, [planFilter]);

    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            {/* dashboard header */}
            <DashboardHeader />

            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">
                        Billing Management
                    </h3>
                    <p className="text-sm text-foreground">
                        Manage subscription plans and billing information.
                    </p>
                </div>
            </div>

            <div className="p-6">
                {/* Plan Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Premium Plan
                                    </h3>
                                    <div className="text-3xl font-bold text-gray-900">456</div>
                                    <p className="text-sm text-gray-500">$299/month</p>
                                </div>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                    <Wallet className="text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Professional Plan
                                    </h3>
                                    <div className="text-3xl font-bold text-gray-900">623</div>
                                    <p className="text-sm text-gray-500">$199/month</p>
                                </div>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                    <Wallet className="text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Basic Plan
                                    </h3>
                                    <div className="text-3xl font-bold text-gray-900">168</div>
                                    <p className="text-sm text-gray-500">$99/month</p>
                                </div>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                    <Wallet className="text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="all-subscriptions">
                            All Subscriptions
                        </TabsTrigger>
                        <TabsTrigger value="billing-history">Billing History</TabsTrigger>
                        <TabsTrigger value="invoice">Invoice</TabsTrigger>
                        <TabsTrigger value="subscription-plans">
                            Subscriptions Plans
                        </TabsTrigger>
                    </TabsList>

                    {/* All Subscriptions Tab */}
                    <TabsContent value="all-subscriptions" className="space-y-6">
                        {/* Search Bar */}
                        <Card className="bg-white">
                            <CardContent className="p-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        placeholder="Search"
                                        className="pl-10 border-gray-200"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Active Subscriptions */}
                        <Card className="bg-white">
                            <CardContent className="p-0">
                                <div className="flex items-center justify-between p-6 border-b">
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Active Subscriptions
                                    </h2>
                                    <Select
                                        defaultValue="all-plan"
                                        onValueChange={(e) => setPlanFilter(e as PlanFilter)}
                                    >
                                        <SelectTrigger className="w-32">
                                            <SelectValue placeholder="All Plan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all-plan">All Plan</SelectItem>
                                            <SelectItem value="Premium">Premium</SelectItem>
                                            <SelectItem value="Professional">Professional</SelectItem>
                                            <SelectItem value="Basic">Basic</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Table */}
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-primary hover:bg-primary text-primary-foreground">
                                            <TableHead className="text-white font-medium"></TableHead>
                                            <TableHead className="text-white font-medium">
                                                Owner
                                            </TableHead>
                                            <TableHead className="text-white font-medium">
                                                Plan
                                            </TableHead>
                                            <TableHead className="text-white font-medium">
                                                Status
                                            </TableHead>
                                            <TableHead className="text-white font-medium">
                                                Amount
                                            </TableHead>
                                            <TableHead className="text-white font-medium">
                                                Next Billing
                                            </TableHead>
                                            <TableHead className="text-white font-medium">
                                                Actions
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredSubscriptions.map((subscription) => (
                                            <TableRow
                                                key={subscription.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-10 w-10">
                                                            <AvatarImage src={AvatarImg} />
                                                            <AvatarFallback>GB</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium text-gray-900">
                                                                {subscription.owner}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {subscription.location}
                                                            </div>
                                                            <div className="text-xs text-gray-400">
                                                                Joined {subscription.joinDate}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="font-medium text-gray-900">
                                                            {subscription.contact}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {subscription.email}
                                                        </div>
                                                        <div className="text-xs text-gray-400">
                                                            {subscription.phone}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            subscription.plan === "Professional"
                                                                ? "default"
                                                                : subscription.plan === "Basic"
                                                                    ? "outline"
                                                                    : "indigo"
                                                        }
                                                    >
                                                        {subscription.plan}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            subscription.status === "Active"
                                                                ? "success"
                                                                : subscription.status === "Expired"
                                                                    ? "secondary"
                                                                    : "warning"
                                                        }
                                                    >
                                                        {subscription.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="font-medium text-gray-900">
                                                    {subscription.amount}
                                                </TableCell>
                                                <TableCell className="text-gray-600">
                                                    {subscription.nextBilling}
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                            className="cursor-pointer"
                                                        >
                                                            <MoreHorizontal className="!h-8 !w-8 opacity-60" />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="space-y-2">
                                                            <Link
                                                                to={`/admin/business-management/business-profile/${subscription.businessId}`}
                                                            >
                                                                <DropdownMenuItem>
                                                                    View Details
                                                                </DropdownMenuItem>
                                                            </Link>
                                                            <DropdownMenuItem className="bg-warning text-primary-foreground hover:bg-warning/90">
                                                                Cancel Subscription
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                {/* Pagination */}
                                <div className="p-6 border-t">
                                    <Pagination className="flex items-center justify-end">
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#" isActive>
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">10</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Billing History Tab */}
                    <BillingHistory />

                    <Invoice />

                    {/* Invoice Tab */}
                    {/* Subscription Plans Tab */}
                    <TabsContent value="subscription-plans">
                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <div className="text-center text-gray-500">
                                    Subscription plans content will be added here
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
