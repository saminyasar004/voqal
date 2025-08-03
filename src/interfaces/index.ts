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
