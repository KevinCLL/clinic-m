# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Guidelines

**NEVER add comments to the code under any circumstances. The code should be self-explanatory.**

## Project Overview

CODA - Salud Mental Integral is a Vue 3 website for a mental health clinic in Valencia, Spain. The site includes:
- Public-facing static website with information about services and activities
- Basic admin panel with authentication for content management
- Vue Router for navigation
- Pinia for state management
- Tailwind CSS v4 for styling
- Custom theming with teal/purple color palette

## Common Development Commands

**NEVER run dev, build, deploy or preview commands. The application is always running.**

```bash
# Install dependencies (only if explicitly requested)
npm install

# Run ESLint with auto-fix
npm run lint

# Format code with Prettier
npm run format

# Image optimization utilities
npm run resize:images
npm run images:full
```

## Architecture Overview

### Frontend Structure
- **Vue 3 + Vite**: Modern Vue setup with Composition API
- **Dual Layout System**:
  - MainLayout for public pages (with SiteHeader and SiteFooter)
  - AdminLayout for admin pages
- **Router**: Client-side routing with authentication guards
- **State Management**: Pinia stores in `src/stores/` (auth store)
- **Data Layer**: Static data files in `src/data/` for services, activities, team, contact info

### Key Directories
- `src/views/public/`: Public website pages
- `src/views/admin/`: Admin panel pages (LoginView, AdminDashboard, EditarContenido)
- `src/components/`: Reusable Vue components
  - `src/components/layout/`: Layout components (SiteHeader, SiteFooter)
- `src/router/`: Route definitions with auth guards
- `src/stores/`: Pinia stores (auth)
- `src/services/`: API services (api.js, authService.js, clinicInfoService.js)
- `src/data/`: Static data files (activities.js, services.js, team.js, contactInfo.js)
- `src/styles/`: Global styles (theme.css, plant-animations.css)
- `src/assets/`: Images and static assets

### Public Views Overview
- **HomeView.vue**: Landing page with hero section, clinic philosophy, featured services
- **QuienesSomos.vue**: About page - team members with specialties
- **QueOfrecemos.vue**: Services catalog with intervention areas
- **Actividades.vue**: Activities listing (yoga, mindfulness, retreats)
- **ActividadDetalle.vue**: Individual activity detail page
- **ServicioDetalle.vue**: Individual service detail page with FAQs
- **NuestroEspacio.vue**: Clinic space and facilities
- **Contacto.vue**: Contact page with form (uses FormSubmit.co) and location map

### Admin Views Overview
- **LoginView.vue**: Admin authentication page
- **AdminDashboard.vue**: Admin dashboard with section management
- **EditarContenido.vue**: Content editing interface

### Core Components
- **Button.vue**: Reusable button with multiple variants (primary, outline-teal, etc.)
- **ContactForm.vue**: Contact form with FormSubmit.co integration
- **ContactSection.vue**: Reusable contact information display
- **SectionHeader.vue**: Page section header with background image support
- **TeamCard.vue**: Team member card with specialties
- **AreaIntervencion.vue**: Intervention area display component
- **InfoComponent.vue**: General information display
- **SiteHeader.vue**: Main navigation header with sticky behavior, mobile menu
- **SiteFooter.vue**: Footer with contact info and quick links

### Data Structure
- **services.js**: Mental health services (psychiatry, clinical psychology, EMDR, mindfulness, perinatal, child/adolescent)
- **activities.js**: Clinic activities (yoga, trauma-sensitive yoga, mindfulness groups, retreats)
- **team.js**: Team members with their specialties
- **contactInfo.js**: Contact details, address, schedule, social media

### Routing Strategy
- Public routes wrapped in MainLayout
- Admin routes wrapped in AdminLayout with authentication guards
- Route-level code splitting for better performance
- Smooth scroll behavior with hash navigation support
- 404 handling redirects to home page
- Admin routes protected with `requiresAuth` meta field

### Authentication & API
- JWT-based authentication stored in localStorage
- Axios instance with request/response interceptors
- Automatic token injection in API calls
- 401 handling with automatic redirect to login
- Auth guard in router beforeEach hook

### Styling & Theming
- **Tailwind CSS v4** with custom configuration
- **Custom CSS Variables** in theme.css:
  - Primary color: Teal (`--teal-*` shades)
  - Secondary color: Purple (`--purple-*` shades)
  - Specialty colors for different services
  - Typography: Faculty Glyphic (base), Overlock SC (headings)
- **Plant Animations**: Decorative plant images with subtle sway animations
- **Responsive Design**: Mobile-first approach with md/lg breakpoints

### Design Patterns
- **Composition API**: All components use `<script setup>`
- **Component Reusability**: Prefer editing existing components over creating new ones
- **Consistent Styling**: Use existing Tailwind classes and CSS variables
- **Page Transitions**: Smooth fade/slide transitions between routes
- **Lazy Loading**: Route-level code splitting with dynamic imports

### Contact Form Integration
- Uses FormSubmit.co for serverless form handling
- Configured to send emails to info@codasaludmental.es
- Auto-close with custom background color
- No backend required

### Deployment
- Production base path: `/` (root)
- Development runs on port 7777
- Uses gh-pages package for deployment
- Static site with client-side routing
- Image optimization in production builds