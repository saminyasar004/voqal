import AvatarImg from "@/assets/images/avatar.jpg";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, MoreHorizontal, Wallet, ArrowLeft } from "lucide-react";
import DashboardHeader from "@/components/common/dashboard-header";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const subscriptionData = [
	{
		id: 1,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$299/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 2,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Professional",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 3,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Basic",
		status: "Past Due",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 4,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 5,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 6,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 7,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 8,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 9,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Expired",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
	{
		id: 10,
		owner: "Glow Beauty Spa",
		location: "Auckland, NZ",
		joinDate: "2024-01-15",
		contact: "Sarah Chen",
		email: "sarah@glowspa.com",
		phone: "+998 91 6254654",
		plan: "Premium",
		status: "Active",
		amount: "$199/Month",
		nextBilling: "2024-02-15",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
	},
];

const billingHistoryData = [
	{
		id: 1,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Premium",
		status: "Paid",
		amount: "$299/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 2,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Professional",
		status: "Paid",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 3,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Basic",
		status: "Refunded",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 4,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Premium",
		status: "Paid",
		amount: "$299/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 5,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Professional",
		status: "Paid",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 6,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Basic",
		status: "Refunded",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 7,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Professional",
		status: "Paid",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 8,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Basic",
		status: "Refunded",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 9,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Professional",
		status: "Paid",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
	{
		id: 10,
		owner: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		paymentId: "PL_1234567890",
		plan: "Basic",
		status: "Refunded",
		amount: "$199/Month",
		method: "Card Name",
		avatar: "/placeholder.svg?height=40&width=40&text=GB",
		businessName: "Medical Center",
		paymentMethod: "Paypal",
		accountNumber: "**** *** *** *545",
		holderName: "John Doe",
		actualAmount: "$250",
		email: "Pappyroy6393@Gmail.Com",
		date: "01-24-2024",
		actualPlan: "Basic",
	},
];

function PaymentDetailsModal({ billing }: { billing: any }) {
	return (
		<DialogContent className="sm:max-w-xl mx-auto max-h-[80vh]">
			<DialogHeader className="space-y-4">
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						className="flex items-center gap-2 bg-transparent"
					>
						<ArrowLeft className="h-4 w-4" />
						Previous
					</Button>
				</div>
				<DialogTitle className="text-xl font-semibold text-gray-900">
					Payment Details
				</DialogTitle>
			</DialogHeader>

			<ScrollArea className="h-[60vh] pr-4">
				<div className="space-y-6">
					{/* Surgeon Illustration */}
					<div className="flex justify-center py-4">
						<div className="relative">
							<img
								src={AvatarImg}
								alt="Surgeon illustration"
								className="w-24 h-24 rounded-full"
							/>
							<div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
								MD
							</div>
						</div>
					</div>

					{/* Payment Information */}
					<div className="space-y-4">
						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Business Name:
							</span>
							<span className="text-gray-900">
								{billing.businessName}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Payment Id:
							</span>
							<span className="text-gray-900">
								{billing.paymentId}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Payment Method:
							</span>
							<span className="text-blue-600">
								{billing.paymentMethod}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								A1C:
							</span>
							<span className="text-gray-900">
								{billing.accountNumber}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								A/C Holder Name:
							</span>
							<span className="text-gray-900">
								{billing.holderName}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Amount:
							</span>
							<span className="text-gray-900 font-semibold">
								{billing.actualAmount}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Email:
							</span>
							<span className="text-gray-900">
								{billing.email}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Date:
							</span>
							<span className="text-gray-900">
								{billing.date}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Plan:
							</span>
							<span className="text-gray-900">
								{billing.actualPlan}
							</span>
						</div>

						<div className="flex justify-between items-center py-2 border-b border-gray-100">
							<span className="text-gray-600 font-medium">
								Status:
							</span>
							<Badge
								variant={
									billing.status === "Paid"
										? "success"
										: "warning"
								}
							>
								{billing.status}
							</Badge>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-3 pt-4 pb-4">
						<Button
							variant="outline"
							className="flex-1 bg-transparent"
						>
							Download Pdf
						</Button>
						<Button
							variant="outline"
							className="flex-1 bg-transparent"
						>
							Print
						</Button>
						<Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
							Process Refund
						</Button>
					</div>
				</div>
			</ScrollArea>
		</DialogContent>
	);
}

export default function AdminBilling() {
	const [activeTab, setActiveTab] = useState("all-subscriptions");

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Billing Management
					</h3>
					<p className="text-sm text-foreground">
						Manage subscription plans and billing information.
					</p>
				</div>
			</div>

			<div className="p-6">
				{/* Plan Statistics Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<Card className="bg-white">
						<CardContent className="p-6">
							<div className="flex items-start justify-between">
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold text-gray-900">
										Premium Plan
									</h3>
									<div className="text-3xl font-bold text-gray-900">
										456
									</div>
									<p className="text-sm text-gray-500">
										$299/month
									</p>
								</div>
								<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
									<Wallet className="text-white" />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white">
						<CardContent className="p-6">
							<div className="flex items-start justify-between">
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold text-gray-900">
										Professional Plan
									</h3>
									<div className="text-3xl font-bold text-gray-900">
										623
									</div>
									<p className="text-sm text-gray-500">
										$199/month
									</p>
								</div>
								<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
									<Wallet className="text-white" />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white">
						<CardContent className="p-6">
							<div className="flex items-start justify-between">
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold text-gray-900">
										Basic Plan
									</h3>
									<div className="text-3xl font-bold text-gray-900">
										168
									</div>
									<p className="text-sm text-gray-500">
										$99/month
									</p>
								</div>
								<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
									<Wallet className="text-white" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Tabs */}
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="w-full"
				>
					<TabsList className="grid w-full grid-cols-4 mb-6">
						<TabsTrigger
							value="all-subscriptions"
							className="data-[state=active]:bg-black data-[state=active]:text-white"
						>
							All Subscriptions
						</TabsTrigger>
						<TabsTrigger value="billing-history">
							Billing History
						</TabsTrigger>
						<TabsTrigger value="invoice">Invoice</TabsTrigger>
						<TabsTrigger value="subscription-plans">
							Subscriptions Plans
						</TabsTrigger>
					</TabsList>

					{/* All Subscriptions Tab */}
					<TabsContent
						value="all-subscriptions"
						className="space-y-6"
					>
						{/* Search Bar */}
						<Card className="bg-white">
							<CardContent className="p-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input
										placeholder="Search"
										className="pl-10 border-gray-200"
									/>
								</div>
							</CardContent>
						</Card>

						{/* Active Subscriptions */}
						<Card className="bg-white">
							<CardContent className="p-0">
								<div className="flex items-center justify-between p-6 border-b">
									<h2 className="text-lg font-semibold text-gray-900">
										Active Subscriptions
									</h2>
									<Select defaultValue="all-plan">
										<SelectTrigger className="w-32">
											<SelectValue placeholder="All Plan" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all-plan">
												All Plan
											</SelectItem>
											<SelectItem value="premium">
												Premium
											</SelectItem>
											<SelectItem value="professional">
												Professional
											</SelectItem>
											<SelectItem value="basic">
												Basic
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Table */}
								<Table>
									<TableHeader>
										<TableRow className="bg-primary hover:bg-primary text-primary-foreground">
											<TableHead className="text-white font-medium"></TableHead>
											<TableHead className="text-white font-medium">
												Owner
											</TableHead>
											<TableHead className="text-white font-medium">
												Plan
											</TableHead>
											<TableHead className="text-white font-medium">
												Status
											</TableHead>
											<TableHead className="text-white font-medium">
												Amount
											</TableHead>
											<TableHead className="text-white font-medium">
												Next Billing
											</TableHead>
											<TableHead className="text-white font-medium">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{subscriptionData.map(
											(subscription) => (
												<TableRow
													key={subscription.id}
													className="hover:bg-gray-50"
												>
													<TableCell>
														<div className="flex items-center gap-3">
															<Avatar className="h-10 w-10">
																<AvatarImage
																	src={
																		AvatarImg
																	}
																/>
																<AvatarFallback>
																	GB
																</AvatarFallback>
															</Avatar>
															<div>
																<div className="font-medium text-gray-900">
																	{
																		subscription.owner
																	}
																</div>
																<div className="text-sm text-gray-500">
																	{
																		subscription.location
																	}
																</div>
																<div className="text-xs text-gray-400">
																	Joined{" "}
																	{
																		subscription.joinDate
																	}
																</div>
															</div>
														</div>
													</TableCell>
													<TableCell>
														<div className="flex flex-col gap-1">
															<div className="font-medium text-gray-900">
																{
																	subscription.contact
																}
															</div>
															<div className="text-sm text-gray-500">
																{
																	subscription.email
																}
															</div>
															<div className="text-xs text-gray-400">
																{
																	subscription.phone
																}
															</div>
														</div>
													</TableCell>
													<TableCell>
														<Badge
															variant={
																subscription.plan ===
																"Professional"
																	? "default"
																	: subscription.plan ===
																	  "Basic"
																	? "outline"
																	: "indigo"
															}
														>
															{subscription.plan}
														</Badge>
													</TableCell>
													<TableCell>
														<Badge
															variant={
																subscription.status ===
																"Active"
																	? "success"
																	: subscription.status ===
																	  "Expired"
																	? "secondary"
																	: "warning"
															}
														>
															{
																subscription.status
															}
														</Badge>
													</TableCell>
													<TableCell className="font-medium text-gray-900">
														{subscription.amount}
													</TableCell>
													<TableCell className="text-gray-600">
														{
															subscription.nextBilling
														}
													</TableCell>
													<TableCell>
														<DropdownMenu>
															<DropdownMenuTrigger
																asChild
															>
																<Button
																	variant="ghost"
																	size="sm"
																>
																	<MoreHorizontal className="h-4 w-4" />
																</Button>
															</DropdownMenuTrigger>
															<DropdownMenuContent>
																<DropdownMenuItem>
																	View Details
																</DropdownMenuItem>
																<DropdownMenuItem>
																	Edit
																</DropdownMenuItem>
																<DropdownMenuItem>
																	Cancel
																</DropdownMenuItem>
															</DropdownMenuContent>
														</DropdownMenu>
													</TableCell>
												</TableRow>
											)
										)}
									</TableBody>
								</Table>

								{/* Pagination */}
								<div className="p-6 border-t">
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious href="#" />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink
													href="#"
													isActive
												>
													1
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													2
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													3
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													10
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationNext href="#" />
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Billing History Tab */}
					<TabsContent value="billing-history" className="space-y-6">
						<Card className="bg-white">
							<CardContent className="p-0">
								<div className="flex items-center justify-between p-6 border-b">
									<h2 className="text-lg font-semibold text-gray-900">
										Billing History
									</h2>
									<Select defaultValue="all-status">
										<SelectTrigger className="w-32">
											<SelectValue placeholder="All Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all-status">
												All Status
											</SelectItem>
											<SelectItem value="paid">
												Paid
											</SelectItem>
											<SelectItem value="refunded">
												Refunded
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Table */}
								<Table>
									<TableHeader>
										<TableRow className="bg-primary hover:bg-primary text-primary-foreground">
											<TableHead className="text-white font-medium">
												Owner
											</TableHead>
											<TableHead className="text-white font-medium">
												Payment ID
											</TableHead>
											<TableHead className="text-white font-medium">
												Plan
											</TableHead>
											<TableHead className="text-white font-medium">
												Status
											</TableHead>
											<TableHead className="text-white font-medium">
												Amount
											</TableHead>
											<TableHead className="text-white font-medium">
												Method
											</TableHead>
											<TableHead className="text-white font-medium">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{billingHistoryData.map((billing) => (
											<TableRow
												key={billing.id}
												className="hover:bg-gray-50"
											>
												<TableCell>
													<div className="flex items-center gap-3">
														<Avatar className="h-10 w-10">
															<AvatarImage
																src={AvatarImg}
															/>
															<AvatarFallback>
																GB
															</AvatarFallback>
														</Avatar>
														<div>
															<div className="font-medium text-gray-900">
																{billing.owner}
															</div>
															<div className="text-xs text-gray-400">
																{
																	billing.joinDate
																}
															</div>
														</div>
													</div>
												</TableCell>
												<TableCell className="text-gray-600">
													{billing.paymentId}
												</TableCell>
												<TableCell>
													<Badge>
														{billing.plan}
													</Badge>
												</TableCell>
												<TableCell>
													<Badge
														variant={
															billing.status ===
															"Paid"
																? "success"
																: "warning"
														}
													>
														{billing.status}
													</Badge>
												</TableCell>
												<TableCell className="font-medium text-gray-900">
													{billing.amount}
												</TableCell>
												<TableCell className="text-gray-600">
													{billing.method}
												</TableCell>
												<TableCell>
													<DropdownMenu>
														<DropdownMenuTrigger
															asChild
														>
															<Button
																variant="ghost"
																size="sm"
															>
																<MoreHorizontal className="h-4 w-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent>
															<Dialog>
																<DialogTrigger
																	asChild
																>
																	<DropdownMenuItem
																		onSelect={(
																			e
																		) =>
																			e.preventDefault()
																		}
																	>
																		View
																		Details
																	</DropdownMenuItem>
																</DialogTrigger>
																<PaymentDetailsModal
																	billing={
																		billing
																	}
																/>
															</Dialog>
															<DropdownMenuItem>
																Download Invoice
															</DropdownMenuItem>
															<DropdownMenuItem>
																Process Refund
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>

								{/* Pagination */}
								<div className="p-6 border-t">
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious href="#" />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink
													href="#"
													isActive
												>
													1
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													2
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													3
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">
													10
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationNext href="#" />
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Invoice Tab */}
					<TabsContent value="invoice">
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="text-center text-gray-500">
									Invoice content will be added here
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Subscription Plans Tab */}
					<TabsContent value="subscription-plans">
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="text-center text-gray-500">
									Subscription plans content will be added
									here
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
