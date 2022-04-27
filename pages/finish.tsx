import {
  CheckIcon,
  ExclamationIcon,
  HomeIcon,
  XIcon,
} from "@heroicons/react/outline";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Finish: NextPage = () => {
  const { push, query } = useRouter();
  const { status } = query;

  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mx-auto px-10 lg:px-20 mt-16">
        <div className="flex justify-center items-center flex-col">
          <div className="bg-gray-100 w-full flex justify-center p-3 rounded-md">
            <div className="w-24">
              <Image
                src={"/img/logo.svg"}
                width={400}
                height={400}
                layout="responsive"
                alt={"PA Rifas - rifas online"}
              />
            </div>
          </div>

          <div
            className={`${
              (status === "approved" && "bg-green-100 text-green-500") ||
              (status === "pending" && "bg-orange-100 text-orange-600") ||
              (status === "rejected" && "bg-red-100 text-red-600")
            } w-full flex py-3 px-10 rounded-md mt-10 flex-col `}
          >
            <div className="flex items-center text-green-500">
              {(status === "approved" && (
                <CheckIcon className="w-7 h-7 mr-2" />
              )) ||
                (status === "pending" && (
                  <ExclamationIcon className="w-7 h-7 mr-2" />
                )) ||
                (status === "rejected" && <XIcon className="w-7 h-7 mr-2" />)}
              <h1 className="text-xl font-bold">
                {(status === "approved" && "PAGAMENTO APROVADO") ||
                  (status === "pending" && "PAGAMENTO EM ESPERA") ||
                  (status === "rejected" && "PAGAMENTO RECUSADO")}
              </h1>
            </div>
            <span className="block mt-3 mb-5">
              {(status === "approved" &&
                `Para verificar seus números e os detalhes da sua compra, clique no
              botão acima ÁREA DO CLIENTE, escolha RIFAS COMPRADAS, clique na
              rifa que você acabou de comprar e veja todos os detalhes.`) ||
                (status === "pending" &&
                  `Seu pagamento está em processamento, para verificar os detalhes da sua compra, clique no
                botão acima ÁREA DO CLIENTE, escolha RIFAS COMPRADAS, clique na
                rifa que você acabou de comprar e veja todos os detalhes.`) ||
                (status === "rejected" &&
                  `Houve um erro no seu pagamento, acesse ÁREA DO CLIENTE, escolha RIFAS COMPRADAS, clique na
                rifa que você acabou de comprar, clique na sua ordem de compra no botão PAGAR AGORA para tentar novamente`)}
            </span>
            <Button
              icon={<HomeIcon />}
              spacing="none"
              onClick={() => push("/")}
            >
              IR AO INÍCIO
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Finish;
