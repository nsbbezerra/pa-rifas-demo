import { Fragment, memo, useState, useRef, useEffect } from "react";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  GiftIcon,
  ChevronDoubleRightIcon,
  TrashIcon,
  ShoppingCartIcon,
  CheckIcon,
  ReceiptTaxIcon,
} from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import { Transition, Dialog } from "@headlessui/react";
import { Form } from "@unform/web";
import Input from "../../components/Form/Input";
import { SubmitHandler, FormHandles } from "@unform/core";
import { configs } from "../../configs";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import InputMask from "../../components/Form/Inputmask";
import * as yup from "yup";
import { api } from "../../configs/axios";
import Button from "../../components/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import raffleJson from "../../data/raffles.json";
import numbersJson from "../../data/numbers.json";
import trophiesJson from "../../data/trophies.json";

interface INumbers {
  id: string;
  number: string;
}

interface IRaffles {
  id: number;
  identify: string;
  name: string;
  draw_date: Date;
  goal: number;
  description: string;
  thumbnail: string;
  raffle_value: string;
  client_name: string;
  client_phone: string;
}

interface ITrophies {
  id: number;
  title: string;
  description: string;
}

interface IProps {
  trophies: ITrophies[];
  raffle: IRaffles;
  numbersRaffle: INumbersRaffle[];
}

interface INumbersRaffle {
  id: number;
  number: string;
  status: string;
  client_name?: string;
}

interface FormData {
  cpf: string;
  name: string;
  phone: string;
  email?: string;
}

const Rifa: NextPage<IProps> = ({ raffle, trophies, numbersRaffle }) => {
  const { isFallback } = useRouter();

  const formRef = useRef<FormHandles>(null);
  const [numbers, setNumbers] = useState<INumbers[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [raffleNumbers] = useState<INumbersRaffle[]>(numbersRaffle);
  const [loading] = useState(false);
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [discount] = useState<number>(1.5);

  useEffect(() => {
    const host = window.location.href;
    setSiteUrl(host);
  }, []);

  if (isFallback) {
    return (
      <>
        <Header />
        <div className="h-80 animate-pulse bg-gray-300" />

        <div className="grid grid-cols-1 gap-5 justify-center md:grid-cols-3 -mt-36 container mx-auto px-5 lg:px-10">
          <div className="w-full h-96 bg-slate-400 animate-pulse rounded-md" />
          <div className="md:col-span-2 md:pt-40 flex flex-col gap-5">
            <div className="h-10 bg-gray-300" />
            <div className="h-10 bg-gray-300" />
            <div className="h-10 bg-gray-300" />
            <div className="h-10 bg-gray-300" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  function handleNumbers(num: INumbersRaffle) {
    if (num.status === "free") {
      const result = numbers.find((obj) => obj.id === num.id.toString());
      if (result) {
        return false;
      }
      setNumbers([...numbers, { id: num.id.toString(), number: num.number }]);
    } else {
      alert(`Número reservado por: ${num.client_name}`);
    }
  }

  function removeNumber(id: string) {
    const result = numbers.filter((obj) => obj.id !== id);
    setNumbers(result);
  }

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    alert("Números reservados com sucesso");
    setOpen(false);
    setNumbers([]);
  };

  function calcPrice() {
    let calc =
      raffle.id === 1
        ? numbers.length * discount
        : numbers.length * parseFloat(raffle.raffle_value);
    return calc.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }

  return (
    <Fragment>
      <Header />
      <section
        className="w-full"
        style={{
          backgroundImage: `url(${raffle.thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-80 bg-black bg-opacity-40 backdrop-blur-md"></div>
      </section>

      <section className="-mt-36 w-full">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 gap-5 justify-center md:grid-cols-3">
            <div className="w-full h-fit justify-self-center rounded-xl overflow-hidden shadow-lg z-10 max-w-md">
              <Image
                src={`${raffle.thumbnail}`}
                width={400}
                height={400}
                layout="responsive"
                alt="PA Rifas - Rifas Online"
              />
            </div>

            <div className="w-full flex flex-col z-10 md:col-span-2">
              <div className="w-full h-fit items-center justify-start flex md:h-36">
                <h1 className="font-serif text-orange-500 text-xl font-bold text-justify sm:text-2xl lg:text-3xl">
                  {raffle.name}
                </h1>
              </div>
              <p className="text-justify my-3 text-gray-700 text-sm lg:text-lg">
                {raffle.description}
              </p>

              <div className="grid grid-cols-1 gap-5 mb-5 mt-2 lg:grid-cols-2 lg:gap-10">
                <section className="w-full">
                  <div className="flex items-center text-green-500  w-fit pb-1">
                    <GiftIcon className="w-5 h-5 mr-3" />
                    <h2 className="font-bold text-lg font-serif">
                      CONCORRA A:
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    {trophies.map((tro) => (
                      <div
                        className="flex items-center text-gray-700"
                        key={tro.id}
                      >
                        <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                        <span>{tro.title}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="flex flex-col">
                  <span className="text-gray-700 mb-2 text-sm lg:text-base">
                    Organização: <strong>{raffle.client_name}</strong>
                  </span>
                  <span className="text-gray-700 text-sm lg:text-base">
                    Telefone: <strong>{raffle.client_phone}</strong>
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center flex-col lg:flex-row">
                {raffle.id === 1 ? (
                  <div className="flex items-start">
                    <span className="text-xl mr-3 text-gray-500 block line-through">
                      R${" "}
                      {parseFloat(raffle.raffle_value).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span className="text-3xl font-bold text-green-500 block">
                      R$ 1,50
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-green-500">
                    R${" "}
                    {parseFloat(raffle.raffle_value).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                )}

                <span className="text-gray-700 text-sm lg:text-base xl:text-lg mt-2 lg:mt-0">
                  Sorteio:{" "}
                  <strong>
                    {format(
                      new Date(raffle.draw_date),
                      "dd/MM/yyyy 'às' HH:mm'h'",
                      {
                        locale: pt_br,
                      }
                    )}
                  </strong>
                </span>

                <div className="flex justify-center items-center w-fit mt-5 gap-5 lg:mt-0">
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
                    passHref
                  >
                    <a
                      className="btn p-2 rounded-md border-solid border-green-500 border-x border-y text-green-500 hover:bg-green-100 "
                      target={"_blank"}
                    >
                      <div className="w-6 h-6">
                        <Image
                          src={"/img/facebook.svg"}
                          width={100}
                          height={100}
                          layout="responsive"
                          alt="PA Rifas - Whatsapp"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link
                    href={`https://api.whatsapp.com/send?text=${siteUrl}`}
                    passHref
                  >
                    <a
                      className="btn p-2 rounded-md border-solid border-green-500 border-x border-y text-green-500 hover:bg-green-100 hover:text-white"
                      target={"_blank"}
                    >
                      <div className="w-6 h-6">
                        <Image
                          src={"/img/whatsapp_green.svg"}
                          width={100}
                          height={100}
                          layout="responsive"
                          alt="PA Rifas - Whatsapp"
                        />
                      </div>
                    </a>
                  </Link>
                  <CopyToClipboard
                    text={siteUrl}
                    onCopy={() => alert("Url copiada")}
                  >
                    <a className="btn p-2 rounded-md border-solid border-green-500 border-x border-y text-green-500 hover:bg-green-100">
                      <ShareIcon className="w-6 h-6" />
                    </a>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 text-blue-600 w-full py-3 px-4 mt-5 font-semibold rounded-md">
            OS SORTEIOS DESTA PLATAFORMA SÃO REALIZADOS COM BASE NA LOTERIA
            FEDERAL
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 mt-10 border-t border-gray-200 border-solid pt-10 lg:px-10">
        <div className="grid grid-cols-3 rounded-md overflow-hidden w-full lg:w-1/2">
          <div className="bg-gray-300 py-2 px-2 text-gray-800 font-medium text-xs text-center sm:text-base lg:px-3">
            Livres (
            {raffleNumbers.filter((obj) => obj.status === "free").length})
          </div>
          <div className="bg-yellow-500 py-2 px-2 text-gray-800 font-medium text-xs text-center sm:text-base lg:px-3">
            Reservados (
            {raffleNumbers.filter((obj) => obj.status === "reserved").length})
          </div>
          <div className="bg-green-500 py-2 px-2 text-white font-medium text-xs text-center sm:text-base lg:px-3">
            Pagos (
            {raffleNumbers.filter((obj) => obj.status === "paid_out").length})
          </div>
        </div>

        {raffleNumbers.length === 0 ? (
          <div className="flex justify-center items-center mt-10 flex-col">
            <div className="w-32">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 128 128"
                className="animate-spin"
              >
                <path
                  fill="#333"
                  d="M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z"
                ></path>
              </svg>
            </div>

            <span className="text-center mt-3">CARREGANDO NÚMEROS...</span>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-2 w-full sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 mt-5">
            {raffleNumbers.map((nums) => (
              <div
                className={`flex py-2 px-2 justify-center items-center ${
                  (nums.status === "free" && "bg-gray-300") ||
                  (nums.status === "reserved" && "bg-yellow-500") ||
                  (nums.status === "paid_out" && "bg-green-500")
                } ${
                  nums.status === "paid_out" ? "text-white" : "text-gray-800"
                } rounded-md h-fit cursor-pointer select-none flex-col`}
                key={nums.id}
                onClick={() => handleNumbers(nums)}
              >
                <span className="font-semibold lg:text-lg">{nums.number}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <Transition
        as={Fragment}
        show={!numbers?.length ? false : true}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="min-h-min max-h-max py-3 w-full fixed bottom-0 bg-black bg-opacity-90 backdrop-blur-sm left-0 right-0 z-30">
          <div className="container mx-auto px-5 h-full flex items-center xl:px-10">
            <section className="grid grid-cols-1 w-full gap-3 lg:grid-cols-3 lg:gap-5">
              <div className="grid grid-cols-4 gap-1 sm:grid-cols-7 md:grid-cols-10 lg:col-span-2">
                {numbers?.map((num) => (
                  <div
                    className="bg-yellow-500 h-fit flex items-center justify-center rounded-md cursor-pointer hover:bg-yellow-400 select-none py-1 text-sm"
                    key={num.id}
                    onClick={() => removeNumber(num.id)}
                  >
                    <span>{num.number}</span>
                    <TrashIcon className="w-3 h-3 ml-1" />
                  </div>
                ))}
              </div>
              <div className="h-full flex justify-center items-center">
                <button className="rounded-l-md btn bg-blue-600 py-3 px-3 text-white hover:bg-blue-500">
                  <ReceiptTaxIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <div className="w-2/5 flex items-center bg-slate-200 justify-center text-sm font-bold py-3 sm:text-base xl:text-md">
                  {calcPrice()}
                </div>
                <button
                  className="w-3/5 flex justify-center items-center bg-green-500 text-white text-sm py-3 rounded-r-md border-l-gray-100 border-dashed border-l-2 hover:bg-green-600 sm:text-base xl:text-md"
                  onClick={() => setOpen(true)}
                  type="submit"
                >
                  <CheckIcon className="w-4 h-4 mr-2 xl:w-6 xl:h-6" />
                  <span className="font-semibold">FINALIZAR COMPRA</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </Transition>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-auto"
          onClose={() => setOpen(!open)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 select-none"
                >
                  Reserva de Números
                </Dialog.Title>
                <div className="mt-2">
                  <Form onSubmit={handleSubmit} ref={formRef}>
                    <InputMask
                      mask="999.999.999-99"
                      label="CPF"
                      name="cpf"
                      placeholder="CPF"
                      required
                    />
                    <div className="h-3" />
                    <Input
                      label="Nome Completo"
                      name="name"
                      placeholder="Nome Completo"
                      required
                    />
                    <div className="h-3" />
                    <InputMask
                      mask="(99) 99999-9999"
                      label="Telefone"
                      name="phone"
                      placeholder="Telefone"
                      required
                    />
                    <div className="h-3" />
                    <Input
                      label="Email (opcional)"
                      name="email"
                      placeholder="email"
                    />
                    <span className="text-sm mt-2 block text-gray-700">
                      Clicando em pagar você concorda com os nossos{" "}
                      <a className="underline cursor-pointer">Termos de Uso</a>
                    </span>
                    <span className="mt-3 block text-center text-gray-700 text-3xl mb-3">
                      {calcPrice()}
                    </span>
                    <Button
                      icon={<ShoppingCartIcon />}
                      spacing="none"
                      scheme="green"
                      type="submit"
                      full={true}
                      loading={loading}
                      size="lg"
                    >
                      PAGAR AGORA
                    </Button>
                  </Form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = raffleJson;
  const paths = await data.map((raff) => {
    return { params: { rifa: raff.identify } };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const rifa = params?.rifa;
  const filterRaffle = raffleJson.find((obj) => obj.identify === rifa);
  const filterTrophy = trophiesJson.filter(
    (obj) => obj.raffle_id === filterRaffle?.id
  );
  const raffle = filterRaffle;
  const trophies = filterTrophy;
  const numbersRaffle = numbersJson;
  return {
    props: {
      raffle,
      trophies,
      numbersRaffle,
    },
    revalidate: 10,
  };
};

export default memo(Rifa);
