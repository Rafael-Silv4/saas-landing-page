"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("operations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(false);
  };

  const scroll = () => {
    const page = document.getElementById("price");
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(false);
  };

  return (
    <header className="flex items-center justify-between ml-2  px-2 py-4 p-4">
      <div className="flex items-center gap-3">
        <Image
          src="/Frame.svg"
          alt="logo"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
        <h1 className="font-bold">LivroSaaS</h1>
      </div>
      {!menu && (
        <nav className="hidden md:flex items-center gap-5">
          <a className="cursor-pointer" onClick={handleScroll}>
            Funcionamento
          </a>
          <a className="cursor-pointer" onClick={scroll}>
            Preço
          </a>
          <Button className="w-[79px] h-[40px] bg-white border-[#cccccc] text-black rounded-none hover:bg-stone-200 cursor-pointer">
            Login
          </Button>
        </nav>
      )}

      {!menu && (
        <menu className="md:hidden">
          <Button
            className="md:hidden bg-[url(/MenuIcon.png)] bg-center bg-no-repeat bg-white w-[5rem] border-none "
            onClick={() => setMenu(!menu)}
          ></Button>
          <div className="hidden">
            <a onClick={handleScroll}>Funcionamento</a>
            <a onClick={scroll}>Preço</a>

            <a>Login</a>
          </div>
        </menu>
      )}

      {menu && (
        <div>
          <Button
            className="md:hidden bg-[url(/MenuIcon.png)] bg-center bg-no-repeat bg-white w-[5rem] border-none "
            onClick={() => setMenu(!menu)}
          ></Button>
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-5 flex md:hidden flex-col gap-3 text-center hover:bg-stone-200 cursor-pointer">
            <a onClick={handleScroll}>Funcionamento</a>
            <a onClick={scroll}>Preço</a>
            <Link href="" onClick={() => setMenu(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
