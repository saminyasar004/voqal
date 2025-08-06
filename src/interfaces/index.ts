import { LucideProps } from "lucide-react";

export interface DashboardItem {
    id: number;
    title: string;
    value: number | string;
    suffix?: string;
    icon?:
    | string
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    iconType: "image" | "icon";
}

export interface BookingItemProps {
    time: string;
    date: string;
    client: string;
    type: string;
    phone: string;
    duration: string;
    price: number;
    status: "Manual" | "AI Call";
    confirmed: boolean;
}

export interface SocialLinksProps {
    img: string;
    url: string;
}

export interface NavItemProps {
    name: string;
    link: string;
    type: "route" | "hash";
}

export interface BusinessDataProps {
    date: string;
    client: string;
    type: string;
    phone: string;
    duration: string;
    price: number;
    status: string;
    confirmed: boolean;
}

export interface Booking {
    id: number;
    time: string;
    date: string;
    customerName: string;
    service: string;
    serviceProvider: string;
    phone: string;
    duration: string;
    status: "confirmed" | "pending" | "completed" | "cancelled";
    tags: string[];
    specialNote?: string;
    actionType: "complete" | "confirm";
}

export interface Notification {
    id: number;
    type: "booked" | "completed" | "cancelled";
    title: string;
    description: string;
    customer: string;
    service: string;
    staff: string;
    time: string;
    price: string;
    isRead: boolean;
    badge: string;
    badgeVariant: "default" | "secondary" | "destructive" | "outline";
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    status: "active" | "inactive";
    avatar: string;
    email: string;
    phone: string;
    address: string;
    permissionLevel: string;
}

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


export interface PricingPlan {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
}
