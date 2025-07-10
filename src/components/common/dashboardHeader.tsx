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

export default function DashboardHeader({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="sticky top-0 z-20 w-full py-3 bg-secondary border-b border-primary flex items-center justify-between px-5">
			<div className="flex flex-col gap-1 flex-1">
				<h3 className="text-xl text-primary font-semibold">{title}</h3>
				<p className="text-sm text-foreground">{description}</p>
			</div>
			<div className="flex items-center gap-4">
				<span className="flex items-center cursor-pointer text-[#414141]">
					<Bell fill="#414141" size={20} />
				</span>

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
							<DropdownMenuItem>Profile</DropdownMenuItem>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />
						<DropdownMenuItem>Log out</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
