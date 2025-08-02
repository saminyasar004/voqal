import AvatarImg from "@/assets/images/avatar.jpg";
import { useState } from "react";
import {
    ArrowLeft,
    Bell,
    User,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { StaffMember } from ".";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface StaffProfileModalProps {
    isOpen: boolean;
    staff: StaffMember;
    onClose: () => void;
}

export default function StaffProfileModal({
    isOpen,
    staff,
    onClose,
}: StaffProfileModalProps) {
    const [activeTab, setActiveTab] = useState("services");

    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    const [playingRecording, setPlayingRecording] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(18); // 0:18 as shown in image
    const [volume, setVolume] = useState(99);
    const [speed, setSpeed] = useState(1);

    const handlePlayRecording = (recordingId: string) => {
        setPlayingRecording(recordingId);
        setShowAudioPlayer(true);
        setIsPlaying(true);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const AudioPlayerModal = () => (
        <div className="fixed inset-0 bg-primary/80 flex items-center justify-center p-4 z-[60]">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setShowAudioPlayer(false)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Waveform */}
                <div className="bg-primary rounded-lg p-4 mb-6">
                    <div className="flex items-end justify-center h-32 gap-1 mb-4">
                        {Array.from({ length: 80 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-sm"
                                style={{
                                    height: `${Math.random() * 80 + 20}%`,
                                    width: "3px",
                                    opacity: i < (currentTime / 204) * 80 ? 1 : 0.3,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative">
                        <Slider
                            value={[currentTime]}
                            max={204}
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

                {/* Audio Controls */}
                <div className="flex flex-col items-center gap-4 mb-6">
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
                            className="bg-primary hover:bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center"
                        >
                            {isPlaying ? (
                                <Pause className="h-6 w-6" />
                            ) : (
                                <Play className="h-6 w-6 ml-1" />
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
                                className="text-sm text-gray-600 bg-transparent border border-gray-300 rounded px-2 py-1"
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

                {/* Transcription */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Transcription:
                    </h3>
                    <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 text-center">
                        Hello, I'd Like To Book A Haircut And Color Appointment Please. I'm
                        Available This Thursday Afternoon If Possible
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <div className="border-b border-gray-200">
                    <div className="flex items-center justify-between mb-6">
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

                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 mb-1">
                            Staff Profile
                        </h1>
                        <p className="text-sm text-gray-600">
                            Comprehensive staff member details and performance analytics
                        </p>
                    </div>
                </div>

                {/* Staff Info Section */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={AvatarImg} />
                            <AvatarFallback className="bg-green-100 text-green-800 text-lg font-semibold">
                                {staff.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {staff.name}
                                </h2>
                                <Badge variant="outline">{staff.role}</Badge>
                                <Badge
                                    variant={staff.status === "busy" ? "warning" : "success"}
                                >
                                    {staff.status === "busy" ? "Busy" : "Available"}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                <div>
                                    <span className="text-gray-600">Email: </span>
                                    <span className="text-gray-900">{staff.email}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">License: </span>
                                    <span className="text-gray-900">{staff.license}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Phone number: </span>
                                    <span className="text-gray-900">{staff.phone}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Experience: </span>
                                    <span className="text-gray-900">{staff.experience}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Join date: </span>
                                    <span className="text-gray-900">{staff.joinDate}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Service Fee: </span>
                                    <span className="text-gray-900">{staff.serviceFee}</span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="text-sm">
                                    <span className="text-gray-600">Qualifications/Degrees:</span>
                                </div>
                                <div className="text-sm text-gray-900 mt-1">
                                    {staff.qualifications}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Summary */}
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Performance Summary - Today
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                        <Card className="border border-gray-200">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {staff.totalAppointments}
                                </div>
                                <div className="text-sm text-gray-600">Total Appointments</div>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-200">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {staff.revenueGenerated}
                                </div>
                                <div className="text-sm text-gray-600">Revenue Generated</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Tabs */}
                <div className="p-6">
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-4 p-1 rounded-lg mb-6">
                            <TabsTrigger value="schedule">Schedule</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                            <TabsTrigger value="bookings">Bookings</TabsTrigger>
                            <TabsTrigger value="recording">Recording</TabsTrigger>
                        </TabsList>

                        {/* Schedule Tab */}
                        <TabsContent value="schedule">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Weekly Schedule
                                </h3>

                                <div className="space-y-4">
                                    {staff.schedule.map((day, index) => (
                                        <Card key={index} className="border border-gray-200">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-20 text-sm font-medium text-gray-900">
                                                            {day.day}
                                                        </div>
                                                        <div className="text-sm text-gray-700">
                                                            {day.hours}
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        {day.breaks.map((breakTime, breakIndex) => (
                                                            <Badge
                                                                key={breakIndex}
                                                                className="bg-transparent text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500"
                                                            >
                                                                {breakTime}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Services Tab */}
                        <TabsContent value="services">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Services & Specializations
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    {staff.services.map((service, index) => (
                                        <Card key={index} className="border border-gray-200">
                                            <CardContent className="p-4">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h4 className="font-medium text-gray-900">
                                                        {service.name}
                                                    </h4>
                                                    <Badge variant="success">{service.price}</Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    {service.description}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {service.duration}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Bookings Tab */}
                        <TabsContent value="bookings">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Appointments
                                </h3>

                                <div className="space-y-4">
                                    {/* Sarah Wilson - Confirmed */}
                                    <Card className="border border-gray-200">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-medium text-gray-900">
                                                            Sarah Wilson
                                                        </h4>
                                                        <Badge>Booked</Badge>
                                                        <Badge variant="success">Confirmed</Badge>
                                                    </div>

                                                    <div className="text-sm text-gray-600 mb-1">
                                                        General Consultation
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-1">
                                                        +1 (555) 123-4567
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-3">120$</div>

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 mb-2">
                                                            Transcript Preview:
                                                        </p>
                                                        <div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
                                                            Hello, I'd Like To Book A Haircut And Color
                                                            Appointment Please. I'm Available This Thursday
                                                            Afternoon If Possible.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    <div className="text-right">
                                                        <div className="text-lg font-semibold text-gray-900">
                                                            09:00 AM
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            8/15/2024
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => handlePlayRecording("sarah-1")}
                                                    >
                                                        <Play className="h-3 w-3" />
                                                        Play
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Mike Chen - Upcoming */}
                                    <Card className="border border-gray-200">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-medium text-gray-900">
                                                            Mike Chen
                                                        </h4>
                                                        <Badge>Booked</Badge>
                                                        <Badge variant="info">Upcoming</Badge>
                                                    </div>

                                                    <div className="text-sm text-gray-600 mb-1">
                                                        General Consultation
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-1">
                                                        +1 (555) 123-4567
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-3">120$</div>

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 mb-2">
                                                            Transcript Preview:
                                                        </p>
                                                        <div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
                                                            Hello, I'd Like To Book A Haircut And Color
                                                            Appointment Please. I'm Available This Thursday
                                                            Afternoon If Possible.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    <div className="text-right">
                                                        <div className="text-lg font-semibold text-gray-900">
                                                            09:00 AM
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            8/15/2024
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => handlePlayRecording("mike-1")}
                                                    >
                                                        <Play className="h-3 w-3" />
                                                        Play
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Sarah Wilson - Cancelled */}
                                    <Card className="border border-gray-200">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-medium text-gray-900">
                                                            Sarah Wilson
                                                        </h4>
                                                        <Badge>Booked</Badge>
                                                        <Badge variant="warning">Cancelled</Badge>
                                                    </div>

                                                    <div className="text-sm text-gray-600 mb-1">
                                                        General Consultation
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-1">
                                                        +1 (555) 123-4567
                                                    </div>
                                                    <div className="text-sm text-gray-600 mb-3">0$</div>

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 mb-2">
                                                            Transcript Preview:
                                                        </p>
                                                        <div className="bg-gray-100 p-3 rounded text-sm text-gray-700">
                                                            Hello, I'd Like To Book A Haircut And Color
                                                            Appointment Please. I'm Available This Thursday
                                                            Afternoon If Possible.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    <div className="text-right">
                                                        <div className="text-lg font-semibold text-gray-900">
                                                            09:00 AM
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            8/15/2024
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => handlePlayRecording("sarah-2")}
                                                    >
                                                        <Play className="h-3 w-3" />
                                                        Play
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Recording Tab */}
                        <TabsContent value="recording">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Call Recordings
                                </h3>
                                <p className="text-gray-600">No recordings available.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Action Buttons */}
                <div className="p-6 border-t border-gray-200">
                    <div className="flex gap-3">
                        <Button variant="outline" className="px-6 py-2 bg-transparent">
                            Edit Staff
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
                            Delete Member
                        </Button>
                    </div>
                </div>
                {/* Audio Player Modal */}
                {showAudioPlayer && <AudioPlayerModal />}
            </DialogContent>
        </Dialog>
    );
}
