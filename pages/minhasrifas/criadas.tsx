import { FC, Fragment, useRef, useState } from "react";
import Header from "../../components/Header";
import type { GetServerSideProps, NextPage } from "next";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../../components/Form/Inputmask";
import { SearchIcon } from "@heroicons/react/outline";
import Raffles from "../../components/AdmRaffles";
import Button from "../../components/Button";
import rafflesJson from "../../data/raffles.json";

interface IRaffles {
  id: number;
  identify: string;
  name: string;
  draw_date: Date;
  goal: number;
  description: string;
  thumbnail: string;
  raffle_value: string;
  status: "open" | "cancel" | "drawn" | "waiting" | "refused";
}

interface IIndex {
  myRaffles: IRaffles[];
}

const Criadas: NextPage<IIndex> = ({ myRaffles }) => {
  const formRef = useRef<FormHandles>(null);
  const [loading] = useState<boolean>(false);
  const [raffles] = useState<IRaffles[]>(myRaffles);

  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mt-16 mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-center w-full">
          <Form ref={formRef} onSubmit={() => {}}>
            <div className="grid grid-cols-3 w-full gap-3 items-end">
              <div className="col-span-2 w-full">
                <Input
                  mask="999.999.999-99"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  label="Digite seu CPF"
                />
              </div>
              <Button spacing="none" icon={<SearchIcon />} loading={loading}>
                BUSCAR
              </Button>
            </div>
          </Form>
        </div>

        <Raffles destination="/gestao/criada" raffles={raffles} />
      </div>

      <Footer />
    </Fragment>
  );
};

export default Criadas;

export const getServerSideProps: GetServerSideProps = async () => {
  const myRaffles = rafflesJson;

  return {
    props: {
      myRaffles,
    },
  };
};
