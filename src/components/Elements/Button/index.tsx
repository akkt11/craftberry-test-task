import { cva, type VariantProps } from "cva";

import styles from "./button.module.css";

interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(styles.button, {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    disabled: false,
  },
});

export const Button = ({
  className,
  intent,
  size,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ intent, size, disabled, className })}
      {...props}
    />
  );
};
