import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { DocumentArrowDownIcon } from "@heroicons/react/16/solid";

export default function Contato() {
  return (
    <div className="bg-pri-mold">
      <Header />
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="mx-auto text-center text-md sm:text-2xl rounded-md p-4 gap-y-2 flex flex-col min-h-[90vh]">
          <p className="hover:underline hover:scale-110">
            Email: sasa.lhcl@gmail.com
          </p>
          <p className="hover:underline hover:scale-110">
            Telefone: (85) 98419-5751
          </p>
          <p className="hover:underline hover:scale-110">
            <a target="_blank" href="https://www.linkedin.com/in/lucas-sasa/">
              Linkedin: www.linkedin.com/lucas-sasa/
            </a>
          </p>
          <p className="hover:underline hover:scale-110 ">
            <a
              href="https://wa.me/+5585984195751?text=Olá%20Lucas,%20eu%20gostaria%20de%20falar%20com%20você%20sobre%20o%20seu%20site!"
              target="_blank"
            >
              Whatsapp:  
              <strong className="text-blue-400">Clique aqui</strong>
            </a>
          </p>
          <Link
            href="https://drive.google.com/drive/folders/1Ih_CHLrvP9srEwcjVPrKBTSvNKh7xx5u?usp=sharing"
            target="_blank"
            className="flex mx-auto cursor-pointer hover:scale"
          >
            <p className="py-1 text-md sm:text-4xl">Acesse o Google Drive:  </p>
            <DocumentArrowDownIcon className="w-10 sm:w-16 hover:scale-[1.50]" />
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
