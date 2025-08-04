import { NotificationCenter } from "@/components/common/notification-center";
import { Notification } from "@/interfaces";
import { useState } from "react";

export function Notifications() {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 1,
            type: "booked",
            title: "New Appointment Booked",
            description:
                "Sarah Johnson booked Women's Cut & Style for tomorrow at 2:00 PM with Isabella Rodriguez",
            customer: "Sarah Johnson",
            service: "Women's Cut & Style",
            staff: "Isabella Rodriguez",
            time: "Tomorrow, 2:00 PM",
            price: "$95",
            isRead: false,
            badge: "2 Min",
            badgeVariant: "default",
        },
        {
            id: 2,
            type: "completed",
            title: "Appointment completed",
            description:
                "Sarah Johnson booked Women's Cut & Style for tomorrow at 2:00 PM with Isabella Rodriguez",
            customer: "Sarah Johnson",
            service: "Women's Cut & Style",
            staff: "Isabella Rodriguez",
            time: "Tomorrow, 2:00 PM",
            price: "$95",
            isRead: false,
            badge: "Completed",
            badgeVariant: "secondary",
        },
        {
            id: 3,
            type: "cancelled",
            title: "Appointment Cancelled",
            description: "Mike Chen cancelled his appointment for today at 3:30 PM",
            customer: "Sarah Johnson",
            service: "Women's Cut & Style",
            staff: "Isabella Rodriguez",
            time: "Tomorrow, 2:00 PM",
            price: "$95",
            isRead: false,
            badge: "Cancelled",
            badgeVariant: "destructive",
        },
        {
            id: 4,
            type: "booked",
            title: "New Appointment Booked",
            description:
                "Sarah Johnson booked Women's Cut & Style for tomorrow at 2:00 PM with Isabella Rodriguez",
            customer: "Sarah Johnson",
            service: "Women's Cut & Style",
            staff: "Isabella Rodriguez",
            time: "Tomorrow, 2:00 PM",
            price: "$95",
            isRead: true,
            badge: "5 Min",
            badgeVariant: "default",
        },
        {
            id: 5,
            type: "booked",
            title: "New Appointment Booked",
            description:
                "Sarah Johnson booked Women's Cut & Style for tomorrow at 2:00 PM with Isabella Rodriguez",
            customer: "Sarah Johnson",
            service: "Women's Cut & Style",
            staff: "Isabella Rodriguez",
            time: "Tomorrow, 2:00 PM",
            price: "$95",
            isRead: true,
            badge: "8 Min",
            badgeVariant: "default",
        },
    ]);

    return (
        <NotificationCenter
            notifications={notifications}
            setNotifications={setNotifications}
        />
    );
}
