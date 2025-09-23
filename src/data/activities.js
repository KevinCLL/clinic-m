import { getTeamMembersByIds } from './team.js';

export const activities = [
  {
    id: 'yoga',
    title: 'YOGA',
    category: 'corporal',
    image: '/src/assets/images/yoga.jpg',
    shortDescription: 'Una herramienta complementaria que combina posturas, respiración y meditación para trabajar conjuntamente el cuerpo, la mente y las emociones. Ofrecemos diferentes modalidades adaptadas a cada persona.',
    fullDescription: 'Herramienta complementaria que combina posturas corporales, técnicas de respiración, relajación y meditación.',
    subtitle: 'YOGA',
    content: [
      'Desde un enfoque integrador, la práctica de Yoga puede potenciar los resultados positivos de diferentes intervenciones médicas o psicológicas, abordando aspectos como la conexión cuerpo-mente, la gestión del estrés y el bienestar general. Se consolida como una herramienta complementaria que combina posturas corporales, técnicas de respiración, relajación y meditación, que permiten trabajar conjuntamente el cuerpo, la mente, las emociones, la escucha, el autoconocimiento y el autocuidado.',
      'El yoga es para todas las personas que deseen experimentar volver a su centro. En este espacio, te ofrecemos la oportunidad de apreciar desde tu autenticidad un proceso único, partiendo de tus necesidades y posibilidades; un camino en el que irás transitando la evolución que te permitas, respetando siempre tus tiempos.',
      'Partiendo de este propósito, las sesiones serán inclusivas, adaptadas, respetuosas, amables y sensibles. Serán un lugar de encuentro, de introspección, de calma, con la intención de generar un bonito compartir, en el que todos y todas seremos aprendices y maestras.',
      'Con este espíritu, ofrecemos diferentes grupos que responden a las distintas etapas, realidades y necesidades de cada persona:',
      '• <strong>Yoga adaptado</strong>, orientado a quienes requieren prácticas más accesibles y personalizadas, respetando la movilidad, el ritmo y las condiciones particulares de cada cuerpo.',
      '• <strong>Yoga sensible al trauma</strong>, un espacio cuidado y respetuoso que favorece la autorregulación, el autocuidado y la conexión con el presente, con prácticas suaves y seguras que acompañan procesos de recuperación emocional.',
      '• <strong>Yoga para niños</strong>, en el que, mediante el juego y la creatividad, los más pequeños aprenden a reconocer y gestionar sus emociones, desarrollar la concentración y disfrutar del movimiento con alegría.',
      '• <strong>Yoga general</strong>, abierto a todas las personas que deseen profundizar en la práctica, equilibrando cuerpo y mente, liberando tensiones y fortaleciendo el bienestar en la vida cotidiana.'
    ],
    targetAudience: 'Dirigido a todas las personas que deseen experimentar volver a su centro, independientemente de su nivel de experiencia o condición física. Las sesiones se adaptan a las necesidades individuales, respetando los tiempos y posibilidades de cada participante.',
    responsableIds: ['responsable-actividades'],
    status: 'active'
  },
  {
    id: 'yoga-trauma',
    title: 'YOGA SENSIBLE AL TRAUMA',
    category: 'terapeutico',
    image: '/src/assets/images/yoga_sensible.jpg',
    shortDescription: 'Un espacio seguro y respetuoso donde lo central es la posibilidad de elegir, escuchar y sentir el propio cuerpo en el momento presente.',
    fullDescription: 'Un espacio terapéutico y compasivo donde el yoga se convierte en una herramienta de acompañamiento.',
    subtitle: 'YOGA SENSIBLE AL TRAUMA',
    content: [
      'Es una práctica especialmente diseñada para acompañar a personas que han vivido experiencias difíciles, de estrés crónico o situaciones traumáticas. A diferencia de otras formas de yoga, aquí lo central no es la forma externa de la postura, sino la posibilidad de elegir, de escuchar y de sentir el propio cuerpo en el momento presente. En este espacio se cuidan aspectos como:',
      'o    <strong>Seguridad y confianza</strong>: se propone un ambiente respetuoso, predecible y amable, donde cada persona puede explorar sin exigencias.',
      'o    <strong>Elección y autonomía</strong>: cada propuesta es una invitación, no una instrucción rígida, lo que permite recuperar la sensación de control sobre el propio cuerpo y sus límites.',
      'o    <strong>Conexión con el presente</strong>: a través de movimientos suaves, respiración consciente y prácticas de atención, se fomenta volver poco a poco al "aquí y ahora".',
      'o    <strong>Autorregulación y autocuidado</strong>: las sesiones ayudan a reconocer las señales internas y a cultivar recursos para gestionar emociones, tensión o ansiedad.',
      'Más que una técnica, es un espacio terapéutico y compasivo, donde el yoga se convierte en una herramienta de acompañamiento y de reencuentro con uno mismo.'
    ],
    targetAudience: 'Dirigido a personas que han experimentado trauma y buscan reconectar con su cuerpo de forma segura. Es recomendable estar en proceso terapéutico o haber completado un proceso previo.',
    responsableIds: ['responsable-actividades'],
    status: 'active'
  },
  {
    id: 'mindfulness',
    title: 'GRUPOS DE MINDFULNESS',
    category: 'bienestar',
    image: '/src/assets/images/grupos_mindfulness.jpg',
    shortDescription: 'Entrenar la capacidad de estar presentes con apertura y amabilidad. El acompañamiento grupal potencia los beneficios y crea un espacio de aprendizaje compartido.',
    fullDescription: 'Práctica que entrena la capacidad de estar presentes con apertura, curiosidad y amabilidad.',
    subtitle: 'GRUPOS DE MINDFULNESS',
    content: [
      'El mindfulness o atención plena es una práctica que nos invita a entrenar la capacidad de estar presentes, cultivando una actitud de apertura, curiosidad y amabilidad hacia lo que ocurre en nuestro interior y a nuestro alrededor. No se trata de "dejar la mente en blanco", sino de aprender a observar con conciencia nuestros pensamientos, emociones y sensaciones, sin juzgarlas y sin reaccionar de manera automática.',
      'Practicar mindfulness en grupo potencia sus beneficios, ya que el acompañamiento mutuo crea un espacio de confianza, motivación y aprendizaje compartido. Cada persona transita su propio camino, pero el grupo se convierte en un lugar de sostén donde compartir la experiencia y enriquecerse de la diversidad de miradas.',
      'Entre los beneficios más destacados de la práctica de mindfulness se encuentran:',
      '•    Reducción del estrés y la ansiedad.',
      '•    Mejora de la concentración y la claridad mental.',
      '•    Mayor regulación emocional y capacidad de autocuidado.',
      '•    Incremento de la resiliencia y la autocompasión.',
      '•    Desarrollo de la conexión cuerpo–mente y del bienestar general.',
      'Los grupos de mindfulness ofrecen una oportunidad para detener el ritmo, encontrar calma y entrenar recursos que luego pueden aplicarse a la vida cotidiana, mejorando la manera en que nos relacionamos con nosotros mismos, con los demás y con los desafíos del día a día.'
    ],
    targetAudience: 'Dirigido a cualquier persona interesada en aprender técnicas de mindfulness, ya sea para mejorar su bienestar general, gestionar situaciones de estrés o ansiedad, o complementar un proceso terapéutico. No se requiere experiencia previa.',
    responsableIds: ['responsable-actividades'],
    status: 'active'
  },
  {
    id: 'retiros',
    title: 'RETIROS DE YOGA Y MEDITACIÓN',
    category: 'intensivos',
    image: '/src/assets/images/retiros.jpg',
    shortDescription: 'Momentos de autocuidado consciente en entornos naturales. Una oportunidad para aprender recursos que podrás integrar en tu vida diaria.',
    fullDescription: 'Momentos diseñados para cuidar la salud mental, descansar la mente y renovar el cuerpo.',
    subtitle: 'RETIROS DE YOGA Y MEDITACIÓN',
    content: [
      'Los retiros son una invitación a detener la rutina y abrir un espacio de pausa, silencio y conexión profunda. Son momentos diseñados para cuidar la salud mental, descansar la mente y darle al cuerpo la posibilidad de moverse, soltar y renovarse.',
      'A través de la práctica de yoga, la meditación y otras dinámicas de autoconocimiento, buscamos favorecer la integración entre mente y cuerpo, creando un ambiente seguro donde cada persona pueda escucharse, reconocer sus necesidades y atenderse con respeto y amabilidad.',
      'Más allá de una experiencia puntual, un retiro se convierte en un tiempo de autocuidado consciente, en el que aprenderás recursos que podrás llevar contigo a tu vida diaria: prácticas de respiración, técnicas de relajación, herramientas para gestionar el estrés y formas sencillas de cultivar el bienestar en lo cotidiano.',
      'Es un espacio para volver al centro, compartir con otros desde la autenticidad y, al mismo tiempo, regalarte la oportunidad de estar contigo mismo de una manera distinta: con calma, presencia y compasión.'
    ],
    targetAudience: 'Recomendado para personas que buscan un espacio de pausa y conexión profunda. Abierto a todas las personas, tanto principiantes como quienes ya tienen experiencia en yoga o meditación.',
    responsableIds: ['responsable-actividades'],
    status: 'upcoming'
  }
];

export const activityCategories = [
  { id: 'bienestar', name: 'Bienestar', color: 'var(--color-mindfulness)' },
  { id: 'corporal', name: 'Trabajo Corporal', color: 'var(--color-yoga)' },
  { id: 'terapeutico', name: 'Terapéutico', color: 'var(--color-trauma)' },
  { id: 'intensivos', name: 'Intensivos', color: 'var(--color-retiros)' }
];

export function getActivityById(id) {
  return activities.find(activity => activity.id === id);
}

export function getActivityWithResponsables(id) {
  const activity = getActivityById(id);
  if (!activity) return null;

  return {
    ...activity,
    responsables: getTeamMembersByIds(activity.responsableIds || [])
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