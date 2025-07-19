import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingItemProps } from "@/interfaces";
import { Sparkles, Users } from "lucide-react";

export default function BookingCard({ data }: { data: BookingItemProps }) {
	return (
		<div className="border border-primary-gray/10 rounded-lg p-4 grid grid-cols-6 gap-8">
			<div className="flex flex-col items-center justify-center gap-1 border-r border-primary-gray/20">
				<h5 className="text-lg">{data.time}</h5>
				<span className="text-xs text-primary-gray">{data.date}</span>
				<span className="text-xs text-primary-gray">
					{data.duration}
				</span>
			</div>
			<div className="col-span-5 flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<h3 className="text-lg font-medium">{data.client}</h3>
						<Badge variant={"default"} className="gap-1">
							{data.status === "Manual" ? (
								<Users size={14} />
							) : (
								<Sparkles size={14} />
							)}
							{data.status}
						</Badge>
						{data.confirmed && (
							<Badge variant={"success"}>Confirmed</Badge>
						)}
					</div>

					<h5 className="text-primary-gray text-sm">{data.type}</h5>
					<h5 className="text-primary-gray text-sm">{data.phone}</h5>
					<h5 className="text-primary-gray text-sm">{data.price}$</h5>
				</div>
				<div className="flex h-full items-end">
					<Button variant="transparent">View Details</Button>
				</div>
			</div>
		</div>
	);
}
