const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * Esquema del administrador para la base de datos
 * 
 * Almacena información del único usuario administrativo
 * que puede acceder al backoffice
 */
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido']
  },
  lastLogin: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Middleware que se ejecuta antes de guardar un administrador
 * Encripta la contraseña si ha sido modificada
 */
adminSchema.pre('save', async function(next) {
  // Solo encriptar si la contraseña ha sido modificada (o es nueva)
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    // Generar un salt (valor aleatorio para hacer la encriptación más segura)
    const salt = await bcrypt.genSalt(10);
    
    // Encriptar la contraseña con el salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Método para comparar contraseñas
 * 
 * @param {string} candidatePassword - La contraseña ingresada para comparar
 * @returns {Promise<boolean>} Retorna true si las contraseñas coinciden
 */
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Crear y exportar el modelo de Admin
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;