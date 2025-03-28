"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OptionsMobile = () => {
  const [mobi, setMobi] = useState(true);

  useEffect(() => {
    const isAvaliable = () => {
      setMobi(window.innerWidth <= 430);
    };

    isAvaliable();
    window.addEventListener("resize", isAvaliable);

    return () => window.removeEventListener("resize", isAvaliable);
  }, []);

  if (!mobi) return null;

  return (
    <div>
      <div>
        <div className="flex justify-center items-center  ">
          <h1 className=" mt-[10rem] text-[1.7rem] font-bold">
            Como funciona?
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-5 h-[16rem] mb-[28rem]">
          <Image
            src="/woman.svg"
            alt="woman"
            width={100}
            height={100}
            className="w-[130px] h-[130px]"
          />
          <div className=" flex flex-col gap-4 text-[#6b7280] text-[12px]">
            <p>Acesso a 1 ebook por mês</p>
            <p>Curadoria especial</p>
            <p>Cancele quando quiser</p>
          </div>
          <div className=" flex flex-col gap-7">
            <Image
              src="/check.svg"
              alt="Check"
              width={100}
              height={100}
              className="w-[16px] h-[11.94px] "
            />
            <Image
              src="/check.svg"
              alt="Check"
              width={100}
              height={100}
              className="w-[16px] h-[11.94px] "
            />
            <Image
              src="/check.svg"
              alt="Check"
              width={100}
              height={100}
              className="w-[16px] h-[11.94px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsMobile;
