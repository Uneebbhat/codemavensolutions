import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "rounded-full text-[14px] px-[24px] py-2 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-black-500 text-white hover:bg-blue-500 hover:text-white",
    outline:
      "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
