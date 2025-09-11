import LogoImg from "@/assets/images/voqal-black.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPasswordMutation } from "@/redux/baseApi";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const resetPasswordSchema = z
	.object({
		newPassword: z
			.string()
			.min(8, { message: "New Password must be at least 8 characters" }),
		confirmNewPassword: z
			.string()
			.min(8, { message: "New Password must be at least 8 characters" }),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "New Passwords do not match",
		path: ["confirmPassword"],
	});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPasswordFormData>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			newPassword: "",
			confirmNewPassword: "",
		},
	});
	const [resetPassword, { isLoading, isError, error, isSuccess }] =
		useResetPasswordMutation();

	const onSubmit = async (data: ResetPasswordFormData) => {
		try {
			const email = localStorage.getItem("email");
			if (!email) {
				toast.error("Email not found. Please try again.");
				return;
			}
			const response = await resetPassword({
				email: email,
				password: data.newPassword,
			}).unwrap();
			console.log("Reset Password Response: ", response);
			toast.success(response.message || "Password reset successfully!");

			navigate("/login");
		} catch (err) {
			console.log(err.message);
			toast.error(
				err.message || "Password reset failed. Please try again."
			);
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
					<h2 className="text-3xl font-semibold">Set New password</h2>
					<p className="text-primary-gray">
						Your new password must be unique from those previously
						used.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex-col w-full flex gap-3 items-center relative">
							<Input
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="Enter New Password"
								className={cn(
									"pr-10",
									errors.confirmNewPassword &&
										"ring-1 ring-warning"
								)}
								{...register("newPassword")}
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
						{errors.newPassword && (
							<p className="text-warning w-full text-sm text-left">
								{errors.newPassword.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-1 items-center w-full text-left">
						<div className="form-group flex-col w-full flex gap-3 items-center relative">
							<Input
								type={showConfirmPassword ? "text" : "password"}
								name="confirm-password"
								placeholder="Confirm New Password"
								className={cn(
									"pr-10",
									errors.confirmNewPassword &&
										"ring-1 ring-warning"
								)}
								{...register("confirmNewPassword")}
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
						{errors.confirmNewPassword && (
							<p className="text-warning w-full text-sm text-left">
								{errors.confirmNewPassword.message}
							</p>
						)}
					</div>

					<div className="form-group flex gap-3 items-center">
						<Button
							type="submit"
							onClick={handleSubmit(onSubmit)}
							className="w-full"
							size="lg"
						>
							Save
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
