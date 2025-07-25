import AvatarImg from "@/assets/images/avatar.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import BookingDetailsModal from "@/pages/user/calendar/booking-details-modal";
import { Input } from "@/components/ui/input";
import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { BookingAddDialog } from "../bookings";

interface StaffMember {
	id: number;
	name: string;
	role: string;
	status: "Available" | "Busy" | "Lunch Break" | "Off Day" | "Active";
}

export interface Appointment {
	id: number;
	staffName: string;
	service: string;
	customerName: string;
	time: string;
	price: string;
	date: string; // Changed to full date string
	timeSlot: string;
}

export default function Calendar() {
	const [selectedBooking, setSelectedBooking] = useState<Appointment | null>(
		null
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 16)); // June 16, 2025
	const [showAddBooking, setShowAddBooking] = useState(false);

	const staffMembers: StaffMember[] = [
		{
			id: 1,
			name: "Emma Wilson",
			role: "Senior Hair Stylist",
			status: "Active",
		},
		{
			id: 2,
			name: "Emma Wilson",
			role: "Hair Stylist",
			status: "Busy",
		},
		{
			id: 3,
			name: "Emma Wilson",
			role: "Senior Hair Stylist",
			status: "Lunch Break",
		},
		{
			id: 4,
			name: "Emma Wilson",
			role: "Beauty Therapist",
			status: "Off Day",
		},
		{
			id: 5,
			name: "Emma Wilson",
			role: "Massage Therapist",
			status: "Active",
		},
	];

	// Sample appointments with actual dates
	const appointments: Appointment[] = [
		{
			id: 1,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "14:00-15:00",
			price: "$95",
			date: "2025-06-16", // Monday
			timeSlot: "14:00",
		},
		{
			id: 2,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "15:00-16:00",
			price: "$95",
			date: "2025-06-18", // Wednesday
			timeSlot: "15:00",
		},
		{
			id: 3,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "17:00-18:00",
			price: "$95",
			date: "2025-06-20", // Friday
			timeSlot: "17:00",
		},
		{
			id: 4,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "18:00-19:00",
			price: "$95",
			date: "2025-06-16", // Monday
			timeSlot: "18:00",
		},
		{
			id: 5,
			staffName: "Emma Wilson",
			service: "Classic Facial",
			customerName: "Sarah Johnson",
			time: "13:00-14:00",
			price: "$95",
			date: "2025-06-22", // Sunday
			timeSlot: "13:00",
		},
		// Add appointments for other weeks
		{
			id: 6,
			staffName: "Emma Wilson",
			service: "Hair Cut & Style",
			customerName: "Mike Chen",
			time: "14:00-15:00",
			price: "$85",
			date: "2025-06-24", // Next week Tuesday
			timeSlot: "14:00",
		},
		{
			id: 7,
			staffName: "Emma Wilson",
			service: "Color Treatment",
			customerName: "Lisa Wang",
			time: "16:00-17:00",
			price: "$120",
			date: "2025-06-26", // Next week Thursday
			timeSlot: "16:00",
		},
	];

	const timeSlots = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

	// Get the start of the week (Monday)
	const getWeekStart = (date: Date) => {
		const d = new Date(date);
		const day = d.getDay();
		const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
		return new Date(d.setDate(diff));
	};

	// Get the current week dates
	const getWeekDates = () => {
		const weekStart = getWeekStart(currentDate);
		const dates = [];
		for (let i = 0; i < 7; i++) {
			const date = new Date(weekStart);
			date.setDate(weekStart.getDate() + i);
			dates.push(date);
		}
		return dates;
	};

	const weekDates = getWeekDates();
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	// Format date range for header
	const formatDateRange = () => {
		const start = weekDates[0];
		const end = weekDates[6];
		const startStr = `${start.getDate()} ${start.toLocaleDateString(
			"en-US",
			{ month: "long" }
		)}`;
		const endStr = `${end.getDate()} ${end.toLocaleDateString("en-US", {
			month: "long",
		})} ${end.getFullYear()}`;
		return `${startStr} - ${endStr}`;
	};

	// Navigation functions
	const goToPreviousWeek = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() - 7);
		setCurrentDate(newDate);
	};

	const goToNextWeek = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() + 7);
		setCurrentDate(newDate);
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	const handleViewBooking = (appointment: Appointment) => {
		setSelectedBooking(appointment);
		setIsModalOpen(true);
	};

	const getAppointmentForSlot = (dateStr: string, timeSlot: string) => {
		return appointments.find(
			(apt) => apt.date === dateStr && apt.timeSlot === timeSlot
		);
	};

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Calendar Management
					</h3>
					<p className="text-sm text-foreground">
						Manage appointments, staff schedules, and availability.
					</p>
				</div>
				<div className="flex items-center justify-center">
					<Button onClick={() => setShowAddBooking(true)}>
						New Booking <Plus className="h-4 w-4 text-white" />
					</Button>
				</div>
			</div>
			<div className="p-6">
				<div className="w-full">
					{/* Header */}
					<div className="p-3 border border-[#DCDCDC] bg-white rounded-lg">
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-4">
								<Button
									variant="outline"
									size="sm"
									onClick={goToPreviousWeek}
								>
									<ChevronLeft className="w-4 h-4" />
								</Button>
								<span className="text-lg font-medium">
									{formatDateRange()}
								</span>
								<Button
									variant="outline"
									size="sm"
									onClick={goToNextWeek}
								>
									<ChevronRight className="w-4 h-4" />
								</Button>
								<Button
									variant="outline"
									className="ml-4 bg-transparent"
									onClick={goToToday}
								>
									Today
								</Button>
							</div>
							<div className="flex gap-2">
								<Select defaultValue="week">
									<SelectTrigger className="w-32">
										<SelectValue placeholder="Week View" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="week">
											Week View
										</SelectItem>
										<SelectItem value="day">
											Day View
										</SelectItem>
										<SelectItem value="month">
											Month View
										</SelectItem>
									</SelectContent>
								</Select>
								<Select defaultValue="all">
									<SelectTrigger className="w-32">
										<SelectValue placeholder="All Staff" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
											All Staff
										</SelectItem>
										<SelectItem value="emma">
											Emma Wilson
										</SelectItem>
										<SelectItem value="sopia">
											Sopia Kim
										</SelectItem>
										<SelectItem value="olivia">
											Olivia Brown
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>

					<div className="p-6">
						<div className="w-full">
							{/* Header */}

							{/* Staff Overview */}
							<div className="mb-6">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-lg font-semibold">
										Staff Schedule Overview
									</h2>
									<Button variant="outline" size="sm">
										View All
									</Button>
								</div>
								<div className="grid grid-cols-5 gap-4 pb-2">
									{staffMembers.map((staff) => (
										<Card
											key={staff.id}
											className="w-full bg-white border border-[#DCDCDC]"
										>
											<CardContent className="p-5 space-y-2 text-center">
												<Avatar className="w-12 h-12 mx-auto mb-2">
													<AvatarImage
														src={AvatarImg}
													/>
													<AvatarFallback>
														EW
													</AvatarFallback>
												</Avatar>
												<Badge
													variant={
														[
															"Active",
															"Available",
														].includes(staff.status)
															? "success"
															: staff.status ===
															  "Busy"
															? "warning"
															: staff.status ===
															  "Lunch Break"
															? "secondary"
															: staff.status ===
															  "Off Day"
															? "indigo"
															: "default"
													}
												>
													{staff.status}
												</Badge>
												<h3 className="font-medium text-sm">
													{staff.name}
												</h3>
												<p className="text-xs text-gray-500">
													{staff.role}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>

							{/* Calendar Grid */}
							<div className="bg-white rounded-lg border border-[#DCDCDC]">
								<div className="grid grid-cols-8 border-b bg-[#EBEBEB] border-[#DCDCDC]">
									<div className="p-4 flex items-center justify-center font-medium text-center border-r border-[#DCDCDC]">
										Time
									</div>
									{days.map((day, index) => (
										<div
											key={day}
											className="p-4 text-center border-r border-[#DCDCDC] last:border-r-0"
										>
											<div className="font-medium">
												{day}
											</div>
											<div className="text-sm text-gray-500">
												{weekDates[index].getDate()}{" "}
												{weekDates[
													index
												].toLocaleDateString("en-US", {
													month: "short",
												})}
											</div>
										</div>
									))}
								</div>

								{timeSlots.map((timeSlot) => (
									<div
										key={timeSlot}
										className="grid grid-cols-8 border-b last:border-b-0 min-h-[80px] border-[#DCDCDC]"
									>
										<div className="p-4 flex items-center justify-center border-r font-medium text-sm bg-[#EBEBEB] border-[#DCDCDC]">
											{timeSlot}
										</div>
										{weekDates.map((date, index) => {
											const dateStr = date
												.toISOString()
												.split("T")[0]; // Format as YYYY-MM-DD
											const appointment =
												getAppointmentForSlot(
													dateStr,
													timeSlot
												);
											return (
												<div
													key={`${dateStr}-${timeSlot}`}
													className="border-r last:border-r-0 p-2 relative"
												>
													{appointment && (
														<div className="bg-black text-white rounded-lg p-2.5 text-sm">
															<div className="font-medium">
																{
																	appointment.staffName
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.service
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.customerName
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.time
																}
															</div>
															<div className="text-xs text-gray-300">
																{
																	appointment.price
																}
															</div>
															<Button
																size="sm"
																variant="secondary"
																className="mt-1 h-6 text-xs bg-white text-black hover:bg-gray-100"
																onClick={() =>
																	handleViewBooking(
																		appointment
																	)
																}
															>
																View
															</Button>
														</div>
													)}
												</div>
											);
										})}
									</div>
								))}
							</div>
						</div>

						<BookingDetailsModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
							booking={selectedBooking}
						/>
					</div>
				</div>
			</div>

			{showAddBooking && (
				<BookingAddDialog onClose={() => setShowAddBooking(false)} />
			)}
		</section>
	);
}
