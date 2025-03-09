// Importar módulos necesarios
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Importar configuración del entorno
require('dotenv').config();

// Importar conexión a la base de datos
const connectDB = require('./config/db');

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const clinicInfoRoutes = require('./routes/clinicInfoRoutes');

// Inicializar la aplicación Express
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar middleware
app.use(helmet()); // Seguridad para cabeceras HTTP
app.use(cors());   // Permite peticiones CORS
app.use(morgan('dev')); // Logging de solicitudes HTTP
app.use(express.json()); // Parsea solicitudes con JSON
app.use(express.urlencoded({ extended: false })); // Parsea solicitudes con datos de formularios

// Configurar rutas
app.use('/api/auth', authRoutes);
app.use('/api/clinic-info', clinicInfoRoutes);

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'API de la Clínica funcionando correctamente' });
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Error en el servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Configurar puerto y arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV}`);
});

// Exportar app para testing
module.exports = app;