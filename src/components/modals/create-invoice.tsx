import { ArrowLeft, CalendarIcon, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";

export const CreateInvoice = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [issueDate, setIssueDate] = useState<Date>();
    const [dueDate, setDueDate] = useState<Date>();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center gap-4 mb-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-gray-300 bg-transparent"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>
                </div>

                <h1 className="text-xl font-semibold text-gray-900 mb-6">
                    Booking Details - Sarah Johnson
                </h1>
                <div className="border rounded-lg p-6 grid grid-cols-2 gap-4">
                    <h1 className="col-span-2 text-xl font-semibold text-gray-900 mb-6">
                        Invoice Information
                    </h1>

                    <div>
                        <Label
                            htmlFor="invoiceNumber"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Invoice Number
                        </Label>
                        <Input
                            id="invoiceNumber"
                            name="invoiceNumber"
                            placeholder="Enter invoice number"
                            className="w-full"
                        />
                    </div>

                    <div>
                        <Label
                            htmlFor="selectBusiness"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Select Business
                        </Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose a business" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Choose A Business</SelectLabel>
                                    <SelectItem value="glow">Glow Beauty Spa</SelectItem>
                                    <SelectItem value="dim">Dim Beauty Spa</SelectItem>
                                    <SelectItem value="random-selune">Random Selune</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label
                            htmlFor="issueDate"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Issue Date
                        </Label>
                        <span className="flex h-10 w-full rounded-lg bg-white text-primary border border-primary-gray/20 px-3 py-2 text-base file:text-sm file:font-medium file:text-primary placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <span className="flex items-center justify-between w-full cursor-pointer">
                                        {issueDate ? (
                                            format(issueDate, "PPP")
                                        ) : (
                                            <span className="opacity-60">Pick a date</span>
                                        )}
                                        <CalendarIcon className="!opacity-60" />
                                    </span>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={issueDate}
                                        onSelect={setIssueDate}
                                    />
                                </PopoverContent>
                            </Popover>
                        </span>
                    </div>

                    <div>
                        <Label
                            htmlFor="dueDate"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Due Date
                        </Label>
                        <span className="flex h-10 w-full rounded-lg bg-white text-primary border border-primary-gray/20 px-3 py-2 text-base file:text-sm file:font-medium file:text-primary placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <span className="flex items-center justify-between w-full cursor-pointer">
                                        {issueDate ? (
                                            format(dueDate, "PPP")
                                        ) : (
                                            <span className="opacity-60">Pick a date</span>
                                        )}
                                        <CalendarIcon className="!opacity-60" />
                                    </span>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={dueDate}
                                        onSelect={setDueDate}
                                    />
                                </PopoverContent>
                            </Popover>
                        </span>
                    </div>

                    <div>
                        <Label
                            htmlFor="plan"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Plan
                        </Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose a plan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Choose A Plan</SelectLabel>
                                    <SelectItem value="Basic">Basic</SelectItem>
                                    <SelectItem value="Premium">Premium</SelectItem>
                                    <SelectItem value="Professional">Professional</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label
                            htmlFor="amount"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Amount
                        </Label>
                        <div className="relative flex items-center">
                            <DollarSign className="!w-3.5 absolute left-2" />
                            <Input
                                id="amount"
                                name="amount"
                                className="w-full !ps-6"
                                type="number"
                            />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <Label
                            htmlFor="terms"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Terms & Conditions
                        </Label>
                        <Textarea id="terms" name="terms" className="w-full !ps-6" />
                    </div>
                </div>
                <div>
                    <Button>Generate Invoice</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
