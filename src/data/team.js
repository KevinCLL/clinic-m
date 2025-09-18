export const teamMembers = [
  {
    id: 'marta-sanchez',
    name: 'Marta Sánchez Llorens',
    role: 'Psiquiatra de adultos y perinatal',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'psiquiatria',
        name: 'Adultos',
        link: '/servicios/psiquiatria'
      },
      {
        id: 'perinatal',
        name: 'Perinatal',
        link: '/servicios/perinatal'
      },
      {
        id: 'mindfulness',
        name: 'Mindfulness',
        link: '/servicios/mindfulness'
      },
      {
        id: 'terapia-emdr',
        name: 'EMDR',
        link: '/servicios/emdr'
      }
    ]
  },
  {
    id: 'irene-saiz',
    name: 'Irene Saiz',
    role: 'Psicóloga clínica',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
      },
      {
        id: 'terapia-emdr',
        name: 'EMDR',
        link: '/servicios/emdr'
      },
      {
        id: 'infancia-adolescencia',
        name: 'Infanto-Juvenil',
        link: '/servicios/infancia-adolescencia'
      }
    ]
  },
  {
    id: 'elvira-garcia',
    name: 'Elvira García',
    role: 'Psicóloga clínica',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
      },
      {
        id: 'terapia-emdr',
        name: 'EMDR',
        link: '/servicios/emdr'
      }
    ]
  },
  {
    id: 'amparo-perez',
    name: 'Amparo Pérez Das',
    role: 'Psicóloga clínica',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'mindfulness',
        name: 'Mindfulness',
        link: '/servicios/mindfulness'
      }
    ]
  },
  {
    id: 'mara-descalzo',
    name: 'Mara Descalzo',
    role: 'Psiquiatra infantojuvenil',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'infancia-adolescencia',
        name: 'Infanto-Juvenil',
        link: '/servicios/infancia-adolescencia'
      }
    ]
  },
  {
    id: 'responsable-actividades',
    name: 'Responsable actividades',
    role: 'Coordinación de actividades',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      {
        id: 'actividades',
        name: 'Actividades',
        link: '/actividades'
      }
    ]
  }
];


export function getTeamMemberById(id) {
  return teamMembers.find(member => member.id === id);
}

export function getTeamMembersByIds(ids) {
  return ids.map(id => getTeamMemberById(id)).filter(Boolean);
}

export function getTeamMembersWithSpecialtyColors() {
  const specialtyColors = {
    'psiquiatria': 'var(--specialty-psiquiatria)',
    'psicologia-clinica': 'var(--specialty-psicologia-clinica)',
    'infancia-adolescencia': 'var(--specialty-infancia-adolescencia)',
    'perinatal': 'var(--specialty-perinatal)',
    'terapia-emdr': 'var(--specialty-emdr)',
    'mindfulness': 'var(--specialty-mindfulness)',
    'actividades': 'var(--secondary-600)'
  };

  return teamMembers.map(member => ({
    ...member,
    specialties: member.specialties.map(specialty => ({
      ...specialty,
      color: specialtyColors[specialty.id] || 'var(--primary-600)'
    }))
  }));
}