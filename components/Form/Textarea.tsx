import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface Props {
  name: string;
  label?: string;
  scheme?: "orange" | "green";
}

type InputProps = JSX.IntrinsicElements["textarea"] & Props;

export default function Textarea({ name, label, scheme, ...rest }: InputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && (
        <label
          htmlFor={fieldName}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className={
          scheme === "orange"
            ? "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm resize-none"
            : "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm resize-none"
        }
        {...rest}
      />

      {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
    </>
  );
}
