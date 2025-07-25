import GoogleImg from "@/assets/images/google-icon.svg";
import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSignup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<section className="min-h-screen h-max bg-hero bg-no-repeat bg-center bg-cover py-10">
			<div className="max-w-2xl lg:w-[calc(100%-6rem)] mx-auto flex flex-col gap-4 border border-primary-gray/20 rounded-lg p-8 lg:p-12 bg-white text-center">
				<div className="flex items-center justify-center">
					<Link to={"/"}>
						<img src={LogoImg} alt="voqal" className="w-40" />
					</Link>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h2 className="text-3xl font-semibold">Create Account</h2>
					<p className="text-primary-gray">
						Enter the email address associated with your account.
						We'll send you an OTP to your email.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					<div className="form-group flex gap-3 items-center">
						<Input
							type="name"
							name="name"
							placeholder="Full Name"
						/>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Input type="email" name="email" placeholder="Email" />
					</div>

					<div className="form-group flex gap-3 items-center relative">
						<Input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							className="pr-10"
						/>
						{showPassword ? (
							<EyeOff
								className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
								onClick={() => setShowPassword(!showPassword)}
								size={18}
							/>
						) : (
							<Eye
								className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
								onClick={() => setShowPassword(!showPassword)}
								size={18}
							/>
						)}
					</div>

					<div className="form-group flex gap-3 items-center relative">
						<Input
							type={showConfirmPassword ? "text" : "password"}
							name="confirm-password"
							placeholder="Confirm Password"
							className="pr-10"
						/>
						{showConfirmPassword ? (
							<EyeOff
								className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								size={18}
							/>
						) : (
							<Eye
								className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								size={18}
							/>
						)}
					</div>

					<div className="form-group flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Checkbox id="terms" />
							<Label htmlFor="terms" className="cursor-pointer">
								Accept all terms & conditions
							</Label>
						</div>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button className="w-full" size="lg">
							Sign up
						</Button>
					</div>

					<div className="form-group text-center">
						<p className="text-sm text-primary-gray">
							Already have an account?{" "}
							<Link
								to={"/login"}
								className="text-primary hover:underline text-sm font-medium"
							>
								Login
							</Link>
						</p>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button className="w-full" variant="outline" size="lg">
							<img src={GoogleImg} alt="google" className="w-6" />
							Continue with Google
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
