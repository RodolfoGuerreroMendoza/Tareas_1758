//Alumnos: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3025;

//Se define la ruta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.listen(PORT, () => {
  console.log(`Estás en http://localhost:${PORT}`);
});