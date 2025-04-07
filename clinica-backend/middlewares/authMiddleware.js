const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

/**
 * Middleware para proteger rutas
 * 
 * Verifica que el usuario esté autenticado mediante un token JWT
 * Si la autenticación es exitosa, añade la información del usuario a req.user
 */
const protect = async (req, res, next) => {
  let token;

  // Comprobar si hay token en el header Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extraer el token del header (formato: "Bearer xxx")
      token = req.headers.authorization.split(' ')[1];

      // Si no hay token, rechazar la solicitud
      if (!token) {
        return res.status(401).json({ 
          success: false, 
          message: 'No autorizado, token no proporcionado' 
        });
      }

      // Verificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Añadir la información del usuario a la solicitud (sin incluir la contraseña)
      req.user = await Admin.findById(decoded.id).select('-password');

      // Si no se encuentra el usuario en la base de datos
      if (!req.user) {
        return res.status(401).json({ 
          success: false, 
          message: 'No autorizado, token inválido' 
        });
      }

      next();
    } catch (error) {
      // Si el token no es válido o ha expirado
      return res.status(401).json({ 
        success: false, 
        message: 'No autorizado, token inválido o expirado',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  } else {
    // Si no se proporciona un token en el header
    return res.status(401).json({ 
      success: false, 
      message: 'No autorizado, token no proporcionado' 
    });
  }
};

module.exports = { protect };