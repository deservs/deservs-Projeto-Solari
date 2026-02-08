import { useState, useEffect } from "react";
import { Play, Info, Flame } from "lucide-react";

import "../styles/pag_principal.css";

function BannerMovie() {
  // 1. Criamos um estado para guardar a lista (começa como array vazio)
  const [filmes, setFilmes] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    // Faz a chamada para o servidor Node
    fetch("http://localhost:3001/api/filmes/tendencias")
      .then((res) => res.json())
      .then((dados) => setFilmes(dados))
      .catch((erro) => console.error("Erro ao buscar dados:", erro));

    fetch("http://localhost:3001/api/filmes/genres")
      .then((res) => res.json())
      .then((dados) => setGenre(dados))
      .catch((erro) => console.error("Erro ao buscar dados:", erro));
  }, []);

  // 2. Fazemos a busca
  //  // O [] vazio garante que a busca só aconteça UMA vez
  const movieGenres = filmes[0]?.genre_ids?.map((id) =>
    genre.find((genre) => genre.id === id),
  );
  return (
    <div /* Capa do pagina */ className="cursor-default">
      <ul className="relative">
        {/* Usamos o interrogação (?) para evitar erro se a API ainda não tiver carregado */}
        <img
          className="w-full h-[70vh]"
          src={`https://image.tmdb.org/t/p/w500${filmes[0]?.backdrop_path}`}
        />
        <div className="w-full h-[70vh] absolute top-0 z-10 p-[3vw] bg-gradient-to-b from-60% from-black/60 to-zinc-900">
          <div className="flex gap-[1vw] items-center text-white">
            <h5 className="text-yellow-400 bg-yellow-400/50 border border-yellow-400 rounded-full w-[10vw] text-center font-bold flex items-center justify-center">
              Em alta <Flame size={20} />
            </h5>
            <h6 className="text-zinc-300">
              {movieGenres?.map((genre) => genre?.name).join(" • ")}
            </h6>
          </div>
          <br />
          <h1 className="text-white  text-[6vw] font-bold text-wrap text-left w-[25vw] left-[2vw] leading-[5vw] uppercase">
            {filmes[0]?.title}
          </h1>
          <br />
          <h2 className="text-zinc-400 text-[1.5vw] w-[35vw] left-[2vw]">
            {filmes[0]?.overview}
          </h2>
          <br />
          <div className="flex gap-[2vw]">
            <button className="bg-yellow-400 rounded-full w-[18vw] h-[7vh] text-[2vw] font-bold text-black text-nowrap items-center flex justify-around pl-[1vw] pr-[1vw] cursor-pointer shadow hover:bg-yellow-50 transition-all hover:scale-110">
              <Play size={20} /> Assista Agora
            </button>
            <button className="bg-zinc-700 rounded-full w-[15vw] h-[7vh] text-[2vw] font-bold text-white text-nowrap items-center flex justify-around pl-[1vw] pr-[1vw] cursor-pointer border-[.25px] border-zinc-500 shadow hover:bg-zinc-600 transition-all hover:scale-110">
              <Info />
              Saiba Mais
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default BannerMovie;
