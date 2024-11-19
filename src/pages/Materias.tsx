import Image from "next/image";
import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Materias() {
  return (
    <div className=" w-full bg-pri-mold">
      <Header />
      <div className="flex flex-col mx-auto text-center max-w-[1000px] bg-[#ff000066] gap-y-2">
        <h1 className="text-[32px]">Matérias</h1>
        <h2 className="text-[22px] border-t-2">Documentos Google</h2>
        <h3>Usado para criar documentos na nuvem.</h3>
        <p>
          Você ira aprender como fazer login/criar sua conta do Google, acessar
          os produtos do Google, como usar o Google drive, criar diversos tipos
          de documentos na nuvem, como usa-los e compartilhar-los.
        </p>
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
        <h2 className="text-[22px] border-t-2">Inteligência Artificial</h2>
        <h3>Ferramentas IA</h3>
        <p>
          Você aprenderá quais as ferramentas IA mais usadas no mercado e como
          usar cada uma delas por exemplo:
        </p>
        <p>Passo 1:</p>
        <Image
          className="mx-auto"
          src="https://i.imgur.com/oEdU5lu.png"
          alt="IA Icon"
          width={300}
          height={100}
        ></Image>
        <Link
          href="/GoogleDocs"
          className="border-2 rounded-md py-2 px-4 min-w-[240px] mx-auto my-2 text-[22px] bg-pri-red hover:bg-pri-green hover:scale-110 active:animate-ping"
        >
          Clique para acessar
        </Link>
        <h2 className="text-[22px] border-t-2">Programação Scratch</h2>
        <h3>Seu inicio na jornada da programação</h3>
        <p>
          Você aprenderá sobre lógica de programação e como criar seus primeiros
          jogos através de blocos e palavras sem a necessidade de códigos.
        </p>
        <p>Passo 1:</p>
        <Image
          className="mx-auto"
          src="https://i.imgur.com/BsTrtor.png"
          alt="Scratch Icon"
          width={300}
          height={100}
        ></Image>
        <Link
          href="/GoogleDocs"
          className="border-2 rounded-md py-2 px-4 min-w-[240px] mx-auto my-2 text-[22px] bg-pri-red hover:bg-pri-green hover:scale-110 active:animate-ping"
        >
          Clique para acessar
        </Link>
        <h2 className="text-[22px] border-t-2">Programação Roblox Studio</h2>
        <h3>Como faço para começar?</h3>
        <p>
          Para começar é muito simples, primeiro de tudo você precisar criar uma
          conta google ou entrar em uma conta que você ja tenha.
        </p>
        <p>Passo 1:</p>
        <Image
          className="mx-auto"
          src="https://i.imgur.com/gx1A3mz.png"
          alt="Roblox Studio Icon"
          width={300}
          height={100}
        ></Image>
        <Link
          href="/GoogleDocs"
          className="border-2 rounded-md py-2 px-4 min-w-[240px] mx-auto my-2 text-[22px] bg-pri-red hover:bg-pri-green hover:scale-110 active:animate-ping"
        >
          Clique para acessar
        </Link>
        <h2 className="text-[22px] border-t-2">Canva</h2>
        <h3>Como faço para começar?</h3>
        <p>
          Para começar é muito simples, primeiro de tudo você precisar criar uma
          conta google ou entrar em uma conta que você ja tenha.
        </p>
        <p>Passo 1:</p>
        <Image
          className="mx-auto"
          src="https://i.imgur.com/aSeLhFV.png"
          alt="Canva Icon"
          width={190}
          height={100}
        ></Image>
        <Link
          href="/GoogleDocs"
          className="border-2 rounded-md py-2 px-4 min-w-[240px] mx-auto my-2 text-[22px] bg-pri-red hover:bg-pri-green hover:scale-110 active:animate-ping"
        >
          Clique para acessar
        </Link>
        <Footer />
      </div>
    </div>
  );
}
