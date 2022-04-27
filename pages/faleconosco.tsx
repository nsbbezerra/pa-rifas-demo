import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { configs } from "../configs";

const FaleConosco: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="mt-16 container mx-auto px-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center w-full text-gray-700 sm:text-5xl md:w-3/4 lg:w-1/2">
            Está com duvidas? Entre em contato conosco.
          </h1>

          <Link href={`https://wa.me/${configs.whatsapp}`} passHref>
            <a
              className="btn flex justify-center items-center bg-green-500 text-white px-5 py-3 rounded-md mt-10 hover:bg-green-600"
              target={"_blank"}
            >
              <div className="w-8 mr-3">
                <Image
                  src={"/img/whatsapp.svg"}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="PA Rifas - Whatsapp"
                />
              </div>
              <span className="font-bold text-2xl sm:text-3xl">
                {configs.tel}
              </span>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default FaleConosco;
