import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ children, variant, onClick }: Props) => {
  const variantClass =
    variant === "primary"
      ? "font-semibold hover:bg-white hover:text-black"
      : "font-semibold bg-black hover:bg-white hover:text-black";

  return (
    <button
      className={`text-white ring-1 ring-white rounded-full py-2 px-10 font-semibold transition duration-300 ${variantClass}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

