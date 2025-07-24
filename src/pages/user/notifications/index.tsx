import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface Notification {
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

export function Notifications() {
	const [filter, setFilter] = useState<"all" | "unread">("all");

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
			description:
				"Mike Chen cancelled his appointment for today at 3:30 PM",
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

	const filteredNotifications =
		filter === "all"
			? notifications
			: notifications.filter((n) => !n.isRead);

	const unreadCount = notifications.filter((n) => !n.isRead).length;
	const totalCount = notifications.length;

	const markAsRead = (id: number) => {
		setNotifications((prev) =>
			prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
		);
	};

	const deleteNotification = (id: number) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	};

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Notifications
					</h3>
					<p className="text-sm text-foreground">
						Stay updated with your business activities and alerts.
					</p>
				</div>
			</div>

			<div className="w-full px-5">
				<div className="p-3 border border-[#DCDCDC] rounded-lg">
					<div className="w-full flex gap-2">
						<Button
							onClick={() => setFilter("all")}
							className={
								filter === "all"
									? "bg-black text-white hover:bg-gray-800"
									: "bg-white text-black border border-gray-300 hover:bg-gray-50"
							}
						>
							All ({totalCount})
						</Button>
						<Button
							onClick={() => setFilter("unread")}
							className={
								filter === "unread"
									? "bg-black text-white hover:bg-gray-800"
									: "bg-white text-black border border-gray-300 hover:bg-gray-50"
							}
						>
							Unread ({unreadCount})
						</Button>
					</div>
				</div>
			</div>

			<div className="w-full px-5 py-5">
				<div className="p-4 border border-[#DCDCDC] rounded-lg">
					<h1 className="text-xl font-semibold text-gray-900 mb-6">
						Recent Notifications
					</h1>

					<div className="space-y-4">
						{filteredNotifications.map((notification) => (
							<Card
								key={notification.id}
								className="bg-white border border-gray-200"
							>
								<CardContent className="p-4">
									<div className="flex justify-between items-start mb-3">
										<div className="flex items-center gap-3">
											<h3 className="font-medium text-gray-900">
												{notification.title}
											</h3>
											<Badge
												variant={
													notification.badge ===
													"Cancelled"
														? "warning"
														: notification.badge ===
														  "Completed"
														? "success"
														: "default"
												}
											>
												{notification.badge}
											</Badge>
										</div>
										<div className="flex gap-2">
											{!notification.isRead && (
												<Button
													variant="outline"
													size="sm"
													onClick={() =>
														markAsRead(
															notification.id
														)
													}
												>
													Mark Read
												</Button>
											)}
											<Button
												size="sm"
												onClick={() =>
													deleteNotification(
														notification.id
													)
												}
												variant="warning"
											>
												Delete
											</Button>
										</div>
									</div>

									<p className="text-sm text-gray-600 mb-4">
										{notification.description}
									</p>

									<div className="grid grid-cols-5 gap-4 text-sm">
										<div>
											<p className="text-gray-500 mb-1">
												Customer:
											</p>
											<p className="text-gray-900">
												{notification.customer}
											</p>
										</div>
										<div>
											<p className="text-gray-500 mb-1">
												Service:
											</p>
											<p className="text-gray-900">
												{notification.service}
											</p>
										</div>
										<div>
											<p className="text-gray-500 mb-1">
												Staff:
											</p>
											<p className="text-gray-900">
												{notification.staff}
											</p>
										</div>
										<div>
											<p className="text-gray-500 mb-1">
												Time:
											</p>
											<p className="text-gray-900">
												{notification.time}
											</p>
										</div>
										<div>
											<p className="text-gray-500 mb-1">
												Price:
											</p>
											<p className="text-gray-900">
												{notification.price}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
