import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<section className="min-h-screen h-max bg-hero bg-no-repeat bg-center bg-cover py-10">
			<div className="max-w-2xl lg:w-[calc(100%-6rem)] mx-auto flex flex-col gap-4 border border-primary-gray/20 rounded-lg p-8 lg:p-12 bg-white text-center">
				<div className="flex items-center justify-center">
					<Link to={"/"}>
						<img src={LogoImg} alt="voqal" className="w-40" />
					</Link>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h2 className="text-3xl font-semibold">Forgot Password</h2>
					<p className="text-primary-gray">
						Kindly click the button and enter the information. A
						verification code will be sent to you via email for you
						to enter.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					<div className="form-group flex gap-3 items-center">
						<Input
							type="email"
							name="email"
							placeholder="Your Email"
						/>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Link
							to={"/verify-otp"}
							className="w-full flex items-center justify-center"
						>
							<Button className="w-full" size="lg">
								Send
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
