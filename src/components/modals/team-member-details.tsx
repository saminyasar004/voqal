import AvatarImg from "@/assets/images/avatar.jpg";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TeamMember } from "@/interfaces";

export default function TeamMemberModal({
    isOpen,
    member,
    onClose,
}: {
    isOpen: boolean;
    member: TeamMember;
    onClose: () => void;
}) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
                {/* Header */}
                <div className="mb-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                        className="flex items-center gap-2 px-6 py-3 rounded-full border-gray-300 bg-transparent"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>
                </div>

                {/* Member Profile */}
                <div className="border p-6 rounded-lg">
                    <div className="flex items-start gap-8 mb-8">
                        {/* Left side - Avatar and basic info */}
                        <div className="flex flex-col items-center gap-3">
                            <Avatar className="h-32 w-32">
                                <AvatarImage src={AvatarImg} />
                                <AvatarFallback className="bg-gray-100 text-gray-600 text-2xl font-semibold">
                                    {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>

                            <h2 className="text-2xl font-semibold text-gray-900">
                                {member.name}
                            </h2>

                            <div className="flex flex-col *:w-max items-center gap-2">
                                <Badge variant="outline">{member.role}</Badge>

                                <Badge
                                    variant={member.status === "active" ? "success" : "warning"}
                                >
                                    {member.status === "active" ? "Active" : "Inactive"}
                                </Badge>
                            </div>
                        </div>

                        {/* Right side - Contact details */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <span className="text-gray-600">Email: </span>
                                <span className="text-gray-900 font-medium">
                                    {member.email}
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-600">Phone number: </span>
                                <span className="text-gray-900 font-medium">
                                    {member.phone}
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-600">Address: </span>
                                <span className="text-gray-900 font-medium">
                                    {member.address}
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-600">Permission level: </span>
                                <span className="text-gray-900 font-medium">
                                    {member.permissionLevel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 justify-start">
                    <Button variant="outline">Edit Member</Button>
                    <Button variant="warning">Delete Member</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
