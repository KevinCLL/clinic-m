export const teamMembers = [
  {
    id: 'mara-descalzo',
    name: 'Mara Descalzo',
    role: 'Médica Psiquiatra',
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
    id: 'marta-sanchez',
    name: 'Dra. Marta Sánchez Llorens',
    role: 'Médica Psiquiatra',
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
      }
    ]
  },
  {
    id: 'elvira-garcia',
    name: 'Elvira García',
    role: 'Psicóloga Clínica',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      { 
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
      }
    ]
  },
  {
    id: 'irene-saiz',
    name: 'Irene Saiz',
    role: 'Psicóloga Clínica',
    image: '/src/assets/images/unknown.jpg',
    specialties: [
      { 
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
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
    'mindfulness': 'var(--specialty-mindfulness)'
  };

  return teamMembers.map(member => ({
    ...member,
    specialties: member.specialties.map(specialty => ({
      ...specialty,
      color: specialtyColors[specialty.id] || 'var(--primary-600)'
    }))
  }));
}