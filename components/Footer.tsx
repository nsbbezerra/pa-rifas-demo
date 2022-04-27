import Link from "next/link";
import { FC } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Message from "./Message";
import { configs } from "../configs";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-green-500 py-10 mt-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 ">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-lg text-orange-500 font-bold">PÁGINAS</h3>
            <Link href={"/rifas"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>RIFAS</span>
              </a>
            </Link>
            <Link href={"/faleconosco"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>FALE CONOSCO</span>
              </a>
            </Link>
            <Link href={"/criarrifa"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>CRIAR RIFA</span>
              </a>
            </Link>
            <Link href={"/termosdeuso"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>TERMOS DE USO</span>
              </a>
            </Link>
            <Link href={"/"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>COMO PARTICIPAR?</span>
              </a>
            </Link>
            <Link href={"/ganhadores"} passHref>
              <a className="btn text-white flex items-center hover:underline">
                <ChevronDoubleRightIcon className="w-4 h-4 mr-3" />
                <span>GANHADORES?</span>
              </a>
            </Link>
          </div>

          <div className="w-full flex flex-col gap-3">
            <h3 className="text-lg text-orange-500 font-bold">SOBRE NÓS</h3>
            <span className="text-justify text-white">
              A Plataforma PA Rifas, é um produto proprietário da empresa NK
              Informática, com sede na Rua 34, Qd 15 Lt 14, S/N, CEP: 77710-000,
              Pedro Afonso - TO.
            </span>

            <div className="flex justify-center items-center gap-3 mt-10">
              <div className="p-1 rounded-full bg-white w-12 h-12 flex-shrink-0 overflow-hidden">
                <Image
                  src="/img/visa.svg"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="contain"
                  alt="PA Rifas - Pagamentos"
                />
              </div>

              <div className="p-1 rounded-full bg-white w-12 h-12 overflow-hidden flex-shrink-0">
                <Image
                  src="/img/mastercard.svg"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="contain"
                  alt="PA Rifas - Pagamentos"
                />
              </div>

              <div className="p-1 rounded-full bg-white w-12 h-12 overflow-hidden flex-shrink-0">
                <Image
                  src="/img/elo.svg"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="contain"
                  alt="PA Rifas - Pagamentos"
                />
              </div>

              <div className="p-2 rounded-full bg-white w-12 h-12 overflow-hidden flex-shrink-0">
                <Image
                  src="/img/caixa.svg"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="contain"
                  alt="PA Rifas - Pagamentos"
                />
              </div>

              <div className="p-1 rounded-full bg-white w-12 h-12 overflow-hidden flex-shrink-0">
                <Image
                  src="/img/pix.svg"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="contain"
                  alt="PA Rifas - Pagamentos"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white pt-10 border-t border-green-300 border-solid mt-10 text-sm">
          <span>Copyright 2022 © PA Rifas</span>
        </div>
      </div>

      <Link href={`https://wa.me/${configs.whatsapp}/`} passHref>
        <a
          className="flex h-12 w-12 fixed bottom-5 right-5 cursor-pointer md:w-16 md:h-16 z-50"
          target={"_blank"}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <div className="relative block p-2 rounded-full h-12 w-12 bg-green-500 border-2 border-white  md:w-16 md:h-16 md:p-3">
            <Image
              src={"/img/whatsapp.svg"}
              width={100}
              height={100}
              layout="responsive"
              alt="PA Rifas - Whatsapp"
            />
          </div>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
