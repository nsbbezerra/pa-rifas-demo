import { FC, Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  DocumentTextIcon,
  SaveIcon,
  ChatAlt2Icon,
  UserIcon,
  MenuIcon,
  XIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const ItemsMenu = () => (
    <div className="items-center md:ml-5 px-5 md:px-0 flex flex-col md:flex-row gap-2 md:gap-0">
      <Link href={"/"} passHref>
        <a className="btn w-full items-center hover:bg-green-500 hover:text-white text-green-500 font-medium font-sans py-2 px-3 rounded-md flex text-sm md:w-auto">
          <HomeIcon className="w-5 h-5" />
          <span className="ml-2 font-semibold">INÍCIO</span>
        </a>
      </Link>
      <div className="h-14 border-l border-gray-300 border-dashed mx-1 hidden md:block" />
      <Link href={"/rifas"} passHref>
        <a className="btn w-full items-center hover:bg-green-500 hover:text-white text-green-500 font-medium font-sans py-2 px-3 rounded-md flex text-sm md:w-auto">
          <DocumentTextIcon className="w-5 h-5" />
          <span className="ml-2 font-semibold">RIFAS</span>
        </a>
      </Link>
      <div className="h-14 border-l border-gray-300 border-dashed mx-1 hidden md:block" />
      <Link href={"/criarrifa"} passHref>
        <a className="btn w-full items-center hover:bg-green-500 hover:text-white text-green-500 font-medium font-sans py-2 px-3 rounded-md flex text-sm md:w-auto">
          <SaveIcon className="w-5 h-5" />
          <span className="ml-2 font-semibold">CRIAR RIFA</span>
        </a>
      </Link>
      <div className="h-14 border-l border-gray-300 border-dashed mx-1 hidden md:block" />
      <Link href={"/faleconosco"} passHref>
        <a className="btn w-full items-center hover:bg-green-500 hover:text-white text-green-500 font-medium font-sans py-2 px-3 rounded-md flex text-sm md:w-auto">
          <ChatAlt2Icon className="w-5 h-5" />
          <span className="ml-2 font-semibold">FALE CONOSCO</span>
        </a>
      </Link>
      <div className="h-14 border-l border-gray-300 border-dashed mx-1 hidden md:block" />
      <Link href={"/termosdeuso"} passHref>
        <a className="btn w-full items-center hover:bg-green-500 hover:text-white text-green-500 font-medium font-sans py-2 px-3 rounded-md flex text-sm md:w-auto">
          <PencilAltIcon className="w-5 h-5" />
          <span className="ml-2 font-semibold">TERMOS DE USO</span>
        </a>
      </Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>PA Rifas | Sua rifa online está aqui.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rifas Online" />
        <meta
          name="keywords"
          content="rifas, rifa, sorteios, sorteio, prêmios, prêmio, ganhar, sortear, rifar, concorrer, ganhar"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Natanael Bezerra - NK Informática" />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
        <meta
          name="google-site-verification"
          content="KsPVvA0XQe_YhROQ78xfkfzOME0H50RJFMe6NPFXF6o"
        />
      </Head>
      <nav className="bg-gray-50 bg-opacity-90 backdrop-blur-sm fixed top-0 right-0 left-0 transition ease-out duration-100 z-30 shadow-lg">
        <div className="flex container mx-auto items-center px-4 lg:px-10 justify-between h-16">
          <button
            className="flex items-center justify-center p-2 rounded-md text-green-500 border-green-500 border-x border-y border-solid md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <div className="flex items-center">
            <div className="w-12 -rotate-6">
              <Link href={"/"} passHref>
                <a>
                  <Image
                    src="/img/logo.svg"
                    width={446}
                    height={446}
                    layout="responsive"
                    alt="PA Rifas, rifas online"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <ItemsMenu />
            </div>
          </div>
          <div className="flex items-center">
            <Menu as={"div"} className={"relative"}>
              <div>
                <Menu.Button
                  className={
                    "bg-green-500 flex rounded-md text-white font-medium font-sans p-2 lg:py-2 lg:px-3 text-sm"
                  }
                >
                  <UserIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                  <span className="ml-2 hidden lg:block font-semibold">
                    ÁREA DO CLIENTE
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <Link href={"/minhasrifas/criadas"} passHref>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        RIFAS CRIADAS
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href={"/minhasrifas/compradas"} passHref>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        RIFAS COMPRADAS
                      </a>
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {open ? (
          <div className="mb-3">
            <ItemsMenu />
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Header;
