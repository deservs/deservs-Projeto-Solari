import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// Import Swiper React components e estilos
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const token = import.meta.env.VITE_TMDB_TOKEN;

export function ListTrendingAll() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=pt-BR",
      options,
    )
      .then((res) => res.json())
      .then((data) => setFilmes(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        Em Alta
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible \\ [&>button]:absolute [&>button]:h-[30vh] [&>button]:top-[13vh] [&>button]:-translate-y-1/2 [&>button]:z-50 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:rounded-full [&>button]:text-white [&>button]:hover:bg-white [&>button]:hover:text-black [&>button]:transition-all">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next-trending",
            prevEl: ".button-prev-trending",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative overflow-hidden! z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} className="relative h-[40vh]">
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                {filme.title || filme.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-trending left-[1vw]">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-trending right-[1vw]">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export function ListDiscoverMovie() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&language=pt-BR",
      options,
    )
      .then((res) => res.json())
      .then((data) => setFilmes(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        Filmes para você assistir hoje
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible \\ [&>button]:absolute [&>button]:h-[30vh] [&>button]:top-[13vh] [&>button]:-translate-y-1/2 [&>button]:z-50 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:rounded-full [&>button]:text-white [&>button]:hover:bg-white [&>button]:hover:text-black [&>button]:transition-all">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next-discover-movie",
            prevEl: ".button-prev-discover-movie",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative overflow-hidden! z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} className="relative h-[40vh]">
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                {filme.title || filme.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-discover-movie left-[1vw]">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-discover-movie right-[1vw]">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export function ListDiscoverTv() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&page=1&language=pt-BR",
      options,
    )
      .then((res) => res.json())
      .then((data) => setFilmes(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        Séries para você começar
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible \\ [&>button]:absolute [&>button]:h-[30vh] [&>button]:top-[13vh] [&>button]:-translate-y-1/2 [&>button]:z-50 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:rounded-full [&>button]:text-white [&>button]:hover:bg-white [&>button]:hover:text-black [&>button]:transition-all">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next-discover-tv",
            prevEl: ".button-prev-discover-tv",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative overflow-hidden! z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} className="relative h-[40vh]">
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                {filme.title || filme.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-discover-tv left-[1vw]">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-discover-tv right-[1vw]">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export function ListRatedMovies() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1",
      options,
    )
      .then((res) => res.json())
      .then((data) => setFilmes(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        Os filmes mais bem avaliados
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible \\ [&>button]:absolute [&>button]:h-[30vh] [&>button]:top-[13vh] [&>button]:-translate-y-1/2 [&>button]:z-50 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:rounded-full [&>button]:text-white [&>button]:hover:bg-white [&>button]:hover:text-black [&>button]:transition-all">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next-rated-movies",
            prevEl: ".button-prev-rated-movies",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative overflow-hidden! z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} className="relative h-[40vh]">
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                {filme.title || filme.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-rated-movies left-[1vw]">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-rated-movies right-[1vw]">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export function ListRatedTv() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1",
      options,
    )
      .then((res) => res.json())
      .then((data) => setFilmes(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        As séries mais bem avaliadas
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible \\ [&>button]:absolute [&>button]:h-[30vh] [&>button]:top-[13vh] [&>button]:-translate-y-1/2 [&>button]:z-50 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:rounded-full [&>button]:text-white [&>button]:hover:bg-white [&>button]:hover:text-black [&>button]:transition-all">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next-rated-tv",
            prevEl: ".button-prev-rated-tv",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative overflow-hidden! z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} className="relative h-[40vh]">
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                {filme.title || filme.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-rated-tv left-[1vw]">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-rated-tv right-[1vw]">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}
