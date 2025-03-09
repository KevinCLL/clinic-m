const express = require('express');
const { login, getProfile, changePassword, createInitialAdmin } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

// Crear un router
const router = express.Router();

/**
 * @route   POST /api/auth/login
 * @desc    Iniciar sesión como administrador
 * @access  Público
 */
router.post('/login', login);

/**
 * @route   GET /api/auth/profile
 * @desc    Obtener el perfil del administrador actual
 * @access  Privado
 */
router.get('/profile', protect, getProfile);

/**
 * @route   PUT /api/auth/change-password
 * @desc    Cambiar la contraseña del administrador
 * @access  Privado
 */
router.put('/change-password', protect, changePassword);

/**
 * @route   POST /api/auth/create-admin
 * @desc    Crear un administrador inicial (solo se permite uno)
 * @access  Público (pero solo funciona si no hay administradores)
 */
router.post('/create-admin', createInitialAdmin);

module.exports = router;