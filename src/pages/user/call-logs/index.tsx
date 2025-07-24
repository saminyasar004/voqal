import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
	ArrowLeft,
	BotMessageSquare,
	Brain,
	Calendar,
	Clock,
	History,
	NotebookPen,
	Pause,
	Play,
	Plus,
	Search,
	SkipBack,
	SkipForward,
	Volume2,
} from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

interface CallLog {
	id: number;
	time: string;
	duration: string;
	callerName: string;
	status: "booking-made" | "ai-filtered" | "call-drop";
	service: string;
	phone: string;
	transcript: string;
	dateTime: string;
}

const callLogsData = [
	{
		title: "Total Calls",
		value: 47,
		unit: "Today",
		icon: BotMessageSquare,
	},
	{
		title: "Successful Bookings",
		value: 20,
		unit: "Today",
		icon: NotebookPen,
	},
	{
		title: "Avg Call Duration",
		value: "3:24",
		unit: "Today",
		icon: History,
	},
	{
		title: "AI Confidence",
		value: "89%",
		unit: "Today",
		icon: Brain,
	},
];

function CallDetailsDialog({
	callData,
	onClose,
}: {
	callData: {
		id: number;
		callerName: string;
		phone: string;
		dateTime: string;
		duration: string;
		service: string;
		transcript: string;
	};
	onClose: () => void;
}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [showAudioPlayer, setShowAudioPlayer] = useState(false);
	const [currentTime, setCurrentTime] = useState(16); // 0:16 as shown in image
	const [volume, setVolume] = useState(60);
	const [speed, setSpeed] = useState(1);

	const handlePlayRecording = () => {
		setShowAudioPlayer(true);
		setIsPlaying(true);
	};

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const AudioWaveform = () => (
		<div className="bg-black rounded-lg p-4 mb-6">
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
					onClick={handlePlayPause}
					className="bg-black hover:bg-gray-800 text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
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
					<select
						value={speed}
						onChange={(e) => setSpeed(Number(e.target.value))}
						className="text-sm text-gray-600 bg-transparent border-none outline-none"
					>
						<option value={0.5}>0.5x</option>
						<option value={0.75}>0.75x</option>
						<option value={1}>1x</option>
						<option value={1.25}>1.25x</option>
						<option value={1.5}>1.5x</option>
						<option value={2}>2x</option>
					</select>
				</div>
			</div>
		</div>
	);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<CardHeader className="pb-4">
					<div className="flex items-center justify-between mb-4">
						<Button
							variant="outline"
							size="sm"
							onClick={onClose}
							className="flex items-center gap-2 px-4 py-2 rounded-full border-gray-300 bg-transparent"
						>
							<ArrowLeft className="h-4 w-4" />
							Previous
						</Button>

						{!showAudioPlayer && (
							<Button
								size="sm"
								onClick={handlePlayRecording}
								className="bg-theme-gray"
							>
								<Play className="h-4 w-4" />
								Play Recording
							</Button>
						)}
					</div>

					<h1 className="text-lg font-semibold text-gray-900">
						Call Details - {callData.callerName}
					</h1>
				</CardHeader>

				{/* Content */}
				<CardContent className="space-y-6">
					{/* Call Information */}
					<div className="space-y-3">
						<div>
							<span className="text-sm text-gray-600">
								Phone:{" "}
							</span>
							<span className="text-sm font-medium text-gray-900">
								{callData.phone}
							</span>
						</div>

						<div>
							<span className="text-sm text-gray-600">
								Date & Time:{" "}
							</span>
							<span className="text-sm font-medium text-gray-900">
								{callData.dateTime}
							</span>
						</div>

						<div>
							<span className="text-sm text-gray-600">
								Duration:{" "}
							</span>
							<span className="text-sm font-medium text-gray-900">
								{callData.duration}
							</span>
						</div>

						<div>
							<span className="text-sm text-gray-600">
								Service:{" "}
							</span>
							<span className="text-sm font-medium text-gray-900">
								{callData.service}
							</span>
						</div>
					</div>

					{/* Audio Player - Shows when Play Recording is clicked */}
					{showAudioPlayer && (
						<>
							<AudioWaveform />
							<AudioControls />
						</>
					)}

					{/* Transcription */}
					<div className="space-y-3">
						<h3 className="text-sm font-medium text-gray-900">
							Transcription:
						</h3>
						<div className="bg-gray-100 p-4 rounded text-sm text-gray-700 leading-relaxed">
							{callData.transcript}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default function CallLogs() {
	const [selectedCall, setSelectedCall] = useState<CallLog | null>(null);
	const [showCallDetails, setShowCallDetails] = useState(false);

	const callLogs: CallLog[] = [
		{
			id: 1,
			time: "09:00 AM",
			duration: "3:24",
			callerName: "Sarah Johnson",
			status: "booking-made",
			service: "Haircut & Color",
			phone: "+64 21 123 4567",
			dateTime: "2024-01-15 At 2:45 PM",
			transcript:
				"Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm Available This Thursday Afternoon If Possible",
		},
		{
			id: 2,
			time: "09:00 AM",
			duration: "10 min",
			callerName: "Mike Chen",
			status: "ai-filtered",
			service: "Haircut & Color",
			phone: "+1 (555) 123-4567",
			dateTime: "2024-01-15 At 1:30 PM",
			transcript:
				"Hi, I Need To Speak To Someone About A Specific Hair Treatment. I Have Some Allergies I Need To Discuss.",
		},
		{
			id: 3,
			time: "09:00 AM",
			duration: "30 min",
			callerName: "Unknown Caller",
			status: "call-drop",
			service: "Haircut & Color",
			phone: "+1 (555) 123-4567",
			dateTime: "2024-01-15 At 12:15 PM",
			transcript: "Hello? Hello? Is Anyone There?",
		},
		{
			id: 4,
			time: "09:00 AM",
			duration: "15 min",
			callerName: "Unknown Caller",
			status: "call-drop",
			service: "Haircut & Color",
			phone: "+1 (555) 123-4567",
			dateTime: "2024-01-15 At 11:45 AM",
			transcript: "Hello? Hello? Is Anyone There?",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "booking-made":
				return <Badge variant="success">Booking Made</Badge>;
			case "ai-filtered":
				return <Badge variant="default">AI Filtered</Badge>;
			case "call-drop":
				return <Badge variant="warning">Call Drop</Badge>;
			default:
				return <Badge variant="indigo">Unknown</Badge>;
		}
	};

	const handleViewDetails = (call: CallLog) => {
		setSelectedCall(call);
		setShowCallDetails(true);
	};

	return (
		<section className="w-full pb-8 bg-[#F5F5F5]">
			{/* dashboard header */}
			<DashboardHeader />

			<div className="flex justify-between gap-1 flex-1 px-6 py-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-xl text-primary font-semibold">
						Call Logs
					</h3>
					<p className="text-sm text-foreground">
						Review all calls handled by your AI assistant
					</p>
				</div>
			</div>

			<div className="w-full grid grid-cols-4 gap-8 px-6">
				{callLogsData.map((data, index) => (
					<div
						key={index}
						className="w-full flex items-start justify-between gap-7 border rounded-lg p-4 bg-white"
					>
						<div className="flex flex-col gap-1">
							<h4>{data.title}</h4>
							<h3 className="text-4xl font-semibold">
								{data.value}
							</h3>
							<h6>{data.unit}</h6>
						</div>
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center p-3">
							<data.icon className="w-full h-full" />
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-between gap-4 px-6 py-4">
				<div className="flex-1 relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
					<Input
						type="text"
						placeholder="Search call by name or phone..."
						className="pl-10 w-full"
					/>
				</div>

				<Select
				// value={filteredTime}
				// onValueChange={(e) =>
				// 	setFilteredTime((e as any).target.value)
				// }
				>
					<SelectTrigger className="w-[250px]">
						<SelectValue placeholder="Select calls" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="all">All Calls</SelectItem>
							<SelectItem value="confirmed">Confirmed</SelectItem>
							<SelectItem value="pending">Pending</SelectItem>
							<SelectItem value="cancelled">Cancelled</SelectItem>
							<SelectItem value="completed">Completed</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<div className="p-6">
				<div className="w-full">
					{/* Header */}
					<div className="mb-6">
						<h1 className="text-xl font-semibold text-gray-900">
							Bookings All
						</h1>
					</div>

					{/* Bookings List */}
					<div className="space-y-4">
						{callLogs.map((call) => (
							<Card
								key={call.id}
								className="shadow-sm border border-gray-200 bg-white"
							>
								<CardContent className="p-6">
									<div className="flex items-start gap-6">
										{/* Time Section */}
										<div className="flex flex-col items-center min-w-[80px]">
											<div className="text-sm font-medium text-gray-900">
												{call.time}
											</div>
											<div className="text-xs text-gray-500 mt-1">
												{call.duration}
											</div>
										</div>

										{/* Call Details */}
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-2">
												<h3 className="font-medium text-gray-900 text-base">
													{call.callerName}
												</h3>
												{getStatusBadge(call.status)}
											</div>

											<div className="text-sm text-gray-600 mb-1">
												{call.service}
											</div>
											<div className="text-sm text-gray-600 mb-4">
												{call.phone}
											</div>

											{/* Transcript Preview */}
											<div>
												<h4 className="text-sm font-medium text-gray-900 mb-2">
													Transcript Preview:
												</h4>
												<div className="bg-background p-3 rounded text-sm text-gray-700 leading-relaxed">
													{call.transcript}
												</div>
											</div>
										</div>

										{/* View Details Button */}
										<div className="min-w-[100px]">
											<Button
												onClick={() =>
													handleViewDetails(call)
												}
											>
												View Details
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>

			{showCallDetails && selectedCall && (
				<CallDetailsDialog
					callData={{
						id: selectedCall.id,
						callerName: selectedCall.callerName,
						phone: selectedCall.phone,
						dateTime: selectedCall.dateTime,
						duration: selectedCall.duration,
						service: selectedCall.service,
						transcript: selectedCall.transcript,
					}}
					onClose={() => {
						setShowCallDetails(false);
						setSelectedCall(null);
					}}
				/>
			)}
		</section>
	);
}
