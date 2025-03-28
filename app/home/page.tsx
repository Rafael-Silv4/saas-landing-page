"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeMobile from "../mobile/home/page";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="mb-28 relative">
      <Header />
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/Background.png"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
      {isMobile ? (
        <HomeMobile />
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen px-5 ">
          <h1 className="font-extrabold text-6xl mb-[9px]">
            Simplifique Seus Estudos{" "}
          </h1>
          <p className="text-[#6B7280] text-center text-[1rem] mb-[67px]">
            Deixe que nós fazemos a curadoria para você. Assine nossa plataforma
            e receba todos os <br />
            meses um ebook novo de programação.
          </p>
          <div className="flex justify-center items-center gap-[13px] mb-3">
            <Input
              className="w-[18rem] h-[2.5rem] rounded-[.5rem] bg-white border-[#cccccc] text-[.5rem] drop-shadow-lg"
              placeholder="Coloque seu email"
            />
            <Button className="w-[7.5rem] h-[2.5rem] bg-black font-normal">
              Assine Agora
            </Button>
          </div>
          <p className="text-[.7rem] text-[#6B7280] ">
            Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
          </p>
        </div>
      )}
    </div>
  );
}
