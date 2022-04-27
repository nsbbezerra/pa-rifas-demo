import { FC, useState, Fragment, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { LightningBoltIcon, SelectorIcon } from "@heroicons/react/outline";
import Input from "./Form/Input";
import Textarea from "./Form/Textarea";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Button from "./Button";

interface FormData {
  type: string;
  name: string;
  message: string;
}

const Message: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [select, setSelect] = useState<string>("");

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Listbox
        value={select}
        onChange={(e) => {
          setSelect(e);
        }}
      >
        <div className="relative">
          <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-1 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
            <span className="ml-3 block truncate text-gray-700">
              {(select === "suggestion" && "Sugestão") ||
                (select === "criticism" && "Crítica") ||
                (select === "praise" && "Elogio") ||
                (select === "" && "Selecione uma Opção")}
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              <Listbox.Option
                value="suggestion"
                className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
              >
                Sugestão
              </Listbox.Option>
              <Listbox.Option
                value="praise"
                className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
              >
                Elogio
              </Listbox.Option>
              <Listbox.Option
                value="criticism"
                className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
              >
                Crítica
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Input
        name="name"
        style={{ marginTop: "7px" }}
        placeholder="Seu nome"
        scheme="orange"
      />

      <Textarea
        name="message"
        style={{ marginTop: "7px" }}
        placeholder="Sua mensagem aqui..."
        rows={3}
        scheme="orange"
      />

      <Button icon={<LightningBoltIcon />} scheme="orange" spacing="none" full>
        ENVIAR FEEDBACK
      </Button>
    </Form>
  );
};

export default Message;
