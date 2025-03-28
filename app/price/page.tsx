"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import MobilePrice from "../mobile/price/page";

const Price = () => {
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
    <div id="price">
      {mobile ? (
        <MobilePrice />
      ) : (
        <div className="bg-[url(/Background.png)] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="mb-[18px] font-bold text-[60px]">
              Preço Simples e Transparente
            </h1>
            <p className="text-center text-[#6B7280] text-[20px] mb-[74px]">
              Pra que inúmeros planos quando nós sabemos exatamente o que é
              melhor para você? <br /> Assine o nosso plano mensal{" "}
              <span className="underline">Pro Premium VIP</span> e garanta
              mensalmente um ebook novo de programação. E por menos de <br />
              um café por dia.{" "}
            </p>
            <Card />
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
