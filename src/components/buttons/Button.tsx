"use client";

import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
// import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  loading?: boolean;
  redirect?: string;
  type?: "button" | "submit";
  icon?: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  type,
  icon,
  loading,
  redirect,
  onClick,
}) => {
  const router = useRouter();

  const clickBtn = redirect ? () => router.push(redirect) : onClick;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={clickBtn}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1 px-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {!loading ? (
        <>
          {icon ? icon : <></>}
          {label}
        </>
      ) : (
        <PulseLoader size={10} color="white" />
      )}
    </button>
  );
};

export default Button;
