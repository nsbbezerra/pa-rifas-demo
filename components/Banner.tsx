import { FC } from "react";
import Image from "next/image";
import { ShoppingCartIcon, SaveIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Banner: FC = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/img/background.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full"
    >
      <div className="w-full bg-black bg-opacity-40 py-5">
        <div className="container mx-auto px-4 lg:px-10 flex items-center justify-center flex-col md:flex-row mt-16">
          <div className="w-5/6 p-5 sm:w-3/5 md:w-2/5 lg:w-1/3 md:p-10">
            <Link href={"/"} passHref>
              <a>
                <Image
                  src="/img/logo.svg"
                  width={300}
                  height={300}
                  layout="responsive"
                  alt="PA Rifas, rifas online"
                />
              </a>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center h-full flex-col">
            <h1 className="text-5xl font-bold text-orange-500 font-serif text-center lg:text-6xl">
              Sua Rifa online está aqui!
            </h1>
            <span className="text-center text-white text-md w-full px-4 mt-3 lg:text-xl lg:w-3/4">
              Crie, Gerencie, Compartilhe suas rifas de forma ágil e segura, não
              se preocupe pois nós cuidamos de tudo pra você, vem rifar com a{" "}
              <strong>PA RIFAS</strong>
            </span>

            <div className="grid grid-cols-1 gap-3 w-full px-5 mt-10 sm:w-1/2 md:grid-cols-2 md:w-full lg:w-2/3">
              <Link href={"/rifas"} passHref>
                <a className="btn flex bg-gray-50 rounded-md py-3 px-4 w-full items-center justify-center text-gray-700 hover:bg-gray-200">
                  <ShoppingCartIcon className="w-6 h-6" />
                  <span className="block ml-3 font-semibold">
                    QUERO COMPRAR
                  </span>
                </a>
              </Link>
              <Link href={"/criarrifa"} passHref>
                <a className="btn flex bg-orange-500 rounded-md py-3 px-4 w-full items-center justify-center text-white hover:bg-orange-600">
                  <SaveIcon className="w-6 h-6" />
                  <span className="block ml-3 font-semibold">QUERO CRIAR</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
