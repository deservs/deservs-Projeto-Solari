const express = require("express");
const router = express.Router();

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

// A rota no seu servidor que o React vai chamar

router.get("/genres", (req, res) => {
  res.json(genres);
});

router.get("/tendencias", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR",
      options,
    );
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
    console.log(response.status); // Para verificar no console do Node
  } catch (err) {
    console.error("ERRO NO FETCH:", err.message); // Verifique o terminal do VS Code!
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

router.get("/descobrir", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&language=pt-BR",
      options,
    );
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
    console.log(response.status); // Para verificar no console do Node
  } catch (err) {
    console.error("ERRO NO FETCH:", err.message); // Verifique o terminal do VS Code!
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

router.get("/melhores", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1",
      options,
    );
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
    console.log(response.status); // Para verificar no console do Node
  } catch (err) {
    console.error("ERRO NO FETCH:", err.message); // Verifique o terminal do VS Code!
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

router.get("/s/descobrir", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&page=1&language=pt-BR",
      options,
    );
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
    console.log(response.status); // Para verificar no console do Node
  } catch (err) {
    console.error("ERRO NO FETCH:", err.message); // Verifique o terminal do VS Code!
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

router.get("/s/melhores", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1",
      options,
    );
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
    console.log(response.status); // Para verificar no console do Node
  } catch (err) {
    console.error("ERRO NO FETCH:", err.message); // Verifique o terminal do VS Code!
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
});

module.exports = router;
