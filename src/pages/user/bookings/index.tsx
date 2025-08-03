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
import { Calendar, Clock, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import type { Customer } from "../customers";
import { Booking } from "@/interfaces";
import BookingDetailsModal from "@/components/modals/booking-details";


export const bookings: Booking[] = [
  {
    id: 1,
    time: "09:00 AM",
    date: "Today",
    customerName: "David Brown",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "complete",
  },
  {
    id: 2,
    time: "09:00 AM",
    date: "Today",
    customerName: "Mike Chen",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "confirm",
    specialNote:
      "Rescheduled to: Live (Postponed) / Reason: Customer requested to speak with human staff for special requirements",
  },
  {
    id: 3,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "pending",
    tags: ["Haircut", "Pending"],
    actionType: "confirm",
  },
  {
    id: 4,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "confirm",
  },
  {
    id: 5,
    time: "09:00 AM",
    date: "Today",
    customerName: "David Brown",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "complete",
  },
  {
    id: 6,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "confirm",
  },
  {
    id: 7,
    time: "09:00 AM",
    date: "Today",
    customerName: "David Brown",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "cancelled",
    tags: ["Haircut", "Cancelled"],
    actionType: "confirm",
  },
  {
    id: 8,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut", "Confirm"],
    actionType: "confirm",
  },
  {
    id: 9,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut"],
    actionType: "confirm",
  },
  {
    id: 10,
    time: "09:00 AM",
    date: "Today",
    customerName: "Emma Wilson",
    service: "Haircut & Color with John Smith",
    serviceProvider: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "1:00",
    status: "confirmed",
    tags: ["Haircut"],
    actionType: "confirm",
  },
];

const getActionButton = (actionType: string) => {
  switch (actionType) {
    case "complete":
      return (
        <Button
          size="sm"
          className="bg-golden-olive hover:bg-golden-olive/80 text-white"
        >
          Complete
        </Button>
      );
    case "confirm":
      return (
        <Button size="sm" className="bg-olive hover:bg-olive/80 text-white">
          Confirm
        </Button>
      );
    default:
      return (
        <Button size="sm" className="bg-olive hover:bg-olive/80 text-white">
          Confirm
        </Button>
      );
  }
};

const getTagVariant = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "haircut":
      return "default";
    case "confirm":
      return "success";
    case "pending":
      return "secondary";
    case "cancelled":
      return "warning";
    default:
      return "indigo";
  }
};

export function BookingAddDialog({
  isOpen,
  onClose,
  customer = null,
}: {
  onClose: () => void;
  isOpen: boolean;
  customer?: null | Customer;
  // onSave: (bookingData: any) => void;
}) {
  const [formData, setFormData] = useState({
    customerName: customer?.name ?? "",
    phone: customer?.phone ?? "",
    service: "",
    date: "",
    time: "",
    staffMember: "",
    duration: "10",
    price: "$85",
    customerType: "",
    lastVisit: "",
    status: customer?.status ?? "",
    customerProblem: "Allergies",
    note: "",
    equipmentRequired: "Hair Dryer, Styling Chair, Shampoo Bowl",
    repeatAppointment: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <h1 className="text-lg font-semibold text-gray-900">
          Create New Booking
        </h1>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Customer Name and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Customer Name
              </Label>
              <Input
                placeholder="Enter customer name..."
                value={formData.customerName}
                onChange={(e) =>
                  handleInputChange("customerName", e.target.value)
                }
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Phone
              </Label>
              <Input
                placeholder="Enter customer phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Service, Date, and Time */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Service
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Hair Color, Consultation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hair-color-consultation">
                    Hair Color, Consultation
                  </SelectItem>
                  <SelectItem value="haircut">Haircut</SelectItem>
                  <SelectItem value="styling">Styling</SelectItem>
                  <SelectItem value="treatment">Treatment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Date
              </Label>
              <div className="relative">
                <Input
                  type="date"
                  placeholder="mm/dd/yy"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Time
              </Label>
              <div className="relative">
                <Input
                  type="time"
                  placeholder="--:--"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="w-full pr-10"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Staff Member, Duration, and Price */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Staff Member
              </Label>
              <Select
                value={formData.staffMember}
                onValueChange={(value) =>
                  handleInputChange("staffMember", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Staff" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-smith">John Smith</SelectItem>
                  <SelectItem value="lisa-taylor">Lisa Taylor</SelectItem>
                  <SelectItem value="sarah-wilson">Sarah Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Duration (minutes)
              </Label>
              <Input
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Price
              </Label>
              <Input
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Customer Type, Last Visit, and Status */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Customer type
              </Label>
              <Select
                value={formData.customerType}
                onValueChange={(value) =>
                  handleInputChange("customerType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Returning Customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="returning">Returning Customer</SelectItem>
                  <SelectItem value="new">New Customer</SelectItem>
                  <SelectItem value="vip">VIP Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Last visit
              </Label>
              <div className="relative">
                <Input
                  type="date"
                  placeholder="mm/dd/yy"
                  value={formData.lastVisit}
                  onChange={(e) =>
                    handleInputChange("lastVisit", e.target.value)
                  }
                  className="w-full pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Status
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleInputChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Confirm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="confirm">Confirm</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Customer Problem */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Customer Problem
            </Label>
            <Input
              value={formData.customerProblem}
              onChange={(e) =>
                handleInputChange("customerProblem", e.target.value)
              }
              className="w-full"
            />
          </div>

          {/* Note */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Note
            </Label>
            <Textarea
              placeholder="Example"
              value={formData.note}
              onChange={(e) => handleInputChange("note", e.target.value)}
              className="w-full min-h-[100px] resize-none"
            />
          </div>

          {/* Equipment Required */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Equipment required
            </Label>
            <Input
              value={formData.equipmentRequired}
              onChange={(e) =>
                handleInputChange("equipmentRequired", e.target.value)
              }
              className="w-full"
            />
          </div>

          {/* Repeat Appointment */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-3">
              <Label className="text-sm font-medium text-gray-900">
                Repeat Appointment
              </Label>
              <Switch
                checked={formData.repeatAppointment}
                onCheckedChange={(checked) =>
                  handleInputChange("repeatAppointment", checked)
                }
                className="data-[state=checked]:bg-black"
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              By enabling this option, your scheduled appointment will
              automatically recur at a specified time (e.g. every week or every
              month), this eliminates the need to rebook it again and again.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6 bg-transparent"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-black hover:bg-gray-800 text-white px-6"
          >
            Create Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Bookings() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [showAddBooking, setShowAddBooking] = useState(false);

  return (
    <section className="w-full pb-8 bg-[#F5F5F5]">
      {/* dashboard header */}
      <DashboardHeader />

      <div className="flex justify-between gap-1 flex-1 px-6 py-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-primary font-semibold">
            Bookings Management
          </h3>
          <p className="text-sm text-foreground">
            Manage all your appointments and bookings.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button onClick={() => setShowAddBooking(true)}>
            New Booking <Plus className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between gap-4 px-6 py-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search businesses..."
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
            <SelectValue placeholder="Select bookings" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Bookings</SelectItem>
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
              Bookings All
            </h1>
          </div>

          {/* Bookings List */}
          <div className="space-y-3">
            {bookings.map((booking) => (
              <Card
                key={booking.id}
                className="shadow-sm border border-gray-200 bg-white"
              >
                <CardContent className="p-4">
                  <div className="w-full h-full flex items-start gap-4">
                    {/* Time Section */}
                    <div className="flex flex-col items-center min-w-[80px] h-full">
                      <div className="text-sm font-medium text-gray-900">
                        {booking.time}
                      </div>
                      <div className="text-xs text-gray-500">
                        {booking.date}
                      </div>
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 border-primary-gray/20 border-l px-5">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-gray-900 text-sm">
                          {booking.customerName}
                        </h3>
                        <div className="flex gap-1">
                          {booking.tags.map((tag, index) => (
                            <Badge key={index} variant={getTagVariant(tag)}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-1">
                        {booking.service}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        {booking.phone}
                      </div>
                      <div className="text-sm text-gray-600">
                        {booking.duration}
                      </div>

                      {booking.specialNote && (
                        <div className="mt-3 text-xs text-orange-600 leading-relaxed">
                          {booking.specialNote}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      {getActionButton(booking.actionType)}
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowBookingDetails(true);
                        }}
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

      <BookingDetailsModal
        booking={selectedBooking}
        isOpen={showBookingDetails}
        onClose={() => {
          setShowBookingDetails(false);
          setSelectedBooking(null);
        }}
      />

      <BookingAddDialog
        isOpen={showAddBooking}
        onClose={() => setShowAddBooking(false)}
      />
    </section>
  );
}
