import {
	default as LogoBlack,
	default as LogoIconImg,
} from "@/assets/images/voqal-white.svg";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
	Blocks,
	BriefcaseBusiness,
	CalendarCheck,
	ChevronsLeftRight,
	HandCoins,
	MousePointerBan,
	Network,
	Phone,
	Settings,
	UserCog,
	Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserDashboardLayout({ children }) {
	const location = useLocation();

	const links = [
		{
			label: "Dashboard",
			href: "/user/dashboard",
			icon: <Blocks size={20} className="shrink-0" />,
		},
		{
			label: "Bookings",
			href: "/user/bookings",
			icon: <CalendarCheck size={20} className="shrink-0" />,
		},
		{
			label: "Call Logs",
			href: "/user/call-logs",
			icon: <Phone size={20} className="shrink-0" />,
		},
		{
			label: "Customers",
			href: "/user/customers",
			icon: <Users size={20} className="shrink-0" />,
		},
		{
			label: "Staff",
			href: "/user/staff",
			icon: <UserCog size={20} className="shrink-0" />,
		},
		{
			label: "Team Management",
			href: "/user/team-management",
			icon: <Network size={20} className="shrink-0" />,
		},
		{
			label: "Business Profile",
			href: "/user/business-profile",
			icon: <BriefcaseBusiness size={20} className="shrink-0" />,
		},
		{
			label: "Billing",
			href: "/user/billing",
			icon: <HandCoins size={20} className="shrink-0" />,
		},
		{
			label: "Blacklist",
			href: "/user/blacklist",
			icon: <MousePointerBan size={20} className="shrink-0" />,
		},
		// {
		// 	label: "Subscriptions",
		// 	href: "/user/subscriptions",
		// 	icon: <Tags size={20} className="shrink-0" />,
		// },
		{
			label: "Settings",
			href: "/user/settings",
			icon: <Settings size={20} className="shrink-0" />,
		},
	];
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-screen flex flex-1 rounded-md bg-background relative">
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10 border-r border-primary bg-primary text-primary-foreground">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2 pt-10">
							{links.map((link, idx) => (
								<SidebarLink
									key={idx}
									link={link}
									isActive={location.pathname === link.href}
								/>
							))}
						</div>
					</div>
				</SidebarBody>
				<span
					onClick={() => setOpen(!open)}
					className={cn(
						"bg-white text-primary rounded-md w-8 h-8 flex items-center justify-center absolute cursor-pointer z-30 transition-all duration-300",
						open
							? "top-[5.5rem] left-0 translate-x-[14.5rem]"
							: "top-[5.5rem] left-0 translate-x-[2.6rem]"
						// open
						// 	? "top-[5.5rem] left-[14.5rem]"
						// 	: "top-[5.5rem] left-[2.7rem]"
					)}
				>
					<ChevronsLeftRight />
				</span>
			</Sidebar>
			<div className="w-full min-h-full overflow-y-scroll">
				{children}
			</div>
		</div>
	);
}

export const Logo = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
			<img
				src={LogoBlack}
				alt="Voqal"
				className="max-w-full h-20 transition-all duration-300"
			/>
			{/* <motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium whitespace-pre text-primary"
			>
				Voqal
			</motion.span> */}
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
			<img
				src={LogoIconImg}
				alt="Voqal"
				className="max-w-6 h-10 transition-all duration-300"
			/>
		</Link>
	);
};
