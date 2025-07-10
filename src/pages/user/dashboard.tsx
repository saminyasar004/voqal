import DashboardHeader from "@/components/common/dashboardHeader";
import {
	BotMessageSquareIcon,
	CalendarDays,
	CircleCheckBig,
	DollarSign,
	LucideProps,
	MessageSquareMore,
	Users,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Avatar from "@/assets/images/avatar.jpg";
import { Badge } from "@/components/ui/badge";

interface DashboardItem {
	id: number;
	title: string;
	value: number | string;
	suffix?: string;
	icon?: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>; // Optional for the main stat icon
}

const dashboardData: DashboardItem[] = [
	{
		id: 1,
		title: "Appointments",
		value: 14,
		suffix: "Today",
		icon: CalendarDays,
	},
	{
		id: 2,
		title: "Completed",
		value: 89,
		suffix: "Today",
		icon: CircleCheckBig,
	},
	{
		id: 3,
		title: "Revenue",
		value: "$12,450",
		suffix: "Today",
		icon: DollarSign,
	},
];

export default function Dashboard() {
	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Dashboard Overview"
				description="Welcome back! Here's what's happening with your business today."
			/>

			<div className="w-full grid grid-cols-4 gap-5 px-5 py-8">
				{dashboardData.map((data, index) => (
					<DashboardDataCard key={index} data={data} />
				))}
				<div className="w-full bg-background border border-primary/10 rounded-lg flex flex-col gap-3 p-5 shadow-md">
					<div className="w-full flex items-start justify-between">
						<div className="flex flex-col gap-1">
							<h3 className="">AI Calls Today</h3>

							<div className="flex gap-3 items-center py-5">
								<div className="w-4 h-4 bg-success rounded-full"></div>
								<Label
									htmlFor="ai-status"
									className="cursor-pointer text-3xl font-medium"
								>
									Active
								</Label>
							</div>
							<Switch id="ai-status" />
						</div>

						<div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg p-1 bg-primary text-white">
							<BotMessageSquareIcon />
						</div>
					</div>
				</div>
			</div>

			<div className="w-full px-5 grid grid-cols-5 gap-8">
				<div className="col-span-3 w-full border rounded-lg border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Live Conversations
						</h3>

						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="w-full p-4 rounded-lg border border-primary/10 flex items-start justify-between transition-all duration-150 group hover:bg-primary hover:text-white"
							>
								<div className="flex gap-3">
									<div className="w-14 h-14 flex items-center justify-center overflow-hidden relative">
										<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-primary">
											<img
												src={Avatar}
												alt="avatar"
												className="max-w-full rounded-full"
											/>
										</div>
										{/* <img
											src={WhatsappIcon}
											alt="whatsapp"
											className="absolute bottom-0 right-0"
										/> */}
									</div>
									<div className="flex flex-col justify-center gap-1">
										<h5 className="font-semibold">
											Pappu Don
										</h5>
										<p className="text-xs font-medium text-gray-500 group-hover:text-white transition-all duration-150">
											Hi! Can I book a facial for
											tomorrow?
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2 items-end">
									<span className="text-xs text-gray-500 group-hover:text-white transition-all duration-150">
										2 min ago
									</span>
									<Badge variant={"success"}>Active</Badge>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-2 w-full border rounded-lg border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Today's Schedule
						</h3>

						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="bg-secondary p-3 px-6 rounded-md flex flex-col gap-1"
							>
								<div className="w-full flex items-center justify-between">
									<h5 className="font-semibold text-lg">
										Sarah Chen
									</h5>

									{/* <img src={FacebookIcon} alt="Facebook" /> */}
								</div>

								<h4 className="text-primary">
									Hydrating Facial
								</h4>

								<div className="w-full flex items-center justify-between">
									<div className="flex gap-1 items-center text-gray-500">
										<span>Today</span>
										<div className="w-1 h-1 bg-gray-500 rounded-full"></div>
										<span>2:00 PM</span>
									</div>
									<h5 className="text-xl font-semibold text-warning">
										$500
									</h5>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const DashboardDataCard = ({ data }: { data: DashboardItem }) => {
	return (
		<div className="w-full bg-background border border-primary/10 rounded-lg flex flex-col gap-3 p-5 shadow-md">
			<div className="w-full flex items-start justify-between">
				<div className="flex flex-col gap-1">
					<h3 className="">{data.title}</h3>
					<span className="text-primary font-semibold text-4xl">
						{data.value}
					</span>
					<span className="text-sm font-medium">{data.suffix}</span>
				</div>

				<div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg p-1 bg-primary text-white">
					<data.icon />
				</div>
			</div>
		</div>
	);
};
