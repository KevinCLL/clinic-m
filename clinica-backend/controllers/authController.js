const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

/**
 * Genera un token JWT para el usuario
 * 
 * @param {string} id - ID del usuario para incluir en el token
 * @returns {string} Token JWT firmado
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

/**
 * Login de administrador
 * 
 * @route POST /api/auth/login
 * @access Público
 */
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validar que se proporcionaron ambos campos
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, proporciona nombre de usuario y contraseña'
      });
    }

    // Buscar el administrador por nombre de usuario
    const admin = await Admin.findOne({ username });

    // Verificar si el administrador existe y la contraseña es correcta
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }

    // Actualizar la fecha del último login
    admin.lastLogin = Date.now();
    await admin.save();

    // Generar token JWT
    const token = generateToken(admin._id);

    // Enviar respuesta con token y datos del usuario (sin la contraseña)
    res.status(200).json({
      success: true,
      token,
      user: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    console.error(`Error en login: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al iniciar sesión',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Obtener información del perfil del administrador actual
 * 
 * @route GET /api/auth/profile
 * @access Privado (requiere autenticación)
 */
const getProfile = async (req, res) => {
  try {
    // La información del usuario ya está en req.user gracias al middleware protect
    res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        lastLogin: req.user.lastLogin,
        createdAt: req.user.createdAt
      }
    });
  } catch (error) {
    console.error(`Error en getProfile: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al obtener el perfil',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Cambiar contraseña del administrador
 * 
 * @route PUT /api/auth/change-password
 * @access Privado (requiere autenticación)
 */
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validar que se proporcionaron ambos campos
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, proporciona la contraseña actual y la nueva'
      });
    }

    // Obtener el administrador desde la base de datos para tener la contraseña hasheada
    const admin = await Admin.findById(req.user._id);

    // Verificar que la contraseña actual es correcta
    if (!(await admin.comparePassword(currentPassword))) {
      return res.status(401).json({
        success: false,
        message: 'Contraseña actual incorrecta'
      });
    }

    // Validar longitud de la nueva contraseña
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'La nueva contraseña debe tener al menos 6 caracteres'
      });
    }

    // Actualizar la contraseña
    admin.password = newPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: 'Contraseña actualizada correctamente'
    });
  } catch (error) {
    console.error(`Error en changePassword: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al cambiar la contraseña',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Crear usuario administrador inicial (solo usar una vez)
 * 
 * @route POST /api/auth/create-admin
 * @access Público (restringir después de la configuración inicial)
 */
const createInitialAdmin = async (req, res) => {
  try {
    // Verificar si ya existe algún administrador
    const adminCount = await Admin.countDocuments();
    
    if (adminCount > 0) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un administrador. No se pueden crear más.'
      });
    }

    const { username, password, email } = req.body;

    // Validar datos
    if (!username || !password || !email) {
      return res.status(400).json({
        success: false,
        message: 'Por favor proporciona nombre de usuario, contraseña y email'
      });
    }

    // Crear el administrador
    const admin = await Admin.create({
      username,
      password, // Se encriptará automáticamente gracias al middleware pre-save
      email
    });

    // Generar token
    const token = generateToken(admin._id);

    res.status(201).json({
      success: true,
      message: 'Administrador creado correctamente',
      token,
      user: {
        id: admin._id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error(`Error en createInitialAdmin: ${error.message}`);
    
    // Manejar error de duplicado (username o email ya existe)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'El nombre de usuario o email ya está en uso'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error al crear el administrador',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  login,
  getProfile,
  changePassword,
  createInitialAdmin
};