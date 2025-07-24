import AIBlackImg from "@/assets/images/ai-black.svg";
import AIWhiteImg from "@/assets/images/ai-white.svg";
import Avatar from "@/assets/images/avatar.jpg";
import CalendarDaysBlackImg from "@/assets/images/calendar-days-black.svg";
import CalendarDaysWhiteImg from "@/assets/images/calendar-days-white.svg";
import CheckSuccessImg from "@/assets/images/check-success.svg";
import CheckImg from "@/assets/images/check.svg";
import CirclePlusImg from "@/assets/images/circle-plus.svg";
import GrowthImg from "@/assets/images/growth.svg";
import SubscriptionsImg from "@/assets/images/subscriptions.svg";
import TeamsImg from "@/assets/images/teams.svg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { BookingItemProps, DashboardItem } from "@/interfaces";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { useState } from "react";
import BookingCard from "./bookings/booking-card";
import { Link } from "react-router-dom";
import { BookingAddDialog } from "./bookings";

const dashboardData: DashboardItem[] = [
	{
		id: 1,
		title: "Appointments",
		value: 14,
		suffix: "Today",
		icon: CalendarDaysWhiteImg,
	},
	{
		id: 2,
		title: "Completed",
		value: 89,
		suffix: "Today",
		icon: CheckImg,
	},
	{
		id: 3,
		title: "Revenue",
		value: "$12,450",
		suffix: "Today",
		icon: GrowthImg,
	},
];

const bookingData: BookingItemProps[] = [
	{
		time: "09:00 AM",
		date: "02.10.2024",
		client: "David Brown",
		type: "Haircut & Color with John Smith",
		phone: "+1 (555) 123-4567",
		duration: "90 min",
		price: 1205,
		status: "AI Call",
		confirmed: true,
	},
	{
		time: "09:00 AM",
		date: "02.10.2024",
		client: "Mike Chen",
		type: "Haircut & Color with John Smith",
		phone: "+1 (555) 123-4567",
		duration: "90 min",
		price: 1205,
		status: "Manual",
		confirmed: false,
	},
	{
		time: "09:00 AM",
		date: "02.10.2024",
		client: "Mike Chen",
		type: "Haircut & Color with John Smith",
		phone: "+1 (555) 123-4567",
		duration: "90 min",
		price: 1205,
		status: "Manual",
		confirmed: false,
	},
];

export default function Dashboard() {
	const [filteredTime, setFilteredTime] = useState<
		"today" | "this-week" | "this-month"
	>("today");
	const [isAIActive, setIsAIActive] = useState<boolean>(false);

	const [showBookingDetails, setShowBookingDetails] = useState(false);
	const [showAddBooking, setShowAddBooking] = useState(false);

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Dashboard Overview
					</h3>
					<p className="text-sm text-foreground">
						Welcome back! Here's what's happening with your business
						today.
					</p>
				</div>
				<div className="flex items-center">
					<Select
						value={filteredTime}
						onValueChange={(e) =>
							setFilteredTime((e as any).target.value)
						}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="today">Today</SelectItem>
								<SelectItem value="this-week">
									This Week
								</SelectItem>
								<SelectItem value="this-month">
									This Month
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="w-full grid grid-cols-4 gap-5 px-5 py-8">
				{dashboardData.map((data, index) => (
					<DashboardDataCard key={index} data={data} />
				))}
				<div className="w-full bg-white border border-primary/10 rounded-lg flex flex-col gap-3 p-5">
					<div className="w-full flex items-start justify-between">
						<div className="flex flex-col gap-1">
							<h3 className="">AI Calls Today</h3>

							<div className="flex gap-3 items-center py-5">
								<div
									className={cn(
										"w-4 h-4 rounded-full",
										isAIActive ? "bg-success" : "bg-warning"
									)}
								></div>
								<Label
									htmlFor="ai-status"
									className="cursor-pointer text-3xl font-medium"
								>
									Active
								</Label>
							</div>
							<Switch
								checked={isAIActive}
								onCheckedChange={() =>
									setIsAIActive(!isAIActive)
								}
								id="ai-status"
							/>
						</div>

						<div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg p-1 bg-primary text-primary-foreground">
							<img
								src={AIWhiteImg}
								alt="icon"
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full px-5 grid grid-cols-2 gap-8">
				<div className="w-full border rounded-lg bg-white border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<div className="w-full flex items-center justify-between">
							<h3 className="text-primary font-semibold text-2xl">
								Today's Bookings
							</h3>

							<Link to={"/user/bookings"}>
								<Button variant="transparent" size="sm">
									View All
								</Button>
							</Link>
						</div>

						{bookingData.map((booking, index) => (
							<BookingCard key={index} data={booking} />
						))}
					</div>
				</div>

				<div className="w-full bg-white border rounded-lg border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Top Performing Staff - Today
						</h3>

						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="bg-white p-4 px-6 rounded-md w-full flex items-center justify-between gap-1 border border-primary-gray/10 hover:bg-background transition-all duration-300"
							>
								<div className="flex-1 flex gap-3">
									<div className="w-14 h-14 flex items-center justify-center overflow-hidden">
										<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-primary">
											<img
												src={Avatar}
												alt="avatar"
												className="max-w-full rounded-full"
											/>
										</div>
									</div>
									<div className="flex flex-col items-start justify-center">
										<h5 className="text-xl">Sarah Chen</h5>
										<span className="text-primary-gray text-sm">
											8 bookings completed
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-1 items-center justify-between">
									<h5 className="text-xl font-medium">
										$500
									</h5>
									<span className="text-sm">Revenue</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="w-full bg-white border rounded-lg border-primary/10 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Recent Activity Feed
						</h3>

						<div className="bg-white p-4 px-6 rounded-md w-full flex items-start justify-between gap-1 border border-primary-gray/10 hover:bg-background transition-all duration-300">
							<div className="flex-1 flex gap-3">
								<div className="w-12 h-12 flex items-center justify-center overflow-hidden">
									<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-primary bg-primary text-primary-foreground p-2">
										{/* <Bot size={26} /> */}
										<img
											src={AIWhiteImg}
											alt="AI"
											className="w-full h-full"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start justify-center">
									<h5 className="text-xl font-medium">
										AI Booking
									</h5>
									<span className="text-primary-gray text-sm">
										8 bookings completed
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1 items-center">
								<span className="text-sm text-primary-gray">
									5 minutes ago
								</span>
							</div>
						</div>

						<div className="bg-secondary p-4 px-6 rounded-md w-full flex items-start justify-between gap-1 border border-primary-gray/10 hover:bg-background transition-all duration-300">
							<div className="flex-1 flex gap-3">
								<div className="w-12 h-12 flex items-center justify-center overflow-hidden">
									<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-[#D2F2DD] p-2">
										{/* <CircleCheckBig size={26} /> */}
										<img
											src={CheckSuccessImg}
											alt="check"
											className="w-full h-full"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start justify-center">
									<h5 className="text-xl font-medium">
										Appointment Completed
									</h5>
									<span className="text-primary-gray text-sm">
										Mike Chen - Beard Trim with Sarah Wilson
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1 items-center">
								<span className="text-sm text-primary-gray">
									15 minutes ago
								</span>
							</div>
						</div>

						<div className="bg-secondary p-4 px-6 rounded-md w-full flex items-start justify-between gap-1 border border-primary-gray/10 hover:bg-background transition-all duration-300">
							<div className="flex-1 flex gap-3">
								<div className="w-12 h-12 flex items-center justify-center overflow-hidden">
									<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-[#FFEDD5] text-[#EC5D14]">
										<Phone size={26} />
									</div>
								</div>
								<div className="flex flex-col items-start justify-center">
									<h5 className="text-xl font-medium">
										Call Escalated to Human
									</h5>
									<span className="text-primary-gray text-sm">
										Customer inquiry about special
										treatments
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1 items-center">
								<span className="text-sm text-primary-gray">
									15 minutes ago
								</span>
							</div>
						</div>

						<div className="bg-secondary p-4 px-6 rounded-md w-full flex items-start justify-between gap-1 border border-primary-gray/10 hover:bg-background transition-all duration-300">
							<div className="flex-1 flex gap-3">
								<div className="w-12 h-12 flex items-center justify-center overflow-hidden">
									<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-[#FFEDD5] text-[#EC5D14]">
										<Phone size={26} />
									</div>
								</div>
								<div className="flex flex-col items-start justify-center">
									<h5 className="text-xl font-medium">
										Manual Booking Added
									</h5>
									<span className="text-primary-gray text-sm">
										Customer inquiry about special
										treatments
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1 items-center">
								<span className="text-sm text-primary-gray">
									15 minutes ago
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-white border rounded-lg border-primary/10 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Quick Actions
						</h3>

						<div className="grid grid-cols-3 gap-4">
							<div
								onClick={() => setShowAddBooking(true)}
								className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300"
							>
								<img
									src={CirclePlusImg}
									alt="circle-plus"
									className="w-12 h-12"
								/>

								<h5 className="font-semibold">New Booking</h5>
							</div>

							<div className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300">
								<img
									src={CalendarDaysBlackImg}
									alt="calendar"
									className="w-12 h-12"
								/>

								<h5 className="font-semibold">Open Calendar</h5>
							</div>

							<div className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300">
								<img
									src={AIBlackImg}
									alt="ai"
									className="w-12 h-12"
								/>

								<h5 className="font-semibold">AI Settings</h5>
							</div>

							<div className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300">
								<img
									src={TeamsImg}
									alt="teams"
									className="w-12 h-12"
								/>

								<h5 className="font-semibold">Manage Staff</h5>
							</div>

							<Link to={"/user/call-logs"}>
								<div className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300">
									<Phone size={40} />

									<h5 className="font-semibold">Call Logs</h5>
								</div>
							</Link>

							<div className="w-full h-full rounded-lg border border-primary-gray/10 flex items-center gap-5 flex-col p-6 cursor-pointer hover:bg-background transition-all duration-300">
								<img
									src={SubscriptionsImg}
									alt="subscriptions"
									className="w-12 h-12"
								/>

								<h5 className="font-semibold">New Booking</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showAddBooking && (
				<BookingAddDialog onClose={() => setShowAddBooking(false)} />
			)}
		</section>
	);
}

const DashboardDataCard = ({ data }: { data: DashboardItem }) => {
	return (
		<div className="w-full bg-white border border-primary/10 rounded-lg flex flex-col gap-3 p-5">
			<div className="w-full flex items-start justify-between">
				<div className="flex flex-col gap-1">
					<h3 className="">{data.title}</h3>
					<span className="text-primary font-semibold text-4xl">
						{data.value}
					</span>
					<span className="text-sm font-medium">{data.suffix}</span>
				</div>

				<div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg p-1 bg-primary text-primary-foreground">
					<img src={data.icon} alt="icon" className="max-w-full" />
				</div>
			</div>
		</div>
	);
};
