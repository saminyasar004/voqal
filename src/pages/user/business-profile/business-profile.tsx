import BusinessProfileAvatarImg from "@/assets/images/business-profile-avatar.svg";
import { useState } from "react";
import {
	Edit,
	FileText,
	ChevronDown,
	ChevronUp,
	User,
	Plus,
	X,
	Users,
	UserCog,
	Network,
	Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import DashboardHeader from "@/components/common/dashboard-header";
import { Separator } from "@/components/ui/separator";

interface Service {
	id: number;
	name: string;
	price: string;
	duration?: string;
	description?: string;
}

interface StaffService {
	id: number;
	name: string;
	price: string;
	staffMember: string;
	duration?: string;
	description?: string;
}

export default function BusinessProfile() {
	const [servicesExpanded, setServicesExpanded] = useState(true);
	const [staffServicesExpanded, setStaffServicesExpanded] = useState(true);
	const [showAddService, setShowAddService] = useState(false);
	const [showAddStaffService, setShowAddStaffService] = useState(false);

	const [services, setServices] = useState<Service[]>([
		{
			id: 1,
			name: "Women Cut & Style",
			price: "$30",
			duration: "60 min",
			description: "Professional haircut and styling",
		},
		{
			id: 2,
			name: "Men's Haircut",
			price: "$25",
			duration: "45 min",
			description: "Classic men's haircut",
		},
		{
			id: 3,
			name: "Hair Color",
			price: "$80",
			duration: "120 min",
			description: "Full hair coloring service",
		},
		{
			id: 4,
			name: "Facial Treatment",
			price: "$45",
			duration: "75 min",
			description: "Deep cleansing facial",
		},
	]);

	const [staffServices, setStaffServices] = useState<StaffService[]>([
		{
			id: 1,
			name: "Facial Spa",
			price: "$30",
			staffMember: "Lisa Taylor",
			duration: "60 min",
			description: "Relaxing facial spa treatment",
		},
		{
			id: 2,
			name: "Massage Therapy",
			price: "$65",
			staffMember: "Emma Wilson",
			duration: "90 min",
			description: "Full body massage",
		},
		{
			id: 3,
			name: "Manicure",
			price: "$25",
			staffMember: "James Rodriguez",
			duration: "45 min",
			description: "Professional nail care",
		},
	]);

	const [newService, setNewService] = useState({
		name: "",
		price: "",
		duration: "",
		description: "",
	});

	const [newStaffService, setNewStaffService] = useState({
		name: "",
		price: "",
		staffMember: "",
		duration: "",
		description: "",
	});

	const [settings, setSettings] = useState({
		discountManagement: true,
		enableCallRecording: true,
		generateTranscripts: true,
		prankCallDetection: true,
		voicemailSettings: true,
		repeatAppointment: true,
		callRecordingRetention: true,
	});

	const [businessHours, setBusinessHours] = useState({
		monday: { open: "08:00", close: "18:00", enabled: true },
		tuesday: { open: "08:00", close: "18:00", enabled: true },
		wednesday: { open: "08:00", close: "18:00", enabled: true },
		thursday: { open: "08:00", close: "18:00", enabled: true },
		friday: { open: "08:00", close: "18:00", enabled: true },
		saturday: { open: "08:00", close: "18:00", enabled: false },
		sunday: { open: "08:00", close: "18:00", enabled: false },
	});

	const staffMembers = [
		"Lisa Taylor",
		"Emma Wilson",
		"James Rodriguez",
		"Sophie Anderson",
		"Mike Chen",
	];

	const updateBusinessHour = (
		day: keyof typeof businessHours,
		field: "open" | "close",
		value: string
	) => {
		setBusinessHours((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				[field]: value,
			},
		}));
	};

	const handleAddService = () => {
		if (newService.name && newService.price) {
			const service: Service = {
				id: services.length + 1,
				name: newService.name,
				price: newService.price.startsWith("$")
					? newService.price
					: `$${newService.price}`,
				duration: newService.duration,
				description: newService.description,
			};
			setServices([...services, service]);
			setNewService({
				name: "",
				price: "",
				duration: "",
				description: "",
			});
			setShowAddService(false);
		}
	};

	const handleAddStaffService = () => {
		if (
			newStaffService.name &&
			newStaffService.price &&
			newStaffService.staffMember
		) {
			const staffService: StaffService = {
				id: staffServices.length + 1,
				name: newStaffService.name,
				price: newStaffService.price.startsWith("$")
					? newStaffService.price
					: `$${newStaffService.price}`,
				staffMember: newStaffService.staffMember,
				duration: newStaffService.duration,
				description: newStaffService.description,
			};
			setStaffServices([...staffServices, staffService]);
			setNewStaffService({
				name: "",
				price: "",
				staffMember: "",
				duration: "",
				description: "",
			});
			setShowAddStaffService(false);
		}
	};

	const removeService = (id: number) => {
		setServices(services.filter((service) => service.id !== id));
	};

	const removeStaffService = (id: number) => {
		setStaffServices(staffServices.filter((service) => service.id !== id));
	};

	const toggleSetting = (key: keyof typeof settings) => {
		setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<>
			<section className="w-full pb-8 bg-[#F5F5F5]">
				{/* dashboard header */}
				<DashboardHeader />

				<div className="flex justify-between gap-1 flex-1 px-6 py-4">
					<div className="flex flex-col gap-1">
						<h3 className="text-xl text-primary font-semibold">
							Business Profile
						</h3>
						<p className="text-sm text-foreground">
							Manage your business information and settings
						</p>
					</div>
				</div>

				<div className="p-6">
					<div className="w-full space-y-6">
						{/* Business Info Card */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="flex items-start gap-12">
									<div className="w-20 h-20 flex items-center justify-center">
										<img
											src={BusinessProfileAvatarImg}
											alt="avatar"
											className="w-full h-full"
										/>
									</div>

									<div className="flex-1">
										<h2 className="text-xl font-semibold text-gray-900 mb-2">
											Salon Excellence & Wellness Center
										</h2>
										<p className="text-sm text-gray-600 mb-4">
											Beauty & Wellness
										</p>

										<div className="grid grid-cols-2 gap-4 text-sm mb-4">
											<div>
												<span className="text-[#898989]">
													Business Number:{" "}
												</span>
												<span className="text-gray-900">
													+64 21 555 0123
												</span>
											</div>
											<div>
												<span className="text-[#898989]">
													Street Address:{" "}
												</span>
												<span className="text-gray-900">
													456 Queen Street
												</span>
											</div>
											<div>
												<span className="text-[#898989]">
													Fallback Number:{" "}
												</span>
												<span className="text-gray-900">
													+64 21 555 0123
												</span>
											</div>
											<div>
												<span className="text-[#898989]">
													City:{" "}
												</span>
												<span className="text-gray-900">
													Auckland Central
												</span>
											</div>
											<div>
												<span className="text-[#898989]">
													Email:{" "}
												</span>
												<span className="text-gray-900">
													info@voqal.com{" "}
												</span>
											</div>
											<div>
												<span className="text-[#898989]">
													Country:{" "}
												</span>
												<span className="text-gray-900">
													New Zealand
												</span>
											</div>
										</div>

										<p className="text-xs text-gray-500 leading-relaxed">
											Welcome to [Your Salon Name] - your
											trusted destination for beauty,
											grooming, and total relaxation. We
											specialize in a wide range of salon
											services including haircuts,
											styling, coloring, facials,
											skincare, bridal makeup, and spa
											treatments. Our experienced team of
											professionals is committed to
											delivering personalized care using
											top-quality products and the latest
											techniques. Whether you're preparing
											for a special event or simply need
											some self-care, we're here to help
											you look and feel your best in a
											luxurious and hygienic environment.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Separator orientation="horizontal" />

						<div className="grid grid-cols-4 gap-8">
							<Card className="bg-white">
								<CardContent className="p-6 flex items-start justify-between gap-8">
									<div className="flex flex-col gap-5">
										<h3 className="font-semibold text-3xl text-primary">
											1,892
										</h3>
										<span className="text-primary-gray text-sm">
											Total Customers
										</span>
									</div>
									<div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
										<Users size={24} />
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="p-6 flex items-start justify-between gap-8">
									<div className="flex flex-col gap-5">
										<h3 className="font-semibold text-3xl text-primary">
											342
										</h3>
										<span className="text-primary-gray text-sm">
											Total Team Members
										</span>
									</div>
									<div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
										<Network size={24} />
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="p-6 flex items-start justify-between gap-8">
									<div className="flex flex-col gap-5">
										<h3 className="font-semibold text-3xl text-primary">
											1,892
										</h3>
										<span className="text-primary-gray text-sm">
											Total Staff
										</span>
									</div>
									<div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
										<UserCog size={24} />
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="p-6 flex items-start justify-between gap-8">
									<div className="flex flex-col gap-5">
										<h3 className="font-semibold text-3xl text-primary">
											$78,231
										</h3>
										<span className="text-primary-gray text-sm">
											Monthly Revenue
										</span>
									</div>
									<div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
										<Wallet size={24} />
									</div>
								</CardContent>
							</Card>
						</div>

						{/* AI Personality */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									AI Personality
								</h3>
								<div className="flex flex-col gap-1">
									<div className="w-full flex items-center justify-between gap-5">
										<Label className="text-sm text-gray-600 mb-2 block">
											Conversation Tone
										</Label>
										<p className="text-sm text-gray-900">
											Friendly & Professional
										</p>
									</div>
									<div className="w-full flex items-center justify-between gap-5">
										<Label className="text-sm text-gray-600 mb-2 block">
											AI Voice
										</Label>
										<p className="text-sm text-gray-900">
											Kiwi Female - Friendly &
											Professional
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Key Business Information & Knowledge Base */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Key Business Information & Knowledge Base
								</h3>
								<p className="text-sm text-gray-600 mb-4">
									Provide information about your business
									through multiple sources for comprehensive
									AI knowledge
								</p>
								<Textarea
									className="min-h-[100px] resize-none"
									placeholder="We're Located In The Heart Of Auckland, Specialising In Modern Cuts And Colours. Our Experienced Team Has Been Serving The Community For Over 10 Years. Information We'd Like About Our Business During Conversations"
								/>
							</CardContent>
						</Card>

						{/* Business Information */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Business Information
								</h3>
								<Input placeholder="Enter business information..." />
							</CardContent>
						</Card>

						{/* Custom Messages */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Custom Messages
								</h3>
								<Textarea
									className="min-h-[80px] resize-none"
									placeholder="G'Day! Thanks For Calling [Business Name]. I'm Your AI Assistant And I'm Here To Help You Book An Appointment. How Can I Help You Today? Let [Business Name] To Assist"
								/>
							</CardContent>
						</Card>

						{/* Documents */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Documents
								</h3>
								<div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
									<FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
									<Button variant="outline" size="sm">
										Choose File
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Website URL */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Website URL
								</h3>
								<Input placeholder="https://yourbusiness.com" />
							</CardContent>
						</Card>

						{/* Discount Management */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Discount Management(%)
									</h3>
									<Switch
										checked={settings.discountManagement}
										onCheckedChange={() =>
											toggleSetting("discountManagement")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<Label className="text-sm text-gray-600 mb-2 block">
											Discount Title
										</Label>
										<Input placeholder="Summer Sale" />
									</div>
									<div>
										<Label className="text-sm text-gray-600 mb-2 block">
											Discount %
										</Label>
										<Input placeholder="10" />
									</div>
									<div>
										<Label className="text-sm text-gray-600 mb-2 block">
											Start Date
										</Label>
										<Input type="date" />
									</div>
									<div>
										<Label className="text-sm text-gray-600 mb-2 block">
											End Date
										</Label>
										<Input type="date" />
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Services & Treatments */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Services & Treatments
									</h3>
									<div className="flex items-center gap-2">
										<Button
											variant="outline"
											size="sm"
											onClick={() =>
												setShowAddService(true)
											}
											className="flex items-center gap-1"
										>
											<Plus className="h-4 w-4" />
											Add New
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												setServicesExpanded(
													!servicesExpanded
												)
											}
										>
											{servicesExpanded ? (
												<ChevronUp className="h-4 w-4" />
											) : (
												<ChevronDown className="h-4 w-4" />
											)}
										</Button>
									</div>
								</div>

								{/* Add Service Form */}
								{showAddService && (
									<div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
										<h4 className="text-sm font-medium text-gray-900 mb-4">
											Add New Service
										</h4>
										<div className="grid grid-cols-2 gap-4 mb-4">
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Service Name
												</Label>
												<Input
													placeholder="e.g., Women Cut & Style"
													value={newService.name}
													onChange={(e) =>
														setNewService({
															...newService,
															name: e.target
																.value,
														})
													}
												/>
											</div>
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Price
												</Label>
												<Input
													placeholder="e.g., 30"
													value={newService.price}
													onChange={(e) =>
														setNewService({
															...newService,
															price: e.target
																.value,
														})
													}
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4 mb-4">
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Duration
												</Label>
												<Input
													placeholder="e.g., 60 min"
													value={newService.duration}
													onChange={(e) =>
														setNewService({
															...newService,
															duration:
																e.target.value,
														})
													}
												/>
											</div>
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Description
												</Label>
												<Input
													placeholder="Brief description"
													value={
														newService.description
													}
													onChange={(e) =>
														setNewService({
															...newService,
															description:
																e.target.value,
														})
													}
												/>
											</div>
										</div>
										<div className="flex gap-2">
											<Button
												onClick={handleAddService}
												size="sm"
												className="bg-black hover:bg-gray-800 text-white"
											>
												Add Service
											</Button>
											<Button
												variant="outline"
												size="sm"
												onClick={() => {
													setShowAddService(false);
													setNewService({
														name: "",
														price: "",
														duration: "",
														description: "",
													});
												}}
											>
												Cancel
											</Button>
										</div>
									</div>
								)}

								{servicesExpanded && (
									<div className="space-y-3">
										{services.map((service) => (
											<div
												key={service.id}
												className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group"
											>
												<div className="flex-1">
													<div className="flex items-center gap-3">
														<span className="text-sm font-medium text-gray-900">
															{service.name}
														</span>
														<span className="text-sm font-medium text-gray-900">
															{service.price}
														</span>
														{service.duration && (
															<span className="text-xs text-gray-500">
																(
																{
																	service.duration
																}
																)
															</span>
														)}
													</div>
													{service.description && (
														<p className="text-xs text-gray-500 mt-1">
															{
																service.description
															}
														</p>
													)}
												</div>
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														removeService(
															service.id
														)
													}
													className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700 hover:bg-red-50"
												>
													<X className="h-4 w-4" />
												</Button>
											</div>
										))}
									</div>
								)}
							</CardContent>
						</Card>

						{/* Staff Services & Treatments */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Staff Services & Treatments
									</h3>
									<div className="flex items-center gap-2">
										<Button
											variant="outline"
											size="sm"
											onClick={() =>
												setShowAddStaffService(true)
											}
											className="flex items-center gap-1"
										>
											<Plus className="h-4 w-4" />
											Add New
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												setStaffServicesExpanded(
													!staffServicesExpanded
												)
											}
										>
											{staffServicesExpanded ? (
												<ChevronUp className="h-4 w-4" />
											) : (
												<ChevronDown className="h-4 w-4" />
											)}
										</Button>
									</div>
								</div>

								{/* Add Staff Service Form */}
								{showAddStaffService && (
									<div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
										<h4 className="text-sm font-medium text-gray-900 mb-4">
											Add New Staff Service
										</h4>
										<div className="grid grid-cols-2 gap-4 mb-4">
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Service Name
												</Label>
												<Input
													placeholder="e.g., Facial Spa"
													value={newStaffService.name}
													onChange={(e) =>
														setNewStaffService({
															...newStaffService,
															name: e.target
																.value,
														})
													}
												/>
											</div>
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Price
												</Label>
												<Input
													placeholder="e.g., 30"
													value={
														newStaffService.price
													}
													onChange={(e) =>
														setNewStaffService({
															...newStaffService,
															price: e.target
																.value,
														})
													}
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4 mb-4">
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Staff Member
												</Label>
												<Select
													value={
														newStaffService.staffMember
													}
													onValueChange={(value) =>
														setNewStaffService({
															...newStaffService,
															staffMember: value,
														})
													}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select staff member" />
													</SelectTrigger>
													<SelectContent>
														{staffMembers.map(
															(staff) => (
																<SelectItem
																	key={staff}
																	value={
																		staff
																	}
																>
																	{staff}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label className="text-sm text-gray-600 mb-1 block">
													Duration
												</Label>
												<Input
													placeholder="e.g., 60 min"
													value={
														newStaffService.duration
													}
													onChange={(e) =>
														setNewStaffService({
															...newStaffService,
															duration:
																e.target.value,
														})
													}
												/>
											</div>
										</div>
										<div className="mb-4">
											<Label className="text-sm text-gray-600 mb-1 block">
												Description
											</Label>
											<Input
												placeholder="Brief description"
												value={
													newStaffService.description
												}
												onChange={(e) =>
													setNewStaffService({
														...newStaffService,
														description:
															e.target.value,
													})
												}
											/>
										</div>
										<div className="flex gap-2">
											<Button
												onClick={handleAddStaffService}
												size="sm"
												className="bg-black hover:bg-gray-800 text-white"
											>
												Add Staff Service
											</Button>
											<Button
												variant="outline"
												size="sm"
												onClick={() => {
													setShowAddStaffService(
														false
													);
													setNewStaffService({
														name: "",
														price: "",
														staffMember: "",
														duration: "",
														description: "",
													});
												}}
											>
												Cancel
											</Button>
										</div>
									</div>
								)}

								{staffServicesExpanded && (
									<div className="space-y-3">
										{staffServices.map((service) => (
											<div
												key={service.id}
												className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group"
											>
												<div className="flex-1">
													<div className="flex items-center gap-3">
														<span className="text-sm font-medium text-gray-900">
															{service.name}
														</span>
														<span className="text-sm font-medium text-gray-900">
															{service.price}
														</span>
														<span className="text-xs text-gray-600">
															by{" "}
															{
																service.staffMember
															}
														</span>
														{service.duration && (
															<span className="text-xs text-gray-500">
																(
																{
																	service.duration
																}
																)
															</span>
														)}
													</div>
													{service.description && (
														<p className="text-xs text-gray-500 mt-1">
															{
																service.description
															}
														</p>
													)}
												</div>
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														removeStaffService(
															service.id
														)
													}
													className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700 hover:bg-red-50"
												>
													<X className="h-4 w-4" />
												</Button>
											</div>
										))}
									</div>
								)}
							</CardContent>
						</Card>

						{/* Business Hours */}
						<Card className="bg-white">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Business Hours
								</h3>
								<div className="space-y-4">
									{Object.entries(businessHours).map(
										([day, hours]) => (
											<div
												key={day}
												className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
											>
												<div className="flex items-center gap-4">
													<span className="text-sm font-medium text-gray-900 w-20 capitalize">
														{day}
													</span>
													<span className="text-sm text-gray-600">
														Open
													</span>
													<Input
														type="time"
														value={hours.open}
														onChange={(e) =>
															updateBusinessHour(
																day as keyof typeof businessHours,
																"open",
																e.target.value
															)
														}
														className="w-max h-8 text-xs"
														disabled={
															!hours.enabled
														}
													/>
													<span className="text-sm text-gray-600">
														Close
													</span>
													<Input
														type="time"
														value={hours.close}
														onChange={(e) =>
															updateBusinessHour(
																day as keyof typeof businessHours,
																"close",
																e.target.value
															)
														}
														className="w-max h-8 text-xs"
														disabled={
															!hours.enabled
														}
													/>
												</div>
												<Switch
													checked={hours.enabled}
													onCheckedChange={(
														checked
													) =>
														setBusinessHours(
															(prev) => ({
																...prev,
																[day]: {
																	...prev[
																		day as keyof typeof prev
																	],
																	enabled:
																		checked,
																},
															})
														)
													}
													className="data-[state=checked]:bg-black"
												/>
											</div>
										)
									)}
								</div>
							</CardContent>
						</Card>

						{/* Settings Toggles */}
						<Card className="bg-white">
							<CardContent className="p-6 space-y-6">
								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Enable Call Recording
										</h4>
										<p className="text-xs text-gray-500">
											Record calls for quality assurance
											and training purposes
										</p>
									</div>
									<Switch
										checked={settings.enableCallRecording}
										onCheckedChange={() =>
											toggleSetting("enableCallRecording")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Generate Transcripts
										</h4>
										<p className="text-xs text-gray-500">
											Create text transcripts of all
											conversations
										</p>
									</div>
									<Switch
										checked={settings.generateTranscripts}
										onCheckedChange={() =>
											toggleSetting("generateTranscripts")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Prank Call Detection
										</h4>
										<p className="text-xs text-gray-500">
											Automatically detect and block
											suspicious calls
										</p>
									</div>
									<Switch
										checked={settings.prankCallDetection}
										onCheckedChange={() =>
											toggleSetting("prankCallDetection")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Voicemail Settings
										</h4>
										<p className="text-xs text-gray-500">
											Allow voice messages when no one can
											answer the call
										</p>
									</div>
									<Switch
										checked={settings.voicemailSettings}
										onCheckedChange={() =>
											toggleSetting("voicemailSettings")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Repeat Appointment
										</h4>
										<p className="text-xs text-gray-500">
											Enable recurring appointments for
											regular customers
										</p>
									</div>
									<Switch
										checked={settings.repeatAppointment}
										onCheckedChange={() =>
											toggleSetting("repeatAppointment")
										}
										className="data-[state=checked]:bg-black"
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="text-sm font-medium text-gray-900">
											Call Recording Retention
										</h4>
										<p className="text-xs text-gray-500">
											Set how long to keep call recordings
										</p>
									</div>
									<div className="flex items-center gap-2">
										<Select defaultValue="30-days">
											<SelectTrigger className="w-32">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="30-days">
													30 Days
												</SelectItem>
												<SelectItem value="60-days">
													60 Days
												</SelectItem>
												<SelectItem value="90-days">
													90 Days
												</SelectItem>
											</SelectContent>
										</Select>
										<Switch
											checked={
												settings.callRecordingRetention
											}
											onCheckedChange={() =>
												toggleSetting(
													"callRecordingRetention"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Action Buttons */}
						<div className="flex gap-4 pt-6">
							<Button
								variant="outline"
								className="px-8 py-3 bg-transparent"
							>
								Cancel
							</Button>
							<Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
								Update
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
