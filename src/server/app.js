const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de logging usando Morgan
app.use(morgan('dev'));

// Middleware para servir archivos estáticos desde la carpeta 'src/html'
app.use(express.static(path.join(__dirname, '../../src/html')));

// Ruta de ejemplo para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/html/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
