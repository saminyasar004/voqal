import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<section className="min-h-screen h-max bg-hero bg-no-repeat bg-center bg-cover py-10">
			<div className="max-w-2xl lg:w-[calc(100%-6rem)] mx-auto flex flex-col gap-4 border border-primary-gray/20 rounded-lg p-8 lg:p-12 bg-white text-center">
				<div className="flex items-center justify-center">
					<Link to={"/"}>
						<img src={LogoImg} alt="voqal" className="w-40" />
					</Link>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h2 className="text-3xl font-semibold">Contact Us</h2>
					<p className="text-primary-gray">
						We are available 24/7, 7 days a week
					</p>
					<p className="text-primary-gray">Phone: +8801405366393</p>
					<h4 className="text-2xl font-semibold">Send a message</h4>
				</div>

				<div className="flex flex-col gap-6">
					<div className="form-group flex flex-col lg:flex-row gap-5 items-center">
						<Input
							type="name"
							name="firstName"
							placeholder="First Name"
						/>
						<Input
							type="name"
							name="lastName"
							placeholder="Last Name"
						/>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Input
							type="email"
							name="email"
							placeholder="Your Email"
						/>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Textarea
							name="description"
							placeholder="Description"
							rows={5}
						/>
					</div>
					<div className="form-group flex gap-3 items-center py-6">
						<Button className="w-full" size="lg">
							Submit
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
