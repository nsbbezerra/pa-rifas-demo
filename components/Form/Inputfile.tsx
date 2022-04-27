import {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
  Fragment,
} from "react";
import { useField } from "@unform/core";
import Image from "next/image";
import { PhotographIcon } from "@heroicons/react/outline";

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function ImageInput({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    } else {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref: HTMLInputElement) {
        ref.value = "";
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Fragment>
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      {preview && (
        <div className="w-full max-w-md h-fit rounded-md overflow-hidden relative">
          <Image
            src={preview}
            width={400}
            height={400}
            alt="PA Rifas - Rifas online"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      <Fragment>
        <label
          className={`mt-1 flex justify-center px-6 pt-3 pb-4 border-2 border-gray-300 border-dashed rounded-md flex-col items-center cursor-pointer hover:border-4 text-gray-700 ${
            rest.disabled && "cursor-not-allowed hover:border-2 opacity-50"
          }`}
          htmlFor={fieldName}
        >
          <PhotographIcon className="w-7 h-7" />
          <span className="text-xs text-center">
            Clique para inserir uma imagem
          </span>
          <input
            id={fieldName}
            type={"file"}
            ref={inputRef}
            onChange={handlePreview}
            {...rest}
            className={`sr-only disabled:cursor-not-allowed`}
          />
        </label>
      </Fragment>
    </Fragment>
  );
}
