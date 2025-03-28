"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OptionsMobile from "../mobile/options/page";

const Operations = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkDisplay = () => {
      setMobile(window.innerWidth <= 430);
    };

    checkDisplay();
    window.addEventListener("resize", checkDisplay);

    return () => {
      window.removeEventListener("resize", checkDisplay);
    };
  }, []);

  return (
    <div id="operations" className="w-full px-4">
      {isMobile ? (
        <OptionsMobile />
      ) : (
        <div className="max-w-[1200px] mx-auto">
          <h1 className="flex justify-center items-center mt-9 font-bold text-3xl md:text-[2.5rem]">
            Como funciona?
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center text-center  mb-[12rem] gap-10 md:gap-20 mt-10">
            <Image
              src="/woman.svg"
              alt="woman"
              width={392}
              height={392}
              className="w-[200px] h-[200px] md:w-[392px] md:h-[392px]"
            />
            <div className="flex flex-col gap-4 text-[#6b7280] text-lg md:text-2xl">
              <p>Acesso a 1 ebook por mês</p>
              <p>Curadoria especial</p>
              <p>Cancele quando quiser</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 place-items-center">
              {[...Array(3)].map((_, index) => (
                <Image
                  key={index}
                  src="/check.svg"
                  alt="Check"
                  width={100}
                  height={100}
                  className="w-[21.15px] h-[15.78px] "
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Operations;
