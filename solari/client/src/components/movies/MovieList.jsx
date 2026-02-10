import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// Import Swiper React components e estilos
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

// estilos base do Swiper para os slides ficarem lado a lado
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "./MovieList.css";

const token = import.meta.env.VITE_TMDB_TOKEN;

export function ListTrendingAll() {
  const [filmes, setFilmes] = useState([]);
  const prevTrendingRef = useRef(null);
  const nextTrendingRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/filmes/tendencias")
      .then((res) => res.json())
      .then((dados) => setFilmes(dados))
      .catch((erro) => console.error("Erro ao buscar dados:", erro));
  }, []);

  if (filmes.length === 0) {
    return null; // Não renderiza nada enquanto carrega
  }

  return (
    <div id="Body-list">
      <h1>Em Alta</h1>

      <div id="List-Movie">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={1} // Espaço entre os itens (gap)
          slidesPerView={2.2} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevTrendingRef.current;
            swiper.params.navigation.nextEl = nextTrendingRef.current;
          }}
          navigation={{
            prevEl: prevTrendingRef.current,
            nextEl: nextTrendingRef.current,
          }}
          breakpoints={{
            // Quando a tela for >= 480px
            480: {
              slidesPerView: 2.2,
              spaceBetween: 10,
              allowTouchMove: true, // Ativa arrastar com mouse/touch para telas menores
            },
            // Quando a tela for >= 768px (Tablets)
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              allowTouchMove: true, // Ativa arrastar com mouse/touch para telas menores
            },
            // Quando a tela for >= 1024px (Laptops)
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 10,
              allowTouchMove: false, // Ativa arrastar com mouse/touch para telas menores
            },
            // Quando a tela for >= 1500px (Telas grandes)
            1500: {
              slidesPerView: 5.5,
              spaceBetween: 10,
              allowTouchMove: false, // Ativa arrastar com mouse/touch para telas menores
            },
          }}
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id} id="Scroll">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                />

                <img
                  src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                  alt={filme.title}
                />
              </picture>

              <h2>{filme.title || filme.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-trending" ref={prevTrendingRef}>
          <ChevronLeft size="100%" />
        </button>

        <button className="button-next-trending" ref={nextTrendingRef}>
          <ChevronRight size="100%" />
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
    <div>
      <h1>Filmes para você assistir hoje</h1>

      <div>
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
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2>{filme.title || filme.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-discover-movie">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-discover-movie">
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
    <div>
      <h1>Séries para você começar</h1>

      <div>
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
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2>{filme.title || filme.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-discover-tv">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-discover-tv">
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
    <div>
      <h1>Os filmes mais bem avaliados</h1>

      <div>
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
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2>{filme.title || filme.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-rated-movies">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-rated-movies">
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
    <div>
      <h1>As séries mais bem avaliadas</h1>

      <div>
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
        >
          {filmes.map((filme) => (
            <SwiperSlide key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2>{filme.title || filme.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev-rated-tv">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next-rated-tv">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}
