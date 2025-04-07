const ClinicInfo = require('../models/ClinicInfo');

/**
 * Obtener todas las secciones de información
 * 
 * @route GET /api/clinic-info
 * @access Público
 */
const getAllSections = async (req, res) => {
  try {
    // Obtener solo las secciones publicadas para acceso público
    // Si hay un parámetro 'all=true' y el usuario está autenticado, mostrar todas
    const query = (req.query.all === 'true' && req.user) 
      ? {} 
      : { published: true };
    
    // Ordenar por el campo 'order'
    const sections = await ClinicInfo.find(query).sort('order');
    
    res.status(200).json({
      success: true,
      count: sections.length,
      data: sections
    });
  } catch (error) {
    console.error(`Error en getAllSections: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al obtener las secciones',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Obtener una sección específica por su ID
 * 
 * @route GET /api/clinic-info/:sectionId
 * @access Público
 */
const getSectionById = async (req, res) => {
  try {
    const { sectionId } = req.params;
    
    // Buscar la sección por su ID
    // Si el usuario no está autenticado, solo mostrar si está publicada
    const query = { sectionId };
    if (!req.user) {
      query.published = true;
    }
    
    const section = await ClinicInfo.findOne(query);
    
    if (!section) {
      return res.status(404).json({
        success: false,
        message: 'Sección no encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      data: section
    });
  } catch (error) {
    console.error(`Error en getSectionById: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al obtener la sección',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Crear una nueva sección
 * 
 * @route POST /api/clinic-info
 * @access Privado (requiere autenticación)
 */
const createSection = async (req, res) => {
  try {
    const { sectionId, sectionName, title, content, published, order } = req.body;
    
    // Validar campos obligatorios
    if (!sectionId || !sectionName || !title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, proporciona todos los campos requeridos: sectionId, sectionName, title, content'
      });
    }
    
    // Verificar si ya existe una sección con ese ID
    const existingSection = await ClinicInfo.findOne({ sectionId });
    if (existingSection) {
      return res.status(400).json({
        success: false,
        message: `Ya existe una sección con el ID "${sectionId}"`
      });
    }
    
    // Crear la nueva sección
    const newSection = await ClinicInfo.create({
      sectionId,
      sectionName,
      title,
      content,
      published: published !== undefined ? published : true,
      order: order || 0
    });
    
    res.status(201).json({
      success: true,
      message: 'Sección creada correctamente',
      data: newSection
    });
  } catch (error) {
    console.error(`Error en createSection: ${error.message}`);
    
    // Manejar error de duplicado
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'El ID de sección ya está en uso'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error al crear la sección',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Actualizar una sección existente
 * 
 * @route PUT /api/clinic-info/:sectionId
 * @access Privado (requiere autenticación)
 */
const updateSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { sectionName, title, content, published, order } = req.body;
    
    // Verificar si la sección existe
    let section = await ClinicInfo.findOne({ sectionId });
    
    if (!section) {
      return res.status(404).json({
        success: false,
        message: 'Sección no encontrada'
      });
    }
    
    // Actualizar los campos
    const updatedData = {
      ...(sectionName && { sectionName }),
      ...(title && { title }),
      ...(content !== undefined && { content }),
      ...(published !== undefined && { published }),
      ...(order !== undefined && { order }),
      updatedAt: Date.now()
    };
    
    // Actualizar la sección en la base de datos
    const updatedSection = await ClinicInfo.findOneAndUpdate(
      { sectionId },
      updatedData,
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      message: 'Sección actualizada correctamente',
      data: updatedSection
    });
  } catch (error) {
    console.error(`Error en updateSection: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la sección',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Eliminar una sección
 * 
 * @route DELETE /api/clinic-info/:sectionId
 * @access Privado (requiere autenticación)
 */
const deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    
    // Verificar si la sección existe
    const section = await ClinicInfo.findOne({ sectionId });
    
    if (!section) {
      return res.status(404).json({
        success: false,
        message: 'Sección no encontrada'
      });
    }
    
    // Eliminar la sección
    await ClinicInfo.deleteOne({ sectionId });
    
    res.status(200).json({
      success: true,
      message: 'Sección eliminada correctamente'
    });
  } catch (error) {
    console.error(`Error en deleteSection: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la sección',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Inicializar secciones predeterminadas (para primera configuración)
 * 
 * @route POST /api/clinic-info/initialize
 * @access Privado (requiere autenticación)
 */
const initializeDefaultSections = async (req, res) => {
  try {
    // Verificar si ya existen secciones
    const existingSections = await ClinicInfo.countDocuments();
    
    if (existingSections > 0) {
      return res.status(400).json({
        success: false,
        message: 'Ya existen secciones en la base de datos'
      });
    }
    
    // Definir secciones predeterminadas
    const defaultSections = [
      {
        sectionId: 'inicio',
        sectionName: 'Página de Inicio',
        title: 'Bienvenido a Clínica Salud',
        content: 'Somos una clínica comprometida con tu salud y bienestar. Nuestro equipo de profesionales está dedicado a brindarte la mejor atención médica.',
        published: true,
        order: 1
      },
      {
        sectionId: 'servicios',
        sectionName: 'Nuestros Servicios',
        title: 'Servicios que ofrecemos',
        content: 'En Clínica Salud ofrecemos una amplia gama de servicios médicos, incluyendo consultas generales, especialidades, laboratorio y más.',
        published: true,
        order: 2
      },
      {
        sectionId: 'nosotros',
        sectionName: 'Sobre Nosotros',
        title: 'Nuestra Historia',
        content: 'Fundada en 2010, Clínica Salud nació con la misión de proporcionar servicios médicos de calidad accesibles para todos...',
        published: true,
        order: 3
      },
      {
        sectionId: 'contacto',
        sectionName: 'Información de Contacto',
        title: 'Contacta con nosotros',
        content: 'Dirección: Calle Principal 123, Ciudad\nTeléfono: 123-456-7890\nEmail: info@clinica-salud.com\nHorario: Lunes a Viernes de 8:00 a 20:00',
        published: true,
        order: 4
      }
    ];
    
    // Insertar todas las secciones
    await ClinicInfo.insertMany(defaultSections);
    
    res.status(201).json({
      success: true,
      message: 'Secciones predeterminadas inicializadas correctamente',
      count: defaultSections.length
    });
  } catch (error) {
    console.error(`Error en initializeDefaultSections: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error al inicializar secciones predeterminadas',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
  initializeDefaultSections
};