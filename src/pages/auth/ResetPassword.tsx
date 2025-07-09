import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
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
					<h2 className="text-3xl font-semibold">Set New password</h2>
					<p className="text-primary-gray">
						Your new password must be unique from those previously
						used.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					<div className="form-group flex gap-3 items-center relative">
						<Input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Enter New Password"
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
							placeholder="Confirm New Password"
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

					<div className="form-group flex gap-3 items-center">
						<Button className="w-full" size="lg">
							Save
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
