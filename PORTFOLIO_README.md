# Aayush Rajput - Product Manager Portfolio

A modern, professional portfolio website showcasing 5 years of product management experience across enterprise clients.

## 🎯 Overview

Clean single-page application built with React, featuring:
- Responsive design with mobile-first approach
- Smooth scroll navigation
- Modern SaaS aesthetic
- Professional color scheme (Navy + White + Electric Blue)

## 📂 Project Structure

```
/app/frontend/src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with smooth scroll
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── About.jsx           # About section with stats
│   ├── Projects.jsx        # Expandable project cards
│   ├── Skills.jsx          # Skills grid
│   ├── Timeline.jsx        # Career timeline
│   ├── Contact.jsx         # Contact section
│   └── Footer.jsx          # Footer with links
├── pages/
│   └── Home.jsx            # Main page component
├── mock.js                 # All portfolio data (TODO: Replace with real data)
├── App.js                  # Main app component
├── App.css                 # Custom styles
└── index.css               # Global styles with Inter font
```

## 🎨 Design Features

- **Typography:** Inter font family (professional, clean)
- **Color Scheme:** 
  - Primary: Dark Navy (#0a1628)
  - Accent: Electric Blue (#0ea5e9)
  - Background: White
- **Components:** Shadcn UI components (Card, Badge, Button, etc.)
- **Icons:** Lucide React (no emoji icons)
- **Animations:** Subtle hover effects and smooth transitions

## 📋 Sections

1. **Hero** - Headline, subheadline, 2 CTAs, quick stats
2. **About** - Summary, certifications, education, highlight stats
3. **Projects** - 4 enterprise case studies (expandable cards)
4. **Skills** - 4 categories with skill badges
5. **Timeline** - Career progression
6. **Contact** - Email, LinkedIn, Resume download
7. **Footer** - Quick links and social

## 🔧 Tech Stack

- React 19.0.0
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- React Router DOM

## 📝 Customization

To update portfolio content, edit `/app/frontend/src/mock.js`:

```javascript
export const portfolioData = {
  personal: { ... },
  hero: { ... },
  about: { ... },
  projects: [ ... ],
  skills: [ ... ],
  timeline: [ ... ]
}
```

## 🚀 Deployment

This is a static React application ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `yarn build`

## 📱 Mobile Responsive

- Hamburger menu on mobile
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## ✨ Interactive Features

- Smooth scroll navigation
- Expandable project cards
- Hover effects on all interactive elements
- Active section highlighting in navbar
- Mobile menu toggle

---

**Built with React & Tailwind CSS**
