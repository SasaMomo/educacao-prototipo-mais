import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-around md:justify-between border-t-2 mt-4 container mx-auto p-4">
      <p className="m-0 sm:m-2 text-sm sm:text-xl self-start">
        Todos os Direitos autorais reservados 2024 ©
      </p>
      <div className="flex">
        <a
          href="#header"
          className="m-0 sm:m-2 underline text-sm sm:text-xl flex cursor-pointer"
        >
          Voltar ao topo
          <ArrowUpIcon className="animate-bounce h-6 sm:h-10 w-6 sm:w-10 m-auto" />
        </a>
      </div>
    </footer>
  );
}
