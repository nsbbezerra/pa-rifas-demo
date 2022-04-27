import { SearchIcon, UserIcon } from "@heroicons/react/outline";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import type { NextPage } from "next";
import Image from "next/image";
import { Fragment, useRef } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Form/Input";

interface FormData {
  type: string;
  name: string;
  message: string;
}

const Ganhadores: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  const Rifa = () => (
    <div className="rounded-md border-x border-y overflow-hidden flex-col h-fit relative">
      <div className="w-fit absolute bg-green-500 text-white rounded-md shadow-md py-1 px-2 z-20 top-2 right-2 text-sm">
        Nº 1
      </div>
      <div className="w-full">
        <Image
          src={
            "https://img.freepik.com/psd-gratuitas/etiqueta-3d-render-compre-e-ganhe-para-campanhas-em-lojas-em-geral-no-brasil_332265-567.jpg?size=338&ext=jpg"
          }
          width={400}
          height={400}
          layout="responsive"
          alt="PA Rifas - Rifas Online"
        />
      </div>

      <div className="p-2 flex-col text-center border-b border-dashed">
        <span className="text-green-500 font-semibold">TÍTULO DA RIFA</span>
      </div>
      <div className="text-center flex-col p-2 justify-center items-center w-full text-gray-700">
        <span className="flex justify-center items-center text-xs flex-col font-bold">
          <UserIcon className="w-4 h-4 mb-2" />
          NATANAEL DOS SANTOS BEZERRA
        </span>
        <span className="text-xs block my-1">(63) 99971-1716</span>
        <span className="text-sm font-bold">Nº 3093</span>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mx-auto mt-16 px-5 lg:px-10">
        <div className="flex justify-center">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex items-end justify-center">
              <div className="w-3/4 mr-4">
                <Input
                  label="Digite o número da Rifa"
                  name="number"
                  placeholder="Número da Rifa"
                />
              </div>
              <Button icon={<SearchIcon />} spacing="none">
                BUSCAR
              </Button>
            </div>
          </Form>
        </div>

        <section className="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          <Rifa />
          <Rifa />
          <Rifa />
          <Rifa />
          <Rifa />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Ganhadores;
