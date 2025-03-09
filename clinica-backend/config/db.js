const mongoose = require('mongoose');

/**
 * Conecta a la base de datos MongoDB usando la URL especificada en las variables de entorno
 * 
 * @returns {Promise} Una promesa que se resuelve cuando la conexión es exitosa
 */
const connectDB = async () => {
  try {
    // Opciones de configuración para evitar advertencias de deprecación
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Intenta conectar a la base de datos
    const conn = await mongoose.connect(process.env.MONGODB_URI, options);

    console.log(`MongoDB conectado: ${conn.connection.host}`);
    
    // Manejador para cuando la conexión se cierra
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB desconectado');
    });

    // Manejador para cuando hay un error en la conexión
    mongoose.connection.on('error', (err) => {
      console.error(`Error en la conexión a MongoDB: ${err.message}`);
    });
    
    return conn;
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1); // Salir del proceso con error
  }
};

module.exports = connectDB;