"use client";

import { supabaseAnonKey, supabaseUrl } from "@/lib/supabase";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;

  onClick?: () => void;
  type: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

function PrimaryButton({
  children,
  onClick,
  type,
  className = "",
  disabled = false,
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={pending || disabled}
      className={`bg-btn-sec text-sm text-btn-text py-2 px-4 rounded-lg duration-300 border border-b-color hover:scale-90 uppercase hover:border-border-color-hover hover:font-bold   disabled-btn ${className} `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
