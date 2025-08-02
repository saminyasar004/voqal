import AvatarImg from "@/assets/images/avatar.jpg";
import Avatar from "@/assets/images/avatar.jpg";
import CalendarDaysWhiteImg from "@/assets/images/calendar-days-white.svg";
import CheckImg from "@/assets/images/check.svg";
import GrowthImg from "@/assets/images/growth.svg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BusinessDataProps, DashboardItem } from "@/interfaces";
import { Headset, Phone, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const dashboardData: DashboardItem[] = [
  {
    id: 1,
    title: "Total Businesses",
    value: "1,2244",
    suffix: "+12% from last month",
    icon: CalendarDaysWhiteImg,
    iconType: "image",
  },
  {
    id: 2,
    title: "Active Businesses",
    value: "1,2423",
    suffix: "+12% from last month",
    icon: CheckImg,
    iconType: "image",
  },
  {
    id: 3,
    title: "Total AI Call",
    value: "45,450",
    suffix: "+12% from last month",
    icon: Headset,
    iconType: "icon",
  },
  {
    id: 3,
    title: "Monthly Revenue",
    value: "$89,450",
    suffix: "+12% from last month",
    icon: GrowthImg,
    iconType: "image",
  },
];

const businessData: BusinessDataProps[] = [
  {
    date: "2024-01-18",
    client: "Hydrating Facial",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 0,
    status: "Professional",
    confirmed: true,
  },
  {
    date: "2024-01-18",
    client: "Ascki Salon",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 0,
    status: "Professional",
    confirmed: false,
  },
  {
    date: "2024-01-18",
    client: "Elite Barbershop",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 0,
    status: "Professional",
    confirmed: true,
  },
  {
    date: "2024-01-18",
    client: "Wellness Spa",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 4567,
    status: "Professional",
    confirmed: true,
  },
  {
    date: "2024-01-18",
    client: "Hydrating Facial",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 4000,
    status: "Professional",
    confirmed: true,
  },
  {
    date: "2024-01-18",
    client: "Elite Barbershop",
    type: "Pappu roy",
    phone: "+880 0140566393",
    duration: "",
    price: 2567,
    status: "Professional",
    confirmed: true,
  },
];

const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6", // Using a blue shade that aligns with the "primary" color
  },
};

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

function BusinessDataCard({ data }: { data: BusinessDataProps }) {
  return (
    <div className="border bg-white border-primary-gray/10 rounded-lg p-4 grid grid-cols-6 gap-8 hover:bg-background transition-all duration-300">
      <div className="flex flex-col items-center justify-center gap-3 border-r border-primary-gray/20">
        <div className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full border border-primary">
          <img src={AvatarImg} alt="Avatar" className="w-full h-full" />
        </div>
        <span className="text-sm">{data.date}</span>
      </div>
      <div className="col-span-5 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h3 className="text-lg font-medium">{data.client}</h3>
            <Badge variant={"default"} className="gap-1">
              {data.status === "Manual" ? (
                <Users size={14} />
              ) : (
                <Sparkles size={14} />
              )}
              {data.status}
            </Badge>
            {data.confirmed && <Badge variant={"success"}>Confirmed</Badge>}
          </div>

          <h5 className="text-primary-gray text-sm">{data.type}</h5>
          <h5 className="text-primary-gray text-sm">{data.phone}</h5>
          <h5 className="text-primary-gray text-sm">{data.price}$</h5>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
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
          <h3 className="text-xl text-primary font-semibold">Dashboard</h3>
          <p className="text-sm text-foreground">
            Welcome back! Here's what's happening with your platform today.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-5 px-5 py-8">
        {dashboardData.map((data, index) => (
          <DashboardDataCard key={index} data={data} />
        ))}
      </div>

      <div className="w-full px-5 grid grid-cols-2 gap-8">
        <div className="w-full border rounded-lg bg-white border-primary/10 my-5 px-5 py-6">
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-primary font-semibold text-2xl">
                Recently Created Business
              </h3>

              <Link to={"/user/bookings"}>
                <Button variant="transparent" size="sm">
                  View All
                </Button>
              </Link>
            </div>

            {businessData.map((business, index) => (
              <BusinessDataCard key={index} data={business} />
            ))}
          </div>
        </div>

        <div className="w-full bg-white border rounded-lg border-primary/10 my-5 px-5 py-6">
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-2xl">
              Top Performing Businesses
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
                  <h5 className="text-xl font-medium">$500</h5>
                  <span className="text-sm">Revenue</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Revenue Trend */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-96 w-full">
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
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
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
                  tickFormatter={(value) => `${value / 1000}k`}
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

        {/* Plan Distribution & Revenue */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Plan Distribution & Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-20">
              <div className="w-full">
                <ChartContainer config={{}} className="h-96 w-80">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "Professional",
                          value: 200,
                          color: "#8b5cf6",
                          revenue: 136680,
                        },
                        {
                          name: "Premium",
                          value: 100,
                          color: "#e879f9",
                          revenue: 136680,
                        },
                        {
                          name: "Basic",
                          value: 300,
                          color: "#fb923c",
                          revenue: 136680,
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[
                        {
                          name: "Professional",
                          value: 200,
                          color: "#8b5cf6",
                          revenue: 136680,
                        },
                        {
                          name: "Premium",
                          value: 100,
                          color: "#e879f9",
                          revenue: 136680,
                        },
                        {
                          name: "Basic",
                          value: 300,
                          color: "#fb923c",
                          revenue: 136680,
                        },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-lg font-semibold fill-gray-800"
                    >
                      Distribution
                    </text>
                  </PieChart>
                </ChartContainer>
              </div>

              {/* Legend */}
              <div className="w-full flex flex-col gap-4 ml-8">
                <div className="flex items-center justify-between gap-8 border border-[#DCDCDC] rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
                    <div>
                      <p className="font-medium text-gray-900">Professional</p>
                      <p className="text-sm text-gray-500">200 Business</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">$136,680</span>
                </div>
                <div className="flex items-center justify-between gap-8 border border-[#DCDCDC] rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-400 rounded-sm"></div>
                    <div>
                      <p className="font-medium text-gray-900">Premium</p>
                      <p className="text-sm text-gray-500">100 Business</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">$136,680</span>
                </div>
                <div className="flex items-center justify-between gap-8 border border-[#DCDCDC] rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-sm"></div>
                    <div>
                      <p className="font-medium text-gray-900">Basic</p>
                      <p className="text-sm text-gray-500">300 Business</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">$136,680</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Growth */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Business Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                totalBusinesses: {
                  label: "Total Businesses",
                  color: "#8b5cf6",
                },
                activeBusinesses: {
                  label: "Active Businesses",
                  color: "#10b981",
                },
              }}
              className="h-96 w-full"
            >
              <BarChart
                data={[
                  {
                    month: "May",
                    totalBusinesses: 1000,
                    activeBusinesses: 3000,
                  },
                  {
                    month: "June",
                    totalBusinesses: 12000,
                    activeBusinesses: 2500,
                  },
                  {
                    month: "July",
                    totalBusinesses: 11000,
                    activeBusinesses: 7000,
                  },
                  {
                    month: "August",
                    totalBusinesses: 12000,
                    activeBusinesses: 18000,
                  },
                  {
                    month: "September",
                    totalBusinesses: 11000,
                    activeBusinesses: 4000,
                  },
                  {
                    month: "October",
                    totalBusinesses: 12000,
                    activeBusinesses: 6000,
                  },
                ]}
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
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border-2 border-primary rounded-lg p-3 shadow-lg relative">
                          <p className="text-gray-800 font-medium mb-2 lowercase">
                            {label}
                          </p>
                          {payload.map((entry, index) => (
                            <p
                              key={index}
                              className="text-sm font-medium"
                              style={{
                                color: entry.color,
                              }}
                            >
                              {entry.dataKey === "totalBusinesses" &&
                                "Total Business: "}
                              {entry.dataKey === "activeBusinesses" &&
                                "Active Business: "}
                              {entry.value?.toLocaleString()}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
                  // position={{ x: 10, y: 10 }}
                  // allowEscapeViewBox={{ x: false, y: false }}
                  // offset={10}
                />
                <Bar
                  dataKey="totalBusinesses"
                  fill="var(--color-totalBusinesses)"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="activeBusinesses"
                  fill="var(--color-activeBusinesses)"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ChartContainer>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">
                  Total Businesses(7,000)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">
                  Active Businesses(5,000)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">Suspended(23)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* {showAddBooking && (
				<BookingAddDialog onClose={() => setShowAddBooking(false)} />
			)} */}
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
          <span className="text-sm font-medium text-primary-gray">
            {data.suffix}
          </span>
        </div>

        <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg p-1 bg-primary text-primary-foreground">
          {data.iconType === "image" ? (
            <img src={data.icon as string} alt="icon" className="max-w-full" />
          ) : (
            <data.icon className="max-w-full" />
          )}
        </div>
      </div>
    </div>
  );
};
