# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Guidelines

**NEVER add comments to the code under any circumstances. The code should be self-explanatory.**

## Project Overview

This is a static Vue 3 website built with Vite for a mental health clinic (Clínica M):
- Static public-facing website
- Vue Router for navigation
- Pinia for state management  
- Element Plus UI components
- Tailwind CSS for styling

## Common Development Commands

**NEVER run dev, build, deploy or preview commands. The application is always running.**

```bash
# Install dependencies (only if explicitly requested)
npm install

# Run ESLint with auto-fix
npm run lint

# Format code with Prettier
npm run format
```

## Architecture Overview

### Frontend Structure
- **Vue 3 + Vite**: Modern Vue setup with composition API
- **Static Site**: No backend or admin functionality
- **Router**: Client-side routing for different sections
- **State Management**: Pinia stores in `src/stores/`
- **Layout**: MainLayout wraps all public pages

### Key Directories
- `src/views/public/`: All website pages (home, services, activities, contact)
- `src/components/`: Reusable Vue components
- `src/router/`: Route definitions
- `src/stores/`: Pinia stores for state management

### Views Overview
- **HomeView.vue**: Landing page with hero section, introduction to mental health services
- **QuienesSomos.vue**: About us page - team and clinic information
- **QueOfrecemos.vue**: Services offered - list of specialties and treatments
- **Actividades.vue**: Activities listing - workshops, groups, and events
- **ActividadDetalle.vue**: Individual activity detail page
- **ServicioDetalle.vue**: Individual service detail page
- **NuestroEspacio.vue**: Our space - clinic facilities and environment
- **Contacto.vue**: Contact page with form and clinic information

### Component Development Guidelines
- **Maintain consistent style**: All components must follow the same visual patterns and Tailwind classes
- **Component reusability**: ALWAYS check if a component already exists before creating a new one
- **DRY principle**: If you need to repeat UI elements, create a reusable component
- **Check existing components**:
  - Button.vue - Reusable button component
  - ContactForm.vue - Contact form component
  - ContactSection.vue - Contact information section
  - AreaIntervencion.vue - Intervention area display
  - InfoComponent.vue - General information display
  - NavBar.vue - Navigation bar
  - FooterComponent.vue - Footer component

### Routing Strategy
- All routes use MainLayout with navigation header/footer
- Smooth scroll behavior with hash navigation support
- 404 handling redirects to home page

### Deployment
- Production base path: `/clinic-m/` (GitHub Pages)
- Development runs on port 7777
- Uses gh-pages package for deployment
- Fully static - no server-side functionality needed