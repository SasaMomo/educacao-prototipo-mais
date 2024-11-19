import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function GoogleDocs() {
  return (
    <>
      <div className="bg-pri-mold w-full">
        <Header />
        <div className=" bg-[#ff000066] max-w-[1000px] mx-auto">
          <h1 className="text-[26px] text-center">
            Aqui ficarão as aulas e arquivos auxiliares
          </h1>
          <div className="h-[70vh]"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
