# ONLYHOCKEY Project Context & Conventions

## 🏒 Project Overview
**ONLYHOCKEY** is a Next.js 15.4.7 hockey community platform that connects hockey enthusiasts through interactive content, challenges, and community features.

- **Domain**: onlyhockey.com
- **Target Audience**: Hockey fans, players, coaches, enthusiasts
- **Core Mission**: Build the greatest hockey community through shared passion, knowledge, and motivation

## 🏗️ Technical Architecture

### Framework & Dependencies
- **Next.js**: 15.4.7 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x (strict mode enabled)
- **Tailwind CSS**: 4.x (with PostCSS)
- **Framer Motion**: 12.23.12 (animations)
- **ESLint**: 9.x with Next.js core web vitals

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with card sections
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── DisplayCard.tsx    # Main content cards
│   ├── InteractiveCard.tsx # Animation wrapper
│   ├── FunButton.tsx      # Interactive buttons
│   ├── StickyNavbar.tsx   # Navigation
│   ├── SEOHead.tsx        # SEO component (legacy)
│   └── SectionMetadata.tsx # Section-specific metadata
```

## 🎨 Design System & Conventions

### Color Scheme
- **Primary**: Red (#dc2626) - Hockey passion
- **Background**: White (#ffffff) - Clean, professional
- **Text**: Black (#000000) - High contrast
- **Accent**: Neutral grays for subtle elements

### Typography
- **Font Family**: Geist (Sans & Mono variants)
- **Font Variables**: `--font-geist-sans`, `--font-geist-mono`
- **Heading Scale**: 3xl → 4xl → 5xl (responsive)
- **Body Text**: lg → xl (responsive)

### Component Patterns
- **Motion**: All interactive elements use Framer Motion
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Focus states, semantic HTML, ARIA support
- **Performance**: Image optimization, lazy loading, viewport animations

## 📱 Content Organization

### Main Sections (Cards)
1. **Greetings** (`#greetings`) - Welcome & overview
2. **Heart** (`#heart`) - Community & sharing
3. **Challenge** (`#challenge`) - Knowledge quizzes
4. **Motivate** (`#motivate`) - Wisdom & inspiration
5. **Experts** (`#experts`) - Professional insights

### Content Structure
- **Title**: Large, bold, centered
- **Subtitle**: Descriptive, supporting text
- **Description**: Bullet points with emojis
- **Image**: Optimized WebP format
- **CTA Button**: Interactive, animated

## 🔍 SEO & Metadata Strategy

### Structured Data
- **Organization Schema**: SportsOrganization type
- **Article Schema**: Section-specific content
- **Rich Snippets**: Open Graph, Twitter Cards
- **Canonical URLs**: Proper URL structure

### Meta Tags
- **Keywords**: Hockey-specific, community-focused
- **Social Media**: Optimized for sharing
- **Verification**: Google, Yandex, Yahoo (placeholders)
- **Robots**: Full indexing enabled

### Image Optimization
- **Format**: WebP for performance
- **Sizes**: Responsive with proper `sizes` attribute
- **Priority**: First image gets priority loading
- **Quality**: 85% for balance of quality/size

## 🎭 Animation & Interactions

### Framer Motion Patterns
- **Entrance**: `initial` → `whileInView` with delays
- **Hover**: Subtle scale and shadow effects
- **Scroll**: Sticky navbar with backdrop blur
- **Performance**: `viewport={{ once: true }}` for efficiency

### Animation Timing
- **Base Delay**: 0.2s increments between sections
- **Duration**: 0.6s for main animations, 0.2s for hover
- **Easing**: "easeOut" for natural feel

## 🧩 Component Architecture

### DisplayCard Component
- **Props**: Flexible interface with defaults
- **Conditional Rendering**: Section-specific features
- **Responsive Design**: Aspect ratios and sizing
- **SEO Integration**: Structured data injection

### InteractiveCard Wrapper
- **Purpose**: Consistent animation behavior
- **Props**: Children, className, delay
- **Effects**: Hover lift, entrance animations

### StickyNavbar
- **Behavior**: Appears after 120px scroll
- **Transitions**: Smooth show/hide with backdrop
- **Navigation**: Anchor links to sections
- **Mobile**: Hamburger menu (incomplete)

## 📊 Performance Considerations

### Build Optimization
- **Bundle Size**: 146kB First Load JS
- **Static Generation**: All pages pre-rendered
- **Code Splitting**: Automatic chunk optimization
- **Image Optimization**: Next.js Image component

### Runtime Performance
- **Lazy Loading**: Viewport-based animations
- **Event Handling**: Efficient scroll listeners
- **Memory Management**: Proper cleanup in useEffect

## 🚀 Development Workflow

### Scripts
- `npm run dev` - Development with Turbopack
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint checking

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js + TypeScript rules
- **Prettier**: Not configured (consider adding)
- **Husky**: Not configured (consider adding)

## 🔧 Configuration Files

### TypeScript
- **Target**: ES2017
- **Module Resolution**: Bundler (Next.js)
- **Paths**: `@/*` alias for src directory
- **Strict**: Full type checking enabled

### Next.js
- **Config**: Minimal configuration
- **Features**: App Router, Image optimization
- **Performance**: Automatic optimizations

### Tailwind CSS
- **Version**: 4.x (latest)
- **PostCSS**: Integrated with Next.js
- **Customization**: Minimal (consider extending)

## 📝 Content Management

### Static Content
- **Location**: Hardcoded in components
- **Structure**: JavaScript objects/arrays
- **Localization**: English only (consider i18n)
- **Updates**: Manual code changes required

### Dynamic Features
- **User Interaction**: Console logging (placeholder)
- **Data Persistence**: None implemented
- **API Integration**: None implemented
- **Authentication**: None implemented

## 🎯 Future Development Priorities

### Immediate Needs
1. **Mobile Menu**: Complete hamburger functionality
2. **Button Actions**: Implement actual functionality
3. **Content Management**: Dynamic content system
4. **User Authentication**: Community features

### Technical Improvements
1. **Testing**: Unit and integration tests
2. **Error Boundaries**: React error handling
3. **Performance Monitoring**: Core Web Vitals
4. **Accessibility**: WCAG compliance audit

### Feature Expansion
1. **Quiz System**: Interactive hockey knowledge tests
2. **User Profiles**: Community member management
3. **Content Creation**: User-generated content
4. **Social Features**: Comments, likes, sharing

## 🚨 Important Notes

### Current Limitations
- **Static Content**: All content is hardcoded
- **No Backend**: Pure frontend application
- **Placeholder Data**: Fake message counts, etc.
- **Incomplete Features**: Mobile menu, button actions

### Design Decisions
- **Single Page**: All content on homepage
- **Card Layout**: Consistent visual hierarchy
- **Hockey Theme**: Red color scheme, sports imagery
- **Community Focus**: Emphasis on connection and sharing

### Technical Debt
- **SEO Component**: Unused SEOHead component
- **Hardcoded URLs**: Domain references throughout
- **Magic Numbers**: Animation delays, scroll thresholds
- **Error Handling**: Minimal error boundaries

## 🔄 Maintenance & Updates

### Regular Tasks
- **Dependency Updates**: Monthly security patches
- **Performance Monitoring**: Lighthouse audits
- **Content Updates**: Seasonal hockey content
- **SEO Optimization**: Keyword research and updates

### Deployment
- **Platform**: Vercel (recommended)
- **Environment**: Production and staging
- **Monitoring**: Performance and error tracking
- **Backups**: Version control and database dumps

---

**Last Updated**: December 2024  
**Version**: 0.1.0  
**Maintainer**: Development Team  
**Documentation**: This file serves as the single source of truth for project context and conventions.
