import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "@/assets/images/avatar.jpg";
import { Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHeader() {


    const location = useLocation();


    const basePath = location.pathname.trim().split('/')[1];


    return (
        <>
            <div className="w-full py-3 bg-secondary flex items-center justify-between px-5 border-b border-primary-gray/20">
                <div className=""></div>
                {/* <div className="flex flex-col gap-1 flex-1">
				<h3 className="text-xl text-primary font-semibold">{title}</h3>
				<p className="text-sm text-foreground">{description}</p>
			</div> */}
                <div className="flex items-center gap-4">
                    <Link to={`/${basePath}/notifications`}>
                        <span className="flex items-center cursor-pointer text-[#414141]">
                            <Bell fill="#414141" size={20} />
                        </span>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="w-10 h-10 rounded-full border border-primary overflow-hidden cursor-pointer">
                                <img
                                    src={Avatar}
                                    alt="avatar"
                                    className="max-w-full pointer-events-none"
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <Link to={`/${basePath}/profile`}>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    );
}
