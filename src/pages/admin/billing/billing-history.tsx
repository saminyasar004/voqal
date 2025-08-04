import { Badge } from "@/components/ui/badge";
import AvatarImg from "@/assets/images/avatar.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PaymentDetailsModal } from "@/components/modals/payment-details";
import { useEffect, useState } from "react";

export interface BillingHistoryItem {
    id: number;
    owner: string;
    joinDate: string;
    paymentId: string;
    plan: "Basic" | "Professional" | "Premium";
    status: "Paid" | "Refunded" | "Pending" | "Failed";
    amount: string;
    method: string;
    avatar: string;
    businessName: string;
    paymentMethod: "Paypal" | "Credit Card" | "Debit Card" | "Bank Transfer";
    accountNumber: string;
    holderName: string;
    actualAmount: string;
    email: string;
    date: string;
    actualPlan: "Basic" | "Professional" | "Premium";
}

export function BillingHistory() {
    const billingHistoryData: BillingHistoryItem[] = [
        {
            id: 1,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Premium",
            status: "Paid",
            amount: "$299/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 2,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Professional",
            status: "Paid",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 3,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Basic",
            status: "Refunded",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 4,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Premium",
            status: "Paid",
            amount: "$299/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 5,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Professional",
            status: "Paid",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 6,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Basic",
            status: "Refunded",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 7,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Professional",
            status: "Paid",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 8,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Basic",
            status: "Refunded",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 9,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Professional",
            status: "Paid",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
        {
            id: 10,
            owner: "Glow Beauty Spa",
            joinDate: "2024-01-15",
            paymentId: "PL_1234567890",
            plan: "Basic",
            status: "Refunded",
            amount: "$199/Month",
            method: "Card Name",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            businessName: "Medical Center",
            paymentMethod: "Paypal",
            accountNumber: "**** *** *** *545",
            holderName: "John Doe",
            actualAmount: "$250",
            email: "Pappyroy6393@Gmail.Com",
            date: "01-24-2024",
            actualPlan: "Basic",
        },
    ];

    const [status, setStatus] = useState<string>("all-status");
    const [filteredBillingHistoryData, setFilteredBillingHistoryData] = useState<
        BillingHistoryItem[]
    >([]);

    useEffect(() => {
        ////////// DO YOUR API CALL HERE WITH FILTERS.

        if (status === "all-status")
            return setFilteredBillingHistoryData(billingHistoryData);
        const filtered = billingHistoryData.filter(
            (billingHistory) => billingHistory.status === status,
        );

        setFilteredBillingHistoryData(filtered);
    }, [status]);

    return (
        <TabsContent value="billing-history" className="space-y-6">
            <Card className="bg-white">
                <CardContent className="p-0">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Billing History
                        </h2>
                        <Select
                            defaultValue="all-status"
                            onValueChange={(filter_input) => setStatus(filter_input)}
                        >
                            <SelectTrigger className="w-32">
                                <SelectValue placeholder="All Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all-status">All Status</SelectItem>
                                <SelectItem value="Paid">Paid</SelectItem>
                                <SelectItem value="Refunded">Refunded</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Table */}
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-primary hover:bg-primary text-primary-foreground">
                                <TableHead className="text-white font-medium">Owner</TableHead>
                                <TableHead className="text-white font-medium">
                                    Payment ID
                                </TableHead>
                                <TableHead className="text-white font-medium">Plan</TableHead>
                                <TableHead className="text-white font-medium">Status</TableHead>
                                <TableHead className="text-white font-medium">Amount</TableHead>
                                <TableHead className="text-white font-medium">Method</TableHead>
                                <TableHead className="text-white font-medium">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBillingHistoryData.map((billing) => (
                                <TableRow key={billing.id} className="hover:bg-gray-50">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={AvatarImg} />
                                                <AvatarFallback>GB</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium text-gray-900">
                                                    {billing.owner}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {billing.joinDate}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-600">
                                        {billing.paymentId}
                                    </TableCell>
                                    <TableCell>
                                        <Badge>{billing.plan}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                billing.status === "Paid" ? "success" : "warning"
                                            }
                                        >
                                            {billing.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {billing.amount}
                                    </TableCell>
                                    <TableCell className="text-gray-600">
                                        {billing.method}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <DropdownMenuItem
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            View Details
                                                        </DropdownMenuItem>
                                                    </DialogTrigger>
                                                    <PaymentDetailsModal billing={billing} />
                                                </Dialog>
                                                <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                                                <DropdownMenuItem>Process Refund</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <div className="p-6 border-t">
                        <Pagination>
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
    );
}
