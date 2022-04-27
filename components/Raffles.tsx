import { FC } from "react";
import Image from "next/image";
import {
  SparklesIcon,
  ShoppingCartIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Button from "./Button";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";

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

interface IProps {
  raffles?: IRaffles[];
}

const Raffles = ({ raffles }: IProps) => {
  return (
    <>
      {raffles?.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="rounded-full bg-red-100 p-10 animate-pulse">
            <FlagIcon className="text-red-600 w-20 h-20" />
          </div>
          <span className="text-red-600 block text-center text-lg mt-5">
            NENHUMA RIFA ENCONTRADA
          </span>
        </div>
      ) : (
        <div className="grid mt-10 grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 lg:gap-7">
          {raffles?.map((raff) => (
            <div
              className="rounded-md border-x border-y border-solid border-gray-200 overflow-hidden h-fit shadow-md relative"
              key={raff.id}
            >
              <div className="w-fit absolute bg-green-500 text-white rounded-md shadow-md py-1 px-2 z-20 top-2 right-2 text-sm">
                Nº {raff.id}
              </div>
              <div className="w-full">
                <Image
                  src={`${raff.thumbnail}`}
                  width={400}
                  height={400}
                  layout="responsive"
                  alt="PA Rifas - Rifas Online"
                />
              </div>

              <div className="w-full p-2 flex flex-col md:p-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-500 text-sm sm:text-lg  line-clamp-2 pr-2">
                    {raff.name}
                  </span>
                </div>
                <span className="text-justify text-gray-700 text-xs sm:text-sm mt-2 line-clamp-5">
                  {raff.description}
                </span>

                <div className="flex justify-center mt-2 text-xs text-gray-700 items-start flex-col sm:flex-row sm:justify-between sm:text-sm mb-2">
                  <span>
                    Sorteio:{" "}
                    <strong>
                      {format(
                        new Date(raff.draw_date),
                        "dd/MM/yyyy 'às' HH:mm'h'",
                        {
                          locale: pt_br,
                        }
                      )}
                    </strong>
                  </span>
                  <div className="hidden items-center w-fit sm:flex">
                    <SparklesIcon className="w-4 h-4" />
                    <span>{raff.goal}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <span className="text-gray-800 text-sm w-full min-w-fit text-center sm:text-base bg-orange-500 rounded-md px-1 flex items-center justify-center py-1">
                    R${" "}
                    <strong className="ml-1">
                      {parseFloat(raff.raffle_value).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </strong>
                  </span>
                  <div className="sm:col-span-2">
                    <Link href={`/rifa/${raff.identify}`} passHref>
                      <a>
                        <Button
                          icon={<ShoppingCartIcon />}
                          spacing="none"
                          full={true}
                        >
                          COMPRAR
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Raffles;
