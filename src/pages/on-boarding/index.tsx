import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
	Plus,
	Upload,
} from "lucide-react";
import { useState } from "react";

export default function Onboarding() {
	const [active, setActive] = useState(0);
	const nextStep = () =>
		setActive((current) => (current < 4 ? current + 1 : current));
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
						{/* <Stepper.Step
							icon={<Users size={18} />}
							label="Team Members"
						>
							<TeamMembers
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
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
			<div className="bg[#B3B3B3] p-4 space-y-6">
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
								// Show compact list view for filled services
								return (
									<div
										key={service.id}
										className="bg-white border border-gray-200 rounded-lg p-4 mb-3"
									>
										<div className="flex justify-between items-start">
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
														// Convert back to form view for editing
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
														// Renumber the remaining services
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
								// Show full form view for empty or editing services
								return (
									<Card
										key={service.id}
										className="bg-gray-50 border-gray-200 mb-4"
									>
										<CardHeader className="pb-4">
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
																className="flex gap-2 items-center"
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
