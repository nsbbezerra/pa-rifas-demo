import { useRef, Fragment, InputHTMLAttributes } from "react";
import { PhotographIcon } from "@heroicons/react/outline";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function ImageInput({ name, label, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <Fragment>
        <label
          className={`mt-1 flex justify-center px-6 pt-3 pb-4 border-2 border-gray-300 border-dashed rounded-md flex-col items-center cursor-pointer hover:border-4 text-gray-700 ${
            rest.disabled && "cursor-not-allowed hover:border-2 opacity-50"
          }`}
          htmlFor={name}
        >
          <PhotographIcon className="w-7 h-7" />
          <span className="text-xs text-center">
            Clique para inserir uma imagem
          </span>
          <input
            id={name}
            type={"file"}
            ref={inputRef}
            {...rest}
            className={`sr-only disabled:cursor-not-allowed`}
          />
        </label>
      </Fragment>
    </Fragment>
  );
}
