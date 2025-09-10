import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleImg from "@/assets/images/google-icon.svg";
import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSignUpMutation } from "@/redux/baseApi";
import { toast } from "sonner";

const signupSchema = z
	.object({
		email: z.string().email({ message: "Invalid email address" }),
		fullName: z.string().min(2, { message: "Name is required" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" }),
		confirmPassword: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" }),
		isAcceptTerms: z.boolean().refine((val) => val === true, {
			message: "Please accept all terms & conditions",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type SignupFormData = z.infer<typeof signupSchema>;

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [signUp, { isLoading, isError, error, isSuccess }] =
		useSignUpMutation();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: "",
			fullName: "",
			password: "",
			confirmPassword: "",
			isAcceptTerms: false,
		},
	});

	const onSubmit = async (data: SignupFormData) => {
		try {
			const payload = {
				email: data.email,
				full_name: data.fullName,
				password: data.password,
				role: "business_owner",
			};
			const response = await signUp(payload).unwrap();

			console.log("Response: ", response);
			toast.success("Signup successful! Please verify your email.");
			navigate("/verify-otp", {
				state: { email: data.email, from: "signup" },
			});
		} catch (err: any) {
			const errorMessage =
				err?.data?.error || "Signup failed. Please try again.";
			toast.error(errorMessage);
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
					<h2 className="text-3xl font-semibold">Create Account</h2>
					<p className="text-primary-gray">
						Enter the email address associated with your account.
						We'll send you an OTP to your email.
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-6"
				>
					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex gap-3 items-center w-full">
							<Input
								type="text"
								placeholder="Full Name"
								{...register("fullName")}
								className={cn(
									errors.fullName && "ring-1 ring-warning"
								)}
							/>
						</div>
						{errors.fullName && (
							<p className="text-warning text-left text-sm w-full">
								{errors.fullName.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex gap-3 items-center w-full">
							<Input
								type="email"
								placeholder="Email"
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
								className={cn(
									"pr-10",
									errors.password && "ring-1 ring-warning"
								)}
								{...register("password")}
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
							<p className="text-warning w-full text-sm text-left">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex gap-3 items-center relative w-full">
							<Input
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirm Password"
								className={cn(
									"pr-10",
									errors.confirmPassword &&
										"ring-1 ring-warning"
								)}
								{...register("confirmPassword")}
							/>
							{showConfirmPassword ? (
								<EyeOff
									className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									size={18}
								/>
							) : (
								<Eye
									className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									size={18}
								/>
							)}
						</div>
						{errors.confirmPassword && (
							<p className="text-warning w-full text-sm text-left">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<div className="form-group flex flex-col gap-1 items-center justify-between">
						<div className="flex gap-2 w-full items-start">
							<Checkbox
								id="terms"
								{...register("isAcceptTerms")}
								onCheckedChange={(checked) =>
									setValue("isAcceptTerms", !!checked)
								}
							/>
							<Label htmlFor="terms" className="cursor-pointer">
								Accept all terms & conditions
							</Label>
						</div>
						{errors.isAcceptTerms && (
							<p className="text-warning w-full text-sm text-left">
								{errors.isAcceptTerms.message}
							</p>
						)}
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button
							type="submit"
							className="w-full"
							size="lg"
							disabled={isLoading}
						>
							{isLoading ? "Signing up..." : "Sign up"}
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
				</form>
			</div>
		</section>
	);
}
