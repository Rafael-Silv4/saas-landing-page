"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const HomeMobile = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const checkDisplay = () => {
      setMobile(window.innerWidth <= 430);
    };

    checkDisplay();
    window.addEventListener("resize", checkDisplay);

    return () => window.removeEventListener("resize", checkDisplay);
  }, []);
  return (
    <div>
      {mobile && (
        <div className="flex flex-col px-5 justify-center items-center mt-[245px] text-center">
          <h1 className="font-bold flex text-[25px] sm:text-3xl mb-[15px]">
            Simplifique Seus Estudos{" "}
          </h1>
          <p className="text-[#6B7280] text-center text-[12px] mb-[2rem]">
            Deixe que nós fazemos a curadoria para você. Assine nossa plataforma
            e receba todos os meses um ebook novo de <br />
            programação.
          </p>
          <div className="flex justify-center items-center gap-[13px] mb-3">
            <Input
              className="w-[235px] h-[35px] rounded-[.5rem] bg-white border-[#cccccc] text-[.5rem] drop-shadow-lg"
              placeholder="Coloque seu email"
            />
            <Button className="w-[92.68px] h-[35px] bg-black text-[10px] font-normal">
              Assine Agora
            </Button>
          </div>
          <p className="text-[10px] text-[#6B7280] mb-80">
            Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeMobile;
