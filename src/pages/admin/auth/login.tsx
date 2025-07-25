import LogoImg from "@/assets/images/voqal-black.svg";
import GoogleImg from "@/assets/images/google-icon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<section className="min-h-screen h-max bg-hero bg-no-repeat bg-center bg-cover py-10">
			<div className="max-w-2xl lg:w-[calc(100%-6rem)] mx-auto flex flex-col gap-4 border border-primary-gray/20 rounded-lg p-8 lg:p-12 bg-white text-center">
				<div className="flex items-center justify-center">
					<Link to={"/"}>
						<img src={LogoImg} alt="voqal" className="w-40" />
					</Link>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h2 className="text-3xl font-semibold">Admin Login</h2>
					<p className="text-primary-gray">
						Please enter your details below.
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

					<div className="form-group flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Checkbox id="terms" />
							<Label htmlFor="terms" className="cursor-pointer">
								Remember me
							</Label>
						</div>

						<Link
							to={"/admin/forgot-password"}
							className="text-warning hover:underline text-sm font-medium"
						>
							Forgot password?
						</Link>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button className="w-full" size="lg">
							Login
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
