import { Share2, Earth } from "lucide-react";

import LogoSolari from "../assets/logo_solari.svg";

function Footer() {
  return (
    <footer className="bg-black/60 text-white border-t border-zinc-800 mt-[4vh]">
      <div className="py-10 pl-10 text-center flex gap-[6vw]">
        <div className="w-[30vw]">
          <div className="flex items-center gap-2 text-[2vw] font-bold">
            <img className="w-[5vw]" src={LogoSolari} alt="Logo Solari" />
            <h1>Solari</h1>
          </div>
          <h6 className="text-[1.35vw] text-left mt-4 text-zinc-400">
            Plataforma de streaming premium que entrega entretenimento de alta
            fidelidade para entusiastas em todo o mundo. Alta definição, sem
            concessões.
          </h6>
        </div>
        <div className="text-left text-[1.5vw] [&>h6]:text-zinc-400 [&>h6]:mt-2 [&>h6]:cursor-pointer [&>h6]:hover:text-yellow-400 [&>h6]:transition-colors">
          <h1 className=" text-[1.75vw] font-bold">Plataforma</h1>
          <h6>Filmes</h6>
          <h6>Séries</h6>
          <h6>Originais</h6>
          <h6>Animes</h6>
        </div>
        <div className="text-left text-[1.5vw] [&>h6]:text-zinc-400 [&>h6]:mt-2 [&>h6]:cursor-pointer [&>h6]:hover:text-yellow-400 [&>h6]:transition-colors">
          <h1 className=" text-[1.75vw] font-bold">Suporte</h1>
          <h6>Centro de Ajuda</h6>
          <h6>Minha Conta</h6>
          <h6>Fale Conosco</h6>
          <h6>Dispositivos</h6>
        </div>
        <div className="text-left text-[1.5vw] [&>h6]:text-zinc-400 [&>h6]:mt-2 [&>h6]:cursor-pointer [&>h6]:hover:text-yellow-400 [&>h6]:transition-colors">
          <h1 className=" text-[1.75vw] font-bold">Empresa</h1>
          <h6>Sobre Nós</h6>
          <h6>Imprensa</h6>
          <h6>Carreiras</h6>
          <h6>Jurídico</h6>
        </div>
        <div className="text-left text-[1.5vw] [&>div]:text-white [&>div]:mt-2">
          <h1 className=" text-[1.75vw] font-bold">Social</h1>
          <div className="flex gap-5 [&>button]:w-[3.5vw] [&>button]:h-[6vh] [&>button]:bg-zinc-800 [&>button]:cursor-pointer [&>button]:hover:bg-yellow-400 [&>button]:transition-colors [&>button]:rounded-full [&>button]:items-center [&>button]:justify-center [&>button]:flex">
            <button>
              <Share2 size={25} className="inline-block mr-1" />
            </button>
            <button>
              <Earth size={25} />
            </button>
          </div>
        </div>
      </div>
      <hr className="text-zinc-800" />
      <div className="p-4 flex justify-between items-center">
        <h6 className="text-zinc-500 text-[1.25vw] py-4">
          © 2024 Solari Streaming Inc. Todos os direitos reservados.
        </h6>
        <div className="flex gap-6 [&>h6]:text-zinc-500 [&>h6]:text-[1.25vw] [&>h6]:cursor-pointer [&>h6]:hover:text-yellow-50 [&>h6]:transition-colors">
            <h6 className="text-zinc-500 text-[1.25vw]">Política de Privacidade</h6>
            <h6 className="text-zinc-500 text-[1.25vw]">Termos de Uso</h6>
            <h6 className="text-zinc-500 text-[1.25vw]">Preferências de Cookies</h6>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
