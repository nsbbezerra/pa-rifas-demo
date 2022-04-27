import { Fragment, useRef } from "react";
import ReactInputMask, { Props as InputProps } from "react-input-mask";

interface Props extends InputProps {
  name: string;
  label?: string;
  scheme?: "green" | "orange";
  mask: string;
}

export default function InputMask({ name, label, scheme, ...rest }: Props) {
  const inputRef = useRef(null);

  return (
    <Fragment>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <ReactInputMask
        id={name}
        ref={inputRef}
        {...rest}
        className={`relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:${
          scheme === "orange" ? "ring-orange-500" : "ring-green-500"
        } focus:${
          scheme === "orange" ? "border-orange-500" : "border-green-500"
        } sm:text-sm`}
      />
    </Fragment>
  );
}
