import { useState } from "react";
import { ArrowLeft, BotMessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Customer {
    id: number;
    name: string;
    phone: string;
    totalBookings: number;
    joinDate: string;
    lastVisit: string;
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

export default function CustomerProfileModal({
    isOpen,
    customer,
    bookings,
    onClose,
}: {
    isOpen: boolean;
    customer: Customer;
    bookings: Booking[];
    onClose: () => void;
}) {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="border-b border-gray-200">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-gray-300 bg-transparent mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>

                    <h1 className="text-xl font-semibold text-gray-900 mb-6">
                        Customer Profile - {customer.name}
                    </h1>

                    {/* Tabs */}
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                            <TabsTrigger
                                value="overview"
                                className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md"
                            >
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="booking-history"
                                className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md"
                            >
                                Booking History
                            </TabsTrigger>
                        </TabsList>

                        {/* Overview Tab Content */}
                        <TabsContent value="overview" className="mt-6">
                            <div className="grid grid-cols-2 gap-8">
                                {/* Customer Information */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                        Customer Information
                                    </h2>

                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <span className="text-sm text-gray-600">Name: </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.name}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">Phone: </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.phone}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">
                                                Total Bookings:{" "}
                                            </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.totalBookings}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">Join Date: </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.joinDate}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">
                                                Last Visit:{" "}
                                            </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.lastVisit}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">
                                                Total Spent:{" "}
                                            </span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {customer.totalSpent}
                                            </span>
                                        </div>
                                    </div>

                                    <Button className="w-full">Follow up</Button>
                                </div>

                                {/* Preferences */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                        Preferences
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Staff:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {customer.staffPreferences.map((staff, index) => (
                                                    <Badge key={index}>{staff}</Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Services:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {customer.servicePreferences.map((service, index) => (
                                                    <Badge key={index} variant="success">
                                                        {service}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Problem</p>
                                            <div className="flex flex-wrap gap-2">
                                                {customer.problems.map((problem, index) => (
                                                    <Badge key={index} variant="warning">
                                                        {problem}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <span className="text-gray-600">
                                                    Total Repeat Appointment:{" "}
                                                </span>
                                                <span className="font-medium text-gray-900">
                                                    {customer.repeatAppointments}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Plan: </span>
                                                <span className="font-medium text-gray-900">
                                                    {customer.plan}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Week: </span>
                                                <span className="font-medium text-gray-900">
                                                    {customer.week}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Booking History Tab Content */}
                        <TabsContent value="booking-history" className="mt-6">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                    Booking History ({bookings.length} Bookings)
                                </h2>

                                <div className="space-y-4">
                                    {bookings.map((booking) => (
                                        <Card key={booking.id} className="border border-gray-200">
                                            <CardContent className="p-4">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium text-gray-900">
                                                            {booking.service}
                                                        </span>
                                                        <Badge className="space-x-2">
                                                            <BotMessageSquare className="h-4 w-4" />
                                                            <span>AI Call</span>
                                                        </Badge>
                                                    </div>

                                                    <div className="text-sm text-gray-600">
                                                        <div>Date: {booking.date}</div>
                                                        <div>Staff: {booking.staff}</div>
                                                        <div>Price: ${booking.price}</div>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 mb-1">
                                                            Notes:
                                                        </p>
                                                        <div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
                                                            {booking.notes}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
}
