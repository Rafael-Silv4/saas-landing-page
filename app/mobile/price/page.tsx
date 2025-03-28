"use client";

import Card from "@/app/components/Card";
import { useEffect, useState } from "react";

const MobilePrice = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const isMobile = () => {
      setMobile(window.innerWidth <= 430);
    };

    isMobile();
    window.addEventListener("resize", isMobile);

    return () => window.removeEventListener("resize", isMobile);
  }, []);

  return (
    <div>
      {mobile && (
        <div className="bg-[url(/Background.png)] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="mb-[18px] mt-[5rem] font-bold text-[25px]">
              Preço Simples e Transparente
            </h1>
            <p className="text-center text-[#6B7280] text-[12px] mb-[74px]">
              Pra que inúmeros planos quando nós sabemos exatamente <br /> o que
              é melhor para você? Assine o nosso plano mensal Pro <br /> Premium
              VIP e garanta mensalmente um ebook novo de <br />
              programação. E por menos de um café por dia.{" "}
            </p>
            <Card />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePrice;
