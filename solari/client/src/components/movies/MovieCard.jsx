import { useState, useEffect } from "react";
import { Play, Info, Flame } from "lucide-react";

import "./movieCard.css";

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
    <div id="banner-movie">
      <ul>
        {/* Usamos o interrogação (?) para evitar erro se a API ainda não tiver carregado */}
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`https://image.tmdb.org/t/p/w500${filmes[0]?.backdrop_path}`}
          />

          <img
            src={`https://image.tmdb.org/t/p/w500${filmes[0]?.poster_path}`}
            alt={filmes[0]?.title}
          />
        </picture>
        <div id="movie-info">
          <div id="top-card">
            <h5>
              Em alta <Flame size={20} strokeWidth={3} />
            </h5>
            <h6>{movieGenres?.map((genre) => genre?.name).join(" • ")}</h6>
          </div>
          <h1>{filmes[0]?.title}</h1>
          <h2>{filmes[0]?.overview}</h2>
          <div id="banner-buttons">
            <button>
              <Play size={20} /> Assista Agora
            </button>
            <button>
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
