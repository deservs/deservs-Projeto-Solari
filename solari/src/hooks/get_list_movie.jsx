import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const token = import.meta.env.VITE_TMDB_TOKEN;

function ListTrendingMovie() {
  const [filmes, setFilmes] = useState([]);
  const scrollRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://api.themoviedb.org/3/trending/all/day?language=pt-BR", options)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        if (results.length > 0) {
          // Criando a lista com clones: [Último, ...Originais, Primeiro]
          const first = results[0];
          const last = results[results.length - 1];
          setFilmes([last, ...results, first]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Efeito para posicionar o scroll no primeiro item real (índice 1) ao carregar
  useEffect(() => {
    if (filmes.length > 0 && scrollRef.current) {
      const { current } = scrollRef;
      const itemWidth = current.children[1].offsetLeft - current.children[0].offsetLeft;
      current.scrollLeft = itemWidth;
    }
  }, [filmes.length]);

  const handleNext = () => {
    if (isAnimating) return; // Evita cliques múltiplos durante a animação
    setIsAnimating(true);

    const { current } = scrollRef;
    const itemWidth = current.children[1].offsetLeft - current.children[0].offsetLeft;

    current.style.scrollBehavior = "smooth";
    current.scrollLeft += itemWidth;

    const onScrollEnd = () => {
      current.style.scrollBehavior = "auto";
      
      setFilmes((prev) => {
        const newState = [...prev];
        const firstItem = newState.shift();
        newState.push(firstItem);
        return newState;
      });

      current.scrollLeft -= itemWidth;
      setIsAnimating(false);
    };

    // Escuta o fim do scroll para reordenar sem flash
    current.addEventListener("scrollend", onScrollEnd, { once: true });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const { current } = scrollRef;
    const itemWidth = current.children[1].offsetLeft - current.children[0].offsetLeft;

    // No Prev, reordenamos ANTES para ter espaço para voltar
    current.style.scrollBehavior = "auto";
    setFilmes((prev) => {
      const newState = [...prev];
      const lastItem = newState.pop();
      newState.unshift(lastItem);
      return newState;
    });

    // Compensa a mudança do array instantaneamente
    current.scrollLeft += itemWidth;

    // Inicia a animação de volta
    setTimeout(() => {
      current.style.scrollBehavior = "smooth";
      current.scrollLeft -= itemWidth;
      
      const onScrollEnd = () => {
        setIsAnimating(false);
      };
      current.addEventListener("scrollend", onScrollEnd, { once: true });
    }, 10);
  };

  return (
    <div className="relative group">
      <h1 className="text-white text-[2vw] font-bold mb-[1vw] ml-[2vw]">Em Alta</h1>
      
      <div className="flex items-center px-[2vw] relative">
        <button
          onClick={handlePrev}
          className="absolute left-[3vw] z-30 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all"
        >
          <ChevronLeft size={40} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-[1vw] py-4"
          style={{ scrollBehavior: "auto" }}
        >
          {filmes.map((filme, index) => (
            <div key={`${filme.id}-${index}`} className="flex-shrink-0 cursor-pointer">
              <img
                className="w-[20vw] h-[25vh] object-cover rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
              />
              <h2 className="text-white text-[1.2vw] font-semibold mt-2 max-w-[20vw] truncate">
                {filme.title || filme.name}
              </h2>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[3vw] z-30 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default ListTrendingMovie;