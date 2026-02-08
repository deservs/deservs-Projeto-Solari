const express = require('express');
const router = express.Router();

const usuarios = [
    { id: 1, nome : 'Vetor', papel: 'Opinista'},
    { id: 2, nome : 'Gabriel', papel: 'Escravo'}
];

router.get('/', (req, res) => {
  res.json(usuarios);
});

router.get('/perfil', (req, res) => {
  res.send('Perfil do usuário logado');
});

module.exports = router;