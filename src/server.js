// importar dependência
const express = require('express');
const path = require('path');

// iniciando lib express
const server = express()

server
// utilizando os arquivos estáticos
.use(express.static('public'))

// criar uma rota
.get('/', (request, response) => {
  return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// ligar o servidor
server.listen(5500)