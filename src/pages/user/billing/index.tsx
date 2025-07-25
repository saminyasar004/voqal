import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";

export default function Billing() {
	return (
		<>
			<section className="w-full pb-8 bg-[#F5F5F5]">
				{/* dashboard header */}
				<DashboardHeader />

				<div className="flex justify-between gap-1 flex-1 px-6 py-4">
					<div className="flex flex-col gap-1">
						<h3 className="text-xl text-primary font-semibold">
							Billing
						</h3>
						<p className="text-sm text-foreground">
							Manage your subscription
						</p>
					</div>
				</div>

				<div className="w-full p-5 flex items-center justify-between">
					<div className="py-6 flex justify-between gap-4 w-full px-6 border-2 border-primary-gray rounded-lg">
						<div className="space-y-3">
							<div className="flex flex-col gap-2">
								<h4 className="text-primary font-medium">
									Current Plan
								</h4>

								<h3 className="text-primary font-semibold text-xl">
									Professional Plan
								</h3>
								<span className="text-sm">
									Perfect for growing businesses
								</span>

								{/* <Button size="sm">Upgrade Plan</Button> */}
							</div>
							<div className="flex">
								<h4 className="text-2xl font-semibold text-primary">
									$299/
								</h4>

								<div className="flex items-end">
									<span className="text-sm">per month</span>
								</div>
							</div>
						</div>
						<div className="flex items-end">
							<Button>Upgrade Plan</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
