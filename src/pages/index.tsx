import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-pri-mold">
      <Header />
      <main className="flex gap-4 flex-col items-center justify-between pt-4 max-w-[1000px] mx-auto bg-[#ff000066]">
        <h1 className="font-bold text-3xl">Nosso Projeto</h1>
        <p className="text-lg text-center px-10">
          Temos a intenção de entregar conteudo gratuito sobre Informática,
          documentos Google, IA, Programação, Desenvolvimento de games. Nosso
          primeiro protótipo esta aqui para mostrar com seria exbido esse
          conteúdo.
        </p>
        <p className="text-lg text-center px-9">
          É possivel navegar pelo cabeçalho da página e acessar as aulas,
          depoimentos e nosso contato.
        </p>
        <Image
          src="https://i.imgur.com/8Gfpz6a.png"
          alt="Bookshelf from CleanPNG"
          width={350}
          height={400}
          className="bg-dar-green/0 border-0 rounded-lg hover:border-dar-green hover:border-8 hover:border-white/0"
        />
        <div className="text-center">
          <h2 className="text-2xl py-4">O que é a Prototipagem?</h2>
          <p className="text-lg lg:mx-12 mx-4 text-justify">
            A prototipagem em uma metodologia ágil é um processo de
            desenvolvimento no qual um modelo inicial (protótipo) de um produto
            ou sistema é criado, testado e refinado de forma iterativa. O
            objetivo é explorar, testar e validar ideias, funcionalidades ou
            interações de forma rápida e eficaz, com o usuário final
            constantemente envolvido ao longo do processo. Em metodologias
            ágeis, como Scrum ou Kanban, a prototipagem se alinha ao princípio
            de entrega contínua de valor ao cliente, e ocorre em ciclos curtos,
            chamados de iterações ou sprints. Durante cada ciclo, o protótipo é
            ajustado com base no feedback dos usuários, permitindo que o produto
            final seja mais aderente às necessidades reais do usuário.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
