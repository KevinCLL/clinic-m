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

// Configurar CORS con opciones más específicas
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://tu-dominio-frontend.com', // Cambia esto a tu dominio de producción
        'https://tu-app.github.io'        // Si usas GitHub Pages
      ]
    : [
        'http://localhost:7777',
        'http://localhost:3000', 
        'http://localhost:5173',
        'http://localhost:5174',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174'
      ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Para navegadores antiguos (IE11, varios SmartTVs)
};

// Conectar a la base de datos
connectDB();

// Configurar middleware
app.use(helmet({ 
  contentSecurityPolicy: false // Desactivar CSP en desarrollo
})); 
app.use(cors(corsOptions));
app.use(morgan('dev')); // Logging de solicitudes HTTP
app.use(express.json()); // Parsea solicitudes con JSON
app.use(express.urlencoded({ extended: false })); // Parsea solicitudes con datos de formularios

// Middleware para logging de solicitudes (debug)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.method !== 'GET') {
    console.log('Body:', req.body);
  }
  console.log('Headers:', req.headers);
  next();
});

// Configurar rutas
app.use('/api/auth', authRoutes);
app.use('/api/clinic-info', clinicInfoRoutes);

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'API de la Clínica funcionando correctamente' });
});

// Agregar una ruta de prueba para verificar CORS
app.options('*', cors(corsOptions)); // Manejar preflight para todas las rutas

app.get('/api/test-cors', (req, res) => {
  res.json({ 
    message: 'CORS está funcionando correctamente',
    origin: req.headers.origin || 'Desconocido'
  });
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
  console.log(`CORS habilitado para: ${corsOptions.origin}`);
});

// Exportar app para testing
module.exports = app;