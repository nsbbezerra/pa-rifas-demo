import { Transition } from "@headlessui/react";
import {
  CashIcon,
  CheckIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { api } from "../../../configs/axios";

interface Petition {
  id: number;
  name: string;
  identify: string;
  qtd_numbers: number;
  goal: number;
  client_name: string;
  client_cpf: string;
  client_phone: string;
  client_email?: string;
  draw_date: string;
  draw_time: string;
  raffle_value: string;
  description: string;
  trophies: string;
  total_to_pay: string;
}

interface IToastContent {
  title: string;
  message: string[];
  type: "warning" | "success" | "info" | "error";
}

const CheckoutNew: NextPage = () => {
  const { query, push } = useRouter();
  const { r } = query;

  const [petition, setPetition] = useState<Petition>();
  const [loading, setLoading] = useState<boolean>(false);

  const [toast, setToast] = useState<boolean>(false);
  const [typeToast, setTypeToast] = useState<IToastContent>();

  useEffect(() => {
    if (toast === true) {
      setTimeout(() => {
        setToast(false);
      }, 5000);
    }
  }, [toast]);

  useEffect(() => {
    async function findInfo() {
      try {
        const response = await api.get(`/getPetitionInformation/${r}`);
        setPetition(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    findInfo();
  }, [r]);

  const handleToast = ({ type, message, title }: IToastContent) => {
    setTypeToast({
      message: message,
      title: title,
      type: type,
    });
    setToast(true);
  };

  const payPetition = async () => {
    setLoading(true);
    try {
      const response = await api.post(`/payPetition/${r}`);
      handleToast({
        type: "success",
        title: "Sucesso",
        message: [response.data.message],
      });
      push(response.data.url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      let err =
        `${(error as Error).message}` || "Erro ao processar a requisição";
      handleToast({
        type: "error",
        title: "Ocorreu um erro",
        message: [err],
      });
    }
  };

  return (
    <Fragment>
      <Header />
      <Banner />
      <section className="container mx-auto px-5 lg:px-10 mt-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white shadow-md border overflow-hidden rounded-md sm:col-span-2">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                PEDIDO Nº {petition?.id} - {petition?.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                REF: {petition?.identify}
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">CLIENTE</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.client_name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">CPF</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.client_cpf}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    TELEFONE
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.client_phone}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    VALOR DA COTA
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    R$ {petition?.raffle_value}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    QUANTIDADE DE NÚMEROS
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.qtd_numbers}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    DESCRIÇÃO
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.description}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">PRÊMIOS</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {petition?.trophies}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-md border overflow-hidden rounded-md h-fit">
              <div className="px-4 py-5 sm:px-6 border-b border-dashed">
                <h3 className="text-sm leading-6 font-medium text-gray-700">
                  TOTAL A PAGAR
                </h3>
                <p className="mt-1 max-w-2xl text-2xl font-bold text-gray-900">
                  R$ {petition?.total_to_pay}
                </p>
              </div>
              <div className="p-3">
                <Button
                  spacing="none"
                  size="lg"
                  icon={<CashIcon />}
                  full={true}
                  loading={loading}
                  onClick={() => payPetition()}
                >
                  PAGAR AGORA
                </Button>
              </div>
            </div>
            <span className="block mt-5 text-red-700 text-justify">
              * Após o pagamento entraremos em contato pelo número que você nos
              informou para lhe enviarmos o link da rifa e você irá escolher a
              imagem da rifa.
            </span>
          </div>
        </div>
      </section>
      <Footer />

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

export default CheckoutNew;
