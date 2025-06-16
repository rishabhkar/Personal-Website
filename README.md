# Personal-Website

This repository contains the source code for my personal, story-driven portfolio website, built with React and Vite. The site is inspired by Squarespace's modern portfolio templates and features:

- Scroll-driven, visually engaging design with smooth background and section transitions (framer-motion)
- Fully static, optimized for deployment on GitHub Pages
- Responsive layout for desktop, tablet, and mobile
- Modular, maintainable code using React functional components, hooks, and styled-components
- Dedicated sections for SAP experience, the SAP Buying 360 project, skills, and contact information
- Placeholders for images and content, easily replaceable for future updates

## Sections
- **Landing Page**: Animated headline, subtitle, and background image placeholder
- **Professional Experience at SAP**: Animated bullet points and brief intro
- **SAP Buying 360 Project**: Narrative, visuals, and proper image sourcing
- **Skills & Technologies**: Animated progress bars for skill levels
- **Contact Page**: Clean, clickable contact info and social links

## Image Sources
- Buying 360-1.jpg, Buying 360-2.jpg: [SAP News](https://news.sap.com/2023/05/buying-360-capability-personalization-predictive-sustainable-recommendations/)
- Buying 360-3.png: [Medium](https://medium.com/@socialmedia_39333/the-future-of-buying-next-gen-procurement-a63b07b7a75c)

## Deployment (GitHub Pages)
1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to GitHub Pages (use [vite-plugin-gh-pages](https://www.npmjs.com/package/vite-plugin-gh-pages) or your preferred method).

## Updating Placeholders & Content
- **Images**: Replace files in `public/assets/` with your own visuals. Update references in the components as needed.
- **Text Content**: Edit the relevant components in `src/components/` to update section text, bullet points, and links.
- **Styling**: Modify or extend styled-components in each section for custom visuals.

## Maintenance
- All code is modular and clearly commented for ease of updates.
- The `Documentation/` folder is excluded from the repository via `.gitignore`.

---

For more details or to contribute, please contact [rishabh-kar@outlook.com](mailto:rishabh-kar@outlook.com).
