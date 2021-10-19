// npm i express
// npm i jest -D
// npm i supertest -D

const app = require('./app');
const port = 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
