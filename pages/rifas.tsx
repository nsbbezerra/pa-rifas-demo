import type { NextPage, GetStaticProps } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Fragment, useState } from "react";
import Input from "../components/Formless/Input";
import Raffles from "../components/Raffles";
import { configs } from "../configs";
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

const Rifas: NextPage<IIndex> = ({ raffles }) => {
  const [rifas, setRifas] = useState<IRaffles[]>(raffles);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text === "") {
      setRifas(raffles);
    } else {
      let id = parseInt(text);
      const result = raffles.filter((obj) => obj.id === id);
      setRifas(result);
    }
  };

  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mt-10 mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-center w-full">
          <div className="w-80">
            <Input
              name="find"
              placeholder="Digite o número da rifa para buscar"
              label="Digite o número da rifa para buscar"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        <Raffles raffles={rifas} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Rifas;

export const getStaticProps: GetStaticProps = async () => {
  const raffles = raffleJson;

  return {
    props: {
      raffles,
    },
    revalidate: 60,
  };
};
