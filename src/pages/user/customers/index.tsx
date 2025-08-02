import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Download, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import CustomerProfileModal from "./customer-profile-modal";

interface Customer {
    id: number;
    name: string;
    status: "active" | "inactive";
    phone: string;
    totalBookings: number;
    lastVisit: string;
    notes: string;
    joinDate: string;
    totalSpent: string;
    staffPreferences: string[];
    servicePreferences: string[];
    problems: string[];
    repeatAppointments: number;
    plan: string;
    week: string;
}

interface Booking {
    id: number;
    service: string;
    date: string;
    staff: string;
    price: string;
    notes: string;
}

export default function Customers() {
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
        null,
    );
    const [showCustomerProfile, setShowCustomerProfile] = useState(false);

    const [customers] = useState<Customer[]>([
        {
            id: 1,
            name: "Sarah Johnson",
            status: "active",
            phone: "+64 21 123 4567",
            totalBookings: 12,
            lastVisit: "2024-01-10",
            notes: "Prefers Natural Hair Colors, Allergic To Ammonia",
            joinDate: "03-12-2024",
            totalSpent: "$1,440",
            staffPreferences: ["John Smith", "Lisa", "Sarah Smith", "Jack"],
            servicePreferences: ["Manicure", "Hair Color", "Massage", "Hair Care"],
            problems: ["Allergy"],
            repeatAppointments: 1,
            plan: "Monthly",
            week: "Monday",
        },
        {
            id: 2,
            name: "Emma Wilson",
            status: "inactive",
            phone: "+64 21 123 4567",
            totalBookings: 12,
            lastVisit: "2024-01-10",
            notes: "Prefers Natural Hair Colors, Allergic To Ammonia",
            joinDate: "03-12-2024",
            totalSpent: "$1,440",
            staffPreferences: ["John Smith", "Lisa", "Sarah Smith", "Jack"],
            servicePreferences: ["Manicure", "Hair Color", "Massage", "Hair Care"],
            problems: ["Allergy"],
            repeatAppointments: 1,
            plan: "Monthly",
            week: "Monday",
        },
    ]);

    const [bookings] = useState<Booking[]>([
        {
            id: 1,
            service: "Haircut & Color",
            date: "2024-01-10",
            staff: "John Smith",
            price: "120",
            notes: "Prefers Natural Hair Colors, Allergic To Ammonia",
        },
        {
            id: 2,
            service: "Haircut & Color",
            date: "2024-01-10",
            staff: "John Smith",
            price: "120",
            notes: "Prefers Natural Hair Colors, Allergic To Ammonia",
        },
        {
            id: 3,
            service: "Haircut & Color",
            date: "2024-01-10",
            staff: "John Smith",
            price: "120",
            notes: "Prefers Natural Hair Colors, Allergic To Ammonia",
        },
    ]);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return <Badge variant="success">Active</Badge>;
            case "inactive":
                return <Badge variant="secondary">Inactive</Badge>;
            default:
                return <Badge variant="warning">Unknown</Badge>;
        }
    };

    const handleViewDetails = (customer: Customer) => {
        setSelectedCustomer(customer);
        setShowCustomerProfile(true);
    };

    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            {/* dashboard header */}
            <DashboardHeader />

            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">All Customers</h3>
                    <p className="text-sm text-foreground">
                        Manage your customer database and relationships
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Button variant="outline">
                        Download Customer CSV File <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="flex justify-between gap-4 px-6 py-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        type="text"
                        placeholder="Search customers by name or phone"
                        className="pl-10 w-full"
                    />
                </div>

                <Select
                // value={filteredTime}
                // onValueChange={(e) =>
                // 	setFilteredTime((e as any).target.value)
                // }
                >
                    <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="Select filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All Customers</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="p-6">
                <div className="w-full">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl font-semibold text-gray-900">
                            Total Customer (300)
                        </h1>
                    </div>

                    <div className="space-y-4">
                        {customers.map((customer) => (
                            <Card
                                key={customer.id}
                                className="shadow-sm border border-gray-200 bg-white"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        {/* Customer Information */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="font-medium text-gray-900 text-base">
                                                    {customer.name}
                                                </h3>
                                                {getStatusBadge(customer.status)}
                                            </div>

                                            <div className="space-y-1 mb-4">
                                                <div className="text-sm text-gray-600">
                                                    <span className="font-medium">Phone: </span>
                                                    <span>{customer.phone}</span>
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    <span className="font-medium">Total Bookings: </span>
                                                    <span>{customer.totalBookings}</span>
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    <span className="font-medium">Last Visit: </span>
                                                    <span>{customer.lastVisit}</span>
                                                </div>
                                            </div>

                                            {/* Notes Section */}
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900 mb-2">
                                                    Notes:
                                                </h4>
                                                <div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
                                                    {customer.notes}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-2 ml-6">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="px-4 py-2 text-sm bg-transparent"
                                            >
                                                New Book
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="bg-black hover:bg-gray-800 text-white px-4 py-2 text-sm"
                                                onClick={() => handleViewDetails(customer)}
                                            >
                                                View Details
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Customer Profile Modal */}
            {selectedCustomer && (
                <CustomerProfileModal
                    isOpen={showCustomerProfile}
                    customer={selectedCustomer}
                    bookings={bookings}
                    onClose={() => {
                        setShowCustomerProfile(false);
                        setSelectedCustomer(null);
                    }}
                />
            )}
        </section>
    );
}
