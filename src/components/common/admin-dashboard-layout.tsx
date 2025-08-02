import {
  default as LogoBlack,
  default as LogoIconImg,
} from "@/assets/images/voqal-white.svg";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Blocks,
  BriefcaseBusiness,
  ChartSpline,
  ChevronsLeftRight,
  HandCoins,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminDashboardLayout({ children }) {
  const location = useLocation();

  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <Blocks size={20} className="shrink-0" />,
    },

    {
      label: "Business Management",
      href: "/admin/business-management",
      icon: <BriefcaseBusiness size={20} className="shrink-0" />,
    },
    {
      label: "Detail Analytics",
      href: "/admin/business-category-analytics",
      icon: <ChartSpline size={20} className="shrink-0" />,
    },
    {
      label: "Billing Management",
      href: "/admin/billing",
      icon: <HandCoins size={20} className="shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full h-screen flex flex-1 rounded-md bg-background relative">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r border-primary bg-primary text-primary-foreground">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 pt-10">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  isActive={location.pathname === link.href}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
        <span
          onClick={() => setOpen(!open)}
          className={cn(
            "bg-white text-primary rounded-md w-8 h-8 flex items-center justify-center absolute cursor-pointer z-30 transition-all duration-300",
            open
              ? "top-[5.5rem] left-0 translate-x-[14.5rem]"
              : "top-[5.5rem] left-0 translate-x-[2.6rem]",
          )}
        >
          <ChevronsLeftRight />
        </span>
      </Sidebar>
      <div className="w-full min-h-full overflow-y-scroll">{children}</div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black pl-1"
    >
      <img
        src={LogoBlack}
        alt="Voqal"
        className="max-w-full h-20 transition-all duration-300"
      />
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black pl-1"
    >
      <img
        src={LogoIconImg}
        alt="Voqal"
        className="max-w-6 h-10 transition-all duration-300"
      />
    </Link>
  );
};
