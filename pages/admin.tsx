import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Admin = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("https://goofy-hamilton-f6dbd4.netlify.app/");
    }, 2000);
  }, [push]);

  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mx-auto px-5 lg:px-10 h-52 flex items-center justify-center flex-col mt-5">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 128 128"
          className="animate-spin"
        >
          <path
            fill="#222"
            d="M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z"
          ></path>
        </svg>

        <span className="block mt-5">Abrindo app...</span>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Admin;
