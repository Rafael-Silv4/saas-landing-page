"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileEnrollment from "../mobile/enrollment/page";

const Enrollment = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setMobile(window.innerWidth <= 430);
    };
    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  });

  return (
    <div>
      {mobile ? (
        <MobileEnrollment />
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center bg-white">
            <h1 className="text-[60px] font-bold mt-[108px] mb-[9px]">
              Pronto Para Mudar Sua Vida?
            </h1>
            <p className="text-center text-[20px] text-[#6B7280] mb-[42px]">
              Faça como milhares de outras pessoas. Assine nosso produto e{" "}
              <br /> tenha garantido seus estudos{" "}
            </p>
            <Button className="h-[40px] w-[422px] bg-black text-[14px] mb-[9px] cursor-pointer">
              Assine Agora
            </Button>
            <p className="text-[10px] text-[#6B7280] mb-[79px] ">
              Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
            </p>
          </div>
          <footer className="h-[150px] gap-5 flex flex-col justify-center items-center mt-[42px] mb-[41px] ">
            <div className="flex gap-2">
              <Image src="/Frame.svg" alt="icon" width={24} height={24} />
              <h1 className="text-[20px] font-bold ">LivroSaaS</h1>
            </div>
            <p className="text-[12px] text-[#6b7280] ">
              © 2024 LivroSaaS. Todos os direitos reservados.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
