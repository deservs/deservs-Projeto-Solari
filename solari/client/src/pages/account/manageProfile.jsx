import { Plus } from "lucide-react";

import Logo_Solari from "../../assets/Logo_Solari.svg";
import Gabriel from "../../assets/foto_meme.png";

function ManageApp() {
  return (
    <div>
      <head>
        <title>Gerenciar Perfis</title>
      </head>
      <div>
        <img src={Logo_Solari} alt="Solari Logo" />
        <h1>Solari</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-[90%]">
        <div className="text-center [&>h1]:text-[3vw] [&>h4]:text-[1.5vw] [&>h4]:font-medium [&>h1]:font-bold">
          <h1>Quem está assistindo?</h1>
          <h4 className="text-zinc-500">
            Selecione um perfil para começar a assistir.
          </h4>
        </div>
        <div className="[&>img]:w-[10vw] [&>img]:h-[10vw] [&>img]:rounded-full [&>p]:text-[1.5vw] [&>p]:font-medium flex flex-col items-center gap-4 mt-10 cursor-pointer hover:text-yellow-400 transition-colors">
          <img src={Gabriel} alt="Gabriel" />
          <p>Gabriel</p>
        </div>
      </div>
    </div>
  );
}

export default ManageApp;
