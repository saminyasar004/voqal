import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
	{
		variants: {
			variant: {
				"default-outlined":
					"border-transparent text-primary hover:bg-primary hover:text-primary-foreground border border-primary",
				default:
					"border-primary bg-primary text-white hover:bg-transparent hover:text-primary border border-primary",

				"success-outlined":
					"border-transparent text-success hover:bg-success hover:text-primary-foreground border border-success",
				success:
					"border-success text-white bg-success hover:bg-transparent hover:text-success border border-success",
				"indigo-outlined":
					"border-transparent text-indigo-500 hover:bg-indigo-500 hover:text-primary-foreground border border-indigo-500",
				indigo: "border-indigo-500 text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-500 border border-indigo-500",
				"warning-outlined":
					"border-transparent text-warning hover:bg-warning hover:text-primary-foreground border border-warning",
				warning:
					"bg-warning text-white hover:bg-transparent hover:text-warning border border-warning",
				"info-outlined":
					"border-transparent text-blue-500 hover:bg-blue-500 hover:text-primary-foreground border border-blue-500",
				info: "bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 border border-blue-500",
				secondary:
					"border border-primary-gray text-primary-foreground hover:bg-transparent bg-primary-gray hover:text-primary-gray",
				"destructive-outlined":
					"border-transparent text-rose-500 hover:bg-rose-500 hover:text-primary-foreground border border-rose-500",
				destructive:
					"bg-rose-500 text-white hover:bg-transparent hover:text-rose-500 border border-rose-500",
				outline:
					"border border-primary-gray text-slate-950 dark:text-slate-50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
