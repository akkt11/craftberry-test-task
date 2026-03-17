import { cva, type VariantProps } from "cva";
import "./button.scss";

interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(["button"], {
  variants: {
    intent: {
      primary: "button-primary",
      secondary: "",
      inner: "button-inner",
      ghost: "button-ghost",
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ intent, size, className })}
      {...props}
    />
  );
};
