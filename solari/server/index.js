const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config({ path: '.env.local' });

const usuariosRoutes = require('./routes/usuarios');
const filmesRoutes = require('./routes/filmes');

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/filmes', filmesRoutes);

app.get('/', (req, res) => {
    res.send('Servidor Solari rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})