import { useState, useEffect } from "react";

import { Play, Info, Flame } from "lucide-react";

const token = import.meta.env.VITE_TMDB_TOKEN;

import "../styles/pag_principal.css";

const genres = [
  {
    id: 28,
    name: "Ação",
  },
  {
    id: 12,
    name: "Aventura",
  },
  {
    id: 16,
    name: "Animação",
  },
  {
    id: 35,
    name: "Comédia",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentário",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Família",
  },
  {
    id: 14,
    name: "Fantasia",
  },
  {
    id: 36,
    name: "História",
  },
  {
    id: 27,
    name: "Terror",
  },
  {
    id: 10402,
    name: "Música",
  },
  {
    id: 9648,
    name: "Mistério",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Ficção Científica",
  },
  {
    id: 10770,
    name: "Filme de TV",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "Guerra",
  },
  {
    id: 37,
    name: "Faroeste",
  },
];
function BannerMovie() {
  // 1. Criamos um estado para guardar a lista (começa como array vazio)
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // 2. Fazemos a busca
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        // 3. Guardamos os resultados no nosso estado
        setFilmes(data.results);
      })
      .catch((err) => console.error(err));
  }, []); // O [] vazio garante que a busca só aconteça UMA vez
  const movieGenres = filmes[0]?.genre_ids?.map((id) =>
    genres.find((genre) => genre.id === id),
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
