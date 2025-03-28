"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardMobile from "../mobile/Card/page";

const Card = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = () => {
      setMobile(window.innerWidth <= 430);
    };

    mobileCheck();
    window.addEventListener("resize", mobileCheck);

    return () => window.removeEventListener("resize", mobileCheck);
  }, []);
  return (
    <div>
      {mobile ? (
        <CardMobile />
      ) : (
        <div className=" justify-center mb-[129px]">
          <div className="  bg-[#ffff] h-[426px] w-[418px] rounded-[25px] border-[0.5px]">
            <h1 className="text-[24px] ml-[32px] mt-[20px] font-semibold mb-[13px]">
              Plano Pro Premium VIP
            </h1>
            <p className="text-[14px] ml-[39px] text-[#6B7280] mb-[42px]">
              Tudo que você precisa para seus estudos
            </p>
            <h1 className="font-semibold ml-[39px] text-[36px] mb-[13px]">
              R$29 {""}
              <span className="text-[20px] text-[#6b7280] font-normal">
                /mês
              </span>
            </h1>
            <div className="flex gap-5">
              <div className="ml-[39px] mt-2 flex flex-col gap-5">
                <Image
                  src="/check.svg"
                  alt="Check"
                  width={100}
                  height={100}
                  className="h-[10px] w-[14px]  "
                />
                <Image
                  src="/check.svg"
                  alt="Check"
                  width={100}
                  height={100}
                  className="h-[10px] w-[14px]  "
                />
                <Image
                  src="/check.svg"
                  alt="Check"
                  width={100}
                  height={100}
                  className="h-[10px] w-[14px]  "
                />
                <Image
                  src="/check.svg"
                  alt="Check"
                  width={100}
                  height={100}
                  className="h-[10px] w-[14px]  "
                />
              </div>
              <div className="flex flex-col gap-2 text-[14px] text-[#6b7280]">
                <p>1 ebook por mês</p>
                <p>Curadoria especial </p>
                <p>Acesso ilimitado </p>
                <p>Cancele a qualquer momento</p>
              </div>
            </div>
            <Button className=" w-[332px] h-[40px] ml-[39px] mt-[56px] rounded-[6px] text-[14px] bg-black cursor-pointer">
              Assine Agora
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
