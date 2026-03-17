import { cva, type VariantProps } from "cva";
import { createElement, type ReactNode } from "react";
import type { TypographyTags } from "./types";
import "./typography.scss";

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode;
  className?: string;
}

const typographyVariants = cva(["typographpy"], {
  variants: {
    variant: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-2xl",
      h4: "text-xl",
      paragraph: "text-base",
      caption: "text-sm",
    },
    color: {
      "primary-100": "primary-100",
      "primary-500": "primary-500",
      white: "white",
      black: "black",
    },
  },
  defaultVariants: {
    color: "black",
  },
});

export const Typography = (props: TypographyProps) => {
  const { children, variant, color, className, ...rest } = props;

  const Tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    paragraph: "p",
    caption: "p",
  };

  return createElement(
    Tags[variant as keyof TypographyTags],
    {
      className: className
        ? `${className} ${typographyVariants({ variant, color })}`
        : typographyVariants({ variant, color }),
      ...rest,
    },
    children,
  );
};
