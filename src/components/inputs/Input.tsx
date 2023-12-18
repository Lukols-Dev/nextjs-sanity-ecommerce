"use client";

import { FormEvent } from "react";

interface InputProps {
  id?: string;
  label?: string;
  value: string;
  type?: "text" | "email";
  disabled?: boolean;
  error?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  type,
  disabled,
  error,
  required,
  placeholder,
  onChange,
}) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={"text"}
        value={value}
        className={`peer w-full h-14 p-4
         ${
           label && label.length > 0 ? "pt-7" : "pt-4"
         } font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}
        onChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
      />
      {label ? (
        <label
          className={`absolute text-md duration-150 transform -translate-y-6 ${
            value && value.length
              ? "top-7 peer-focus:-translate-y-5"
              : "top-10 peer-focus:-translate-y-9"
          }  z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75`}
        >
          {required && <span className="text-red-500">*</span>}
          {label}
        </label>
      ) : (
        <></>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
