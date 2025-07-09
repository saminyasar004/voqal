import Layout from "@/components/common/layout";
import ForgotPassword from "@/pages/auth/forgotPassword";
import Login from "@/pages/auth/login";
import ResetPassword from "@/pages/auth/ResetPassword";
import Signup from "@/pages/auth/signup";
import VerifyOtp from "@/pages/auth/verifyOtp";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";

export interface Route {
	path: string;
	element: JSX.Element;
	layout?: JSX.Element;
}

export const routes = [
	{
		path: "/",
		element: Home,
		layout: Layout,
	},
	{
		path: "/contact-us",
		element: Contact,
		layout: Layout,
	},
	{
		path: "/privacy-policy",
		element: PrivacyPolicy,
		layout: Layout,
	},
	{
		path: "/login",
		element: Login,
		layout: Layout,
	},
	{
		path: "/signup",
		element: Signup,
		layout: Layout,
	},
	{
		path: "/forgot-password",
		element: ForgotPassword,
		layout: Layout,
	},
	{
		path: "/verify-otp",
		element: VerifyOtp,
		layout: Layout,
	},
	{
		path: "/reset-password",
		element: ResetPassword,
		layout: Layout,
	},
];
