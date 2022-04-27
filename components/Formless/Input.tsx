import { InputHTMLAttributes, useRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  scheme?: "green" | "orange";
}

export default function Input({ name, label, scheme, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        ref={inputRef}
        className={
          scheme === "orange"
            ? "relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            : "relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
        }
        {...rest}
      />
    </>
  );
}
