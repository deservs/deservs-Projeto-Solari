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
const express = require('express');
const { route } = require('./usuarios');
const router = express.Router();

// A rota no seu servidor que o React vai chamar
router.get('/tendencias', async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`, // Deixe sua chave segura aqui
    },
  };

  try {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=pt-BR", options);
    const data = await response.json();
    res.json(data.results); // O Node repassa os dados para o React
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
});

router.get('/genres', (req, res) => {
  res.json(genres);
});

module.exports = router;
