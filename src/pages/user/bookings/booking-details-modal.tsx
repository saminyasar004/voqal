import { useState } from "react";
import { Booking } from "./bookings";
import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	Pause,
	Play,
	SkipBack,
	SkipForward,
	Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function BookingDetailsModal({
	booking,
	onClose,
}: {
	booking: Booking;
	onClose: () => void;
}) {
	const [activeTab, setActiveTab] = useState("Recordings");
	const [isPlaying, setIsPlaying] = useState(false);
	const [playingRecording, setPlayingRecording] = useState<string | null>(
		null
	);
	const [currentTime, setCurrentTime] = useState(16); // 0:16 as shown in image
	const [volume, setVolume] = useState(60);
	const [speed, setSpeed] = useState(1);

	const tabs = ["Overview", "Note", "Recordings", "Call Logs", "History"];

	const handlePlayPause = (recordingId: string) => {
		if (playingRecording === recordingId) {
			setIsPlaying(!isPlaying);
		} else {
			setPlayingRecording(recordingId);
			setIsPlaying(true);
		}
	};

	const AudioWaveform = () => (
		<div className="bg-black rounded-lg p-4 mb-4">
			{/* Waveform visualization */}
			<div className="flex items-end justify-center h-32 gap-1 mb-4">
				{Array.from({ length: 80 }).map((_, i) => (
					<div
						key={i}
						className="bg-white rounded-sm"
						style={{
							height: `${Math.random() * 80 + 20}%`,
							width: "3px",
							opacity: i < (currentTime / 204) * 80 ? 1 : 0.3, // 204 seconds = 3:24
						}}
					/>
				))}
			</div>

			{/* Progress bar */}
			<div className="relative">
				<Slider
					value={[currentTime]}
					max={204} // 3:24 in seconds
					step={1}
					className="w-full"
					onValueChange={(value) => setCurrentTime(value[0])}
				/>
				<div className="flex justify-between text-white text-sm mt-2">
					<span>0:{currentTime.toString().padStart(2, "0")}</span>
					<span>3:24</span>
				</div>
			</div>
		</div>
	);

	const AudioControls = () => (
		<div className="flex flex-col items-center gap-4 mb-6">
			{/* Main controls */}
			<div className="flex items-center gap-4">
				<Button
					variant="ghost"
					size="sm"
					className="text-gray-400 hover:text-gray-600"
				>
					<SkipBack className="h-5 w-5" />
				</Button>

				<Button
					onClick={() => setIsPlaying(!isPlaying)}
					className="bg-black hover:bg-neutral-800 text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
				>
					{isPlaying ? (
						<Pause className="h-6 w-6" />
					) : (
						<Play className="h-6 w-6" />
					)}
				</Button>

				<Button
					variant="ghost"
					size="sm"
					className="text-gray-400 hover:text-gray-600"
				>
					<SkipForward className="h-5 w-5" />
				</Button>
			</div>

			{/* Volume and Speed controls */}
			<div className="flex items-center justify-between w-full max-w-md">
				<div className="flex items-center gap-2">
					<Volume2 className="h-4 w-4 text-gray-400" />
					<Slider
						value={[volume]}
						max={100}
						step={1}
						className="w-20"
						onValueChange={(value) => setVolume(value[0])}
					/>
					<span className="text-sm text-gray-600">{volume}%</span>
				</div>

				<div className="flex items-center gap-2">
					<span className="text-sm text-gray-600">Speed:</span>
					<Select
						value={speed.toString()}
						onValueChange={(value) => setSpeed(Number(value))}
						// className="text-sm text-gray-600 bg-transparent"
					>
						<SelectTrigger className="w-[70px] border-none outline-none">
							<SelectValue placeholder="1x" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="0.5">0.5x</SelectItem>
							<SelectItem value="0.75">0.75x</SelectItem>
							<SelectItem value="1">1x</SelectItem>
							<SelectItem value="1.25">1.25x</SelectItem>
							<SelectItem value="1.5">1.5x</SelectItem>
							<SelectItem value="2">2x</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);

	return (
		<div className="fixed inset-0 bg-primary/80 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="p-6 border-b border-gray-200">
					<div className="flex items-center gap-4 mb-4">
						<Button
							variant="outline"
							size="sm"
							onClick={onClose}
							className="flex items-center gap-2 px-4 py-2 rounded-full border-gray-300 bg-transparent"
						>
							<ArrowLeft className="h-4 w-4" />
							Previous
						</Button>
					</div>

					<h1 className="text-xl font-semibold text-gray-900 mb-6">
						Booking Details - Sarah Johnson
					</h1>

					{/* Tabs */}
					<div className="flex gap-3">
						{tabs.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
									activeTab === tab
										? "bg-black text-white"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>

				{/* Content */}
				<div className="p-6">
					{activeTab === "Overview" && (
						<div className="grid grid-cols-2 gap-8">
							{/* Customer Information */}
							<div className="bg-gray-50 rounded-lg p-6">
								<h2 className="text-lg font-semibold text-gray-900 mb-6">
									Customer Information
								</h2>

								<div className="space-y-4">
									<div>
										<span className="text-sm text-gray-600">
											Name:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Sarah Johnson
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Phone:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											+64 21 123 4567
										</span>
									</div>

									<div className="flex items-center gap-2">
										<span className="text-sm text-gray-600">
											Source:{" "}
										</span>
										<Badge className="bg-black text-white text-xs px-2 py-1">
											AI Assistant
										</Badge>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Confirmed By:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											AI Assistant
										</span>
									</div>

									<div className="flex items-center gap-2">
										<span className="text-sm text-gray-600">
											Problems:{" "}
										</span>
										<Badge className="bg-warning border-transparent hover:bg-warning/80 text-white text-xs px-2 py-1">
											None
										</Badge>
									</div>
								</div>
							</div>

							{/* Booking Information */}
							<div className="bg-gray-50 rounded-lg p-6">
								<h2 className="text-lg font-semibold text-gray-900 mb-6">
									Booking Information
								</h2>

								<div className="space-y-4">
									<div>
										<span className="text-sm text-gray-600">
											Service:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Haircut & Color
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Staff:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											John Smith
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Date:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											2024-01-15
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Duration:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											90 min
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Price:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											$120
										</span>
									</div>

									<div className="flex items-center gap-2">
										<span className="text-sm text-gray-600">
											Status:{" "}
										</span>
										<Badge className="bg-olive border-transparent hover:bg-olive/80 text-white text-xs px-2 py-1">
											Active
										</Badge>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Repeat Frequency Day:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Monday/Weekly
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Equipment Required:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Hair Dryer, Styling Chair, Shampoo
											Bowl
										</span>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "Note" && (
						<div>
							<h2 className="text-lg font-semibold text-gray-900 mb-6">
								AI Generated Notes
							</h2>
							<p className="text-sm text-gray-600 leading-relaxed">
								Customer Requested Blonde Highlights With
								Natural Look. Mentioned Sensitive Scalp -
								Recommend Gentle Products. First-Time Customer,
								Seems Excited About The Service.
							</p>
						</div>
					)}

					{activeTab === "Recordings" && (
						<div className="space-y-8">
							{/* AI Call Recording */}
							<div>
								<div className="flex items-center justify-between mb-4">
									<div>
										<h2 className="text-lg font-semibold text-gray-900">
											AI Call Recording
										</h2>
										<p className="text-sm text-gray-500">
											2024-01-14 14:30:00 • Duration: 3:24
										</p>
									</div>
									<Button
										size="sm"
										onClick={() =>
											handlePlayPause("ai-call")
										}
										className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 flex items-center gap-2"
									>
										{playingRecording === "ai-call" &&
										isPlaying ? (
											<Pause className="h-4 w-4" />
										) : (
											<Play className="h-4 w-4" />
										)}
										{playingRecording === "ai-call" &&
										isPlaying
											? "Pause"
											: "Play"}
									</Button>
								</div>

								{playingRecording === "ai-call" && (
									<>
										<AudioWaveform />
										<AudioControls />
									</>
								)}

								<div className="mb-4">
									<h3 className="text-sm font-medium text-gray-900 mb-2">
										Transcription:
									</h3>
									<div className="bg-gray-100 p-4 rounded text-sm text-gray-700">
										Hello, I'd Like To Book A Haircut And
										Color Appointment Please. I'm Available
										This Thursday Afternoon If Possible
									</div>
								</div>
							</div>

							{/* Follow Up Recording */}
							<div>
								<div className="flex items-center justify-between mb-4">
									<div>
										<h2 className="text-lg font-semibold text-gray-900">
											Follow Up Recording
										</h2>
										<p className="text-sm text-gray-500">
											2024-01-14 16:45:00 • Duration: 1:12
										</p>
									</div>
									<Button
										size="sm"
										onClick={() =>
											handlePlayPause("follow-up")
										}
										className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 flex items-center gap-2"
									>
										{playingRecording === "follow-up" &&
										isPlaying ? (
											<Pause className="h-4 w-4" />
										) : (
											<Play className="h-4 w-4" />
										)}
										{playingRecording === "follow-up" &&
										isPlaying
											? "Pause"
											: "Play"}
									</Button>
								</div>

								{playingRecording === "follow-up" && (
									<>
										<AudioWaveform />
										<AudioControls />
									</>
								)}

								<div className="mb-4">
									<h3 className="text-sm font-medium text-gray-900 mb-2">
										Transcription:
									</h3>
									<div className="bg-gray-100 p-4 rounded text-sm text-gray-700">
										Hi, This Is Sarah. I Just Wanted To
										Confirm My Appointment Tomorrow At 10
										AM. Thank You!
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "Call Logs" && (
						<div className="grid grid-cols-2 gap-6">
							{/* First Call Log */}
							<div className="border border-gray-200 rounded-lg p-4">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Incoming Call
									</h3>
									<Badge variant="success">Confirm</Badge>
								</div>

								<div className="space-y-3 mb-4">
									<p className="text-sm text-gray-500">
										2024-01-14 14:30:00 • Duration: 3:24
									</p>

									<div>
										<span className="text-sm text-gray-600">
											Handled By:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											AI Assistant
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Outcome:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Booking Created
										</span>
									</div>
								</div>

								<div>
									<p className="text-sm font-medium text-gray-900 mb-2">
										Notes:
									</p>
									<div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
										Successfully Booked Appointment,
										Customer Satisfied With AI Interaction
									</div>
								</div>
							</div>

							{/* Second Call Log */}
							<div className="border border-gray-200 rounded-lg p-4">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Incoming Call
									</h3>
									<Badge variant="indigo">Confirmation</Badge>
								</div>

								<div className="space-y-3 mb-4">
									<p className="text-sm text-gray-500">
										2024-01-14 14:30:00 • Duration: 3:24
									</p>

									<div>
										<span className="text-sm text-gray-600">
											Handled By:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Lisa (Receptionist)
										</span>
									</div>

									<div>
										<span className="text-sm text-gray-600">
											Outcome:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											Confirmation
										</span>
									</div>
								</div>

								<div>
									<p className="text-sm font-medium text-gray-900 mb-2">
										Notes:
									</p>
									<div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
										Customer Called To Confirm Appointment
										Time
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "History" && (
						<div>
							<h2 className="text-lg font-semibold text-gray-900 mb-6">
								Customer History
							</h2>

							<div className="grid grid-cols-2 gap-8 mb-6">
								<div>
									<div className="mb-4">
										<span className="text-sm text-gray-600">
											Total Bookings:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											2
										</span>
									</div>
									<div>
										<span className="text-sm text-gray-600">
											Last Visit:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											First Time Customer
										</span>
									</div>
								</div>

								<div>
									<div className="mb-4">
										<span className="text-sm text-gray-600">
											Total Spent:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											$240
										</span>
									</div>
									<div>
										<span className="text-sm text-gray-600">
											Customer Type:{" "}
										</span>
										<span className="text-sm font-medium text-gray-900">
											New Customer
										</span>
									</div>
								</div>
							</div>

							<div>
								<div className="flex items-center gap-2 mb-3">
									<span className="text-sm text-gray-600">
										Services:{" "}
									</span>
									<div className="flex gap-2">
										<Badge className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
											Sensitive Scalp
										</Badge>
										<Badge className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">
											Natural Blonde Highlights
										</Badge>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="p-6 border-t border-gray-200">
					<div className="flex gap-3">
						<Button className="bg-golden-olive hover:bg-golden-olive text-white px-6 py-2">
							Complete
						</Button>
						<Button className="bg-primary hover:bg-primary text-white px-6 py-2">
							Edit
						</Button>
						<Button className="bg-warning hover:bg-warning text-white px-6 py-2">
							Cancel
						</Button>
						<Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2">
							Send Reminder Call
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
