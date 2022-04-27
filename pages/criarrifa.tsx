import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Formless/Input";
import InputMask from "../components/Formless/Inputmask";
import Textarea from "../components/Formless/Textarea";
import { configs } from "../configs";
import { Transition } from "@headlessui/react";
import {
  SaveIcon,
  XIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";
import Button from "../components/Button";

interface IToastContent {
  title: string;
  message: string[];
  type: "warning" | "success" | "info" | "error";
}

const CriarRifa: NextPage = () => {
  const [toast, setToast] = useState<boolean>(false);
  const [typeToast] = useState<IToastContent>();

  const [name, setName] = useState<string>("");
  const [numbers, setNumbers] = useState<string>("0");
  const [price, setPrice] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [schedule, setSchedule] = useState<string>("");
  const [goal, setGoal] = useState<number>();
  const [my_name, setMy_name] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [trophies, setTrophies] = useState<string>("");

  const [loading] = useState<boolean>(false);

  useEffect(() => {
    if (toast === true) {
      setTimeout(() => {
        setToast(false);
      }, 5000);
    }
  }, [toast]);

  useEffect(() => {
    if (parseFloat(numbers) > 10000) {
      setNumbers("10000");
    }
  }, [numbers]);

  const CalcCost = () => {
    if (!isNaN(parseFloat(numbers))) {
      if (parseFloat(numbers) <= 100) {
        let sum = parseFloat(configs["100"]) * parseFloat(numbers);
        return {
          term: configs["100"],
          sum: sum.toFixed(2),
        };
      }
      if (parseFloat(numbers) > 100 && parseFloat(numbers) <= 1000) {
        let sum = parseFloat(configs["1000"]) * parseFloat(numbers);
        return {
          term: configs["1000"],
          sum: sum.toFixed(2),
        };
      }
      if (parseFloat(numbers) > 1000 && parseFloat(numbers) <= 5000) {
        let sum = parseFloat(configs["5000"]) * parseFloat(numbers);
        return {
          term: configs["5000"],
          sum: sum.toFixed(2),
        };
      }
      if (parseFloat(numbers) > 5000 && parseFloat(numbers) <= 10000) {
        let sum = parseFloat(configs["10000"]) * parseFloat(numbers);
        return {
          term: configs["10000"],
          sum: sum.toFixed(2),
        };
      }
    } else {
      return { term: 0, sum: 0 };
    }
  };

  return (
    <Fragment>
      <Header />
      <Banner />
      <section className="container mx-auto px-10 md:px-16 lg:px-20 xl:px-28 mt-16">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 justify-items-center">
              <div className="w-full">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                  <div className="col-span-1 lg:col-span-3">
                    <Input
                      placeholder="Insira o título da rifa"
                      name="title"
                      label="Título da Rifa"
                      value={name}
                      onChange={(e) => setName(e.target.value.toUpperCase())}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      placeholder="Quantidade de Números"
                      name="numbers"
                      label="Quantidade de Números"
                      type={"number"}
                      value={numbers}
                      onChange={(e) => setNumbers(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-3 lg:grid-cols-4">
                  <div>
                    <Input
                      placeholder="Valor da Cota (R$)"
                      name="value"
                      label="Valor da Cota (R$)"
                      value={price}
                      type={"number"}
                      onChange={(e) => setPrice(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <InputMask
                      placeholder="Data do Sorteio"
                      name="date"
                      label="Data do Sorteio"
                      mask="99/99/9999"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <InputMask
                      placeholder="Hora do Sorteio"
                      name="schedule"
                      label="Hora do Sorteio"
                      mask="99:99"
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Meta Mínima (0 - 100%)"
                      name="goal"
                      label="Meta Mínima (0 - 100%)"
                      type={"number"}
                      value={goal}
                      onChange={(e) => setGoal(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <Input
                    placeholder="Seu Nome"
                    name="name"
                    label="Seu Nome"
                    value={my_name}
                    onChange={(e) => setMy_name(e.target.value.toUpperCase())}
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-3">
                  <div>
                    <InputMask
                      placeholder="Seu CPF"
                      name="cpf"
                      label="Seu CPF"
                      mask="999.999.999-99"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                  </div>
                  <div>
                    <InputMask
                      placeholder="Seu Telefone"
                      name="phone"
                      label="Seu Telefone"
                      mask="(99) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Seu Email (opcional)"
                      name="email"
                      label="Seu Email (opcional)"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <Textarea
                    placeholder="Descrição da Rifa"
                    name="description"
                    label="Descrição da Rifa"
                    rows={5}
                    onChange={(e) =>
                      setDescription(e.target.value.toUpperCase())
                    }
                    value={description}
                  />
                </div>
                <div className="mt-3">
                  <Textarea
                    placeholder="Descreva os Prêmios"
                    name="trophy"
                    label="Descreva os Prêmios"
                    rows={3}
                    value={trophies}
                    onChange={(e) => setTrophies(e.target.value.toUpperCase())}
                  />
                </div>

                <span className="block mt-5 font-bold text-gray-700">
                  TAXA DE PAGAMENTOS - VENDA DE NÚMEROS
                </span>
                <div className="grid grid-cols-1 gap-5 mt-2 lg:grid-cols-3">
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">TAXA PIX</span>
                    <span className="text-2xl font-bold">
                      {configs.pixTax}%
                    </span>
                  </div>
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">TAXA CRÉDITO</span>
                    <span className="text-2xl font-bold">
                      {configs.cardTax}%
                    </span>
                  </div>
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">TAXA DÉBITO</span>
                    <span className="text-2xl font-bold">
                      {configs.debitTax}%
                    </span>
                  </div>
                </div>

                <span className="block mt-5 font-bold text-gray-700">
                  TAXA DE CRIAÇÃO DA RIFA
                </span>
                <div className="grid grid-cols-1 gap-5 mt-2 lg:grid-cols-4">
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">RIFA 20 - 100 NÚMEROS</span>
                    <span className="text-2xl font-bold py-1">
                      R$ {configs[100]}
                    </span>
                    <span className="text-xs">Por Número</span>
                  </div>
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">RIFA 100 - 1000 NÚMEROS</span>
                    <span className="text-2xl font-bold py-1">
                      R$ {configs[1000]}
                    </span>
                    <span className="text-xs">Por Número</span>
                  </div>
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">RIFA 1000 - 5000 NÚMEROS</span>
                    <span className="text-2xl font-bold py-1">
                      R$ {configs[5000]}
                    </span>
                    <span className="text-xs">Por Número</span>
                  </div>
                  <div className="flex flex-col border-x border-y rounded-md p-3 bg-gray-50 text-gray-700">
                    <span className="text-sm">RIFA 5000 - 10000 NÚMEROS</span>
                    <span className="text-2xl font-bold py-1">
                      R$ {configs[10000]}
                    </span>
                    <span className="text-xs">Por Número</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <Transition
        as={Fragment}
        show={parseFloat(numbers) > 0 ? true : false}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="min-h-min max-h-max py-3 w-full fixed bottom-0 bg-black bg-opacity-90 backdrop-blur-sm left-0 right-0 z-30">
          <div className="container mx-auto px-5 h-full flex items-center xl:px-10">
            <section className="grid grid-cols-1 w-full gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              <div className="flex justify-start items-center w-full md:col-span-2 lg:col-span-3">
                <span className="block text-gray-100 text-2xl">
                  R$ {CalcCost()?.term} x {numbers} ={" "}
                  <strong className="text-orange-500">
                    R$ {CalcCost()?.sum}
                  </strong>
                </span>
              </div>
              <div className="h-full flex justify-center items-center">
                <Button
                  icon={<SaveIcon />}
                  spacing="none"
                  full={true}
                  size="lg"
                  loading={loading}
                >
                  CRIAR RIFA
                </Button>
              </div>
            </section>
          </div>
        </div>
      </Transition>

      <Transition
        as={Fragment}
        show={toast}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className={`${
            (typeToast?.type === "success" &&
              "bg-green-100 border-t-4 border-green-500 rounded-b text-green-900") ||
            (typeToast?.type === "info" &&
              "bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900") ||
            (typeToast?.type === "warning" &&
              "bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900") ||
            (typeToast?.type === "error" &&
              "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900")
          } px-4 py-3 shadow-md w-80 fixed left-5 top-28`}
          role="alert"
        >
          <div className="flex relative">
            <div className="py-1 text-2xl">
              {typeToast?.type === "error" && (
                <XIcon className="w-8 h-8 mr-2" />
              )}
              {typeToast?.type === "info" && (
                <InformationCircleIcon className="w-8 h-8 mr-2" />
              )}
              {typeToast?.type === "success" && (
                <CheckIcon className="w-8 h-8 mr-2" />
              )}
              {typeToast?.type === "warning" && (
                <ExclamationIcon className="w-8 h-8 mr-2" />
              )}
            </div>
            <div>
              <p className="font-bold">{typeToast?.title}</p>
              {typeToast?.message?.map((mess) => (
                <p className="text-sm" key={mess}>
                  * {mess}
                </p>
              ))}
            </div>
            <button
              className="absolute top-0 right-3"
              onClick={() => setToast(false)}
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Transition>
    </Fragment>
  );
};

export default CriarRifa;
