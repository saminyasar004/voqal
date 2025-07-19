import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer relative transition-all duration-300 ease-in-out z-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				transparent:
					"bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
				destructive:
					"bg-warning text-primary-foreground hover:bg-warning/90",
				outline:
					"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
				secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
				ghost: "hover:bg-slate-100 hover:text-slate-900",
				link: "text-slate-900 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-8 py-1",
				sm: "h-8 px-6",
				lg: "h-11 px-10",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
