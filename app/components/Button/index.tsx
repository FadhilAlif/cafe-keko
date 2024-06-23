"use client"; // Menandai komponen ini sebagai komponen client

import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant,
  full,
  onClick,
  disabled = false,
  loading = false,
  ariaLabel,
  size = "md",
  className = "",
}: ButtonProps) => {
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    case "md":
    default:
      sizeClasses = "px-4 py-2 text-md";
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full ? "w-full" : ""
      } ${sizeClasses} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
    >
      {loading && <span className="loader"></span>}
      {!loading && icon && (
        <Image src={icon} alt={title} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
