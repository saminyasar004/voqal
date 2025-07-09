import Layout from "@/components/common/layout";
import Contact from "@/pages/contact";
import Home from "@/pages/home";

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
];
