import Image from "next/image";
import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Materias() {
  return (
    <div className=" w-full bg-pri-mold">
      <Header />
      <div className="flex flex-col mx-auto text-center max-w-[1000px] bg-[#ff000066]">
        <h1 className="text-[32px]">Matérias</h1>
        <h2 className="text-[22px]">Documentos Google</h2>
        <h3>Como faço para começar?</h3>
        <p>
          Para começar é muito simples, primeiro de tudo você precisar criar uma
          conta google ou entrar em uma conta que você ja tenha.
        </p>
        <p>Passo 1:</p>
        <Image
          className="mx-auto"
          src="https://i.imgur.com/FIPZGKe.png"
          alt="Documentos google Icon"
          width={300}
          height={100}
        ></Image>
        <Link
          href="/GoogleDocs"
          className="border-2 rounded-md py-2 px-4 min-w-[240px] mx-auto my-2 text-[22px] bg-pri-red hover:bg-pri-green hover:scale-110 active:animate-ping"
        >
          Clique para acessar
        </Link>
        <h2 className="text-[22px]">Inteligência Artificial</h2>
        <h2 className="text-[22px]">Programação Scratch</h2>
        <h2 className="text-[22px]">Programação Roblox Studio</h2>
        <h2 className="text-[22px]">Canva</h2>
        <Footer />
      </div>
    </div>
  );
}
