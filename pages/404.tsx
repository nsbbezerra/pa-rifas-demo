import { FlagIcon, HomeIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Link href={"/"} passHref>
        <a className="fixed top-10 left-20 bg-green-500 px-3 py-2 text-white rounded-md shadow-md font-semibold hover:bg-green-600 active:bg-green-500 cursor-pointer select-none flex justify-center items-center">
          <HomeIcon className="w-5 h-5 mr-2" />
          <span>IR AO INÍCIO</span>
        </a>
      </Link>
      <div className="h-screen w-screen grid grid-cols-1 items-center px-10 container mx-auto pt-28 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full">
          <Image
            src={"/img/logo.svg"}
            width={400}
            height={400}
            alt={"PA Rifas - rifas online"}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full md:col-span-2">
          <FlagIcon className="w-36 h-36 bg-red-100 rounded-full p-5 text-red-600 animate-pulse hidden sm:block" />
          <span className="text-2xl text-gray-700 block mt-10 text-center lg:text-4xl">
            Página não encontrada!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
