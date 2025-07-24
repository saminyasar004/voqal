import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload, Plus, Eye, ChevronUp, ChevronDown } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import DashboardHeader from "@/components/common/dashboard-header";
import { DaySchedule, WeekSchedule } from "@/pages/on-boarding";

function AddStaffServiceForm({
	onClose,
	onAdd,
}: {
	onClose: () => void;
	onAdd: (service: {
		name: string;
		staff: string;
		price: string;
		duration: string;
		description: string;
		equipment: string;
	}) => void;
}) {
	const [formData, setFormData] = useState({
		name: "",
		staff: "",
		price: "",
		duration: "60",
		description: "",
		equipment: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAdd({
			...formData,
			duration: `${formData.duration} Min`,
			price: formData.price.startsWith("$")
				? formData.price
				: `$${formData.price}`,
		});
	};

	const adjustDuration = (increment: boolean) => {
		const current = Number.parseInt(formData.duration);
		const newValue = increment ? current + 15 : Math.max(15, current - 15);
		setFormData((prev) => ({ ...prev, duration: newValue.toString() }));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6 p-1">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="service-name">Service Name</Label>
					<Input
						id="service-name"
						placeholder="Enter your service name"
						value={formData.name}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
						required
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="staff-name">Staff name</Label>
					<Select
						value={formData.staff}
						onValueChange={(value) =>
							setFormData((prev) => ({ ...prev, staff: value }))
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Pappu" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Pappu Roy">Pappu Roy</SelectItem>
							<SelectItem value="John Smith">
								John Smith
							</SelectItem>
							<SelectItem value="Sarah Johnson">
								Sarah Johnson
							</SelectItem>
							<SelectItem value="Mike Wilson">
								Mike Wilson
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="price">Price</Label>
					<Input
						id="price"
						placeholder="$85"
						value={formData.price}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								price: e.target.value,
							}))
						}
						required
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="duration">Duration (minutes)</Label>
					<div className="relative">
						<Input
							id="duration"
							value={formData.duration}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									duration: e.target.value,
								}))
							}
							className="pr-8"
							required
						/>
						<div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
							<button
								type="button"
								onClick={() => adjustDuration(true)}
								className="h-3 w-4 flex items-center justify-center hover:bg-gray-100 rounded-sm"
							>
								<ChevronUp className="h-2 w-2" />
							</button>
							<button
								type="button"
								onClick={() => adjustDuration(false)}
								className="h-3 w-4 flex items-center justify-center hover:bg-gray-100 rounded-sm"
							>
								<ChevronDown className="h-2 w-2" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					placeholder="Brief Description Of The Service..."
					className="min-h-[100px]"
					value={formData.description}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="equipment">Equipment required</Label>
				<Textarea
					id="equipment"
					placeholder="Hair Dryer, Styling Chair, Shampoo Bowl,"
					className="min-h-[100px]"
					value={formData.equipment}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							equipment: e.target.value,
						}))
					}
					required
				/>
			</div>

			<div className="bg-gray-50 p-4 rounded-lg">
				<p className="text-sm text-gray-600">
					<span className="font-medium">Equipment Constraints:</span>{" "}
					The System Checks Equipment Availability During Booking. If
					A Service Requires A Specific Equipment And It's Not
					Available At The Selected Time, The Booking Cannot Be
					Confirmed.
				</p>
			</div>

			<div className="flex gap-4 pt-4">
				<Button type="button" variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button
					type="submit"
					className="bg-black text-white hover:bg-gray-800"
				>
					Add Service
				</Button>
			</div>
		</form>
	);
}

function AddServiceForm({
	onClose,
	onAdd,
}: {
	onClose: () => void;
	onAdd: (service: {
		name: string;
		price: string;
		duration: string;
		description: string;
		equipment: string;
	}) => void;
}) {
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		duration: "60",
		description: "",
		equipment: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAdd({
			...formData,
			duration: `${formData.duration} Min`,
			price: formData.price.startsWith("$")
				? formData.price
				: `$${formData.price}`,
		});
	};

	const adjustDuration = (increment: boolean) => {
		const current = Number.parseInt(formData.duration);
		const newValue = increment ? current + 15 : Math.max(15, current - 15);
		setFormData((prev) => ({ ...prev, duration: newValue.toString() }));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6 p-1">
			<div className="space-y-2">
				<Label htmlFor="service-name">Service Name</Label>
				<Input
					id="service-name"
					placeholder="Enter your service name"
					value={formData.name}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							name: e.target.value,
						}))
					}
					required
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="price">Price</Label>
					<Input
						id="price"
						placeholder="$85"
						value={formData.price}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								price: e.target.value,
							}))
						}
						required
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="duration">Duration (minutes)</Label>
					<div className="relative">
						<Input
							id="duration"
							value={formData.duration}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									duration: e.target.value,
								}))
							}
							className="pr-8"
							required
						/>
						<div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
							<button
								type="button"
								onClick={() => adjustDuration(true)}
								className="h-3 w-4 flex items-center justify-center hover:bg-gray-100 rounded-sm"
							>
								<ChevronUp className="h-2 w-2" />
							</button>
							<button
								type="button"
								onClick={() => adjustDuration(false)}
								className="h-3 w-4 flex items-center justify-center hover:bg-gray-100 rounded-sm"
							>
								<ChevronDown className="h-2 w-2" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					placeholder="Brief Description Of The Service..."
					className="min-h-[100px]"
					value={formData.description}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="equipment">Equipment required</Label>
				<Textarea
					id="equipment"
					placeholder="Hair Dryer, Styling Chair, Shampoo Bowl,"
					className="min-h-[100px]"
					value={formData.equipment}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							equipment: e.target.value,
						}))
					}
					required
				/>
			</div>

			<div className="bg-gray-50 p-4 rounded-lg">
				<p className="text-sm text-gray-600">
					<span className="font-medium">Equipment Constraints:</span>{" "}
					The System Checks Equipment Availability During Booking. If
					A Service Requires A Specific Equipment And It's Not
					Available At The Selected Time, The Booking Cannot Be
					Confirmed.
				</p>
			</div>

			<div className="flex gap-4 pt-4">
				<Button type="button" variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button
					type="submit"
					className="bg-black text-white hover:bg-gray-800"
				>
					Add Service
				</Button>
			</div>
		</form>
	);
}

export default function EditBusinessProfile() {
	const [activeTab, setActiveTab] = useState("basic-informations");
	const [schedule, setSchedule] = useState<WeekSchedule>({
		monday: { enabled: true, open: "06:00", close: "06:00" },
		tuesday: { enabled: true, open: "06:00", close: "06:00" },
		wednesday: { enabled: true, open: "06:00", close: "06:00" },
		thursday: { enabled: true, open: "06:00", close: "06:00" },
		friday: { enabled: true, open: "06:00", close: "06:00" },
		saturday: { enabled: true, open: "06:00", close: "06:00" },
		sunday: { enabled: false, open: "06:00", close: "06:00" },
	});

	const [services, setServices] = useState([
		{
			id: 1,
			name: "Women's Cut & Style",
			description: "Professional Cut And Blow Dry Styling",
			duration: "60 Min",
			price: "$50",
			equipment: "Hair Dryer, Styling Chair, Shampoo Bowl,",
		},
	]);

	const [staffServices, setStaffServices] = useState([
		{
			id: 1,
			name: "Women's Cut & Style",
			staff: "Pappu Roy",
			description: "Professional Cut And Blow Dry Styling",
			duration: "60 Min",
			price: "$50",
			equipment: "Hair Dryer, Styling Chair, Shampoo Bowl,",
		},
	]);

	const updateSchedule = (
		day: keyof WeekSchedule,
		field: keyof DaySchedule,
		value: boolean | string
	) => {
		setSchedule((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				[field]: value,
			},
		}));
	};

	const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
	const [isAddStaffServiceOpen, setIsAddStaffServiceOpen] = useState(false);

	const days = [
		{ key: "monday" as keyof WeekSchedule, label: "Monday" },
		{ key: "tuesday" as keyof WeekSchedule, label: "Tuesday" },
		{ key: "wednesday" as keyof WeekSchedule, label: "Wednesday" },
		{ key: "thursday" as keyof WeekSchedule, label: "Thursday" },
		{ key: "friday" as keyof WeekSchedule, label: "Friday" },
		{ key: "saturday" as keyof WeekSchedule, label: "Saturday" },
		{ key: "sunday" as keyof WeekSchedule, label: "Sunday" },
	];

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Edit Business Profile
					</h3>
					<p className="text-sm text-foreground">
						Update your business information and settings
					</p>
				</div>
			</div>

			<div className="p-4">
				<div className="w-full">
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className="w-full"
					>
						<TabsList className="grid w-full grid-cols-4 mb-6">
							<TabsTrigger
								value="basic-informations"
								className="data-[state=active]:bg-black data-[state=active]:text-white"
							>
								Basic Informations
							</TabsTrigger>
							<TabsTrigger
								value="services"
								className="data-[state=active]:bg-black data-[state=active]:text-white"
							>
								Services
							</TabsTrigger>
							<TabsTrigger
								value="business-hours"
								className="data-[state=active]:bg-black data-[state=active]:text-white"
							>
								Business Hours
							</TabsTrigger>
							<TabsTrigger
								value="ai-settings"
								className="data-[state=active]:bg-black data-[state=active]:text-white"
							>
								AI Settings
							</TabsTrigger>
						</TabsList>

						<TabsContent value="basic-informations">
							<Card>
								<CardHeader>
									<CardTitle>
										Basic Business Information
									</CardTitle>
									<CardDescription>
										Update your core business details and
										branding information
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="business-name">
												Business Name
											</Label>
											<Input
												id="business-name"
												placeholder="Enter your business name"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="business-type">
												Business Type
											</Label>
											<Select>
												<SelectTrigger>
													<SelectValue placeholder="Select your business type" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="salon">
														Hair Salon
													</SelectItem>
													<SelectItem value="spa">
														Spa
													</SelectItem>
													<SelectItem value="barbershop">
														Barbershop
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="business-phone">
												Business Phone
											</Label>
											<Input
												id="business-phone"
												placeholder="+64 Or +61 Followed By Your Number"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="fallback-number">
												Fallback Number
											</Label>
											<Input
												id="fallback-number"
												placeholder="+64 Or +61 Followed By Your Number"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="business-email">
												Business Email
											</Label>
											<Input
												id="business-email"
												placeholder="Your@Business.Com"
											/>
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="city">
													City
												</Label>
												<Input
													id="city"
													placeholder="Auckland"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="country">
													Country
												</Label>
												<Select>
													<SelectTrigger>
														<SelectValue placeholder="Select Country" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="nz">
															New Zealand
														</SelectItem>
														<SelectItem value="au">
															Australia
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="website">
												Website (Optional)
											</Label>
											<Input
												id="website"
												placeholder="https://YourBusiness.Com"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="street-address">
												Street Address
											</Label>
											<Input
												id="street-address"
												placeholder="123 Main Street"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="business-description">
												Business Description
											</Label>
											<Textarea
												id="business-description"
												placeholder="Briefly Describe Your Business And The Services"
												className="min-h-[120px]"
											/>
										</div>
										<div className="space-y-2">
											<Label>Business logo/photo</Label>
											<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
												<Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
												<p className="text-sm text-gray-500 mb-2">
													drag and drop your logo
													here, or click to browse
												</p>
												<Button
													variant="outline"
													size="sm"
												>
													Choose File
												</Button>
											</div>
										</div>
									</div>

									<div className="flex gap-4 pt-4">
										<Button variant="outline">
											Cancel
										</Button>
										<Button className="bg-black text-white hover:bg-gray-800">
											Save & Changes
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="services">
							<div className="space-y-6">
								<Card>
									<CardHeader className="flex flex-row items-center justify-between">
										<div>
											<CardTitle>
												Services & Treatments
											</CardTitle>
											<CardDescription>
												Add your services so customers
												can book the right appointments
											</CardDescription>
										</div>
										<div className="flex gap-2">
											<Dialog
												open={isAddServiceOpen}
												onOpenChange={
													setIsAddServiceOpen
												}
											>
												<DialogTrigger asChild>
													<Button className="bg-black text-white hover:bg-gray-800">
														Add Services
														<Plus className="w-4 h-4 mr-2" />
													</Button>
												</DialogTrigger>
												<DialogContent className="max-w-2xl">
													<DialogHeader>
														<DialogTitle>
															Add New Service
														</DialogTitle>
													</DialogHeader>
													<AddServiceForm
														onClose={() =>
															setIsAddServiceOpen(
																false
															)
														}
														onAdd={(service) => {
															setServices(
																(prev) => [
																	...prev,
																	{
																		...service,
																		id: Date.now(),
																	},
																]
															);
															setIsAddServiceOpen(
																false
															);
														}}
													/>
												</DialogContent>
											</Dialog>
											<Button variant="outline">
												View All
												<Eye className="w-4 h-4 mr-2" />
											</Button>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										{services.map((service) => (
											<Card
												key={service.id}
												className="border border-gray-200"
											>
												<CardContent className="p-4">
													<div className="flex justify-between items-start">
														<div className="space-y-1">
															<h3 className="font-semibold">
																{service.name}
															</h3>
															<p className="text-sm text-gray-600">
																{
																	service.description
																}
															</p>
															<p className="text-sm text-gray-600">
																{
																	service.duration
																}
															</p>
															<p className="text-sm text-gray-600">
																{service.price}
															</p>
															<p className="text-sm text-gray-500">
																{
																	service.equipment
																}
															</p>
														</div>
														<Button
															variant="outline"
															size="sm"
														>
															Edit
														</Button>
													</div>
												</CardContent>
											</Card>
										))}
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="flex flex-row items-center justify-between">
										<div>
											<CardTitle>
												Staff Services & Treatments
											</CardTitle>
											<CardDescription>
												Add your services so customers
												can book the right appointments
											</CardDescription>
										</div>
										<div className="flex gap-2">
											<Dialog
												open={isAddStaffServiceOpen}
												onOpenChange={
													setIsAddStaffServiceOpen
												}
											>
												<DialogTrigger asChild>
													<Button className="bg-black text-white hover:bg-gray-800">
														Add Services
														<Plus className="w-4 h-4 mr-2" />
													</Button>
												</DialogTrigger>
												<DialogContent className="max-w-2xl">
													<DialogHeader>
														<DialogTitle>
															Add New Staff
															Service
														</DialogTitle>
													</DialogHeader>
													<AddStaffServiceForm
														onClose={() =>
															setIsAddStaffServiceOpen(
																false
															)
														}
														onAdd={(service) => {
															setStaffServices(
																(prev) => [
																	...prev,
																	{
																		...service,
																		id: Date.now(),
																	},
																]
															);
															setIsAddStaffServiceOpen(
																false
															);
														}}
													/>
												</DialogContent>
											</Dialog>
											<Button variant="outline">
												View All
												<Eye className="w-4 h-4 mr-2" />
											</Button>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										{staffServices.map((service) => (
											<Card
												key={service.id}
												className="border border-gray-200"
											>
												<CardContent className="p-4">
													<div className="flex justify-between items-start">
														<div className="space-y-1">
															<h3 className="font-semibold">
																{service.name}
															</h3>
															<p className="text-sm font-medium text-gray-700">
																{service.staff}
															</p>
															<p className="text-sm text-gray-600">
																{
																	service.description
																}
															</p>
															<p className="text-sm text-gray-600">
																{
																	service.duration
																}
															</p>
															<p className="text-sm text-gray-600">
																{service.price}
															</p>
															<p className="text-sm text-gray-500">
																{
																	service.equipment
																}
															</p>
														</div>
														<Button
															variant="outline"
															size="sm"
														>
															Edit
														</Button>
													</div>
												</CardContent>
											</Card>
										))}
									</CardContent>
								</Card>

								<div className="flex gap-4 pt-4">
									<Button variant="outline">Cancel</Button>
									<Button className="bg-black text-white hover:bg-gray-800">
										Save & Changes
									</Button>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="business-hours">
							<Card>
								<CardHeader>
									<CardTitle>
										Schedule & Availability
									</CardTitle>
									<CardDescription>
										Set your business hours and booking
										preferences
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div>
										<h3 className="text-lg font-semibold mb-4">
											Business Hours
										</h3>
										<div className="space-y-4">
											{days.map(({ key, label }) => (
												<div
													key={key}
													className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
												>
													<div className="flex items-center gap-4">
														<Switch
															id={key}
															checked={
																schedule[key]
																	.enabled
															}
															onCheckedChange={(
																checked
															) =>
																updateSchedule(
																	key,
																	"enabled",
																	checked
																)
															}
															className="data-[state=checked]:bg-black"
														/>
														<Label
															htmlFor={key}
															className="text-sm font-medium text-gray-700 min-w-[80px] cursor-pointer"
														>
															{label}
														</Label>
													</div>

													<div className="flex items-center gap-6">
														<div className="flex items-center gap-2">
															<Label className="text-sm text-gray-600">
																Open:
															</Label>
															<div className="flex items-center gap-1">
																<Input
																	type="time"
																	value={
																		schedule[
																			key
																		].open
																	}
																	onChange={(
																		e
																	) =>
																		updateSchedule(
																			key,
																			"open",
																			e
																				.target
																				.value
																		)
																	}
																	className="w-min h-8 text-xs"
																	disabled={
																		!schedule[
																			key
																		]
																			.enabled
																	}
																/>
															</div>
														</div>

														<div className="flex items-center gap-2">
															<Label className="text-sm text-gray-600">
																Close:
															</Label>
															<div className="flex items-center gap-1">
																<Input
																	type="time"
																	value={
																		schedule[
																			key
																		].close
																	}
																	onChange={(
																		e
																	) =>
																		updateSchedule(
																			key,
																			"close",
																			e
																				.target
																				.value
																		)
																	}
																	className="w-min h-8 text-xs"
																	disabled={
																		!schedule[
																			key
																		]
																			.enabled
																	}
																/>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>

									<div>
										<h3 className="text-lg font-semibold mb-4">
											Call Handling Settings
										</h3>
										<div className="space-y-4">
											<div>
												<Label className="text-sm font-medium">
													AI Answering Schedule
												</Label>
												<div className="grid grid-cols-2 gap-4 mt-2">
													<Select defaultValue="business-hours">
														<SelectTrigger>
															<SelectValue />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="business-hours">
																Business Hours
																Only
															</SelectItem>
															<SelectItem value="24-7">
																24/7
															</SelectItem>
														</SelectContent>
													</Select>
													<Select defaultValue="60">
														<SelectTrigger>
															<SelectValue />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="30">
																30
															</SelectItem>
															<SelectItem value="60">
																60
															</SelectItem>
															<SelectItem value="90">
																90
															</SelectItem>
														</SelectContent>
													</Select>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="ai-settings">
							<Card>
								<CardHeader>
									<CardTitle>AI Personality</CardTitle>
									<CardDescription>
										Customize your AI assistant's
										personality to match your brand
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div>
										<h3 className="text-lg font-semibold mb-4">
											Voice & Tone
										</h3>
										<div className="space-y-4">
											<div>
												<Label className="text-sm font-medium">
													AI Voice
												</Label>
												<Select defaultValue="kiwi-female">
													<SelectTrigger className="mt-2">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="kiwi-female">
															Kiwi Female -
															Friendly &
															Professional
														</SelectItem>
														<SelectItem value="aussie-male">
															Aussie Male - Casual
															& Friendly
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label className="text-sm font-medium">
													Conversation Tone
												</Label>
												<Select defaultValue="friendly-welcome">
													<SelectTrigger className="mt-2">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="friendly-welcome">
															Friendly And Welcome
														</SelectItem>
														<SelectItem value="professional">
															Professional
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</div>

									<div>
										<h3 className="text-lg font-semibold mb-4">
											Key Business Information & Knowledge
											Base
										</h3>
										<p className="text-sm text-gray-600 mb-4">
											Provide information about your
											business through multiple sources
											for comprehensive AI knowledge
										</p>

										<div className="space-y-4">
											<div>
												<Label className="text-sm font-medium">
													Business Information
												</Label>
												<Textarea
													className="mt-2 min-h-[100px]"
													placeholder="We're Located In The Heart Of Auckland, Specialising In Modern Cuts And Colours. Our Experienced Team Has Been Serving The Community For Over 10 Years..."
												/>
											</div>
											<div>
												<Label className="text-sm font-medium">
													Custom Messages
												</Label>
												<Textarea
													className="mt-2 min-h-[100px]"
													placeholder="G'day! Thanks For Calling [Business Name]. I'm Your AI Assistant And I'm Here To Help You Book An Appointment. How Can I Help You Today?
Use [Business Name] To Auto"
												/>
											</div>
										</div>
									</div>

									<div>
										<h3 className="text-lg font-semibold mb-4">
											Call Handling Settings
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<Label className="text-sm font-medium">
													AI Answering Schedule
												</Label>
												<Select defaultValue="business-hours">
													<SelectTrigger className="mt-2">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="business-hours">
															Business Hours Only
														</SelectItem>
														<SelectItem value="24-7">
															24/7
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label className="text-sm font-medium">
													Maximum Call Duration
													(minutes)
												</Label>
												<Select defaultValue="60">
													<SelectTrigger className="mt-2">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="30">
															30
														</SelectItem>
														<SelectItem value="60">
															60
														</SelectItem>
														<SelectItem value="90">
															90
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>

										<div className="space-y-4">
											<div className="flex items-center justify-between p-4 border rounded-lg">
												<div>
													<h4 className="font-medium">
														Enable Call Recording
													</h4>
													<p className="text-sm text-gray-600">
														Record Calls For Quality
														Assurance
													</p>
												</div>
												<Switch defaultChecked />
											</div>
											<div className="flex items-center justify-between p-4 border rounded-lg">
												<div>
													<h4 className="font-medium">
														Generate Transcripts
													</h4>
													<p className="text-sm text-gray-600">
														Create Text Transcripts
														Of All Conversations
													</p>
												</div>
												<Switch defaultChecked />
											</div>
											<div className="flex items-center justify-between p-4 border rounded-lg">
												<div>
													<h4 className="font-medium">
														Enable Call Transcripts
													</h4>
													<p className="text-sm text-gray-600">
														Automatically Detect And
														Block Suspicious Calls
													</p>
												</div>
												<Switch defaultChecked />
											</div>
										</div>
									</div>

									<div className="flex gap-4 pt-4">
										<Button variant="outline">
											Cancel
										</Button>
										<Button className="bg-black text-white hover:bg-gray-800">
											Save & Changes
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
}
