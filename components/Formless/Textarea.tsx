import { TextareaHTMLAttributes, useEffect, useRef } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  scheme?: "orange" | "green";
}

export default function Textarea({ name, label, scheme, ...rest }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      <textarea
        id={name}
        ref={inputRef}
        className={
          scheme === "orange"
            ? "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm resize-none"
            : "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm resize-none"
        }
        {...rest}
      />
    </>
  );
}
