//Alumnos: Guerrero Mendoza Rodolfo Enrique
//Grupo: 1758

//Importamos express
const express = require('express');
const app = express();
const PORT = 3025;

//Ruta principal
app.get('/', (req, res) => {
    res.send('Hola desde express');
});

app.listen(PORT, () => {
    console.log(`Estás en http://localhost:${PORT}`);
});