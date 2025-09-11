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
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useLogInMutation } from "@/redux/baseApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";

const loginSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" }),
	role: z
		.string({ message: "Role is required" })
		.refine((val) => val === "business_owner" || val === "team_member", {
			message: "Role must be either 'business_owner' or 'team_member'",
		}),
	rememberMe: z.boolean(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [logIn, { isLoading, isError, error }] = useLogInMutation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
			role: undefined,
			rememberMe: false,
		},
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			const payload = {
				email: data.email,
				password: data.password,
				role: data.role,
			};
			const response = await logIn(payload).unwrap();
			console.log("Login Response: ", response);

			if (response?.access_token && response?.refresh_token) {
				localStorage.setItem("access_token", response.access_token);

				if (data.rememberMe) {
					localStorage.setItem(
						"refreshToken",
						response.refresh_token
					);
				}
			}
			toast.success("Login successful!");
			navigate("/user/dashboard");
		} catch (err: any) {
			toast.error(err?.error || "Login failed. Please try again.");
		}
	};

	return (
		<section className="min-h-screen h-max bg-hero bg-no-repeat bg-center bg-cover py-10">
			<div className="max-w-2xl lg:w-[calc(100%-6rem)] mx-auto flex flex-col gap-4 border border-primary-gray/20 rounded-lg p-8 lg:p-12 bg-white text-center">
				<div className="flex items-center justify-center">
					<Link to={"/"}>
						<img src={LogoImg} alt="voqal" className="w-40" />
					</Link>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h2 className="text-3xl font-semibold">Welcome Back</h2>
					<p className="text-primary-gray">
						Please enter your details below.
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-6"
				>
					<div className="form-group space-y-1">
						<Select
							onValueChange={(value) =>
								setValue(
									"role",
									value as "business_owner" | "team_member"
								)
							}
						>
							<SelectTrigger
								className={cn(
									"w-full",
									errors.role && "ring-1 ring-warning"
								)}
							>
								<SelectValue placeholder="User Role" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="business_owner">
										Business Owner
									</SelectItem>
									<SelectItem value="team_member">
										Team Member
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						{errors.role && (
							<p className="text-warning text-left text-sm w-full">
								{errors.role.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex gap-3 items-center w-full">
							<Input
								type="email"
								placeholder="Your Email"
								{...register("email")}
								className={cn(
									errors.email && "ring-1 ring-warning"
								)}
							/>
						</div>
						{errors.email && (
							<p className="text-warning text-left text-sm w-full">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex gap-3 items-center relative w-full">
							<Input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								{...register("password")}
								className={cn(
									"pr-10",
									errors.password && "ring-1 ring-warning"
								)}
							/>
							{showPassword ? (
								<EyeOff
									className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									size={18}
								/>
							) : (
								<Eye
									className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									size={18}
								/>
							)}
						</div>
						{errors.password && (
							<p className="text-warning text-left text-sm w-full">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="form-group flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Checkbox
								id="rememberMe"
								{...register("rememberMe")}
								onCheckedChange={(checked) =>
									setValue("rememberMe", !!checked)
								}
							/>
							<Label
								htmlFor="rememberMe"
								className="cursor-pointer"
							>
								Remember me
							</Label>
						</div>
						<Link
							to={"/forgot-password"}
							className="text-warning hover:underline text-sm font-medium"
						>
							Forgot password?
						</Link>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button
							type="submit"
							className="w-full"
							size="lg"
							disabled={isLoading}
						>
							{isLoading ? "Logging in..." : "Login"}
						</Button>
					</div>

					<div className="form-group text-center">
						<p className="text-sm text-primary-gray">
							Don't have an account?{" "}
							<Link
								to={"/signup"}
								className="text-primary hover:underline text-sm font-medium"
							>
								Sign up
							</Link>
						</p>
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button className="w-full" variant="outline" size="lg">
							<img src={GoogleImg} alt="google" className="w-6" />
							Continue with Google
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
