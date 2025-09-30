export const teamMembers = [
  {
    id: 'marta-sanchez',
    name: 'Marta Sánchez',
    role: 'Directora de CODA. Médica Psiquiatra y psicoterapeuta',
    image: '/unknown.jpg',
    specialties: [
      {
        id: 'psiquiatria',
        name: 'Psiquiatría',
        link: '/servicios/psiquiatria'
      },
      {
        id: 'terapia-emdr',
        name: 'Terapia EMDR',
        link: '/servicios/terapia-emdr'
      },
      {
        id: 'mindfulness',
        name: 'Mindfulness',
        link: '/servicios/mindfulness'
      },
      {
        id: 'perinatal',
        name: 'Perinatal',
        link: '/servicios/perinatal'
      }
    ]
  },
  {
    id: 'mara-descalzo',
    name: 'Mara Descalzo',
    role: 'Médica Psiquiatra y psicoterapeuta',
    image: '/unknown.jpg',
    specialties: [
      {
        id: 'psiquiatria',
        name: 'Psiquiatría',
        link: '/servicios/psiquiatria'
      },
      {
        id: 'infancia-adolescencia',
        name: 'Infancia y Adolescencia',
        link: '/servicios/infancia-adolescencia'
      }
    ]
  },
  {
    id: 'elvira-garcia',
    name: 'Elvira García',
    role: 'Psicóloga clínica',
    image: '/unknown.jpg',
    specialties: [
      {
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
      },
      {
        id: 'terapia-emdr',
        name: 'Terapia EMDR',
        link: '/servicios/terapia-emdr'
      }
    ]
  },
  {
    id: 'irene-saiz',
    name: 'Irene Saiz',
    role: 'Psicóloga clínica',
    image: '/unknown.jpg',
    specialties: [
      {
        id: 'psicologia-clinica',
        name: 'Psicología Clínica',
        link: '/servicios/psicologia-clinica'
      },
      {
        id: 'infancia-adolescencia',
        name: 'Infancia y Adolescencia',
        link: '/servicios/infancia-adolescencia'
      },
      {
        id: 'terapia-emdr',
        name: 'Terapia EMDR',
        link: '/servicios/terapia-emdr'
      }
    ]
  },
  {
    id: 'responsable-actividades',
    name: 'Ana González',
    role: 'Profesora de yoga y meditación',
    image: '/unknown.jpg',
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
    'terapia-emdr': 'var(--specialty-emdr)',
    'mindfulness': 'var(--specialty-mindfulness)',
    'perinatal': 'var(--specialty-perinatal)',
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
