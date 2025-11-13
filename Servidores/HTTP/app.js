//Alumnos: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

// Usamos el módulo http de Node
const http = require('http');
const PORT = 3025;

// Se crea el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola desde el server de http');
});

server.listen(PORT, () => {
  console.log(`Estás en http://localhost:${PORT}`);
});