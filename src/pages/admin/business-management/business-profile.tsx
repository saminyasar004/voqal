import CommonBusinessProfile from "@/components/common/business-profile";
import { TeamMember } from "@/interfaces";
import { useParams } from "react-router-dom";

export default function BusinessProfilePreview() {
    const teamMembers: TeamMember[] = [
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
    ];

    const { businessId } = useParams();
    return (
        <CommonBusinessProfile
            isAdmin={true}
            businessId={businessId}
            teamMembers={teamMembers}
        />
    );
}
