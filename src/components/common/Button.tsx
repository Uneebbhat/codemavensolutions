import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} px-[30px] py-[10px] rounded-full text-bodyLarge`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
