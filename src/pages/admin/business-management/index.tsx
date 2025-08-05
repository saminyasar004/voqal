import AvatarImg from "@/assets/images/avatar.jpg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Calendar,
    Headset,
    type LucideIcon,
    MoreHorizontal,
    PhoneCall,
    Search,
    UsersRound,
    Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CardValue {
    title: string;
    text: string;
    subText: string;
    icon: LucideIcon;
}

interface BusinessData {
    id: number;
    owner: string;
    location: string;
    joinDate: string;
    contact: string;
    email: string;
    phone: string;
    plan: "Basic" | "Professional" | "Premium";
    status: "Active" | "Past Due" | "Expired";
    avatar: string;

    teamMembers: number;
    staffMembers: number;
    totalCalls: number;
    monthlyRevenue: number;
}

const BusinessManagement = () => {
    const businesses: BusinessData[] = [
        {
            id: 1,
            owner: "Glow Beauty Spa",
            location: "Auckland, NZ",
            joinDate: "2024-01-15",
            contact: "Sarah Chen",
            email: "sarah@glowspa.com",
            phone: "+888 012456454",
            plan: "Premium",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=GB",
            teamMembers: 4,
            staffMembers: 4,
            totalCalls: 1234,
            monthlyRevenue: 4567,
        },
        {
            id: 2,
            owner: "Urban Fit Club",
            location: "Wellington, NZ",
            joinDate: "2023-12-05",
            contact: "Mark Rivera",
            email: "mark@urbanfit.co.nz",
            phone: "+888 014789654",
            plan: "Professional",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=UF",
            teamMembers: 6,
            staffMembers: 3,
            totalCalls: 893,
            monthlyRevenue: 3790,
        },
        {
            id: 3,
            owner: "MindSpace Therapy",
            location: "Christchurch, NZ",
            joinDate: "2024-02-20",
            contact: "Julia Wong",
            email: "julia@mindspace.nz",
            phone: "+888 017111222",
            plan: "Basic",
            status: "Past Due",
            avatar: "/placeholder.svg?height=40&width=40&text=MS",
            teamMembers: 2,
            staffMembers: 1,
            totalCalls: 402,
            monthlyRevenue: 1100,
        },
        {
            id: 4,
            owner: "Zen Hair Studio",
            location: "Hamilton, NZ",
            joinDate: "2024-03-10",
            contact: "Liam Scott",
            email: "liam@zenhair.nz",
            phone: "+888 019223344",
            plan: "Premium",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=ZH",
            teamMembers: 5,
            staffMembers: 2,
            totalCalls: 765,
            monthlyRevenue: 3999,
        },
        {
            id: 5,
            owner: "Bright Dental Care",
            location: "Napier, NZ",
            joinDate: "2023-11-11",
            contact: "Dr. Amanda White",
            email: "amanda@brightdental.nz",
            phone: "+888 011998877",
            plan: "Professional",
            status: "Expired",
            avatar: "/placeholder.svg?height=40&width=40&text=BD",
            teamMembers: 3,
            staffMembers: 3,
            totalCalls: 212,
            monthlyRevenue: 2700,
        },
        {
            id: 6,
            owner: "EcoWell Living",
            location: "Dunedin, NZ",
            joinDate: "2024-04-08",
            contact: "Oscar Ng",
            email: "oscar@ecowell.nz",
            phone: "+888 013456789",
            plan: "Premium",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=EL",
            teamMembers: 8,
            staffMembers: 5,
            totalCalls: 1890,
            monthlyRevenue: 4999,
        },
        {
            id: 7,
            owner: "The Coding Bootcamp",
            location: "Tauranga, NZ",
            joinDate: "2023-10-01",
            contact: "Natalie Brooks",
            email: "natalie@codeboot.nz",
            phone: "+888 018456321",
            plan: "Professional",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=CB",
            teamMembers: 7,
            staffMembers: 6,
            totalCalls: 1430,
            monthlyRevenue: 3890,
        },
        {
            id: 8,
            owner: "Bloom Yoga",
            location: "Rotorua, NZ",
            joinDate: "2024-01-09",
            contact: "Ella Kim",
            email: "ella@bloomyoga.nz",
            phone: "+888 012334455",
            plan: "Basic",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=BY",
            teamMembers: 3,
            staffMembers: 2,
            totalCalls: 682,
            monthlyRevenue: 1600,
        },
        {
            id: 9,
            owner: "AutoPro Mechanics",
            location: "Palmerston North, NZ",
            joinDate: "2024-05-01",
            contact: "Ben Thompson",
            email: "ben@autopro.nz",
            phone: "+888 017332211",
            plan: "Professional",
            status: "Past Due",
            avatar: "/placeholder.svg?height=40&width=40&text=AP",
            teamMembers: 4,
            staffMembers: 5,
            totalCalls: 990,
            monthlyRevenue: 3400,
        },
        {
            id: 10,
            owner: "Craft Coffee Roasters",
            location: "Queenstown, NZ",
            joinDate: "2023-09-18",
            contact: "Isla Davies",
            email: "isla@craftcoffee.nz",
            phone: "+888 019554433",
            plan: "Premium",
            status: "Active",
            avatar: "/placeholder.svg?height=40&width=40&text=CC",
            teamMembers: 6,
            staffMembers: 4,
            totalCalls: 1325,
            monthlyRevenue: 4200,
        },
    ];

    const [planFilter, setPlanFilter] = useState<string>("all-plan");

    const [filteredBusiness, setFilteredBusiness] = useState<BusinessData[]>([]);

    useEffect(() => {
        ////////// DO YOUR API CALL HERE WITH FILTERS.

        if (planFilter === "all-plan") return setFilteredBusiness(businesses);
        const filtered = businesses.filter(
            (businesse) => businesse.plan === planFilter,
        );

        setFilteredBusiness(filtered);
    }, [planFilter]);

    const cards: CardValue[] = [
        {
            title: "Total Businesses",
            text: "1,247",
            subText: "+12% from last month",
            icon: Calendar,
        },
        {
            title: "Total Team Members",
            text: "1,247",
            subText: "+12% from last month",
            icon: UsersRound,
        },

        {
            title: "Total Staff Members",
            text: "1,247",
            subText: "+12% from last month",
            icon: UsersRound,
        },
    ];

    return (
        <div>
            <section className="w-full pb-8 bg-[#F5F5F5]">
                <DashboardHeader />

                <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl text-primary font-semibold">
                            Billing Management
                        </h3>
                        <p className="text-sm text-foreground">
                            Manage subscription plans and billing information.
                        </p>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((card, i) => (
                            <Card className="bg-white" key={i}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {card.title}
                                            </h3>
                                            <div className="text-3xl font-bold text-gray-900">
                                                {card.text}
                                            </div>
                                            <p className="text-sm text-gray-500">{card.subText}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                            <card.icon className="text-white" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="bg-white">
                        <CardContent className="p-4 flex w-full gap-4">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    placeholder="Search business name & owner name..."
                                    className="pl-10 border-gray-200"
                                />
                            </div>
                            <Select
                                defaultValue="all-plan"
                                onValueChange={(select_input) => setPlanFilter(select_input)}
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-plan">All Plan</SelectItem>
                                    <SelectItem value="Premium">Premium</SelectItem>
                                    <SelectItem value="Professional">Professional</SelectItem>
                                    <SelectItem value="Basic">Basic</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                    <Card className="bg-white">
                        <CardContent className="p-0">
                            <div className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    All Businesses
                                </h2>
                            </div>

                            {/* Table */}
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-primary hover:bg-primary text-primary-foreground">
                                        <TableHead className="text-white font-medium">
                                            Business
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Owner
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Plan
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Status
                                        </TableHead>

                                        <TableHead className="text-white font-medium">
                                            Team Member
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Staff Member
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Total Call
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Monthly Revenue
                                        </TableHead>
                                        <TableHead className="text-white font-medium">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredBusiness.map((business, i) => (
                                        <TableRow key={business.id} className="hover:bg-gray-50">
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src={AvatarImg} />
                                                        <AvatarFallback>GB</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium text-gray-900">
                                                            {business.owner}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {business.location}
                                                        </div>
                                                        <div className="text-xs text-gray-400">
                                                            Joined {business.joinDate}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col gap-1">
                                                    <div className="font-medium text-gray-900">
                                                        {business.contact}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {business.email}
                                                    </div>
                                                    <div className="text-xs text-gray-400">
                                                        {business.phone}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        business.plan === "Professional"
                                                            ? "default"
                                                            : business.plan === "Basic"
                                                                ? "outline"
                                                                : "indigo"
                                                    }
                                                >
                                                    {business.plan}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        business.status === "Active"
                                                            ? "success"
                                                            : business.status === "Expired"
                                                                ? "secondary"
                                                                : "warning"
                                                    }
                                                >
                                                    {business.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600">
                                                <div className="flex items-center gap-2 h-full justify-center">
                                                    <UsersRound size={18} fill="black" />
                                                    {business.teamMembers}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-600">
                                                <div className="flex items-center gap-2 h-full justify-center">
                                                    <UsersRound size={18} fill="black" />
                                                    {business.staffMembers}
                                                </div>
                                            </TableCell>

                                            <TableCell className="text-gray-600">
                                                <div className="flex items-center gap-2 h-full">
                                                    <PhoneCall size={18} fill="black" />
                                                    {business.totalCalls}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-center font-semibold">
                                                $ {business.monthlyRevenue}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                        className="cursor-pointer"
                                                    >
                                                        <MoreHorizontal className="!h-8 !w-8 opacity-60" />
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <Link to={`/admin/business-management/business-profile/${business.id}`}>
                                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                                        </Link>
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>Cancel</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            {/* Pagination */}
                            <div className="p-6 border-t">
                                <Pagination className="flex items-center justify-end">
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#" isActive>
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">10</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href="#" />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div></div>
            </section>
        </div>
    );
};

export default BusinessManagement;
