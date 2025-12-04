# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

IT Developer Portfolio Template - Modern React-based portfolio website with light/dark theme support. Built with Vite, TypeScript, and Tailwind CSS v4.

Figma design: https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start dev server (port 3000, auto-opens browser)
- `npm run build` - Build for production (outputs to `build/`)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technology Stack

- **React 18.3.1** with TypeScript
- **Vite 6.3.5** with SWC plugin
- **Tailwind CSS v4** with custom design tokens
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **next-themes** for theme management
- **Lucide React** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navigation
│   ├── sections/      # Hero, Stats, About, Skills, Projects, Achievements, Experience, Blog, Contact
│   └── common/        # ProjectCard, SkillCard, ExperienceItem, StatCard, AchievementCard, BlogCard,
│                      # ContactInfoItem, SocialLink, FadeInSection, ImageWithFallback
├── contexts/          # ThemeContext (next-themes)
├── data/              # projects, skills, experiences, stats, achievements, blog, contact
├── types/             # TypeScript definitions
├── constants/         # navigation items
├── lib/               # utils (cn helper)
└── styles/            # globals.css (Tailwind v4 + CSS variables)
```

## Application Architecture

- Single-page application, all sections rendered in `App.tsx`
- Section order: Navigation → Hero → Stats → About → Skills → Projects → Achievements → Experience → Blog → Contact
- Theme management via `ThemeProvider` wrapping the entire app
- All content data separated in `data/` folder for easy customization

## Styling System

- Tailwind CSS v4 configured in `src/index.css` and `src/styles/globals.css`
- Custom CSS variables for light/dark themes
- Color palette: Emerald (primary), Slate (backgrounds/text), Blue (secondary)
- Theme switching via `.dark` class managed by next-themes
- Path alias: `@/` → `./src/`

## Component Patterns

**Sections**: Each has unique ID for navigation, consistent spacing (py-20), centered content with max-width containers

**Common Components**: Presentation-focused, accept typed props from data files

**Data Pattern**: All content in `data/` files imported by section components

## Attributions

Includes components from shadcn/ui (MIT license) and photos from Unsplash.
