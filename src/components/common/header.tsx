import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	Navbar,
	NavbarButton,
	NavbarLogo,
	NavBody,
	NavItems,
} from "@/components/ui/resizable-navbar";
import LogoImg from "@/assets/images/voqal-black.svg";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";

interface NavItemProps {
	name: string;
	link: string;
	type: "self" | "external";
}

export default function Header() {
	const location = useLocation();
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const navItems: NavItemProps[] = [
		{
			name: "Home",
			link: "",
			type: "external",
		},
		{
			name: "What We Do",
			link: "#what-we-do",
			type: "self",
		},
		{
			name: "About Us",
			link: "#about-us",
			type: "self",
		},
		{
			name: "Pricing",
			link: "#pricing",
			type: "self",
		},
		{
			name: "Contact Us",
			link: "/contact-us",
			type: "external",
		},
	];

	useEffect(() => {
		console.log(location);
		if (isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	}, [location]);

	return (
		<header className="w-full h-auto py-3 bg-background/50 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
			<div className="container grid grid-cols-2 lg:grid-cols-4 gap-3 items-center">
				<div className="flex items-center justify-start">
					<Link to={"/"}>
						<img
							src={LogoImg}
							alt="voqal"
							className="max-w-[70%] lg:max-w-full"
						/>
					</Link>
				</div>

				<div className="col-span-2 hidden lg:block">
					<div className="w-full flex gap-6 items-center">
						{navItems.map((menu, index) => (
							<a
								key={index}
								href={`/${menu.link}`}
								className={cn(
									"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
									location.hash === menu.link &&
										"text-primary after:w-full",
									location.hash === "" &&
										location.pathname === "/" &&
										menu.link === "#home" &&
										"text-primary after:w-full"
								)}
							>
								{menu.name}
							</a>
						))}
					</div>
				</div>

				<div className="lg:flex w-full hidden items-center justify-end gap-3">
					<Link to={"/login"}>
						<Button variant="secondary" className="rounded-full">
							Log in
						</Button>
					</Link>
					<Link to={"/signup"}>
						<Button className="rounded-full">Sign Up</Button>
					</Link>
				</div>

				<div className="lg:hidden w-full flex items-center justify-end gap-3">
					<span
						onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
						className="cursor-pointer hover:text-primary transition-all duration-300"
					>
						<AlignRight className="pointer-events-none" size={32} />
					</span>
				</div>

				{/* Mobile Nav */}
				<Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
					<SheetContent className="pt-12">
						<div className="w-full">
							<div className="w-full flex flex-col gap-3 items-end">
								{navItems.map((menu, index) => (
									<a
										key={index}
										href={menu.link}
										className={cn(
											"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
											location.pathname === menu.link &&
												"text-primary after:w-full",
											location.hash === "" &&
												location.pathname === "/" &&
												menu.link === "#home" &&
												"text-primary after:w-full"
										)}
									>
										{menu.name}
									</a>
								))}
							</div>
						</div>
						<SheetFooter className="pt-12 gap-4 items-end">
							<Link to={"/login"}>
								<Button
									variant="secondary"
									className="rounded-full"
								>
									Log in
								</Button>
							</Link>
							<Link to={"/signup"}>
								<Button className="rounded-full">
									Sign Up
								</Button>
							</Link>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}

{
	/* <Navbar className="py-5">
	<NavBody>
		<NavbarLogo />
		<NavItems items={navItems} />
		<div className="flex items-center gap-4 ml-5">
			<Button variant="transparent">Log in</Button>
			<Button>Sign up</Button>
		</div>
	</NavBody>

	<MobileNav>
		<MobileNavHeader>
			<NavbarLogo />
			<MobileNavToggle
				isOpen={isMobileMenuOpen}
				onClick={() =>
					setIsMobileMenuOpen(!isMobileMenuOpen)
				}
			/>
		</MobileNavHeader>

		<MobileNavMenu
			isOpen={isMobileMenuOpen}
			onClose={() => setIsMobileMenuOpen(false)}
		>
			{navItems.map((item, idx) => (
				<a
					key={`mobile-link-${idx}`}
					href={item.link}
					onClick={() => setIsMobileMenuOpen(false)}
					className="relative text-neutral-600 dark:text-neutral-300"
				>
					<span className="block">{item.name}</span>
				</a>
			))}
			<div className="flex flex-col items-center gap-4">
				<Button variant="transparent">Log in</Button>
				<Button>Sign up</Button>
			</div>
		</MobileNavMenu>
	</MobileNav>
</Navbar> */
}
