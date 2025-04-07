/**
 * Script para inicializar datos en la base de datos
 * 
 * Uso: 
 * - Asegúrate de tener el archivo .env configurado
 * - Ejecuta con: node src/scripts/seed.js
 */

// Importar módulos
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const ClinicInfo = require('../models/ClinicInfo');
const connectDB = require('../config/db');

// Función principal
const seed = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();
    console.log('Conexión a la base de datos establecida');

    // Verificar si ya existen datos
    const adminCount = await Admin.countDocuments();
    const sectionsCount = await ClinicInfo.countDocuments();

    if (adminCount > 0 || sectionsCount > 0) {
      console.log('ADVERTENCIA: Ya existen datos en la base de datos');
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question('¿Deseas continuar y reemplazar los datos existentes? (s/n): ', async (answer) => {
        if (answer.toLowerCase() === 's') {
          await clearDatabase();
          await seedDatabase();
          process.exit(0);
        } else {
          console.log('Operación cancelada');
          process.exit(0);
        }
        readline.close();
      });
    } else {
      await seedDatabase();
      process.exit(0);
    }
  } catch (error) {
    console.error(`Error en el script de inicialización: ${error.message}`);
    process.exit(1);
  }
};

// Limpiar la base de datos
const clearDatabase = async () => {
  try {
    await Admin.deleteMany({});
    await ClinicInfo.deleteMany({});
    console.log('Base de datos limpiada correctamente');
  } catch (error) {
    console.error(`Error al limpiar la base de datos: ${error.message}`);
    process.exit(1);
  }
};

// Sembrar datos en la base de datos
const seedDatabase = async () => {
  try {
    // Crear administrador por defecto
    const admin = new Admin({
      username: 'admin',
      password: 'admin123', // Se encriptará automáticamente
      email: 'admin@clinica.com'
    });

    await admin.save();
    console.log('Administrador creado correctamente:');
    console.log(`- Username: ${admin.username}`);
    console.log(`- Email: ${admin.email}`);
    console.log(`- Password: admin123 (debes cambiarla después de iniciar sesión)`);

    // Crear secciones por defecto
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

    await ClinicInfo.insertMany(defaultSections);
    console.log(`Se han creado ${defaultSections.length} secciones predeterminadas`);

    console.log('\nInicialización completada correctamente');
  } catch (error) {
    console.error(`Error al sembrar la base de datos: ${error.message}`);
    process.exit(1);
  }
};

// Ejecutar la función principal
seed();