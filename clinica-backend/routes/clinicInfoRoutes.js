const express = require('express');
const { 
  getAllSections, 
  getSectionById, 
  createSection, 
  updateSection, 
  deleteSection,
  initializeDefaultSections
} = require('../controllers/clinicInfoController');
const { protect } = require('../middlewares/authMiddleware');

// Crear un router
const router = express.Router();

/**
 * @route   GET /api/clinic-info
 * @desc    Obtener todas las secciones
 * @access  Público (pero muestra solo secciones publicadas a menos que sea el admin)
 */
router.get('/', getAllSections);

/**
 * @route   GET /api/clinic-info/:sectionId
 * @desc    Obtener una sección específica por su ID
 * @access  Público (pero muestra solo si está publicada a menos que sea el admin)
 */
router.get('/:sectionId', getSectionById);

/**
 * @route   POST /api/clinic-info
 * @desc    Crear una nueva sección
 * @access  Privado (solo administrador)
 */
router.post('/', protect, createSection);

/**
 * @route   PUT /api/clinic-info/:sectionId
 * @desc    Actualizar una sección existente
 * @access  Privado (solo administrador)
 */
router.put('/:sectionId', protect, updateSection);

/**
 * @route   DELETE /api/clinic-info/:sectionId
 * @desc    Eliminar una sección
 * @access  Privado (solo administrador)
 */
router.delete('/:sectionId', protect, deleteSection);

/**
 * @route   POST /api/clinic-info/initialize
 * @desc    Inicializar secciones predeterminadas
 * @access  Privado (solo administrador)
 */
router.post('/initialize', protect, initializeDefaultSections);

module.exports = router;