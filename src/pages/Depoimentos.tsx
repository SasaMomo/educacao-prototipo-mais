import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Depoimentos() {
  return (
    <div className="bg-pri-mold w-full min-h-[100vh]">
      <Header />
      <div className="max-w-[1000px] mx-auto text-center bg-[#ff000066]">
        <h1 className="text-[26px]">Vídeos de depoimentos</h1>
        <div className="h-[1000px]">
          <h2>Aqui ficaram os Vídeos de Depoimento</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
}
