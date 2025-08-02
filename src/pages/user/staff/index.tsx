import AvatarImg from "@/assets/images/avatar.jpg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
    ArrowLeft,
    BookmarkCheck,
    BotMessageSquare,
    Brain,
    CalendarCheck2,
    History,
    LucideProps,
    NotebookPen,
    Pause,
    Play,
    Search,
    SkipBack,
    SkipForward,
    Users,
    Volume2,
} from "lucide-react";
import { useState } from "react";
import StaffProfileModal from "./staff-profile-modal";

export interface StaffMember {
    id: number;
    name: string;
    role: string;
    status: "available" | "busy" | "on-leave";
    avatar: string;
    email: string;
    phone: string;
    license: string;
    experience: string;
    serviceFee: string;
    joinDate: string;
    qualifications: string;
    totalAppointments: number;
    revenueGenerated: string;
    specializations: string[];
    availableDays: string[];
    breaks: string[];
    services: Array<{
        name: string;
        description: string;
        duration: string;
        price: string;
    }>;
    schedule: Array<{
        day: string;
        hours: string;
        breaks: string[];
    }>;
}

interface StaffDataProps {
    title: string;
    value: number;
    subtitle: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
}

const staffData: StaffDataProps[] = [
    {
        title: "Total Staff",
        value: 5,
        subtitle: "Active members",
        icon: Users,
    },
    {
        title: "Available Now",
        value: 20,
        subtitle: "Ready for appointments",
        icon: BookmarkCheck,
    },
    {
        title: "Today's Appointments",
        value: 22,
        subtitle: "Total scheduled",
        icon: CalendarCheck2,
    },
];

export default function Staff() {
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
    const [showStaffProfile, setShowStaffProfile] = useState(false);

    const [staffMembers] = useState<StaffMember[]>([
        {
            id: 1,
            name: "Lisa Taylor",
            role: "Senior Stylist",
            status: "available",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "lisa.taylor@salon.co.nz",
            phone: "+64 21 555 0123",
            license: "SP67890",
            experience: "5 Years",
            serviceFee: "$150",
            joinDate: "2-10-2025",
            qualifications: "Active - Medical Council of New Zealand",
            totalAppointments: 10,
            revenueGenerated: "$1500",
            specializations: ["Hair Color", "Styling", "Treatments"],
            availableDays: ["Tue", "Wed", "Thu", "Fri", "Sat"],
            breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
            services: [
                {
                    name: "General Consultation",
                    description: "Standard medical consultation",
                    duration: "30 min",
                    price: "$30",
                },
                {
                    name: "Extended Consultation",
                    description: "Comprehensive health assessment",
                    duration: "45 minutes",
                    price: "$120",
                },
            ],
            schedule: [
                {
                    day: "Monday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Tuesday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Wednesday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Thursday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Friday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Saturday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                { day: "Sunday", hours: "off", breaks: [] },
            ],
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            role: "Senior Stylist",
            status: "available",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "lisa.taylor@salon.co.nz",
            phone: "+64 21 555 0123",
            license: "SP67890",
            experience: "5 Years",
            serviceFee: "$150",
            joinDate: "2-10-2025",
            qualifications: "Active - Medical Council of New Zealand",
            totalAppointments: 10,
            revenueGenerated: "$1020",
            specializations: ["Family Medicine", "Preventive Care"],
            availableDays: ["Tue", "Wed", "Thu", "Fri", "Sat"],
            breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
            services: [
                {
                    name: "General Consultation",
                    description: "Standard medical consultation",
                    duration: "30 min",
                    price: "$30",
                },
                {
                    name: "Extended Consultation",
                    description: "Comprehensive health assessment",
                    duration: "45 minutes",
                    price: "$120",
                },
            ],
            schedule: [
                {
                    day: "Monday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Tuesday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Wednesday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Thursday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Friday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                {
                    day: "Saturday",
                    hours: "08:00 - 17:00",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:00-15:15"],
                },
                { day: "Sunday", hours: "off", breaks: [] },
            ],
        },
        {
            id: 3,
            name: "Mike Chen",
            role: "Hair Specialist",
            status: "busy",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "mike.chen@salon.co.nz",
            phone: "+64 21 555 0124",
            license: "SP67891",
            experience: "3 Years",
            serviceFee: "$120",
            joinDate: "15-03-2023",
            qualifications: "Certified Hair Specialist",
            totalAppointments: 8,
            revenueGenerated: "$960",
            specializations: ["Hair Cutting", "Beard Styling"],
            availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            breaks: ["Lunch Break: 12:00-13:00"],
            services: [
                {
                    name: "Hair Cut",
                    description: "Professional hair cutting service",
                    duration: "45 min",
                    price: "$40",
                },
                {
                    name: "Beard Styling",
                    description: "Complete beard grooming",
                    duration: "30 minutes",
                    price: "$25",
                },
            ],
            schedule: [
                {
                    day: "Monday",
                    hours: "09:00 - 18:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                {
                    day: "Tuesday",
                    hours: "09:00 - 18:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                {
                    day: "Wednesday",
                    hours: "09:00 - 18:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                {
                    day: "Thursday",
                    hours: "09:00 - 18:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                {
                    day: "Friday",
                    hours: "09:00 - 18:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                { day: "Saturday", hours: "off", breaks: [] },
                { day: "Sunday", hours: "off", breaks: [] },
            ],
        },
        {
            id: 4,
            name: "Emma Wilson",
            role: "Massage Therapist",
            status: "available",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "emma.wilson@salon.co.nz",
            phone: "+64 21 555 0125",
            license: "MT12345",
            experience: "7 Years",
            serviceFee: "$180",
            joinDate: "10-01-2022",
            qualifications: "Licensed Massage Therapist",
            totalAppointments: 12,
            revenueGenerated: "$2160",
            specializations: ["Deep Tissue", "Relaxation", "Sports Massage"],
            availableDays: ["Mon", "Wed", "Thu", "Fri", "Sat"],
            breaks: ["Lunch Break: 13:00-14:00", "Afternoon Break: 16:00-16:15"],
            services: [
                {
                    name: "Deep Tissue Massage",
                    description: "Therapeutic deep tissue massage",
                    duration: "60 min",
                    price: "$80",
                },
                {
                    name: "Relaxation Massage",
                    description: "Full body relaxation massage",
                    duration: "90 minutes",
                    price: "$120",
                },
            ],
            schedule: [
                {
                    day: "Monday",
                    hours: "10:00 - 19:00",
                    breaks: ["Lunch Break: 13:00-14:00", "Afternoon Break: 16:00-16:15"],
                },
                { day: "Tuesday", hours: "off", breaks: [] },
                {
                    day: "Wednesday",
                    hours: "10:00 - 19:00",
                    breaks: ["Lunch Break: 13:00-14:00", "Afternoon Break: 16:00-16:15"],
                },
                {
                    day: "Thursday",
                    hours: "10:00 - 19:00",
                    breaks: ["Lunch Break: 13:00-14:00", "Afternoon Break: 16:00-16:15"],
                },
                {
                    day: "Friday",
                    hours: "10:00 - 19:00",
                    breaks: ["Lunch Break: 13:00-14:00", "Afternoon Break: 16:00-16:15"],
                },
                {
                    day: "Saturday",
                    hours: "09:00 - 17:00",
                    breaks: ["Lunch Break: 13:00-14:00"],
                },
                { day: "Sunday", hours: "off", breaks: [] },
            ],
        },
        {
            id: 5,
            name: "James Rodriguez",
            role: "Nail Technician",
            status: "on-leave",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "james.rodriguez@salon.co.nz",
            phone: "+64 21 555 0126",
            license: "NT98765",
            experience: "4 Years",
            serviceFee: "$90",
            joinDate: "20-06-2023",
            qualifications: "Certified Nail Technician",
            totalAppointments: 15,
            revenueGenerated: "$1350",
            specializations: ["Manicure", "Pedicure", "Nail Art"],
            availableDays: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            breaks: ["Lunch Break: 12:30-13:30"],
            services: [
                {
                    name: "Manicure",
                    description: "Complete hand and nail care",
                    duration: "45 min",
                    price: "$35",
                },
                {
                    name: "Pedicure",
                    description: "Complete foot and nail care",
                    duration: "60 minutes",
                    price: "$45",
                },
            ],
            schedule: [
                { day: "Monday", hours: "off", breaks: [] },
                {
                    day: "Tuesday",
                    hours: "09:00 - 17:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
                {
                    day: "Wednesday",
                    hours: "09:00 - 17:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
                {
                    day: "Thursday",
                    hours: "09:00 - 17:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
                {
                    day: "Friday",
                    hours: "09:00 - 17:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
                {
                    day: "Saturday",
                    hours: "10:00 - 18:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
                {
                    day: "Sunday",
                    hours: "10:00 - 16:00",
                    breaks: ["Lunch Break: 12:30-13:30"],
                },
            ],
        },
        {
            id: 6,
            name: "Sophie Anderson",
            role: "Esthetician",
            status: "busy",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "sophie.anderson@salon.co.nz",
            phone: "+64 21 555 0127",
            license: "ES54321",
            experience: "6 Years",
            serviceFee: "$200",
            joinDate: "05-09-2021",
            qualifications: "Licensed Esthetician & Skincare Specialist",
            totalAppointments: 9,
            revenueGenerated: "$1800",
            specializations: [
                "Facial Treatments",
                "Chemical Peels",
                "Microdermabrasion",
            ],
            availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat"],
            breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:30-15:45"],
            services: [
                {
                    name: "Classic Facial",
                    description: "Deep cleansing facial treatment",
                    duration: "60 min",
                    price: "$70",
                },
                {
                    name: "Chemical Peel",
                    description: "Professional chemical peel treatment",
                    duration: "75 minutes",
                    price: "$150",
                },
            ],
            schedule: [
                {
                    day: "Monday",
                    hours: "08:30 - 17:30",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:30-15:45"],
                },
                {
                    day: "Tuesday",
                    hours: "08:30 - 17:30",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:30-15:45"],
                },
                { day: "Wednesday", hours: "off", breaks: [] },
                {
                    day: "Thursday",
                    hours: "08:30 - 17:30",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:30-15:45"],
                },
                {
                    day: "Friday",
                    hours: "08:30 - 17:30",
                    breaks: ["Lunch Break: 12:00-13:00", "Afternoon Break: 15:30-15:45"],
                },
                {
                    day: "Saturday",
                    hours: "09:00 - 16:00",
                    breaks: ["Lunch Break: 12:00-13:00"],
                },
                { day: "Sunday", hours: "off", breaks: [] },
            ],
        },
    ]);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "available":
                return <Badge variant="success">Available</Badge>;
            case "busy":
                return <Badge variant="warning">Busy</Badge>;
            default:
                return <Badge variant="secondary">On Leave</Badge>;
        }
    };

    const handleViewDetails = (staff: StaffMember) => {
        setSelectedStaff(staff);
        setShowStaffProfile(true);
    };

    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            {/* dashboard header */}
            <DashboardHeader />

            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">
                        Staff Management
                    </h3>
                    <p className="text-sm text-foreground">
                        Manage service providers and their schedules
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-8 px-6">
                {staffData.map((data, index) => (
                    <div
                        key={index}
                        className="w-full flex items-start justify-between gap-7 border rounded-lg p-4 bg-white"
                    >
                        <div className="flex flex-col gap-1">
                            <h4>{data.title}</h4>
                            <h3 className="text-4xl font-semibold">{data.value}</h3>
                            <h6>{data.subtitle}</h6>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center p-3">
                            <data.icon className="w-full h-full" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between gap-4 px-6 py-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        type="text"
                        placeholder="Search staff by name or phone..."
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
                        <SelectValue placeholder="Select staff" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All Status</SelectItem>
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
                            Total Staff (6)
                        </h1>
                    </div>

                    {/* staff members List */}
                    <div className="space-y-4">
                        {staffMembers.map((staff) => (
                            <Card
                                key={staff.id}
                                className="shadow-sm border border-gray-200 bg-white"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-6">
                                        {/* Staff Information */}
                                        <div className="flex-1">
                                            <div className="flex items-start gap-3">
                                                <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                                                    <img
                                                        src={AvatarImg}
                                                        alt="avatar"
                                                        className="w-full h-full"
                                                    />
                                                </div>

                                                <div className="w-full">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <h3 className="font-medium text-gray-900 text-lg">
                                                            {staff.name}
                                                        </h3>
                                                        {getStatusBadge(staff.status)}
                                                    </div>

                                                    <div className="text-sm text-gray-600 mb-3">
                                                        {staff.role}
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm mb-4">
                                                        <div>
                                                            <span className="text-gray-600">
                                                                Phone number:{" "}
                                                            </span>
                                                            <span className="text-gray-900">
                                                                {staff.phone}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">
                                                                Service Fee:{" "}
                                                            </span>
                                                            <span className="text-gray-900">
                                                                {staff.serviceFee}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">
                                                                License Number:{" "}
                                                            </span>
                                                            <span className="text-gray-900">
                                                                {staff.license}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">Email: </span>
                                                            <span className="text-gray-900">
                                                                {staff.email}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">
                                                                Today's Appointments:{" "}
                                                            </span>
                                                            <span className="text-gray-900">
                                                                {staff.totalAppointments}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">
                                                                Experience:{" "}
                                                            </span>
                                                            <span className="text-gray-900">
                                                                {staff.experience}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex items-center gap-20 py-4 border-t border-b border-primary-gray/20 mb-5">
                                                        {/* Specializations */}
                                                        <div className="mb-3">
                                                            <span className="text-sm text-gray-600">
                                                                Specialization:{" "}
                                                            </span>
                                                            <div className="inline-flex gap-2 ml-2">
                                                                {staff.specializations.map((spec, index) => (
                                                                    <Badge
                                                                        key={index}
                                                                        // className="bg-black text-white text-xs px-2 py-1 rounded"
                                                                        variant="default-outlined"
                                                                    >
                                                                        {spec}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Available Days */}
                                                        <div className="mb-3">
                                                            <span className="text-sm text-gray-600">
                                                                Available Days:{" "}
                                                            </span>
                                                            <div className="inline-flex gap-2 ml-2">
                                                                {staff.availableDays.map((day, index) => (
                                                                    <Badge
                                                                        key={index}
                                                                    // className="bg-black text-white text-xs px-2 py-1 rounded"
                                                                    >
                                                                        {day}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Breaks */}
                                                    <div>
                                                        <span className="text-sm text-gray-600">
                                                            Breaks:{" "}
                                                        </span>
                                                        <div className="inline-flex gap-2 ml-2">
                                                            {staff.breaks.map((breakTime, index) => (
                                                                <Badge
                                                                    key={index}
                                                                    // className="bg-orange-100 text-orange-800 border-orange-200 text-xs px-2 py-1 rounded"
                                                                    variant="warning-outlined"
                                                                >
                                                                    {breakTime}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-2 min-w-[100px]">
                                            <Button variant="outline" size="sm">
                                                Edit Staff
                                            </Button>
                                            <Button
                                                size="sm"
                                                onClick={() => handleViewDetails(staff)}
                                            >
                                                View Details
                                            </Button>
                                            <Button size="sm" variant="warning">
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Staff Profile Modal */}
            {selectedStaff && (
                <StaffProfileModal
                    isOpen={showStaffProfile}
                    staff={selectedStaff}
                    onClose={() => {
                        setShowStaffProfile(false);
                        setSelectedStaff(null);
                    }}
                />
            )}
        </section>
    );
}
