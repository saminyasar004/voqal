import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

interface BlacklistedCall {
	id: number;
	phoneNumber: string;
	time: string;
	date: string;
	type: "AI Call" | "Human";
	transcript: string;
}

export default function Blacklist() {
	const [blacklistedCalls, setBlacklistedCalls] = useState<BlacklistedCall[]>(
		[
			{
				id: 1,
				phoneNumber: "+1 (555) 123-4567",
				time: "09:00 AM",
				date: "2.10.2024",
				type: "AI Call",
				transcript:
					"Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm Available This Thursday Afternoon If Possible.",
			},
			{
				id: 2,
				phoneNumber: "+1 (555) 123-4567",
				time: "09:00 AM",
				date: "2.10.2024",
				type: "Human",
				transcript:
					"Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm Available This Thursday Afternoon If Possible.",
			},
			{
				id: 3,
				phoneNumber: "+1 (555) 123-4567",
				time: "09:00 AM",
				date: "2.10.2024",
				type: "AI Call",
				transcript:
					"Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm Available This Thursday Afternoon If Possible.",
			},
			{
				id: 4,
				phoneNumber: "+1 (555) 123-4567",
				time: "09:00 AM",
				date: "2.10.2024",
				type: "AI Call",
				transcript:
					"Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm Available This Thursday Afternoon If Possible.",
			},
		]
	);

	const deleteCall = (id: number) => {
		setBlacklistedCalls((prev) => prev.filter((call) => call.id !== id));
	};

	const unblockNumber = (id: number) => {
		// Handle unblocking logic here
		console.log("Unblocking call:", id);
	};

	const playRecording = (id: number) => {
		// Handle play recording logic here
		console.log("Playing recording:", id);
	};

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Blacklist Management
					</h3>
					<p className="text-sm text-foreground">
						Manage blocked numbers and auto-blacklist rules
					</p>
				</div>
			</div>

			<div className="p-6">
				<div className="w-full">
					{/* Header */}
					<div className="mb-6">
						<h1 className="text-xl font-semibold text-primary">
							Blacklisted Numbers
						</h1>
					</div>

					{/* black List */}
					<div className="space-y-4">
						{blacklistedCalls.map((call) => (
							<Card
								key={call.id}
								className="bg-warning/20 border-warning/20"
							>
								<CardContent className="p-4">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center gap-4">
											<div className="flex flex-col">
												<div className="flex items-center gap-3">
													<span className="text-warning font-medium text-lg">
														{call.phoneNumber}
													</span>
													<Badge>{call.type}</Badge>
												</div>
											</div>
										</div>
										<div className="flex gap-2">
											<Button
												size="sm"
												onClick={() =>
													deleteCall(call.id)
												}
												variant="warning"
											>
												Delete
											</Button>
											<Button
												variant="secondary"
												size="sm"
												onClick={() =>
													unblockNumber(call.id)
												}
											>
												Unblocked
											</Button>
											<Button
												size="sm"
												onClick={() =>
													playRecording(call.id)
												}
											>
												<Play className="w-3 h-3 mr-1" />
												Play
											</Button>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="flex flex-col text-sm text-gray-600">
											<span className="font-medium">
												{call.time}
											</span>
											<span className="text-xs">
												{call.date}
											</span>
										</div>
										<div className="flex-1">
											<div className="bg-white rounded-lg p-3 border border-gray-200">
												<p className="text-sm text-gray-500 mb-1">
													Transcript Preview:
												</p>
												<p className="text-sm text-gray-800">
													{call.transcript}
												</p>
											</div>
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
