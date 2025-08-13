import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Appointment } from ".";

interface BookingDetailsModalProps {
	isOpen: boolean;
	onClose: () => void;
	booking: Appointment | null;
}

export default function BookingDetailsModal({
	isOpen,
	onClose,
	booking,
}: BookingDetailsModalProps) {
	if (!booking) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<div className="flex items-center gap-4">
					<Button
						variant="outline"
						onClick={onClose}
						className="flex items-center gap-2 bg-transparent"
					>
						<ArrowLeft className="w-4 h-4" />
						Previous
					</Button>
				</div>

				<div>
					<h2 className="text-xl font-semibold mb-4">
						Booking Details - {booking.customerName}
					</h2>

					<Tabs defaultValue="overview" className="w-full">
						<TabsList className="grid w-full grid-cols-5">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="note">Note</TabsTrigger>
							<TabsTrigger value="recordings">
								Recordings
							</TabsTrigger>
							<TabsTrigger value="call-logs">
								Call Logs
							</TabsTrigger>
							<TabsTrigger value="history">History</TabsTrigger>
						</TabsList>

						<TabsContent value="overview" className="mt-6">
							<div className="grid grid-cols-2 gap-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold mb-4">
											Customer Information
										</h3>
										<div className="space-y-3">
											<div>
												<span className="text-gray-600">
													Name:{" "}
												</span>
												<span>
													{booking.customerName}
												</span>
											</div>
											<div>
												<span className="text-gray-600">
													Phone:{" "}
												</span>
												<span>+64 21 123 4567</span>
											</div>
											<div className="flex items-center gap-2">
												<span className="text-gray-600">
													Source:{" "}
												</span>
												<Badge className="bg-gray-800 text-white">
													AI Assistant
												</Badge>
											</div>
											<div>
												<span className="text-gray-600">
													Confirmed By:{" "}
												</span>
												<span>AI Assistant</span>
											</div>
											<div className="flex items-center gap-2">
												<span className="text-gray-600">
													Problem:{" "}
												</span>
												<Badge variant="destructive">
													None
												</Badge>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold mb-4">
											Booking Information
										</h3>
										<div className="space-y-3">
											<div>
												<span className="text-gray-600">
													Service:{" "}
												</span>
												<span>{booking.service}</span>
											</div>
											<div>
												<span className="text-gray-600">
													Staff:{" "}
												</span>
												<span>{booking.staffName}</span>
											</div>
											<div>
												<span className="text-gray-600">
													Date:{" "}
												</span>
												<span>{booking.date}</span>
											</div>
											<div>
												<span className="text-gray-600">
													Duration:{" "}
												</span>
												<span>{booking.timeSlot}</span>
											</div>
											<div>
												<span className="text-gray-600">
													Price:{" "}
												</span>
												<span>{booking.price}</span>
											</div>
											<div className="flex items-center gap-2">
												<span className="text-gray-600">
													Status:{" "}
												</span>
												<Badge className="bg-blue-100 text-blue-800">
													Paid
												</Badge>
											</div>
											<div>
												<span className="text-gray-600">
													Repeat Frequency Day:{" "}
												</span>
												<span>Monday/Weekly</span>
											</div>
											<div>
												<span className="text-gray-600">
													Equipment Required:{" "}
												</span>
												<Select defaultValue="hair-dryer">
													<SelectTrigger className="mt-2">
														<SelectValue placeholder="Select Equipment" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="hair-dryer">
															Hair Dryer
														</SelectItem>
														<SelectItem value="styling-chair">
															Styling Chair
														</SelectItem>
														<SelectItem value="shampoo-bowl">
															Shampoo Bowl
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="note" className="mt-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-semibold mb-4">
										AI Generated Notes
									</h3>
									<p className="text-gray-700">
										Customer Requested Blonde Highlights
										With Natural Look. Mentioned Sensitive
										Scalp - Recommend Gentle Products.
										First-Time Customer, Seems Excited About
										The Service.
									</p>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="recordings" className="mt-6">
							<div className="space-y-6">
								<Card>
									<CardContent className="p-6">
										<div className="flex justify-between items-start mb-4">
											<div>
												<h3 className="font-semibold">
													AI Call Recording
												</h3>
												<p className="text-sm text-gray-600">
													2024-01-14 14:30:00 •
													Duration: 3:24
												</p>
											</div>
											<Button
												size="sm"
												className="bg-gray-600 text-white hover:bg-gray-700"
											>
												<Play className="w-4 h-4 mr-1" />
												Play
											</Button>
										</div>

										{/* Enhanced Audio Player */}
										<div className="bg-black rounded-lg p-4 mb-4">
											<div className="flex justify-between text-white text-sm mb-2">
												<span>0:16</span>
												<span>3:24</span>
											</div>
											<div className="relative h-16 mb-4">
												{/* Audio Waveform Visualization */}
												<div className="flex items-end justify-center h-full gap-1">
													{Array.from({
														length: 60,
													}).map((_, i) => (
														<div
															key={i}
															className="bg-white"
															style={{
																width: "2px",
																height: `${
																	Math.random() *
																	100
																}%`,
																opacity:
																	i < 20
																		? 1
																		: 0.3,
															}}
														/>
													))}
												</div>
											</div>
											<Slider
												defaultValue={[30]}
												max={100}
												step={1}
												className="mb-4"
											/>
										</div>

										<div className="flex justify-center items-center gap-4 mb-4">
											<Button variant="ghost" size="sm">
												<SkipBack className="w-4 h-4" />
											</Button>
											<Button
												size="sm"
												className="rounded-full w-12 h-12"
											>
												<Play className="w-6 h-6" />
											</Button>
											<Button variant="ghost" size="sm">
												<SkipForward className="w-4 h-4" />
											</Button>
										</div>

										<div className="flex justify-between items-center mb-4">
											<div className="flex items-center gap-2">
												<Volume2 className="w-4 h-4" />
												<Slider
													defaultValue={[80]}
													max={100}
													step={1}
													className="w-20"
												/>
												<span className="text-sm">
													80%
												</span>
											</div>
											<div className="flex items-center gap-2">
												<span className="text-sm">
													Speed:
												</span>
												<Select defaultValue="1x">
													<SelectTrigger className="w-16">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="0.5x">
															0.5x
														</SelectItem>
														<SelectItem value="1x">
															1x
														</SelectItem>
														<SelectItem value="1.5x">
															1.5x
														</SelectItem>
														<SelectItem value="2x">
															2x
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>

										<div>
											<h4 className="font-medium mb-2">
												Transcription:
											</h4>
											<div className="bg-gray-100 p-3 rounded text-sm">
												Hello, I'd Like To Book A
												Haircut And Color Appointment
												Please. I'm Available This
												Thursday Afternoon If Possible
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<div className="flex justify-between items-start mb-4">
											<div>
												<h3 className="font-semibold">
													Follow Up Recording
												</h3>
												<p className="text-sm text-gray-600">
													2024-01-14 16:45:00 •
													Duration: 1:12
												</p>
											</div>
											<Button
												size="sm"
												className="bg-gray-600 text-white hover:bg-gray-700"
											>
												<Play className="w-4 h-4 mr-1" />
												Play
											</Button>
										</div>

										<div>
											<h4 className="font-medium mb-2">
												Transcription:
											</h4>
											<div className="bg-gray-100 p-3 rounded text-sm">
												Hi, This Is Sarah. I Just Wanted
												To Confirm My Appointment
												Tomorrow At 10 AM. Thank You!
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="call-logs" className="mt-6">
							<div className="grid grid-cols-2 gap-6">
								<Card>
									<CardContent className="p-6">
										<div className="flex justify-between items-start mb-4">
											<h3 className="font-semibold text-lg">
												Incoming Call
											</h3>
											<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
												Confirm
											</Badge>
										</div>
										<p className="text-sm text-gray-600 mb-4">
											2024-01-14 14:30:00 • Duration: 3:24
										</p>

										<div className="space-y-3">
											<div>
												<span className="text-gray-600">
													Handled By:{" "}
												</span>
												<span className="font-medium">
													AI Assistant
												</span>
											</div>
											<div>
												<span className="text-gray-600">
													Outcome:{" "}
												</span>
												<span className="font-medium">
													Booking Created
												</span>
											</div>
											<div>
												<span className="text-gray-600">
													Notes:
												</span>
												<div className="bg-gray-100 p-3 rounded mt-2">
													<p className="text-sm text-gray-700">
														Successfully Booked
														Appointment. Customer
														Satisfied With AI
														Interaction
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<div className="flex justify-between items-start mb-4">
											<h3 className="font-semibold text-lg">
												Incoming Call
											</h3>
											<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
												Confirmation
											</Badge>
										</div>
										<p className="text-sm text-gray-600 mb-4">
											2024-01-14 14:30:00 • Duration: 3:24
										</p>

										<div className="space-y-3">
											<div>
												<span className="text-gray-600">
													Handled By:{" "}
												</span>
												<span className="font-medium">
													Lisa (Receptionist)
												</span>
											</div>
											<div>
												<span className="text-gray-600">
													Outcome:{" "}
												</span>
												<span className="font-medium">
													Confirmation
												</span>
											</div>
											<div>
												<span className="text-gray-600">
													Notes:
												</span>
												<div className="bg-gray-100 p-3 rounded mt-2">
													<p className="text-sm text-gray-700">
														Customer Called To
														Confirm Appointment Time
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="history" className="mt-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-semibold mb-4">
										Customer History
									</h3>
									<div className="grid grid-cols-2 gap-6 mb-4">
										<div>
											<span className="text-gray-600">
												Total Bookings:{" "}
											</span>
											<span className="font-semibold">
												2
											</span>
										</div>
										<div>
											<span className="text-gray-600">
												Total Spent:{" "}
											</span>
											<span className="font-semibold">
												$240
											</span>
										</div>
										<div>
											<span className="text-gray-600">
												Last Visit:{" "}
											</span>
											<span>First Time Customer</span>
										</div>
										<div>
											<span className="text-gray-600">
												Customer Type:{" "}
											</span>
											<span>New Customer</span>
										</div>
									</div>
									<div>
										<span className="text-gray-600">
											Services:{" "}
										</span>
										<div className="flex gap-2 mt-1">
											<Badge variant="outline">
												Sensitive Scalp
											</Badge>
											<Badge variant="outline">
												Natural Blonde Highlights
											</Badge>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>

					<div className="flex gap-4 pt-6 border-t">
						<Button className="bg-green-600 text-white hover:bg-green-700">
							Complete
						</Button>
						<Button
							variant="outline"
							className="bg-gray-800 text-white hover:bg-gray-700"
						>
							Edit
						</Button>
						<Button variant="destructive">Cancel</Button>
						<Button className="bg-purple-600 text-white hover:bg-purple-700">
							Send Reminder Call
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
