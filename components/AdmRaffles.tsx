import { FC } from "react";
import Image from "next/image";
import { SparklesIcon, CogIcon, FlagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Button from "./Button";
import { configs } from "../configs";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";
import { encode } from "js-base64";

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

interface IProps {
  raffles?: IRaffles[];
  destination: string;
  cpf?: string;
}

const Raffles: FC<IProps> = ({ destination, raffles, cpf }) => {
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
          {raffles?.map((raf) => (
            <div
              className="rounded-md border-x border-y border-solid border-gray-200 overflow-hidden h-fit shadow-md relative"
              key={raf.id}
            >
              <div className="w-fit absolute bg-green-500 text-white rounded-md shadow-md py-1 px-2 z-20 top-2 right-2 text-sm">
                Nº {raf.id}
              </div>
              <div
                className={`absolute w-[250px] ${
                  (raf.status === "open" && "bg-blue-600") ||
                  (raf.status === "cancel" && "bg-red-600") ||
                  (raf.status === "drawn" && "bg-green-500") ||
                  (raf.status === "waiting" && "bg-orange-500") ||
                  (raf.status === "refused" && "bg-gray-900")
                } flex justify-center items-center p-2 text-xs text-white font-bold z-20 -rotate-45 -left-20 top-7 select-none sm:-left-16 sm:top-10 sm:p-2 sm:text-lg`}
              >
                {(raf.status === "open" && "À VENDA") ||
                  (raf.status === "cancel" && "CANCELADA") ||
                  (raf.status === "drawn" && "FINALIZADA") ||
                  (raf.status === "waiting" && "EM ESPERA") ||
                  (raf.status === "refused" && "BLOQUEADA")}
              </div>
              <div className="w-full">
                <Image
                  src={`${raf.thumbnail}`}
                  width={400}
                  height={400}
                  layout="responsive"
                  alt="PA Rifas - Rifas Online"
                />
              </div>

              <div className="w-full p-2 flex flex-col md:p-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-500 text-sm sm:text-lg line-clamp-2 pr-2">
                    {raf.name}
                  </span>
                </div>
                <span className="text-justify text-gray-700 text-xs mt-2 sm:text-sm line-clamp-5">
                  {raf.description}
                </span>

                <div className="flex justify-center mt-2 text-xs text-gray-700 items-start flex-col sm:flex-row sm:justify-between sm:text-sm mb-2">
                  <span>
                    Sorteio:{" "}
                    <strong>
                      {raf.id === 2
                        ? "02/03/2022 às 21:00h"
                        : format(
                            new Date(raf.draw_date),
                            "dd/MM/yyyy 'às' HH:mm'h'",
                            {
                              locale: pt_br,
                            }
                          )}
                    </strong>
                  </span>
                  <div className="hidden items-center w-fit sm:flex">
                    <SparklesIcon className="w-4 h-4" />
                    <span>{raf.goal}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <span className="text-gray-800 text-sm w-full min-w-fit text-center sm:text-base bg-orange-500 rounded-md px-1 flex items-center justify-center py-1">
                    R${" "}
                    {parseFloat(raf.raffle_value).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <div className="sm:col-span-2">
                    <Button icon={<CogIcon />} spacing="none" full={true}>
                      GERENCIAR
                    </Button>
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
