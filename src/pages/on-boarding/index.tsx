import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Stepper } from "@mantine/core";
import {
	ArrowLeft,
	ArrowRight,
	BriefcaseBusiness,
	CalendarDays,
	Download,
	Edit,
	Eye,
	FileText,
	Plus,
	Sparkles,
	Upload,
	Users,
	X,
} from "lucide-react";
import { useState } from "react";

export default function Onboarding() {
	const [active, setActive] = useState(0);
	const nextStep = () =>
		setActive((current) => (current < 5 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<section className="py-20">
			<div className="container flex flex-col gap-4 items-center">
				<h3 className="text-5xl font-semibold text-primary">
					Business Profile
				</h3>

				<div className="w-full flex items-center">
					<Stepper
						active={active}
						onStepClick={setActive}
						color="rgba(30, 30, 30, 1)
"
						className="w-full"
						allowNextStepsSelect={false}
					>
						<Stepper.Step
							icon={<BriefcaseBusiness size={18} />}
							label="Business Info"
						>
							<BusinessInfo
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<BriefcaseBusiness size={18} />}
							label="Services"
						>
							<Services
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<Users size={18} />}
							label="Team Members"
						>
							<StaffAndTeamMembers
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<CalendarDays size={18} />}
							label="Service Time Set"
						>
							<ScheduleAvailability
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<Sparkles size={18} />}
							label="AI Configuration"
						>
							<AIConfiguration
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<Eye size={18} />}
							label="Review & Launch"
						>
							<ReviewAndLaunch
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						{/* <Stepper.Step
							icon={<BotMessageSquare size={18} />}
							label="AI Configuration"
						>
							<AIConfiguration
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Completed
						>
							<AllSet previousStep={prevStep} />
						</Stepper.Completed> */}
					</Stepper>
				</div>
			</div>
		</section>
	);
}

const BusinessInfo = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		// Handle file drop logic here
	};

	return (
		<>
			<div className="w-full p-4 bg[#B3B3B3]">
				<Card className="w-full">
					<CardHeader className="pb-6">
						<CardTitle className="text-2xl font-semibold text-gray-900">
							Business Information
						</CardTitle>
						<p className="text-sm text-gray-600 mt-1">
							Tell us about your business so we can customize
							Vocal for your needs
						</p>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label
									htmlFor="business-name"
									className="text-sm font-medium text-gray-700"
								>
									Business Name
								</Label>
								<Input
									id="business-name"
									placeholder="Enter your business name"
									className="h-11"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="business-type"
									className="text-sm font-medium text-gray-700"
								>
									Business Type
								</Label>
								<Select>
									<SelectTrigger className="h-11">
										<SelectValue placeholder="Select your business type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="spa_wellness">
											Spa & Wellness
										</SelectItem>
										<SelectItem value="nail_salon">
											Nail Salon
										</SelectItem>
										<SelectItem value="hairdresser">
											Hairdresser
										</SelectItem>
										<SelectItem value="barber">
											Barber
										</SelectItem>
										<SelectItem value="physio">
											Physio
										</SelectItem>
										<SelectItem value="massage">
											Massage
										</SelectItem>
										<SelectItem value="dentist">
											Dentist
										</SelectItem>
										<SelectItem value="doctor">
											Doctor
										</SelectItem>
										<SelectItem value="other_health_professional">
											Other Health Professional
										</SelectItem>
										<SelectItem value="mechanic">
											Mechanic
										</SelectItem>
										<SelectItem value="fitness">
											Fitness
										</SelectItem>
										<SelectItem value="pet_salon">
											Pet Salon
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<Label
									htmlFor="street-address"
									className="text-sm font-medium text-gray-700"
								>
									Street Address
								</Label>
								<Input
									id="street-address"
									placeholder="123 main street"
									className="h-11"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="city"
									className="text-sm font-medium text-gray-700"
								>
									City
								</Label>
								<Input
									id="city"
									placeholder="Auckland"
									className="h-11"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="country"
									className="text-sm font-medium text-gray-700"
								>
									Country
								</Label>
								<Select>
									<SelectTrigger className="h-11">
										<SelectValue placeholder="Select country" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="nz">
											New Zealand
										</SelectItem>
										<SelectItem value="au">
											Australia
										</SelectItem>
										<SelectItem value="us">
											United States
										</SelectItem>
										<SelectItem value="uk">
											United Kingdom
										</SelectItem>
										<SelectItem value="ca">
											Canada
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label
									htmlFor="business-phone"
									className="text-sm font-medium text-gray-700"
								>
									Business Phone
								</Label>
								<Input
									id="business-phone"
									placeholder="+64 or +61 followed by your number"
									className="h-11"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="website"
									className="text-sm font-medium text-gray-700"
								>
									Website (Optional)
								</Label>
								<Input
									id="website"
									placeholder="https://yourbusiness.com"
									className="h-11"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label
									htmlFor="twilio-number"
									className="text-sm font-medium text-gray-700"
								>
									AI Twilio number choice
								</Label>
								<Select>
									<SelectTrigger className="h-11">
										<SelectValue placeholder="+1 (415) 523-8886" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="number1">
											+1 (415) 523-8886
										</SelectItem>
										<SelectItem value="number2">
											+44 7936 946123
										</SelectItem>
										<SelectItem value="number3">
											+91 98183 00123
										</SelectItem>
										<SelectItem value="number4">
											+1 (929) 377-4466
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="business-email"
									className="text-sm font-medium text-gray-700"
								>
									Business Email
								</Label>
								<Input
									id="business-email"
									placeholder="your@business.com"
									type="email"
									className="h-11"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label
									htmlFor="business-description"
									className="text-sm font-medium text-gray-700"
								>
									Business Description
								</Label>
								<Textarea
									id="business-description"
									placeholder="Briefly describe your business and the services"
									className="min-h-[120px] resize-none"
								/>
							</div>
							<div className="space-y-2">
								<Label className="text-sm font-medium text-gray-700">
									Business logo/photo
								</Label>
								<div
									className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
										dragActive
											? "border-blue-400 bg-blue-50"
											: "border-gray-300 bg-gray-50"
									}`}
									onDragEnter={handleDrag}
									onDragLeave={handleDrag}
									onDragOver={handleDrag}
									onDrop={handleDrop}
								>
									<Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
									<p className="text-sm text-gray-500 mb-3">
										drag and drop your logo here, or click
										to browse
									</p>
									<Button variant="outline" size="sm">
										Choose File
									</Button>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const Services = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [discountEnabled, setDiscountEnabled] = useState(true);
	const [services, setServices] = useState([
		{
			id: 1,
			serviceName: "Women's Cut & Style",
			price: "85",
			duration: "60",
			description: "Professional Cut And Blow Dry Styling",
			equipmentItems: [{ name: "Styling Chair", quantity: "1" }],
		},
		{
			id: 2,
			serviceName: "Women's Cut & Style",
			price: "85",
			duration: "60",
			description: "Professional Cut And Blow Dry Styling",
			equipmentItems: [{ name: "Styling Chair", quantity: "1" }],
		},
		{
			id: 3,
			serviceName: "Women's Cut & Style",
			price: "85",
			duration: "60",
			description: "Professional Cut And Blow Dry Styling",
			equipmentItems: [{ name: "Styling Chair", quantity: "1" }],
		},
	]);

	return (
		<>
			<div className="p-4 space-y-6">
				{/* Services Section */}
				<Card className="w-full">
					<CardHeader className="pb-4">
						<CardTitle className="text-xl font-semibold text-gray-900">
							Services
						</CardTitle>
						<p className="text-sm text-gray-600">
							Add your services so customers can book the right
							appointments
						</p>
					</CardHeader>
					<CardContent>
						{services.map((service, serviceIndex) => {
							// Check if service has data filled in
							const isServiceFilled =
								service.serviceName &&
								service.price &&
								service.description;

							if (isServiceFilled) {
								return (
									<div
										key={service.id}
										className="bg-white border border-gray-200 rounded-lg p-4 mb-3 relative"
									>
										<div className="flex justify-between items-start pr-8">
											<div className="flex-1">
												<h3 className="font-medium text-gray-900 mb-1">
													{service.id}.{" "}
													{service.serviceName}
												</h3>
												<p className="text-sm text-gray-600 mb-2">
													{service.description}
												</p>
												<div className="flex items-center gap-4 text-sm text-gray-500">
													<span>
														${service.price}
													</span>
													<span>
														{service.duration} min
													</span>
													<span>
														{service.equipmentItems
															.map(
																(item) =>
																	item.name
															)
															.join(", ")}
													</span>
												</div>
											</div>
											<div className="flex gap-2 ml-4">
												<Button
													variant="outline"
													size="sm"
													className="text-sm px-3 py-1 h-8 bg-transparent"
													onClick={() => {
														const newServices = [
															...services,
														];
														newServices[
															serviceIndex
														] = {
															...service,
															// isEditing: true,
														};
														setServices(
															newServices
														);
													}}
												>
													Edit
												</Button>
												<Button
													variant="destructive"
													size="sm"
													className="text-sm px-3 py-1 h-8 bg-red-500 hover:bg-red-600"
													onClick={() => {
														const newServices =
															services.filter(
																(_, index) =>
																	index !==
																	serviceIndex
															);
														const renumberedServices =
															newServices.map(
																(s, index) => ({
																	...s,
																	id:
																		index +
																		1,
																})
															);
														setServices(
															renumberedServices
														);
													}}
												>
													Delete
												</Button>
											</div>
										</div>
									</div>
								);
							} else {
								return (
									<Card
										key={service.id}
										className="bg-gray-50 border-gray-200 mb-4 relative"
									>
										<button
											onClick={() => {
												const newServices =
													services.filter(
														(_, index) =>
															index !==
															serviceIndex
													);
												const renumberedServices =
													newServices.map(
														(s, index) => ({
															...s,
															id: index + 1,
														})
													);
												setServices(renumberedServices);
											}}
											className="text-gray-400 hover:text-gray-600 absolute top-3 right-3"
										>
											<X className="h-5 w-5" />
										</button>

										<CardHeader className="pb-4 pr-12">
											<CardTitle className="text-base font-medium text-gray-800">
												Services {service.id}
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4">
											<div className="space-y-2">
												<Label
													htmlFor={`service-name-${service.id}`}
													className="text-sm font-medium text-gray-700"
												>
													Service Name
												</Label>
												<Input
													id={`service-name-${service.id}`}
													placeholder="Enter your service name"
													className="h-10"
													value={service.serviceName}
													onChange={(e) => {
														const newServices = [
															...services,
														];
														newServices[
															serviceIndex
														].serviceName =
															e.target.value;
														setServices(
															newServices
														);
													}}
												/>
											</div>

											<div className="grid grid-cols-2 gap-4">
												<div className="space-y-2">
													<Label
														htmlFor={`price-${service.id}`}
														className="text-sm font-medium text-gray-700"
													>
														Price
													</Label>
													<Input
														id={`price-${service.id}`}
														placeholder="$85"
														className="h-10"
														value={service.price}
														onChange={(e) => {
															const newServices =
																[...services];
															newServices[
																serviceIndex
															].price =
																e.target.value;
															setServices(
																newServices
															);
														}}
													/>
												</div>
												<div className="space-y-2">
													<Label
														htmlFor={`duration-${service.id}`}
														className="text-sm font-medium text-gray-700"
													>
														Duration (minutes)
													</Label>
													<Select
														value={service.duration}
														onValueChange={(
															value
														) => {
															const newServices =
																[...services];
															newServices[
																serviceIndex
															].duration = value;
															setServices(
																newServices
															);
														}}
													>
														<SelectTrigger className="h-10">
															<SelectValue />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="30">
																30
															</SelectItem>
															<SelectItem value="45">
																45
															</SelectItem>
															<SelectItem value="60">
																60
															</SelectItem>
															<SelectItem value="90">
																90
															</SelectItem>
															<SelectItem value="120">
																120
															</SelectItem>
														</SelectContent>
													</Select>
												</div>
											</div>

											<div className="space-y-2">
												<Label
													htmlFor={`description-${service.id}`}
													className="text-sm font-medium text-gray-700"
												>
													Description
												</Label>
												<Textarea
													id={`description-${service.id}`}
													placeholder="Brief Description Of The Service..."
													className="min-h-[80px] resize-none"
													value={service.description}
													onChange={(e) => {
														const newServices = [
															...services,
														];
														newServices[
															serviceIndex
														].description =
															e.target.value;
														setServices(
															newServices
														);
													}}
												/>
											</div>

											<div className="space-y-3">
												<Label className="text-sm font-medium text-gray-700">
													Equipment required Add
												</Label>
												<div className="space-y-2">
													{service.equipmentItems.map(
														(item, itemIndex) => (
															<div
																key={itemIndex}
																className="flex gap-2 items-center bg-white border border-gray-200 rounded-lg p-2"
															>
																<Input
																	value={
																		item.name
																	}
																	onChange={(
																		e
																	) => {
																		const newServices =
																			[
																				...services,
																			];
																		newServices[
																			serviceIndex
																		].equipmentItems[
																			itemIndex
																		].name =
																			e.target.value;
																		setServices(
																			newServices
																		);
																	}}
																	placeholder="Equipment name"
																	className="h-9 flex-1"
																/>
																<Input
																	value={
																		item.quantity
																	}
																	onChange={(
																		e
																	) => {
																		const newServices =
																			[
																				...services,
																			];
																		newServices[
																			serviceIndex
																		].equipmentItems[
																			itemIndex
																		].quantity =
																			e.target.value;
																		setServices(
																			newServices
																		);
																	}}
																	className="h-9 w-16 text-center"
																/>
																<Button
																	size="sm"
																	variant="outline"
																	className="h-9 w-9 p-0 rounded-full bg-transparent"
																	onClick={() => {
																		const newServices =
																			[
																				...services,
																			];
																		newServices[
																			serviceIndex
																		].equipmentItems.push(
																			{
																				name: "",
																				quantity:
																					"1",
																			}
																		);
																		setServices(
																			newServices
																		);
																	}}
																>
																	<Plus className="h-4 w-4" />
																</Button>
																<button
																	onClick={() => {
																		const newServices =
																			[
																				...services,
																			];
																		newServices[
																			serviceIndex
																		].equipmentItems =
																			newServices[
																				serviceIndex
																			].equipmentItems.filter(
																				(
																					_,
																					index
																				) =>
																					index !==
																					itemIndex
																			);
																		setServices(
																			newServices
																		);
																	}}
																	className="text-gray-400 hover:text-gray-600"
																>
																	<X className="h-5 w-5" />
																</button>
															</div>
														)
													)}
												</div>
											</div>

											<div className="space-y-2">
												<Label className="text-sm font-medium text-gray-700">
													Equipment Comments:
												</Label>
												<p className="text-xs text-gray-600 leading-relaxed">
													The System Checks Equipment
													Availability During Booking.
													If A Service Requires A
													Specific Equipment And It's
													Not Available At The
													Selected Time, The Booking
													Cannot Be Confirmed.
												</p>
											</div>
										</CardContent>
									</Card>
								);
							}
						})}

						<div className="mt-4">
							<Button
								variant="outline"
								className="text-sm bg-transparent"
								onClick={() => {
									const newService = {
										id: services.length + 1,
										serviceName: "",
										price: "",
										duration: "60",
										description: "",
										equipmentItems: [
											{
												name: "Shampoo Bowl",
												quantity: "11",
											},
											{
												name: "Shampoo Bowl",
												quantity: "11",
											},
										],
									};
									setServices([...services, newService]);
								}}
							>
								+ Add another service
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Discount Management Section */}
				<Card className="w-full">
					<CardHeader className="pb-4">
						<div className="flex items-center justify-between">
							<div>
								<CardTitle className="text-xl font-semibold text-gray-900">
									Discount Management(%)
								</CardTitle>
								<p className="text-sm text-gray-600 mt-1">
									Set up seasonal discounts and special offers
									for your customers
								</p>
							</div>
							<Switch
								checked={discountEnabled}
								onCheckedChange={setDiscountEnabled}
								className="data-[state=checked]:bg-black"
							/>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label
									htmlFor="discount-title"
									className="text-sm font-medium text-gray-700"
								>
									Discount Title
								</Label>
								<Input
									id="discount-title"
									defaultValue="Summer Sale - Holiday Special"
									className="h-10"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="discount-percentage"
									className="text-sm font-medium text-gray-700"
								>
									Discount Percentage
								</Label>
								<Input
									id="discount-percentage"
									defaultValue="10%"
									className="h-10"
								/>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label
									htmlFor="start-date"
									className="text-sm font-medium text-gray-700"
								>
									Start Date
								</Label>
								<Input
									id="start-date"
									type="date"
									placeholder="mm/dd/yyyy"
									className="h-10"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="end-date"
									className="text-sm font-medium text-gray-700"
								>
									End Date
								</Label>
								<Input
									id="end-date"
									type="date"
									placeholder="mm/dd/yyyy"
									className="h-10"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="discount-description"
								className="text-sm font-medium text-gray-700"
							>
								Descriptions
							</Label>
							<Textarea
								id="discount-description"
								placeholder="describe the discount terms and conditions"
								className="min-h-[80px] resize-none"
							/>
						</div>

						<div className="pt-4">
							<Button className="bg-black hover:bg-gray-800 text-white px-8">
								Save
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

interface TeamMember {
	id: number;
	fullName: string;
	role: string;
	phone: string;
	email: string;
}

interface Service {
	id: number;
	name: string;
	duration: string;
	price: string;
	description: string;
	equipment: string;
}

interface StaffMember {
	id: number;
	fullName: string;
	role: string;
	phone: string;
	email: string;
	license: string;
	experience: string;
	serviceFee: string;
	qualifications: string;
	services: Service[];
}

const StaffAndTeamMembers = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [availableDays, setAvailableDays] = useState({
		mon: true,
		tue: true,
		wed: true,
		thu: true,
		fri: true,
		sat: false,
		sun: false,
	});

	const [showAddTeamMember, setShowAddTeamMember] = useState(false);
	const [showAddStaffMember, setShowAddStaffMember] = useState(false);
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
	const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
		{
			id: 1,
			fullName: "Lisa Taylor",
			role: "Senior Stylist",
			phone: "+44 123 456789",
			email: "lisa@example.com",
			license: "ABC123",
			experience: "5",
			serviceFee: "$85",
			qualifications: "MBBS MA Diploma in Cosmetology",
			services: [],
		},
	]);

	const [newTeamMember, setNewTeamMember] = useState({
		fullName: "",
		role: "",
		phone: "",
		email: "",
	});

	const [newStaffMember, setNewStaffMember] = useState({
		fullName: "",
		role: "",
		phone: "",
		email: "",
		license: "",
		experience: "",
		serviceFee: "",
		qualifications: "",
		services: [] as Service[],
	});

	const [editingStaffId, setEditingStaffId] = useState<number | null>(null);

	const handleAddTeamMember = () => {
		if (newTeamMember.fullName && newTeamMember.role) {
			const teamMember: TeamMember = {
				id: teamMembers.length + 1,
				...newTeamMember,
			};
			setTeamMembers([...teamMembers, teamMember]);
			setNewTeamMember({ fullName: "", role: "", phone: "", email: "" });
			setShowAddTeamMember(false);
		}
	};

	const handleAddStaffMember = () => {
		if (newStaffMember.fullName && newStaffMember.role) {
			const staffMember: StaffMember = {
				id: staffMembers.length + 1,
				...newStaffMember,
			};
			setStaffMembers([...staffMembers, staffMember]);
			setNewStaffMember({
				fullName: "",
				role: "",
				phone: "",
				email: "",
				license: "",
				experience: "",
				serviceFee: "",
				qualifications: "",
				services: [],
			});
			setShowAddStaffMember(false);
		}
	};

	const handleAddService = (staffId: number) => {
		const newService: Service = {
			id: Date.now(),
			name: "",
			duration: "60",
			price: "",
			description: "",
			equipment: "",
		};

		if (staffId === 0) {
			// Adding to new staff member
			setNewStaffMember((prev) => ({
				...prev,
				services: [...prev.services, newService],
			}));
		} else {
			// Adding to existing staff member
			setStaffMembers((prev) =>
				prev.map((staff) =>
					staff.id === staffId
						? {
								...staff,
								services: [...staff.services, newService],
						  }
						: staff
				)
			);
		}
	};

	const handleRemoveService = (staffId: number, serviceId: number) => {
		if (staffId === 0) {
			setNewStaffMember((prev) => ({
				...prev,
				services: prev.services.filter(
					(service) => service.id !== serviceId
				),
			}));
		} else {
			setStaffMembers((prev) =>
				prev.map((staff) =>
					staff.id === staffId
						? {
								...staff,
								services: staff.services.filter(
									(service) => service.id !== serviceId
								),
						  }
						: staff
				)
			);
		}
	};

	const handleUpdateService = (
		staffId: number,
		serviceId: number,
		field: string,
		value: string
	) => {
		if (staffId === 0) {
			setNewStaffMember((prev) => ({
				...prev,
				services: prev.services.map((service) =>
					service.id === serviceId
						? { ...service, [field]: value }
						: service
				),
			}));
		} else {
			setStaffMembers((prev) =>
				prev.map((staff) =>
					staff.id === staffId
						? {
								...staff,
								services: staff.services.map((service) =>
									service.id === serviceId
										? { ...service, [field]: value }
										: service
								),
						  }
						: staff
				)
			);
		}
	};

	const ServiceForm = ({
		service,
		staffId,
	}: {
		service: Service;
		staffId: number;
	}) => (
		<Card className="mb-4 relative">
			<button
				onClick={() => handleRemoveService(staffId, service.id)}
				className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center text-sm font-medium z-10"
			>
				<X className="h-3 w-3" />
			</button>
			<CardContent className="p-4 pr-12">
				<h3 className="text-base font-medium text-gray-800 mb-4">
					Service {service.id}
				</h3>

				<div className="grid grid-cols-3 gap-4 mb-4">
					<div>
						<Label className="text-sm font-medium text-gray-700">
							Service Name
						</Label>
						<Input
							value={service.name}
							onChange={(e) =>
								handleUpdateService(
									staffId,
									service.id,
									"name",
									e.target.value
								)
							}
							placeholder="Custom Facial"
							className="mt-1"
						/>
					</div>
					<div>
						<Label className="text-sm font-medium text-gray-700">
							Duration (minutes)
						</Label>
						<Select
							value={service.duration}
							onValueChange={(value) =>
								handleUpdateService(
									staffId,
									service.id,
									"duration",
									value
								)
							}
						>
							<SelectTrigger className="mt-1">
								<SelectValue placeholder="60" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="30">30</SelectItem>
								<SelectItem value="45">45</SelectItem>
								<SelectItem value="60">60</SelectItem>
								<SelectItem value="90">90</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label className="text-sm font-medium text-gray-700">
							Price
						</Label>
						<Input
							value={service.price}
							onChange={(e) =>
								handleUpdateService(
									staffId,
									service.id,
									"price",
									e.target.value
								)
							}
							placeholder="$125"
							className="mt-1"
						/>
					</div>
				</div>

				<div className="mb-4">
					<Label className="text-sm font-medium text-gray-700">
						Description
					</Label>
					<Textarea
						value={service.description}
						onChange={(e) =>
							handleUpdateService(
								staffId,
								service.id,
								"description",
								e.target.value
							)
						}
						placeholder="Specialized"
						className="mt-1"
					/>
				</div>

				<div className="mb-4">
					<Label className="text-sm font-medium text-gray-700">
						Equipment required
					</Label>
					<Input
						value={service.equipment}
						onChange={(e) =>
							handleUpdateService(
								staffId,
								service.id,
								"equipment",
								e.target.value
							)
						}
						placeholder="Hair Chair, Styling Chair, Shampoo Bowl"
						className="mt-1"
					/>
				</div>

				<div>
					<Label className="text-sm font-medium text-gray-700">
						Equipment Comments:
					</Label>
					<p className="text-xs text-gray-600 mt-1">
						The System Checks Equipment Availability During Booking.
						If A Service Requires A Specific Equipment And It's Not
						Available At The Selected Time, The Booking Cannot Be
						Confirmed.
					</p>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<>
			<div className="p-6">
				<div className="w-full space-y-6 bg-white border border-gray-200 rounded-lg p-4">
					{/* Team Members Section */}
					<div className="">
						<h2 className="text-lg font-semibold text-gray-900">
							Team Members (Administrative/Management)
						</h2>
						<p className="text-sm text-gray-600 mb-4">
							Add team members who will manage the business
							operations and appointments
						</p>

						{/* Existing Team Members */}
						{teamMembers.map((member) => (
							<div
								key={member.id}
								className="border border-gray-200 rounded-lg p-5 mb-4"
							>
								<h3 className="text-base font-medium text-gray-800 mb-4">
									Team Member {member.id}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-gray-700">
											Full Name
										</p>
										<p className="text-sm text-gray-600">
											{member.fullName}
										</p>
									</div>
									<div>
										<p className="text-sm font-medium text-gray-700">
											Role/Title
										</p>
										<p className="text-sm text-gray-600">
											{member.role}
										</p>
									</div>
									<div>
										<p className="text-sm font-medium text-gray-700">
											Phone
										</p>
										<p className="text-sm text-gray-600">
											{member.phone}
										</p>
									</div>
									<div>
										<p className="text-sm font-medium text-gray-700">
											Email
										</p>
										<p className="text-sm text-gray-600">
											{member.email}
										</p>
									</div>
								</div>
							</div>
						))}

						{/* Add Team Member Form */}
						{showAddTeamMember && (
							<div className="border border-gray-200 rounded-lg p-5 mb-4">
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-base font-medium text-gray-800">
										Add New Team Member
									</h3>
									<button
										onClick={() =>
											setShowAddTeamMember(false)
										}
										className="text-gray-400 hover:text-gray-600"
									>
										<X className="h-5 w-5" />
									</button>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label
											htmlFor="team-full-name"
											className="text-sm font-medium text-gray-700"
										>
											Full Name
										</Label>
										<Input
											id="team-full-name"
											placeholder="Enter your member name"
											className="mt-1"
											value={newTeamMember.fullName}
											onChange={(e) =>
												setNewTeamMember((prev) => ({
													...prev,
													fullName: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label
											htmlFor="team-role"
											className="text-sm font-medium text-gray-700"
										>
											Role/Title
										</Label>
										<Select
											onValueChange={(value) =>
												setNewTeamMember((prev) => ({
													...prev,
													role: value,
												}))
											}
										>
											<SelectTrigger
												id="team-role"
												className="mt-1"
											>
												<SelectValue placeholder="Select role" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="senior-stylist">
													Senior Stylist
												</SelectItem>
												<SelectItem value="manager">
													Manager
												</SelectItem>
												<SelectItem value="receptionist">
													Receptionist
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label
											htmlFor="team-phone"
											className="text-sm font-medium text-gray-700"
										>
											Phone
										</Label>
										<Input
											id="team-phone"
											placeholder="+44123456789"
											className="mt-1"
											value={newTeamMember.phone}
											onChange={(e) =>
												setNewTeamMember((prev) => ({
													...prev,
													phone: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label
											htmlFor="team-email"
											className="text-sm font-medium text-gray-700"
										>
											Email
										</Label>
										<Input
											id="team-email"
											placeholder="example@example.com"
											className="mt-1"
											value={newTeamMember.email}
											onChange={(e) =>
												setNewTeamMember((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
										/>
									</div>
								</div>

								<div className="mb-4">
									<Label className="text-sm font-medium text-gray-700">
										Team member profile picture
									</Label>
									<div className="mt-1 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
										<div className="mb-2">
											<Upload className="h-6 w-6 text-gray-400" />
										</div>
										<p className="text-xs text-gray-500 text-center mb-4">
											Drag and drop, or click to browse
											and upload your file
										</p>
										<Button
											variant="outline"
											size="sm"
											className="text-xs bg-transparent"
										>
											Choose File
										</Button>
									</div>
								</div>

								<div className="flex gap-2">
									<Button
										onClick={handleAddTeamMember}
										className="bg-black hover:bg-gray-800 text-white"
									>
										Add Team Member
									</Button>
									<Button
										variant="outline"
										onClick={() =>
											setShowAddTeamMember(false)
										}
									>
										Cancel
									</Button>
								</div>
							</div>
						)}

						<Button
							variant="outline"
							size="sm"
							className="flex items-center gap-1 bg-transparent"
							onClick={() => setShowAddTeamMember(true)}
						>
							<Plus className="h-4 w-4" />
							Add Team Member
						</Button>
					</div>

					{/* Staff Section */}
					<div className="">
						<h2 className="text-lg font-semibold text-gray-900">
							Staff (Service Providers)
						</h2>
						<p className="text-sm text-gray-600 mb-4">
							Add staff members who will provide services to
							customers
						</p>

						{/* Existing Staff Members */}
						{staffMembers.map((staff) => (
							<div
								key={staff.id}
								className="border border-gray-200 rounded-lg p-5 mb-4"
							>
								<h3 className="text-base font-medium text-gray-800 mb-4">
									Staff Member {staff.id}
								</h3>

								<div className="flex items-start">
									<Avatar className="h-12 w-12 mr-4">
										<AvatarImage
											src="/placeholder.svg?height=40&width=40"
											alt={staff.fullName}
										/>
										<AvatarFallback>
											{staff.fullName
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>

									<div className="flex-1">
										<h4 className="font-medium">
											{staff.fullName}
										</h4>
										<div className="grid grid-cols-3 gap-4 mt-2 text-xs">
											<div>
												<p className="text-gray-500">
													Phone number
												</p>
												<p>{staff.phone}</p>
											</div>
											<div>
												<p className="text-gray-500">
													Service Fee
												</p>
												<p>{staff.serviceFee}</p>
											</div>
											<div>
												<p className="text-gray-500">
													License number
												</p>
												<p>{staff.license}</p>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4 mt-2 text-xs">
											<div>
												<p className="text-gray-500">
													Years of experience
												</p>
												<p>{staff.experience} Years</p>
											</div>
										</div>

										<div className="mt-3">
											<p className="text-xs text-gray-500 mb-1">
												Specializations
											</p>
											<div className="flex flex-wrap gap-1">
												<span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
													Hair Cut
												</span>
												<span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
													Color
												</span>
												<span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
													Styling
												</span>
											</div>
										</div>

										<div className="mt-3">
											<p className="text-xs text-gray-500 mb-1">
												Working days
											</p>
											<div className="flex flex-wrap gap-1">
												<span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
													Mon-Fri
												</span>
											</div>
										</div>

										<div className="mt-3">
											<p className="text-xs text-gray-500 mb-1">
												Break
											</p>
											<div className="flex flex-wrap gap-1">
												<span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded">
													12:00 PM - 1:00 PM
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-col gap-2">
										<Button
											variant="outline"
											size="sm"
											className="text-xs px-3 bg-transparent"
											onClick={() =>
												setEditingStaffId(staff.id)
											}
										>
											Edit
										</Button>
										<Button
											variant="destructive"
											size="sm"
											className="text-xs px-3"
											onClick={() =>
												setStaffMembers((prev) =>
													prev.filter(
														(s) => s.id !== staff.id
													)
												)
											}
										>
											Delete
										</Button>
									</div>
								</div>

								{/* Show services for this staff member */}
								{staff.services.length > 0 && (
									<div className="mt-4">
										<h4 className="text-sm font-medium text-gray-700 mb-2">
											Services:
										</h4>
										{staff.services.map((service) => (
											<ServiceForm
												key={service.id}
												service={service}
												staffId={staff.id}
											/>
										))}
									</div>
								)}

								<Button
									variant="outline"
									size="sm"
									className="mt-2 flex items-center gap-1 bg-transparent"
									onClick={() => handleAddService(staff.id)}
								>
									<Plus className="h-4 w-4" />
									Add Service to {staff.fullName}
								</Button>
							</div>
						))}

						{/* Add Staff Member Form */}
						{showAddStaffMember && (
							<div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Add New Staff Member
									</h3>
									<button
										onClick={() =>
											setShowAddStaffMember(false)
										}
										className="text-gray-400 hover:text-gray-600"
									>
										<X className="h-5 w-5" />
									</button>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Full Name
										</Label>
										<Input
											placeholder="Enter your member name"
											className="mt-1"
											value={newStaffMember.fullName}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													fullName: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Role/Title
										</Label>
										<Input
											placeholder="Senior Stylist"
											className="mt-1"
											value={newStaffMember.role}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													role: e.target.value,
												}))
											}
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Phone
										</Label>
										<Input
											placeholder="+44123456789"
											className="mt-1"
											value={newStaffMember.phone}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													phone: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Email
										</Label>
										<Input
											placeholder="example@example.com"
											className="mt-1"
											value={newStaffMember.email}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label className="text-sm font-medium text-gray-700">
											License/Registration Number
										</Label>
										<Input
											placeholder="Professional License Number"
											className="mt-1"
											value={newStaffMember.license}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													license: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Years of Experience
										</Label>
										<Input
											placeholder="5"
											className="mt-1"
											value={newStaffMember.experience}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													experience: e.target.value,
												}))
											}
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Service Fee
										</Label>
										<Input
											placeholder="$85"
											className="mt-1"
											value={newStaffMember.serviceFee}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													serviceFee: e.target.value,
												}))
											}
										/>
									</div>
									<div>
										<Label className="text-sm font-medium text-gray-700">
											Qualifications/Degrees
										</Label>
										<Input
											placeholder="MBBS MA Diploma in Cosmetology"
											className="mt-1"
											value={
												newStaffMember.qualifications
											}
											onChange={(e) =>
												setNewStaffMember((prev) => ({
													...prev,
													qualifications:
														e.target.value,
												}))
											}
										/>
									</div>
								</div>

								<div className="mb-4">
									<Label className="text-sm font-medium text-gray-700">
										Staff profile picture
									</Label>
									<div className="mt-1 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
										<div className="mb-2">
											<Upload className="h-6 w-6 text-gray-400" />
										</div>
										<p className="text-xs text-gray-500 text-center mb-4">
											Drag and drop, or click to browse
											and upload your file
										</p>
										<Button
											variant="outline"
											size="sm"
											className="text-xs bg-transparent"
										>
											Choose File
										</Button>
									</div>
								</div>

								{/* Services for new staff member */}
								{newStaffMember.services.length > 0 && (
									<div className="mb-4">
										<h4 className="text-sm font-medium text-gray-700 mb-2">
											Services:
										</h4>
										{newStaffMember.services.map(
											(service) => (
												<ServiceForm
													key={service.id}
													service={service}
													staffId={0}
												/>
											)
										)}
									</div>
								)}

								<Button
									variant="outline"
									size="sm"
									className="mb-4 flex items-center gap-1 bg-transparent"
									onClick={() => handleAddService(0)}
								>
									<Plus className="h-4 w-4" />
									Add Services
								</Button>

								{/* Available Days */}
								<div className="mb-6">
									<h3 className="text-base font-medium text-gray-800 mb-4">
										Available Days
									</h3>
									<div className="flex gap-4 mb-4">
										<div className="flex items-center gap-2">
											<Checkbox
												id="monday"
												checked={availableDays.mon}
											/>
											<Label
												htmlFor="monday"
												className="text-sm"
											>
												Mon
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="tuesday"
												checked={availableDays.tue}
											/>
											<Label
												htmlFor="tuesday"
												className="text-sm"
											>
												Tue
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="wednesday"
												checked={availableDays.wed}
											/>
											<Label
												htmlFor="wednesday"
												className="text-sm"
											>
												Wed
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="thursday"
												checked={availableDays.thu}
											/>
											<Label
												htmlFor="thursday"
												className="text-sm"
											>
												Thu
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="friday"
												checked={availableDays.fri}
											/>
											<Label
												htmlFor="friday"
												className="text-sm"
											>
												Fri
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="saturday"
												checked={availableDays.sat}
											/>
											<Label
												htmlFor="saturday"
												className="text-sm"
											>
												Sat
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="sunday"
												checked={availableDays.sun}
											/>
											<Label
												htmlFor="sunday"
												className="text-sm"
											>
												Sun
											</Label>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4 mb-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Working Hours - Start
											</Label>
											<Input
												type="time"
												defaultValue="09:00"
												className="mt-1"
											/>
										</div>
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Working Hours - End
											</Label>
											<Input
												type="time"
												defaultValue="17:00"
												className="mt-1"
											/>
										</div>
									</div>
								</div>

								{/* Breaks & Gaps */}
								<div className="mb-6">
									<div className="flex justify-between items-center mb-4">
										<div>
											<h3 className="text-base font-medium text-gray-800">
												Breaks & Gaps
											</h3>
											<p className="text-xs text-gray-500">
												Add staff members who will
												provide services to customers
											</p>
										</div>
										<Button
											variant="outline"
											size="sm"
											className="flex items-center gap-1 bg-transparent"
										>
											<Plus className="h-4 w-4" />
											Add Break
										</Button>
									</div>

									<Card>
										<CardContent className="p-4">
											<h4 className="text-sm font-medium text-gray-800 mb-4">
												Break 1
											</h4>

											<div className="grid grid-cols-3 gap-4">
												<div>
													<Label className="text-sm font-medium text-gray-700">
														Break Name
													</Label>
													<Input
														placeholder="Lunch"
														className="mt-1"
													/>
												</div>
												<div>
													<Label className="text-sm font-medium text-gray-700">
														Start Time
													</Label>
													<Input
														type="time"
														defaultValue="12:00"
														className="mt-1"
													/>
												</div>
												<div>
													<Label className="text-sm font-medium text-gray-700">
														End Time
													</Label>
													<Input
														type="time"
														defaultValue="13:00"
														className="mt-1"
													/>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>

								<div className="flex gap-2">
									<Button
										onClick={handleAddStaffMember}
										className="bg-black hover:bg-gray-800 text-white"
									>
										Add Staff Member
									</Button>
									<Button
										variant="outline"
										onClick={() =>
											setShowAddStaffMember(false)
										}
									>
										Cancel
									</Button>
								</div>
							</div>
						)}

						<Button
							variant="outline"
							size="sm"
							className="flex items-center gap-1 bg-transparent"
							onClick={() => setShowAddStaffMember(true)}
						>
							<Plus className="h-4 w-4" />
							Add Staff Member
						</Button>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

interface DaySchedule {
	enabled: boolean;
	open: string;
	close: string;
}

interface WeekSchedule {
	monday: DaySchedule;
	tuesday: DaySchedule;
	wednesday: DaySchedule;
	thursday: DaySchedule;
	friday: DaySchedule;
	saturday: DaySchedule;
	sunday: DaySchedule;
}

const ScheduleAvailability = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [schedule, setSchedule] = useState<WeekSchedule>({
		monday: { enabled: true, open: "06:00", close: "06:00" },
		tuesday: { enabled: true, open: "06:00", close: "06:00" },
		wednesday: { enabled: true, open: "06:00", close: "06:00" },
		thursday: { enabled: true, open: "06:00", close: "06:00" },
		friday: { enabled: true, open: "06:00", close: "06:00" },
		saturday: { enabled: true, open: "06:00", close: "06:00" },
		sunday: { enabled: false, open: "06:00", close: "06:00" },
	});

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

	const formatTime = (time: string) => {
		const [hours, minutes] = time.split(":");
		const hour = Number.parseInt(hours);
		const ampm = hour >= 12 ? "Pm" : "Am";
		const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
		return `${displayHour.toString().padStart(2, "0")}:${minutes} ${ampm}`;
	};

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
		<>
			<div className="p-4">
				<div className="w-full bg-white border border-gray-200 rounded-lg p-4">
					<div className="mb-6">
						<h1 className="text-2xl font-semibold text-gray-900 mb-2">
							Schedule & Availability
						</h1>
						<p className="text-sm text-gray-600">
							Set your business hours and booking preferences
						</p>
					</div>

					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<h2 className="text-lg font-medium text-gray-900 mb-6">
							Business Hours
						</h2>

						<div className="space-y-4">
							{days.map(({ key, label }) => (
								<div
									key={key}
									className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
								>
									<div className="flex items-center gap-4">
										<Switch
											id={key}
											checked={schedule[key].enabled}
											onCheckedChange={(checked) =>
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
													value={schedule[key].open}
													onChange={(e) =>
														updateSchedule(
															key,
															"open",
															e.target.value
														)
													}
													className="w-min h-8 text-xs"
													disabled={
														!schedule[key].enabled
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
													value={schedule[key].close}
													onChange={(e) =>
														updateSchedule(
															key,
															"close",
															e.target.value
														)
													}
													className="w-min h-8 text-xs"
													disabled={
														!schedule[key].enabled
													}
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const AIConfiguration = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [settings, setSettings] = useState({
		enableCallRecording: true,
		generateTranscripts: true,
		prankCallDetection: true,
		voicemailSettings: true,
		repeatAppointment: true,
		aiUpselling: true,
	});

	const toggleSetting = (key: keyof typeof settings) => {
		setSettings((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<>
			<div className="p-6">
				<div className="w-full bg-white border p-4 rounded-lg space-y-6">
					{/* Header */}
					<div className="mb-6">
						<h1 className="text-2xl font-semibold text-gray-900 mb-2">
							AI Personality
						</h1>
						<p className="text-sm text-gray-600">
							Customize your AI assistant's personality to match
							your brand
						</p>
					</div>

					{/* Voice & Tone */}
					<Card>
						<CardContent className="p-6">
							<h2 className="text-lg font-medium text-gray-900 mb-4">
								Voice & Tone
							</h2>

							<div className="space-y-4">
								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										AI Voice
									</Label>
									<Select defaultValue="kiwi-female">
										<SelectTrigger>
											<SelectValue placeholder="Select voice" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="kiwi-female">
												Kiwi Female - Friendly &
												Professional
											</SelectItem>
											<SelectItem value="american-male">
												American Male - Professional
											</SelectItem>
											<SelectItem value="british-female">
												British Female - Elegant
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										Conversation Tone
									</Label>
									<Select defaultValue="friendly-welcome">
										<SelectTrigger>
											<SelectValue placeholder="Select tone" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="friendly-welcome">
												Friendly & Welcome
											</SelectItem>
											<SelectItem value="professional">
												Professional
											</SelectItem>
											<SelectItem value="casual">
												Casual
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Key Business Information & Knowledge Base */}
					<Card>
						<CardContent className="p-6">
							<h2 className="text-lg font-medium text-gray-900 mb-2">
								Key Business Information & Knowledge Base
							</h2>
							<p className="text-sm text-gray-600 mb-4">
								Provide information about your business through
								multiple sources for comprehensive AI knowledge
							</p>

							<div className="space-y-6">
								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										Business Information (Text)
									</Label>
									<Textarea
										className="min-h-[100px] resize-none"
										placeholder="We're Located In The Heart Of Auckland, Specialising In Modern Cuts And Colours. Our Experienced Team Has Been Serving The Community For Over 10 Years. Information We'd Like About Our Business During Conversations"
									/>
								</div>

								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										Website URL
									</Label>
									<Input placeholder="https://yourbusiness.com" />
								</div>

								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										Upload Documents
									</Label>
									<div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50">
										<Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
										<p className="text-sm text-gray-500 mb-4">
											upload pdf, doc, docx files with
											business information
										</p>
										<Button variant="outline" size="sm">
											Choose File
										</Button>
									</div>
								</div>

								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										Import Old Data (CSV)*
									</Label>
									<div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50">
										<Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
										<p className="text-sm text-gray-500 mb-4">
											upload CSV files with business old
											customer information
										</p>
										<Button variant="outline" size="sm">
											Choose File
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Custom Messages */}
					<Card>
						<CardContent className="p-6">
							<h2 className="text-lg font-medium text-gray-900 mb-4">
								Custom Messages
							</h2>

							<div>
								<Label className="text-sm font-medium text-gray-700 mb-2 block">
									Custom Greeting
								</Label>
								<Textarea
									className="min-h-[80px] resize-none"
									placeholder="G'Day! Thanks For Calling [Business Name]. I'm Your AI Assistant And I'm Here To Help You Book An Appointment. How Can I Help You Today? Let [Business Name] To Assist"
								/>
							</div>
						</CardContent>
					</Card>

					{/* Call Handling Settings */}
					<Card>
						<CardContent className="p-6">
							<h2 className="text-lg font-medium text-gray-900 mb-4">
								Call Handling Settings
							</h2>

							<div className="space-y-6">
								<div>
									<Label className="text-sm font-medium text-gray-700 mb-2 block">
										AI Answering Schedule
									</Label>
									<Select defaultValue="business-hours">
										<SelectTrigger>
											<SelectValue placeholder="Select schedule" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="business-hours">
												Business Hours Only
											</SelectItem>
											<SelectItem value="24-7">
												24/7
											</SelectItem>
											<SelectItem value="custom">
												Custom Schedule
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div>
										<Label className="text-sm font-medium text-gray-700 mb-2 block">
											Maximum Call Duration (minutes)
										</Label>
										<Input
											defaultValue="10"
											type="number"
										/>
									</div>
									<div>
										<Label className="text-sm font-medium text-gray-700 mb-2 block">
											Fallback number
										</Label>
										<Input defaultValue="+64 21 2 4567" />
										<p className="text-xs text-gray-500 mt-1">
											Number To Forward Calls When AI
											Can't Help Or Customer Requests
											Human
										</p>
									</div>
								</div>

								{/* Toggle Settings */}
								<div className="space-y-4 pt-4">
									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Enable Call Recording
											</Label>
											<p className="text-xs text-gray-500">
												Record Calls For Quality
												Assurance
											</p>
										</div>
										<Switch
											checked={
												settings.enableCallRecording
											}
											onCheckedChange={() =>
												toggleSetting(
													"enableCallRecording"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>

									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Generate Transcripts
											</Label>
											<p className="text-xs text-gray-500">
												Create Text Transcripts Of All
												Conversations
											</p>
										</div>
										<Switch
											checked={
												settings.generateTranscripts
											}
											onCheckedChange={() =>
												toggleSetting(
													"generateTranscripts"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>

									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Prank Call Detection
											</Label>
											<p className="text-xs text-gray-500">
												Automatically Detect And Block
												Suspicious Calls
											</p>
										</div>
										<Switch
											checked={
												settings.prankCallDetection
											}
											onCheckedChange={() =>
												toggleSetting(
													"prankCallDetection"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>

									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Voicemail Settings
											</Label>
											<p className="text-xs text-gray-500">
												Allow Voice Messages When No One
												Can Answer The Call
											</p>
										</div>
										<Switch
											checked={settings.voicemailSettings}
											onCheckedChange={() =>
												toggleSetting(
													"voicemailSettings"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>

									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												Repeat Appointment
											</Label>
											<p className="text-xs text-gray-500">
												By enabling this option, your
												scheduled appointment will
												automatically text (if a
												specified time (e.g. every week
												or every month), this eliminates
												the need to rebook it again and
												again.
											</p>
										</div>
										<Switch
											checked={settings.repeatAppointment}
											onCheckedChange={() =>
												toggleSetting(
													"repeatAppointment"
												)
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>

									<div className="flex items-center justify-between border rounded-lg p-4">
										<div>
											<Label className="text-sm font-medium text-gray-700">
												AI Upselling
											</Label>
											<p className="text-xs text-gray-500">
												AI Upselling Uses AI To Suggest
												Relevant Upgrades Or Features To
												Users Based On Their
												Preferences, Helping Increase
												Sales Automatically
											</p>
										</div>
										<Switch
											checked={settings.aiUpselling}
											onCheckedChange={() =>
												toggleSetting("aiUpselling")
											}
											className="data-[state=checked]:bg-black"
										/>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const ReviewAndLaunch = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	return (
		<>
			<div className="p-6">
				<div className="w-full bg-white border rounded-lg p-4 space-y-4">
					{/* Header */}
					<div className="mb-6">
						<h1 className="text-xl font-semibold text-gray-900 mb-1">
							Review & Launch
						</h1>
						<p className="text-sm text-gray-500">
							Review your information and launch your business
						</p>
					</div>

					{/* Business Information */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Business Information
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Registration:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Business Name:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Business Type:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Street Address:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Fallback Mobile Number:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Business Email:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">City:</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Website URL:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
							</div>
							<div className="mt-3 pt-3 border-t border-gray-100">
								<div className="flex justify-between items-start">
									<p className="text-xs text-gray-500 flex-1">
										Write business and customer and AI
										services
									</p>
									<span className="text-blue-600 cursor-pointer text-xs ml-2">
										See All
									</span>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Services 1 */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Services 1
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Service Name:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Price:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Duration (minutes):
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Equipment Required:
									</span>
									<span className="text-gray-900 text-xs">
										See chair, styling chair, shampoo bowl
									</span>
								</div>
							</div>
							<div className="mt-3 pt-3 border-t border-gray-100">
								<p className="text-xs text-gray-500">
									Add description of the service
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Discount Management */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Discount Management(%)
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Discount Percentage:
									</span>
									<span className="text-gray-900 text-xs">
										10%
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Start Date:
									</span>
									<span className="text-gray-900 text-xs">
										1-1-2024
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										End Date:
									</span>
									<span className="text-gray-900 text-xs">
										31-12-2024
									</span>
								</div>
							</div>
							<div className="mt-3 pt-3 border-t border-gray-100">
								<p className="text-xs text-gray-500">
									Summer Sale - Holiday Special terms and
									conditions
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Team Members */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Team Members
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Phone:
									</span>
									<span className="text-gray-900 text-xs">
										Phone
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Name:</span>
									<span className="text-gray-900 text-xs">
										Name
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Role/Title:
									</span>
									<span className="text-gray-900 text-xs">
										Role/Title
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Email:
									</span>
									<span className="text-gray-900 text-xs">
										+44 21 2 4567
									</span>
								</div>
							</div>
							<div className="mt-3 pt-3 border-t border-gray-100">
								<p className="text-xs text-gray-500">
									Professional@gmail.com
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Staff (Service Providers) */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Staff (Service Providers)
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Name:</span>
									<span className="text-gray-900 text-xs">
										Jackson
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Role/Title:
									</span>
									<span className="text-gray-900 text-xs">
										Senior Stylist
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Phone:
									</span>
									<span className="text-gray-900 text-xs">
										+44 21 2 4567
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Email:
									</span>
									<span className="text-gray-900 text-xs">
										Professional@gmail.com
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										License/Registration Number:
									</span>
									<span className="text-gray-900 text-xs">
										Professional License Number
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Years of Experience:
									</span>
									<span className="text-gray-900 text-xs">
										years
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Service Fee:
									</span>
									<span className="text-gray-900 text-xs">
										Service Fee
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Qualifications/Degrees:
									</span>
									<span className="text-gray-900 text-xs">
										Qualifications/Degrees
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Available Days:
									</span>
									<span className="text-gray-900 text-xs">
										Sunday Off day
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Working Hours - Start End:
									</span>
									<span className="text-gray-900 text-xs">
										9:00 AM - 5:00 PM
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Lunch Break:
									</span>
									<span className="text-gray-900 text-xs">
										12:00-1:00
									</span>
								</div>
							</div>

							<div className="mt-4 pt-3 border-t border-gray-100">
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Individual services 1
								</h3>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Service Name:
										</span>
										<span className="text-gray-900 text-xs">
											Manicure
										</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Duration (minutes):
										</span>
										<span className="text-gray-900 text-xs">
											60
										</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Price:
										</span>
										<span className="text-gray-900 text-xs">
											$85
										</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">
											Equipment:
										</span>
										<span className="text-gray-900 text-xs">
											See chair, styling chair, shampoo
											bowl
										</span>
									</div>
								</div>
								<div className="mt-2">
									<p className="text-xs text-gray-500">
										Description
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Business Hours & Schedule */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Business Hours & Schedule
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm gap-5">
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Monday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Tuesday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
								</div>
								<div className="flex justify-between text-sm gap-5">
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Wednesday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Thursday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
								</div>
								<div className="flex justify-between text-sm gap-5">
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Friday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Saturday:
										</span>
										<span className="text-gray-900 text-xs">
											09:00 - 17:00
										</span>
									</div>
								</div>
								<div className="flex justify-between text-sm">
									<div className="w-full p-2 flex items-center justify-between border bg-white rounded-lg">
										<span className="text-gray-600">
											Sunday:
										</span>
										<span className="text-red-600 text-xs">
											Closed
										</span>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* AI Personality */}
					<Card className="shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								AI Personality
							</h2>
							<Edit className="h-4 w-4 text-gray-400 cursor-pointer" />
						</CardHeader>
						<CardContent className="px-4 pb-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										AI Answering Schedule:
									</span>
									<span className="text-gray-900 text-xs">
										Business Hours only
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Maximum Call Duration (minutes):
									</span>
									<span className="text-gray-900 text-xs">
										10 min
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Enable Call Recording:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Generate Transcripts:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Prank Call Detection:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Voicemail Settings:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Repeat Appointment:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										AI Upselling:
									</span>
									<span className="text-green-600 text-xs">
										on
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Fallback Number:
									</span>
									<span className="text-gray-900 text-xs">
										+64 21 2 4567
									</span>
								</div>
							</div>

							<div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										AI Voice:
									</span>
									<span className="text-gray-900 text-xs">
										Kiwi Female - Friendly & Professional
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Conversation Tone:
									</span>
									<span className="text-gray-900 text-xs">
										Friendly & Welcome
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">
										Call Handling Schedule:
									</span>
									<span className="text-blue-600 cursor-pointer text-xs">
										See All
									</span>
								</div>
							</div>

							<div className="mt-3 pt-3 border-t border-gray-100">
								<h3 className="text-sm font-medium text-gray-700 mb-1">
									Key Business Information
								</h3>
								<p className="text-xs text-gray-500 leading-relaxed">
									We're Located In The Heart Of Auckland,
									Specialising In Modern Cuts And Colours. Our
									Experienced Team Has Been Serving The
									Community For Over 10 Years. Information
									We'd Like About Our Business During
									Conversations
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Documents */}
					<Card className="shadow-sm">
						<CardHeader className="py-3 px-4">
							<h2 className="text-base font-medium text-gray-900">
								Documents
							</h2>
						</CardHeader>
						<CardContent className="px-4 pb-4 space-y-4">
							<div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
								<FileText className="h-8 w-8 text-gray-400 mb-3" />
								<Button
									variant="outline"
									size="sm"
									className="text-xs bg-transparent"
								>
									Choose File
								</Button>
							</div>

							<div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
								<Download className="h-8 w-8 text-gray-400 mb-3" />
								<Button
									variant="outline"
									size="sm"
									className="text-xs bg-transparent"
								>
									Choose File
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className="w-full flex items-center justify-between pt-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};
