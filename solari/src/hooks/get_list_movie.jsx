import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// Import Swiper React components e estilos
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const token = import.meta.env.VITE_TMDB_TOKEN;

function ListTrendingMovie() {
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
    <div className="relative group bg-zinc-900">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[3.5vw]">
        Em Alta
      </h1>

      <div className="px-[3.5vw] relative [&>button]:hidden group-hover:[&>button]:block overflow-visible">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15} // Espaço entre os itens (gap)
          slidesPerView={1.5} // Quantos itens aparecem
          loop={true} // Ativa o carrossel infinito
          allowTouchMove={false} // Desativa arrastar com mouse/touch
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          breakpoints={{
            // Responsividade baseada na largura da tela
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="relative !overflow-hidden z-50"
        >
          {filmes.map((filme) => (
            <SwiperSlide
              key={filme.id}
              className="relative z-0 hover:z-50 transition-all duration-300 w-auto! hover:[&>div]:bg-black hover:[&>div]:top-[3vh] hover:[&>div]:left-[-2.5vw] hover:[&>img]:rounded-none hover:[&>img]:scale-125 hover:[&>img]:shadow-2xl hover:[&>img]:rounded-t-lg hover:[&>div]:p-4 hover:[&>div>h2]:text-[2vw] hover:[&>div>div]:block hover:[&>div]:ml-[2.5vw] hover:[&>img]:ml-[2.5vw] hover:[&>div]:w-[25vw] hover:[&>div]:h-[40vh]"
            >
              <img
                className="relative w-[20vw]! h-[25vh] object-cover rounded-lg transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <div className="relative w-[20vw] h-[5vh] top-0 bg-transparent text-white rounded-b-lg p-0 transition-all duration-300">
                <h2 className="text-white text-[1.2vw] font-semibold mt-2 truncate">
                  {filme.title || filme.name}
                </h2>
                <div className="hidden">
                <h3>{filme.overview}</h3>
                <button className="bg-yellow-400 text-black w-[10vw] h-[5vh] text-[1.5vw] font-bold rounded-lg cursor-pointer hover:bg-yellow-100 mt-[1vh]">Assista Agora</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados posicionados fora do Swiper */}
        <button className="button-prev absolute left-[1vw] h-[30vh] top-[13vh] -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full text-white hover:bg-white hover:text-black transition-all disabled:opacity-0">
          <ChevronLeft size={35} />
        </button>

        <button className="button-next absolute right-[1vw] h-[30vh] top-[13vh] -translate-y-1/2 z-50 bg-black/60 p-2 rounded-full text-white hover:bg-white hover:text-black transition-all">
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export default ListTrendingMovie;
