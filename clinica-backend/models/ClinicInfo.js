const mongoose = require('mongoose');

/**
 * Esquema para la información editable de la clínica
 * 
 * Almacena el contenido de las diferentes secciones de la web
 * que pueden ser modificadas desde el panel de administración
 */
const clinicInfoSchema = new mongoose.Schema({
  // Identificador de la sección (inicio, servicios, nosotros, etc.)
  sectionId: {
    type: String,
    required: [true, 'El ID de sección es obligatorio'],
    unique: true,
    trim: true,
    lowercase: true
  },
  
  // Nombre visible de la sección
  sectionName: {
    type: String,
    required: [true, 'El nombre de la sección es obligatorio'],
    trim: true
  },
  
  // Título principal de la sección
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  
  // Contenido principal de la sección (puede ser HTML)
  content: {
    type: String,
    required: [true, 'El contenido es obligatorio']
  },
  
  // Indica si la sección está publicada o en borrador
  published: {
    type: Boolean,
    default: true
  },
  
  // Orden de aparición en el menú (si aplica)
  order: {
    type: Number,
    default: 0
  },
  
  // Fechas de creación y última actualización
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para actualizar la fecha de modificación automáticamente
clinicInfoSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: new Date() });
  next();
});

// Crear y exportar el modelo
const ClinicInfo = mongoose.model('ClinicInfo', clinicInfoSchema);

module.exports = ClinicInfo;