import { Fragment } from "react";
import type { NextPage, GetStaticProps } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {
  DocumentTextIcon,
  ArrowRightIcon,
  PencilAltIcon,
  ShareIcon,
  GiftIcon,
  CashIcon,
} from "@heroicons/react/outline";
import Raffles from "../components/Raffles";
import Link from "next/link";
import Footer from "../components/Footer";
import raffleJson from "../data/raffles.json";

interface IRaffles {
  id: number;
  identify: string;
  name: string;
  draw_date: Date;
  goal: number;
  description: string;
  thumbnail: string;
  raffle_value: string;
}

interface IIndex {
  raffles: IRaffles[];
}

const Home: NextPage<IIndex> = ({ raffles }) => {
  return (
    <Fragment>
      <Header />
      <Banner />

      <section className="container mx-auto px-5 md:px-10 mt-16">
        <div className="flex items-center text-green-500 border-b-2 border-green-500 border-solid w-fit pb-1">
          <DocumentTextIcon className="w-6 h-6 mr-3" />
          <h2 className="font-bold text-2xl font-serif">RIFAS EM DESTAQUE</h2>
        </div>

        <Raffles raffles={raffles} />

        <div className="flex justify-center">
          <Link href={"/rifas"} passHref>
            <a className="btn rounded-md text-green-500 py-2 px-4 flex justify-center items-center hover:underline mt-5 font-semibold">
              <span>MAIS RIFAS</span>
              <ArrowRightIcon className="w-4 h-4 ml-3" />
            </a>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 -mb-16 py-10 mt-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-center">
            <h2 className="text-center text-green-500 font-serif text-2xl font-bold w-fit md:text-4xl">
              ARRECADAR COM PA RIFAS É SIMPLES E PRÁTICO
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-10 items-start sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col justify-center items-center">
              <PencilAltIcon className="text-orange-500 w-14 h-14" />
              <span className="font-bold text-2xl text-center mt-2 mb-2">
                Crie sua Rifa
              </span>
              <span className="text-center text-gray-700">
                Insira as informações relacionadas à sua campanha, indique o
                objetivo e os prêmios sorteados, data e hora do sorteio.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <ShareIcon className="text-orange-500 w-14 h-14" />
              <span className="font-bold text-2xl text-center mt-2 mb-2">
                Divulgue e Compartilhe
              </span>
              <span className="text-center text-gray-700">
                Compartilhe o link da sua Rifa nas redes socias, entre amigos,
                faça a de divulgação aumentar pedindo para que eles divulguem
                também.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <GiftIcon className="text-orange-500 w-14 h-14" />
              <span className="font-bold text-2xl text-center mt-2 mb-2">
                Realize o Sorteio
              </span>
              <span className="text-center text-gray-700">
                Dê confiança e credibilidade a sua campanha, o sorteio será
                realizado com base na Loteria Federal.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <CashIcon className="text-orange-500 w-14 h-14" />
              <span className="font-bold text-2xl text-center mt-2 mb-2">
                Receba seu Dinheiro
              </span>
              <span className="text-center text-gray-700">
                Receba o valor arrecadado diretamente na sua conta bancária,
                logo após a realização do sorteio e a confirmação da entrega dos
                prêmios.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const raffles = raffleJson;

  return {
    props: {
      raffles,
    },
    revalidate: 30,
  };
};
