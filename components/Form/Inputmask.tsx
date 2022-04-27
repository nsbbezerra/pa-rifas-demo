import { Fragment, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask, { Props as InputProps } from "react-input-mask";

interface Props extends InputProps {
  name: string;
  label?: string;
  scheme?: "green" | "orange";
  mask: string;
}

export default function InputMask({ name, label, scheme, ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <Fragment>
      {label && (
        <label
          htmlFor={fieldName}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        className={`relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:${
          scheme === "orange" ? "ring-orange-500" : "ring-green-500"
        } focus:${
          scheme === "orange" ? "border-orange-500" : "border-green-500"
        } sm:text-sm`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </Fragment>
  );
}
