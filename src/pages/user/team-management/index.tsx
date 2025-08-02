import AvatarImg from "@/assets/images/avatar.jpg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    BookmarkCheck,
    CalendarCheck2,
    LucideProps,
    Plus,
    Search,
    Upload,
    Users,
} from "lucide-react";
import { useState } from "react";
import TeamMemberModal from "./team-member-modal";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    status: "active" | "inactive";
    avatar: string;
    email: string;
    phone: string;
    address: string;
    permissionLevel: string;
}

function AddTeamMemberModal({
    onClose,
    isOpen,
}: {
    onClose: () => void;
    isOpen: boolean;
}) {
    const [formData, setFormData] = useState({
        fullName: "",
        role: "",
        phone: "",
        email: "",
        address: "",
        profilePicture: null as File | null,
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-xl font-semibold text-gray-900 mb-2">
                        Team Members (Administrative/Management)
                    </h1>
                    <p className="text-sm text-gray-600">
                        Add team members who will manage the business dashboard and
                        operations
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                    <div className="grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <Label
                                    htmlFor="fullName"
                                    className="text-sm font-medium text-gray-900 mb-2 block"
                                >
                                    Full Name
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="Enter your member name"
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        handleInputChange("fullName", e.target.value)
                                    }
                                    className="w-full"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <Label
                                    htmlFor="phone"
                                    className="text-sm font-medium text-gray-900 mb-2 block"
                                >
                                    Phone
                                </Label>
                                <Input
                                    id="phone"
                                    placeholder="+6421234567"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            {/* Team member profile picture */}
                            <div>
                                <Label className="text-sm font-medium text-gray-900 mb-2 block">
                                    Team member profile picture
                                </Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-white">
                                    <div className="flex flex-col items-center">
                                        <Upload className="h-8 w-8 text-gray-400 mb-4" />
                                        <p className="text-sm text-gray-500 mb-4">
                                            drag and drop, or click to browse and
                                            <br />
                                            add a profile picture for the staff.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-transparent"
                                        >
                                            Choose File
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Role/Title */}
                            <div>
                                <Label className="text-sm font-medium text-gray-900 mb-2 block">
                                    Role/Title
                                </Label>
                                <Select
                                    value={formData.role}
                                    onValueChange={(value) => handleInputChange("role", value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Senior Stylist" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="business-owner">
                                            Business Owner
                                        </SelectItem>
                                        <SelectItem value="manager">Manager</SelectItem>
                                        <SelectItem value="assistant-manager">
                                            Assistant Manager
                                        </SelectItem>
                                        <SelectItem value="receptionist">Receptionist</SelectItem>
                                        <SelectItem value="senior-stylist">
                                            Senior Stylist
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Email */}
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-900 mb-2 block"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="Pappuroy6393@Gmail.Com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <Label
                                    htmlFor="address"
                                    className="text-sm font-medium text-gray-900 mb-2 block"
                                >
                                    Address
                                </Label>
                                <Input
                                    id="address"
                                    placeholder="Vbxxmvbmxv"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
                        Save & Changes
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="px-8 py-3 rounded-full bg-transparent"
                    >
                        Cancel
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function TeamManagement() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [showMemberModal, setShowMemberModal] = useState(false);

    const [teamMembers] = useState<TeamMember[]>([
        {
            id: 1,
            name: "Bryce Moller",
            role: "Business owner",
            status: "active",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "sarah.johnson@clinic.co.nz",
            phone: "+64 21 555 0123",
            address: "123 Main Street, Auckland 1010",
            permissionLevel: "Administrator(Full Access)",
        },
        {
            id: 2,
            name: "Emma Wilson",
            role: "Assistant Manager",
            status: "active",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "lisa.taylor@salon.co.nz",
            phone: "+64 21 555 0123",
            address: "456 Queen Street, Auckland 1010",
            permissionLevel: "Manager(Limited Access)",
        },
        {
            id: 3,
            name: "Emma Wilson",
            role: "Receptionist",
            status: "active",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "lisa.taylor@salon.co.nz",
            phone: "+64 21 555 0123",
            address: "789 King Street, Auckland 1010",
            permissionLevel: "Staff(Basic Access)",
        },
        {
            id: 4,
            name: "Emma Wilson",
            role: "Receptionist",
            status: "active",
            avatar: "/placeholder.svg?height=60&width=60",
            email: "lisa.taylor@salon.co.nz",
            phone: "+64 21 555 0123",
            address: "321 George Street, Auckland 1010",
            permissionLevel: "Staff(Basic Access)",
        },
    ]);
    const [showAddMemberModal, setShowAddMemberModal] = useState(false);

    const handleViewDetails = (member: TeamMember) => {
        setSelectedMember(member);
        setShowMemberModal(true);
    };

    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            {/* dashboard header */}
            <DashboardHeader />

            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">
                        Team Management
                    </h3>
                    <p className="text-sm text-foreground">
                        Manage administrative team members and dashboard access
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <Button onClick={() => setShowAddMemberModal(true)} variant="outline">
                        Add Team Member <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex justify-between gap-4 px-6 py-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        type="text"
                        placeholder="Search team member name or phone..."
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
                        <SelectValue placeholder="Select team" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All Permissions</SelectItem>
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
                            Total Team Member (4)
                        </h1>
                    </div>

                    {/* Team Member List */}
                    <div className="space-y-4">
                        {teamMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="shadow-sm border border-gray-200 bg-white"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        {/* Left side - Avatar and info */}
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-16 w-16">
                                                <AvatarImage src={AvatarImg} />
                                                <AvatarFallback className="bg-gray-100 text-gray-600 text-lg font-semibold">
                                                    {member.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="font-medium text-gray-900 text-lg">
                                                        {member.name}
                                                    </h3>
                                                    <Badge variant="success">Active</Badge>
                                                </div>

                                                <div className="text-sm text-gray-600 mb-2">
                                                    {member.role}
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="text-sm">
                                                        <span className="text-gray-600">
                                                            Phone number:{" "}
                                                        </span>
                                                        <span className="text-gray-900">
                                                            {member.phone}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm">
                                                        <span className="text-gray-600">Email: </span>
                                                        <span className="text-gray-900">
                                                            {member.email}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right side - Action buttons */}
                                        <div className="flex flex-col gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="px-4 py-2 text-sm bg-transparent"
                                            >
                                                Edit Member
                                            </Button>
                                            <Button
                                                size="sm"
                                                onClick={() => handleViewDetails(member)}
                                            >
                                                View Details
                                            </Button>
                                            <Button size="sm" variant="warning">
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Member Modal */}
            {selectedMember && (
                <TeamMemberModal
                    isOpen={showMemberModal}
                    member={selectedMember}
                    onClose={() => {
                        setShowMemberModal(false);
                        setSelectedMember(null);
                    }}
                />
            )}

            <AddTeamMemberModal
                isOpen={showAddMemberModal}
                onClose={() => setShowAddMemberModal(false)}
            />
        </section>
    );
}
