import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, variant, onClick, className, type = "button" }: Props) => {
  const variantClass =
    variant === "primary"
      ? "font-semibold hover:bg-white hover:text-black"
      : "font-semibold bg-black hover:bg-white hover:text-black hover:ring-black";

  return (
    <button
      className={`text-white ring-1 ring-white rounded-full py-2 px-10 font-semibold transition duration-300 ${variantClass} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

