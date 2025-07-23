import Layout from "@/components/common/layout";
import UserDashboardLayout from "@/components/common/user-dashboard-layout";
import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import ResetPassword from "@/pages/auth/reset-password";
import Signup from "@/pages/auth/signup";
import VerifyOtp from "@/pages/auth/verify-otp";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Onboarding from "@/pages/on-boarding";
import PrivacyPolicy from "@/pages/privacy-policy";
import Staff from "@/pages/user/staff/staff";
import TeamManagement from "@/pages/user/team-management/team-management";
import Bookings from "@/pages/user/bookings/bookings";
import CallLogs from "@/pages/user/call-logs/call-logs";
import Customers from "@/pages/user/customers/customers";
import Dashboard from "@/pages/user/dashboard";
import BusinessProfile from "@/pages/user/business-profile/business-profile";

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
		path: "/on-boarding",
		element: Onboarding,
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
	{
		path: "/user/dashboard",
		element: Dashboard,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/bookings",
		element: Bookings,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/call-logs",
		element: CallLogs,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/customers",
		element: Customers,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/staff",
		element: Staff,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/team-management",
		element: TeamManagement,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/business-profile",
		element: BusinessProfile,
		layout: UserDashboardLayout,
	},
];
