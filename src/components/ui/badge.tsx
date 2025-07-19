import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
	{
		variants: {
			variant: {
				default:
					"border-transparent text-primary hover:bg-primary hover:text-primary-foreground border border-primary",
				success:
					"border-transparent text-success hover:bg-success hover:text-primary-foreground border border-success",
				warning:
					"border-transparent text-warning hover:bg-warning hover:text-foreground border border-warning",
				info: "border-transparent text-blue-500 hover:bg-blue-500 hover:text-primary-foreground border border-blue-500",
				secondary:
					"border-transparent text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
				destructive:
					"border-transparent text-danger hover:bg-danger hover:text-primary-foreground border border-danger",
				outline: "text-slate-950 dark:text-slate-50",
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
