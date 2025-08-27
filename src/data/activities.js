import { getTeamMembersByIds } from './team.js';

export const activities = [
  {
    id: 'mindfulness',
    title: 'Grupos de mindfulness',
    category: 'bienestar',
    image: '/src/assets/images/grupos_mindfulness.png',
    shortDescription: 'Aprende técnicas de atención plena para reducir el estrés y mejorar tu bienestar emocional. Nuestros grupos están pensados para personas que buscan herramientas efectivas para gestionar la ansiedad y el malestar emocional.',
    fullDescription: 'Aprende técnicas de atención plena y meditación para gestionar el estrés y mejorar tu bienestar emocional.',
    subtitle: '¿Qué es Mindfulness y qué aprenderás en este taller?',
    content: [
      'El Mindfulness o Atención Plena es una práctica que nos enseña a prestar atención al momento presente, con aceptación y sin juzgar. Nos permite tomar conciencia de nuestros pensamientos, emociones y sensaciones corporales, aprendiendo a relacionarnos con ellos de manera más saludable.',
      'En este taller aprenderás diversas prácticas formales e informales de mindfulness que podrás incorporar en tu día a día. Combinaremos explicaciones teóricas sobre los mecanismos y beneficios del mindfulness con ejercicios prácticos de meditación guiada, exploración corporal (body scan), atención a la respiración y movimientos conscientes.',
      'También abordaremos cómo aplicar el mindfulness para gestionar situaciones de estrés, ansiedad o malestar emocional, y desarrollaremos estrategias para cultivar estados mentales positivos como la autocompasión, la gratitud y la amabilidad.',
      'El taller está diseñado tanto para principiantes como para personas que ya tengan alguna experiencia previa con la meditación, adaptándose a las necesidades del grupo.'
    ],
    objectives: [
      'Aprender técnicas básicas de meditación y atención plena',
      'Reducir los niveles de estrés y ansiedad',
      'Aumentar la capacidad de concentración y claridad mental',
      'Desarrollar mayor autoconciencia emocional',
      'Mejorar la capacidad de autorregulación ante situaciones difíciles',
      'Cultivar una actitud de amabilidad hacia uno mismo y los demás'
    ],
    details: {
      dates: 'Programa continuo - Consultar próximas fechas',
      schedule: 'Martes de 18:00 a 19:30',
      location: 'CODA - Salud Mental Integral',
      capacity: 'Máximo 12 participantes',
      price: '220€ (8 sesiones)',
      targetAudience: 'Este taller está dirigido a cualquier persona interesada en aprender técnicas de mindfulness, ya sea para mejorar su bienestar general, gestionar situaciones de estrés o ansiedad, o complementar un proceso terapéutico. No se requiere experiencia previa.'
    },
    facilitatorIds: ['ana-martin'],
    status: 'active'
  },
  {
    id: 'yoga',
    title: 'Yoga general',
    category: 'corporal',
    image: '/src/assets/images/yoga.png',
    shortDescription: 'Sesiones de yoga adaptadas a todos los niveles para mejorar la conexión mente-cuerpo. Enfocado en la reducción del estrés y la mejora de la conciencia corporal como vía para el bienestar psicológico.',
    fullDescription: 'Práctica de yoga adaptada para mejorar el bienestar físico y mental.',
    subtitle: 'Yoga para el bienestar integral',
    content: [
      'Nuestras sesiones de yoga están diseñadas para promover el equilibrio entre cuerpo y mente, adaptándose a las necesidades y capacidades de cada participante.',
      'A través de posturas suaves, ejercicios de respiración y técnicas de relajación, trabajaremos para liberar tensiones físicas y emocionales, mejorar la flexibilidad y fortalecer el cuerpo de manera consciente.',
      'El enfoque terapéutico del yoga que practicamos pone especial énfasis en la escucha del propio cuerpo, respetando los límites individuales y fomentando una práctica segura y beneficiosa.',
      'Cada sesión incluye una combinación de asanas (posturas), pranayama (respiración) y relajación final, creando una experiencia completa de bienestar.'
    ],
    objectives: [
      'Mejorar la flexibilidad y fuerza corporal',
      'Reducir tensiones musculares y dolores crónicos',
      'Desarrollar técnicas de respiración consciente',
      'Aumentar la conciencia corporal',
      'Promover estados de relajación profunda',
      'Mejorar la calidad del sueño'
    ],
    details: {
      dates: 'Clases continuas - Incorporación en cualquier momento',
      schedule: 'Miércoles y viernes de 17:30 a 18:45',
      location: 'CODA - Salud Mental Integral',
      capacity: 'Máximo 10 participantes',
      price: '60€/mes (2 clases semanales) o 15€ clase suelta',
      targetAudience: 'Abierto a todas las personas, independientemente de su nivel de experiencia o condición física. Las clases se adaptan a las necesidades individuales.'
    },
    facilitatorIds: [],
    status: 'active'
  },
  {
    id: 'yoga-trauma',
    title: 'Yoga sensible al trauma',
    category: 'terapeutico',
    image: '/src/assets/images/yoga_sensible.png',
    shortDescription: 'Un enfoque especializado del yoga para personas que han experimentado situaciones traumáticas. Creamos un espacio seguro para reconectar con el cuerpo y las sensaciones de forma gradual y respetuosa.',
    fullDescription: 'Práctica de yoga adaptada específicamente para personas con historia de trauma.',
    subtitle: 'Un espacio seguro para la reconexión corporal',
    content: [
      'El yoga sensible al trauma es una práctica especializada que reconoce el impacto del trauma en el cuerpo y la mente, ofreciendo un enfoque seguro y empoderador para la sanación.',
      'En estas sesiones, priorizamos la creación de un ambiente de seguridad y control, donde cada participante tiene opciones y puede elegir qué movimientos realizar. No hay ajustes físicos y se respeta completamente el espacio personal.',
      'Trabajamos con movimientos suaves y conscientes, siempre invitando en lugar de instruir, permitiendo que cada persona explore su propio cuerpo a su ritmo. El lenguaje utilizado es cuidadosamente elegido para ser inclusivo y no activador.',
      'Esta práctica ayuda a regular el sistema nervioso, desarrollar recursos de autorregulación y recuperar gradualmente la conexión con las sensaciones corporales de manera segura.'
    ],
    objectives: [
      'Crear una relación segura con el propio cuerpo',
      'Desarrollar herramientas de autorregulación',
      'Aumentar la ventana de tolerancia emocional',
      'Fortalecer la sensación de agencia y control',
      'Procesar y liberar tensiones almacenadas',
      'Cultivar la autocompasión y el autocuidado'
    ],
    details: {
      dates: 'Grupos cerrados - Consultar próximo inicio',
      schedule: 'Jueves de 18:30 a 19:45',
      location: 'CODA - Salud Mental Integral',
      capacity: 'Máximo 8 participantes',
      price: '280€ (8 sesiones)',
      targetAudience: 'Dirigido a personas que han experimentado trauma y buscan reconectar con su cuerpo de forma segura. Se recomienda estar en proceso terapéutico o haberlo completado.'
    },
    facilitatorIds: [],
    status: 'active'
  },
  {
    id: 'retiros',
    title: 'Retiros de meditación',
    category: 'intensivos',
    image: '/src/assets/images/retiros.png',
    shortDescription: 'Experiencias inmersivas para profundizar en la práctica meditativa y el autoconocimiento. Estas jornadas ofrecen un espacio de desconexión y encuentro con uno mismo en entornos naturales.',
    fullDescription: 'Jornadas intensivas de práctica meditativa en entornos naturales.',
    subtitle: 'Un tiempo para el silencio y la introspección',
    content: [
      'Los retiros de meditación son experiencias transformadoras que nos permiten alejarnos temporalmente del ritmo acelerado de la vida cotidiana para sumergirnos en la práctica contemplativa.',
      'Durante estos días, combinamos diferentes técnicas meditativas: meditación sentada, meditación caminando, ejercicios de movimiento consciente y períodos de silencio. Todo ello en un entorno natural que favorece la calma y la introspección.',
      'Los retiros incluyen enseñanzas sobre la práctica meditativa, tiempo para la reflexión personal y espacios de compartir en grupo. Se alternan períodos de silencio con momentos de diálogo consciente.',
      'Estas experiencias están diseñadas para profundizar en el autoconocimiento, desarrollar una práctica meditativa más sólida y experimentar los beneficios de la desconexión digital y el contacto con la naturaleza.'
    ],
    objectives: [
      'Profundizar en la práctica meditativa',
      'Experimentar los beneficios del silencio',
      'Desconectar de la tecnología y el ruido mental',
      'Conectar con la naturaleza',
      'Desarrollar mayor claridad mental',
      'Cultivar la paz interior y el equilibrio emocional'
    ],
    details: {
      dates: 'Próximo retiro: Primavera 2024',
      schedule: 'Fin de semana completo (viernes tarde a domingo mediodía)',
      location: 'Casa rural en entorno natural',
      capacity: 'Máximo 15 participantes',
      price: '350€ (incluye alojamiento y comidas)',
      targetAudience: 'Recomendado para personas con experiencia previa en meditación o que hayan participado en nuestros talleres de mindfulness.'
    },
    facilitatorIds: ['ana-martin'],
    status: 'upcoming'
  },
  {
    id: 'otras',
    title: 'Otras actividades',
    category: 'variadas',
    image: '/src/assets/images/otras_actividades.png',
    shortDescription: 'Descubre talleres, charlas y eventos especiales orientados a diferentes aspectos del bienestar emocional. Ofrecemos actividades puntuales sobre temas variados relacionados con la salud mental y el crecimiento personal.',
    fullDescription: 'Talleres, charlas y eventos especiales sobre salud mental y bienestar.',
    subtitle: 'Actividades complementarias para tu bienestar',
    content: [
      'Además de nuestras actividades regulares, organizamos eventos especiales, talleres temáticos y charlas informativas sobre diversos aspectos de la salud mental y el bienestar emocional.',
      'Estas actividades pueden incluir talleres de gestión emocional, charlas sobre psicoeducación, grupos de apoyo temáticos, talleres de escritura terapéutica, arteterapia, y más.',
      'Cada actividad está diseñada para abordar aspectos específicos del bienestar mental, ofreciendo herramientas prácticas y conocimientos que los participantes pueden aplicar en su vida diaria.',
      'Mantente informado sobre nuestras próximas actividades a través de nuestra web y redes sociales.'
    ],
    objectives: [
      'Ofrecer herramientas variadas para el bienestar',
      'Crear espacios de aprendizaje y crecimiento',
      'Fomentar la comunidad y el apoyo mutuo',
      'Abordar temas específicos de salud mental',
      'Promover la psicoeducación',
      'Complementar procesos terapéuticos'
    ],
    details: {
      dates: 'Consultar programación',
      schedule: 'Variable según actividad',
      location: 'CODA - Salud Mental Integral',
      capacity: 'Variable según actividad',
      price: 'Variable según actividad',
      targetAudience: 'Abierto al público general. Cada actividad especificará si hay requisitos particulares.'
    },
    facilitatorIds: [],
    status: 'variable'
  }
];

export const activityCategories = [
  { id: 'bienestar', name: 'Bienestar', color: 'var(--color-mindfulness)' },
  { id: 'corporal', name: 'Trabajo Corporal', color: 'var(--color-yoga)' },
  { id: 'terapeutico', name: 'Terapéutico', color: 'var(--color-trauma)' },
  { id: 'intensivos', name: 'Intensivos', color: 'var(--color-retiros)' },
  { id: 'variadas', name: 'Variadas', color: 'var(--color-otras)' }
];

export function getActivityById(id) {
  return activities.find(activity => activity.id === id);
}

export function getActivityWithFacilitators(id) {
  const activity = getActivityById(id);
  if (!activity) return null;
  
  return {
    ...activity,
    facilitators: getTeamMembersByIds(activity.facilitatorIds || [])
  };
}

export function getActivitiesByCategory(categoryId) {
  return activities.filter(activity => activity.category === categoryId);
}

export function getActiveActivities() {
  return activities.filter(activity => activity.status === 'active');
}

export function getUpcomingActivities() {
  return activities.filter(activity => activity.status === 'upcoming');
}