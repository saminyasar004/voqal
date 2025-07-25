import {
	Bar,
	BarChart,
	XAxis,
	YAxis,
	Area,
	AreaChart,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import DashboardHeader from "@/components/common/dashboard-header";

const monthlyBookingData = [
	{ month: "May", aiCalls: 1500, aiBooking: 3500, manualBooking: 8000 },
	{ month: "June", aiCalls: 15000, aiBooking: 2500, manualBooking: 2500 },
	{ month: "July", aiCalls: 15000, aiBooking: 8000, manualBooking: 3000 },
	{ month: "August", aiCalls: 15000, aiBooking: 30000, manualBooking: 3000 },
	{
		month: "September",
		aiCalls: 15000,
		aiBooking: 5000,
		manualBooking: 3000,
	},
	{ month: "October", aiCalls: 15000, aiBooking: 5000, manualBooking: 3000 },
];

const revenueData = [
	{ month: "Jan", revenue: 10000 },
	{ month: "Jan", revenue: 12000 },
	{ month: "Jan", revenue: 11000 },
	{ month: "Jan", revenue: 13000 },
	{ month: "Jan", revenue: 9000 },
	{ month: "Jan", revenue: 11000 },
	{ month: "Jan", revenue: 13000 },
	{ month: "Jan", revenue: 64300 },
	{ month: "Jan", revenue: 12000 },
	{ month: "Jan", revenue: 13000 },
	{ month: "Jan", revenue: 11000 },
	{ month: "Jan", revenue: 14000 },
	{ month: "Jan", revenue: 10000 },
	{ month: "Jan", revenue: 9000 },
	{ month: "Jan", revenue: 15000 },
	{ month: "Jan", revenue: 13000 },
	{ month: "Jan", revenue: 12000 },
	{ month: "Jan", revenue: 11000 },
	{ month: "Jan", revenue: 13000 },
	{ month: "Jan", revenue: 12000 },
];
const serviceRevenueData = [
	{ name: "Beauty Service", value: 1200, color: "#16A34A" }, // Success color
	{ name: "Hair Services", value: 3000, color: "#F05F5F" }, // Warning color
	{ name: "Fitness Services", value: 1000, color: "#5C5A5A" }, // Primary-Gray color
	{ name: "Nail Services", value: 360, color: "#F05F5F" }, // Warning color
	{ name: "Other", value: 2000, color: "#10b981" }, // Success color (lighter shade)
	{ name: "Additional", value: 1500, color: "#929208" }, // Golden-Olive color
];

const bookingChartConfig = {
	aiCalls: {
		label: "AI Calls",
		color: "#8b5cf6", // This can remain the same or be changed to match project color
	},
	aiBooking: {
		label: "AI Booking",
		color: "#10b981", // Success color
	},
	manualBooking: {
		label: "Manual Booking",
		color: "#F05F5F", // Warning color
	},
};

const revenueChartConfig = {
	revenue: {
		label: "Revenue",
		color: "#3b82f6", // Using a blue shade that aligns with the "primary" color
	},
};

export default function Analytics() {
	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Analytics & Reports
					</h3>
					<p className="text-sm text-foreground">
						Real-time business performance and AI assistant metrics.
					</p>
				</div>
			</div>

			<div className="p-6 space-y-6">
				{/* Monthly Booking Performance */}
				<Card className="bg-white">
					<CardHeader>
						<CardTitle className="text-lg font-semibold text-gray-900">
							Monthly Booking Performance
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer
							config={bookingChartConfig}
							className="h-96 w-full"
						>
							<BarChart
								data={monthlyBookingData}
								margin={{
									top: 20,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<XAxis
									dataKey="month"
									axisLine={false}
									tickLine={false}
									tick={{ fontSize: 12, fill: "#6b7280" }}
								/>
								<YAxis
									axisLine={false}
									tickLine={false}
									tick={{ fontSize: 12, fill: "#6b7280" }}
									tickFormatter={(value) =>
										`${value / 1000}k`
									}
								/>
								<ChartTooltip
									content={({ active, payload, label }) => {
										if (
											active &&
											payload &&
											payload.length
										) {
											return (
												<div className="bg-white border-2 border-primary rounded-lg p-3 shadow-lg">
													<p className="text-gray-800 font-medium mb-2">
														{label}
													</p>
													{payload.map(
														(entry, index) => (
															<p
																key={index}
																className="text-sm font-medium"
																style={{
																	color: entry.color,
																}}
															>
																{entry.dataKey ===
																	"aiCalls" &&
																	"AI Calls: "}
																{entry.dataKey ===
																	"aiBooking" &&
																	"AI Booking: "}
																{entry.dataKey ===
																	"manualBooking" &&
																	"Manual booking: "}
																{entry.value?.toLocaleString()}
															</p>
														)
													)}
												</div>
											);
										}
										return null;
									}}
									cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
								/>
								<Bar
									dataKey="aiCalls"
									fill="var(--color-aiCalls)"
									radius={[2, 2, 0, 0]}
								/>
								<Bar
									dataKey="aiBooking"
									fill="var(--color-aiBooking)"
									radius={[2, 2, 0, 0]}
								/>
								<Bar
									dataKey="manualBooking"
									fill="var(--color-manualBooking)"
									radius={[2, 2, 0, 0]}
								/>
							</BarChart>
						</ChartContainer>

						{/* Legend */}
						<div className="flex justify-center gap-6 mt-4">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
								<span className="text-sm text-gray-600">
									AI Calls
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
								<span className="text-sm text-gray-600">
									AI Booking
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
								<span className="text-sm text-gray-600">
									Manual booking
								</span>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Revenue Trend */}
				<Card className="bg-white">
					<CardHeader>
						<CardTitle className="text-lg font-semibold text-gray-900">
							Revenue Trend (6 Months)
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer
							config={revenueChartConfig}
							className="h-96 w-full"
						>
							<AreaChart
								data={revenueData}
								margin={{
									top: 20,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<defs>
									<linearGradient
										id="colorRevenue"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="5%"
											stopColor="#3b82f6"
											stopOpacity={0.3}
										/>
										<stop
											offset="95%"
											stopColor="#3b82f6"
											stopOpacity={0.1}
										/>
									</linearGradient>
								</defs>
								<XAxis
									dataKey="month"
									axisLine={false}
									tickLine={false}
									tick={{ fontSize: 12, fill: "#6b7280" }}
								/>
								<YAxis
									axisLine={false}
									tickLine={false}
									tick={{ fontSize: 12, fill: "#6b7280" }}
									tickFormatter={(value) =>
										`${value / 1000}k`
									}
								/>
								<ChartTooltip
									content={<ChartTooltipContent />}
									cursor={{
										stroke: "#3b82f6",
										strokeWidth: 1,
									}}
								/>
								<Area
									type="monotone"
									dataKey="revenue"
									stroke="#3b82f6"
									strokeWidth={2}
									fill="url(#colorRevenue)"
								/>
							</AreaChart>
						</ChartContainer>
					</CardContent>
				</Card>

				{/* Monthly Service Revenue Breakdown */}
				<Card className="bg-white">
					<CardHeader>
						<CardTitle className="text-lg font-semibold text-gray-900">
							Monthly Service Revenue Breakdown
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<div className="flex-1">
								<ChartContainer
									config={{}}
									className="h-96 w-80"
								>
									<PieChart>
										<Pie
											data={serviceRevenueData}
											cx="50%"
											cy="50%"
											innerRadius={0}
											outerRadius={120}
											paddingAngle={2}
											dataKey="value"
										>
											{serviceRevenueData.map(
												(entry, index) => (
													<Cell
														key={`cell-${index}`}
														fill={entry.color}
													/>
												)
											)}
										</Pie>
										<ChartTooltip
											content={({ active, payload }) => {
												if (
													active &&
													payload &&
													payload.length
												) {
													const data =
														payload[0].payload;
													const percentage = (
														(data.value /
															serviceRevenueData.reduce(
																(sum, item) =>
																	sum +
																	item.value,
																0
															)) *
														100
													).toFixed(0);
													return (
														<div className="bg-white p-2 border rounded shadow-lg">
															<p className="text-sm font-medium">
																{data.name}
															</p>
															<p className="text-sm text-gray-600">{`${percentage}%($${data.value.toLocaleString()})`}</p>
														</div>
													);
												}
												return null;
											}}
										/>
									</PieChart>
								</ChartContainer>
							</div>

							{/* Legend */}
							<div className="flex flex-col gap-3 ml-8">
								<div className="flex items-center justify-between">
									<span className="text-pink-400 font-medium">
										Beauty Service : $1,200
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-orange-400 font-medium">
										Hair Services : $3000
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-gray-700 font-medium">
										Fitness Services : $1,000
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-orange-400 font-medium">
										Nail Services: $360
									</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
