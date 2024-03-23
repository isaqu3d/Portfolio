import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        teal: "gap-2 my-2 py-2 px-4 rounded-md bg-teal-200 text-black transition-colors hover:bg-teal-400 dark:bg-teal-400 dark:text-white-100 dark:hover:bg-teal-600",
        link: "text-pink-600 transition-colors  hover:text-pink-700 dark:text-teal-600 dark:hover:text-teal-500 hover:underline underline-offset-4",
        pink: "text-pink-600 transition-colors hover:text-pink-700 hover:underline underline-offset-4",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        social:
          "ml-2 flex w-max items-center gap-2 rounded-md py-2 px-3 text-teal-200 hover:bg-teal-400/20 hover:underline hover:decoration-pink-500 hover:decoration-1 hover:underline-offset-[6px] dark:text-teal-600 dark:hover:decoration-teal-600",
      },

      size: {
        sm: "text-xs antialiased",
        textMd: "text-md antialiased font-normal",
        textLg: "text-lg antialiased font-medium",
        teal: "text-md font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, href, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        href={href}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
