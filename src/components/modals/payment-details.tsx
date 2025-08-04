import AvatarImg from "@/assets/images/avatar.jpg";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

export function PaymentDetailsModal({ billing }: { billing: any }) {
    return (
        <DialogContent className="sm:max-w-xl mx-auto max-h-[80vh]">
            <DialogHeader className="space-y-4">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 bg-transparent"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>
                </div>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                    Payment Details
                </DialogTitle>
            </DialogHeader>

            <ScrollArea className="h-[60vh] p-4 rounded-lg border">
                <div className="space-y-6">
                    {/* Surgeon Illustration */}
                    <div className="flex justify-center py-4">
                        <div className="relative">
                            <img
                                src={AvatarImg}
                                alt="Surgeon illustration"
                                className="w-24 h-24 rounded-full"
                            />
                            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                MD
                            </div>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Business Name:</span>
                            <span className="text-gray-900">{billing.businessName}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Payment Id:</span>
                            <span className="text-gray-900">{billing.paymentId}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Payment Method:</span>
                            <span className="text-blue-600">{billing.paymentMethod}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">A1C:</span>
                            <span className="text-gray-900">{billing.accountNumber}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">
                                A/C Holder Name:
                            </span>
                            <span className="text-gray-900">{billing.holderName}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Amount:</span>
                            <span className="text-gray-900 font-semibold">
                                {billing.actualAmount}
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Email:</span>
                            <span className="text-gray-900">{billing.email}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Date:</span>
                            <span className="text-gray-900">{billing.date}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Plan:</span>
                            <span className="text-gray-900">{billing.actualPlan}</span>
                        </div>

                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Status:</span>
                            <Badge
                                variant={billing.status === "Paid" ? "success" : "warning"}
                            >
                                {billing.status}
                            </Badge>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 pb-4">
                        <Button variant="outline" className="flex-1 bg-transparent">
                            Download Pdf
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                            Print
                        </Button>
                        <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                            Process Refund
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
    );
}

