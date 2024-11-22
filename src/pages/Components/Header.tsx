"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, ClockIcon } from "@heroicons/react/16/solid";
import TimePicker from "./TimeNow";

export default function Header() {
  const [ToggleMenu, setToggleMenu] = useState(false);

  const handlerMenu = () => {
    setToggleMenu(!ToggleMenu);
  };
  return (
    <header id="header" className="bg-pri-red w-full mx-auto">
      <div className="flex gap-2 container mx-auto h-[88px] justify-around md:justify-between">
        <div className="flex items-center mx-4">
          <Image
            className="bg-white rounded-[50%] min-h-20 min-w-20"
            src="https://i.imgur.com/lrtfT4q.png"
            alt="SAS InfoWare logo"
            width={80}
            height={80}
          />
        </div>
        <nav className="md:flex justify-around flex-wrap hidden gap-6 items-center md:w-full mx-4 text-[18px]">
          <Link href="/" className="font-bold hover:scale-110">
            Home
          </Link>
          <Link href="/Materias" className="font-bold hover:scale-110">
            Matérias
          </Link>
          <Link href="/Depoimentos" className="font-bold hover:scale-110">
            Depoimentos
          </Link>
          <Link href="/Contato" className="font-bold hover:scale-110">
            Contato
          </Link>
        </nav>
        <div className="flex md:flex-row flex-col p-2 h-[88px] md:w-auto w-full md:bg-pri-green">
          <div className="self-end flex items-center my-auto md:my-0 h-full">
            <ClockIcon className="w-6 h-6 ml-1" />
            <button className="self-center font-bold mr-[7px] ml-1">
              <TimePicker />
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center cursor-pointer">
          <button onClick={handlerMenu} className="">
            <Bars3Icon className="w-12 h-12 p-2 m-2 mr-4 bg-pri-green rounded-[10%]" />
          </button>
        </div>
        <div
          className={
            ToggleMenu
              ? "fixed left-2 top-[88px] w-[100vw] sm:w-[100vw] md:hidden h-[80vh] bg-pri-mold p-10 ease-in duration-500 z-50 rounded-xl"
              : "fixed left-0 top-0 w-[-100%] z-[-1]"
          }
        >
          <nav className="flex flex-col gap-y-4 items-center justify-around mx-auto text-center text-3xl">
            <Link href="/" className="font-bold w-full border-b-4 py-4">
              Home
            </Link>
            <Link href="/Materias" className="font-bold w-full border-b-4 p-4">
              Matérias
            </Link>
            <Link
              href="/Depoimentos"
              className="font-bold w-full border-b-4 p-4"
            >
              Depoimentos
            </Link>
            <Link href="/Contato" className="font-bold w-full border-b-4 p-4">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
