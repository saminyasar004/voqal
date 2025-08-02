import Layout from "@/components/common/layout";
import AdminDashboardLayout from "@/components/common/admin-dashboard-layout";
import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import ResetPassword from "@/pages/auth/reset-password";
import Signup from "@/pages/auth/signup";
import VerifyOtp from "@/pages/auth/verify-otp";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Onboarding from "@/pages/on-boarding";
import PrivacyPolicy from "@/pages/privacy-policy";
import Staff from "@/pages/user/staff";
import TeamManagement from "@/pages/user/team-management";
import Bookings from "@/pages/user/bookings";
import CallLogs from "@/pages/user/call-logs";
import Customers from "@/pages/user/customers";
import Dashboard from "@/pages/user/dashboard";
import BusinessProfile from "@/pages/user/business-profile";
import EditBusinessProfile from "@/pages/user/business-profile/edit-business-profile";
import Billing from "@/pages/user/billing";
import { Notifications as UserNotifications } from "@/pages/user/notifications";
import Blacklist from "@/pages/user/blacklist";
import Calendar from "@/pages/user/calendar";
import BusinessOwnerProfile from "@/pages/user/profile";
import Analytics from "@/pages/user/analytics";
import AdminLogin from "@/pages/admin/auth/login";
import AdminForgotPassword from "@/pages/admin/auth/forgot-password";
import AdminVerifyOtp from "@/pages/admin/auth/verify-otp";
import AdminResetPassword from "@/pages/admin/auth/reset-password";
import AdminDashboard from "@/pages/admin/dashboard";
import BusinessCategoryAnalytics from "@/pages/admin/business-category-analytics";
import AdminBilling from "@/pages/admin/billing";
import UserDashboardLayout from "@/components/common/user-dashboard-layout";

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

  // User Dashboard Routes
  {
    path: "/user/profile",
    element: BusinessOwnerProfile,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/notifications",
    element: UserNotifications,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/dashboard",
    element: Dashboard,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/analytics",
    element: Analytics,
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
  {
    path: "/user/business-profile/edit",
    element: EditBusinessProfile,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/billing",
    element: Billing,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/blacklist",
    element: Blacklist,
    layout: UserDashboardLayout,
  },
  {
    path: "/user/calendar",
    element: Calendar,
    layout: UserDashboardLayout,
  },

  // Admin Dashboard Routes
  {
    path: "/admin/login",
    element: AdminLogin,
    layout: Layout,
  },
  {
    path: "/admin/forgot-password",
    element: AdminForgotPassword,
    layout: Layout,
  },
  {
    path: "/admin/verify-otp",
    element: AdminVerifyOtp,
    layout: Layout,
  },
  {
    path: "/admin/reset-password",
    element: AdminResetPassword,
    layout: Layout,
  },
  {
    path: "/admin/dashboard",
    element: AdminDashboard,
    layout: AdminDashboardLayout,
  },
  {
    path: "/admin/business-category-analytics",
    element: BusinessCategoryAnalytics,
    layout: AdminDashboardLayout,
  },
  {
    path: "/admin/billing",
    element: AdminBilling,
    layout: AdminDashboardLayout,
  },
];
