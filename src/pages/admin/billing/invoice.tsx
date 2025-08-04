import { CreateInvoice } from "@/components/modals/create-invoice";
import { PaymentDetailsModal } from "@/components/modals/payment-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { MoreHorizontal, Search } from "lucide-react";
import { useState } from "react";

interface Invoice {
    id: number;
    invoiceNumber: string;
    business: string;
    status: string;
    amount: string;
    dueDate: string;
    actions: string;
}

const invoices: Invoice[] = [
    {
        id: 1,
        invoiceNumber: "INV14578587",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 2,
        invoiceNumber: "INV14578588",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 3,
        invoiceNumber: "INV14578589",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 4,
        invoiceNumber: "INV14578590",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 5,
        invoiceNumber: "INV14578591",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 6,
        invoiceNumber: "INV14578592",
        business: "Wellness Spa Auckland",
        status: "Send",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 7,
        invoiceNumber: "INV14578593",
        business: "Wellness Spa Auckland",
        status: "Draft",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 8,
        invoiceNumber: "INV14578594",
        business: "Wellness Spa Auckland",
        status: "Draft",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 9,
        invoiceNumber: "INV14578595",
        business: "Wellness Spa Auckland",
        status: "Draft",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
    {
        id: 10,
        invoiceNumber: "INV14578596",
        business: "Wellness Spa Auckland",
        status: "Draft",
        amount: "$29/Month",
        dueDate: "2024-02-14",
        actions: "...",
    },
];

export function Invoice() {
    const [showCreateInvoice, setShowCreateInvoice] = useState<boolean>(false);

    return (
        <TabsContent value="invoice" className="space-y-8">
            <Card className="bg-white">
                <CardContent className="p-4 flex w-full gap-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search..." className="pl-10 border-gray-200" />
                    </div>
                    <Select defaultValue="all-status">
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all-status">All Status</SelectItem>
                            <SelectItem value="Send">Send</SelectItem>
                            <SelectItem value="Draft">Draft</SelectItem>
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>
            <Card className="bg-white">
                <CardContent className="p-0">
                    <div className="flex items-center justify-between px-6 py-3 border-b">
                        <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
                        <Button
                            className="py-6 rounded-lg"
                            onClick={() => {
                                setShowCreateInvoice(true);
                            }}
                        >
                            Create invoice
                        </Button>
                    </div>

                    <CreateInvoice
                        isOpen={showCreateInvoice}
                        onClose={() => setShowCreateInvoice(false)}
                    />

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-primary hover:bg-primary text-primary-foreground">
                                <TableHead className="text-white font-medium">
                                    Invoice #
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Business
                                </TableHead>
                                <TableHead className="text-white font-medium">Status</TableHead>
                                <TableHead className="text-white font-medium">Amount</TableHead>
                                <TableHead className="text-white font-medium">
                                    Due Date
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.id} className="hover:bg-gray-50">
                                    <TableCell className="text-gray-600">
                                        {invoice.invoiceNumber}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {invoice.business}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        <Badge
                                            variant={
                                                invoice.status === "Send" ? "success" : "secondary"
                                            }
                                        >
                                            {invoice.status}
                                        </Badge>
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {invoice.amount}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {invoice.dueDate}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild className="cursor-pointer">
                                                <MoreHorizontal className="!h-8 !w-8 opacity-60" />
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
                                                    {
                                                        // Actions modals will go here
                                                    }
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
                </CardContent>
            </Card>
        </TabsContent>
    );
}
