import FacebookImg from "@/assets/images/facebook.svg";
import InstagramImg from "@/assets/images/instagram.svg";
import LinkedinImg from "@/assets/images/linkedin.svg";
import TwitterImg from "@/assets/images/twitter.svg";
import LogoWhiteImg from "@/assets/images/voqal-white.svg";
import { MoveRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";

interface SocialLinksProps {
	img: string;
	url: string;
}

interface NavItemProps {
	name: string;
	link: string;
	type: "route" | "hash";
}

const socialLinks: SocialLinksProps[] = [
	{
		img: FacebookImg,
		url: "https://www.facebook.com/voqual",
	},
	{
		img: InstagramImg,
		url: "https://www.instagram.com/voqual",
	},
	{
		img: TwitterImg,
		url: "https://twitter.com/voqual",
	},
	{
		img: LinkedinImg,
		url: "https://www.linkedin.com/company/voqual",
	},
];

const productNavItems: NavItemProps[] = [
	{
		name: "What We Do",
		link: "#what-we-do",
		type: "hash",
	},
	{
		name: "How it Works",
		link: "#how-it-works",
		type: "hash",
	},
	{
		name: "Pricing",
		link: "#pricing",
		type: "hash",
	},
	{
		name: "FAQ",
		link: "#faq",
		type: "hash",
	},
];

const companyNavItems: NavItemProps[] = [
	{
		name: "About",
		link: "#about-us",
		type: "hash",
	},
	{
		name: "Contact Us",
		link: "/contact-us",
		type: "route",
	},
	{
		name: "Privacy Policy",
		link: "/privacy-policy",
		type: "route",
	},
];

const Footer: React.FC = () => {
	const location = useLocation();

	return (
		<footer className="bg-primary text-white">
			<div className="container px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 p-10">
				{/* Voqual Section */}
				<div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
					<div className="flex items-center">
						<Link to="/" className="w-full">
							<div className="flex items-center justify-center">
								<img
									src={LogoWhiteImg}
									alt="Voqal"
									className="max-w-full"
								/>
							</div>
						</Link>
					</div>
					<p className="text-[#B1B1B1] text-sm">
						AI-powered booking automation for modern businesses
						across New Zealand and Australia.
					</p>
					<div className="flex gap-1 items-center">
						{socialLinks.map((link, index) => (
							<a href={link.url} key={index}>
								<img
									src={link.img}
									alt={link.url}
									className="max-w-[80%]"
								/>
							</a>
						))}
					</div>
				</div>

				{/* Product Section */}
				<div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-start">
					<h4 className="text-lg font-semibold">Product</h4>
					<div className="flex flex-col gap-3">
						{productNavItems.map((item, idx) => {
							if (item.type === "route") {
								return (
									<Link
										className="relative text-sm text-[#B2B2B2] hover:underline"
										key={`link-${idx}`}
										to={item.link}
									>
										{item.name}
									</Link>
								);
							} else {
								return (
									<a
										className="relative text-sm text-[#B2B2B2] hover:underline"
										key={`link-${idx}`}
										href={`${
											location.pathname === "/"
												? item.link
												: `/${item.link}`
										}`}
									>
										{item.name}
									</a>
								);
							}
						})}
					</div>
				</div>

				{/* Company Section */}
				<div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-start">
					<h4 className="text-lg font-semibold">Company</h4>
					<div className="flex flex-col gap-3">
						{companyNavItems.map((item, idx) => {
							if (item.type === "route") {
								return (
									<Link
										className="relative text-sm text-[#B2B2B2] hover:underline"
										key={`link-${idx}`}
										to={item.link}
									>
										{item.name}
									</Link>
								);
							} else {
								return (
									<a
										className="relative text-sm text-[#B2B2B2] hover:underline"
										key={`link-${idx}`}
										href={`${
											location.pathname === "/"
												? item.link
												: `/${item.link}`
										}`}
									>
										{item.name}
									</a>
								);
							}
						})}
					</div>
				</div>

				{/* Subscribe Section */}
				<div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-start">
					<h4 className="text-lg font-semibold">Subscribe</h4>
					<div className="flex gap-0 items-center justify-center lg:justify-start w-full relative">
						<Input
							type="email"
							name="email"
							className="h-12 pl-4 pr-20 w-full rounded-full text-sm"
							placeholder="Email address"
						/>
						<button className="bg-primary hover:bg-primary/90 flex items-center justify-center px-4 h-10 rounded-full absolute top-1/2 -translate-y-1/2 right-1">
							<MoveRight size={20} className="lg:w-30 lg:h-30" />
						</button>
					</div>
				</div>
			</div>

			<div className="container py-8">
				<div className="w-[90%] pt-8 mx-auto border-t border-[#7D7D7D] text-center text-[#7D7D7D] text-sm">
					<p>© 2024 Voqual. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
