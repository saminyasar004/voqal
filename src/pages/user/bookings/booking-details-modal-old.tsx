import { useState } from "react";
import { Booking } from ".";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BookingDetailsModal({
    booking,
    onClose,
}: {
    booking: Booking;
    onClose: () => void;
}) {
    const [activeTab, setActiveTab] = useState("Recordings");
    const [isPlaying, setIsPlaying] = useState(false);
    const [playingRecording, setPlayingRecording] = useState<string | null>(null);
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
        <div
            className="fixed inset-0 bg-primary/80 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                {/* Header */}
                

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
