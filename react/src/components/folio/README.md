# GSAP Folio - Interactive Portfolio

A modern, interactive portfolio built with React, Next.js, and GSAP animations, inspired by the original [ayush013/folio](https://github.com/ayush013/folio) repository.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 15 and TypeScript
- **GSAP Animations**: Smooth, performant animations using GreenSock Animation Platform
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, scroll-triggered animations, and smooth transitions
- **Component-Based**: Each section is organized in its own folder following React best practices
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 📁 Project Structure

```
src/components/folio/
├── FolioLayout/          # Main layout wrapper
├── FolioHeader/          # Navigation header
├── FolioFooter/          # Footer with social links
├── FolioHero/            # Hero section with typed animation
├── FolioProjects/        # Projects showcase
├── FolioSkills/          # Skills section with animated icons
├── FolioTimeline/        # Career timeline
├── FolioAbout/           # About section
├── FolioQuote/           # Quote section
├── FolioCollaboration/   # Collaboration section
├── FolioContact/         # Contact form
├── FolioButton/          # Reusable button component
├── FolioProjectTile/     # Project card component
├── FolioCursor/          # Custom cursor
├── FolioProgressIndicator/ # Scroll progress bar
├── utils/                # Utility functions
│   ├── gsap.ts          # GSAP utilities
│   └── animations.ts    # Animation presets
└── constants.ts          # Data and configuration
```

## 🎨 Sections

### 1. Hero Section
- Animated greeting and title
- Typed.js integration for dynamic text
- Social media links
- Call-to-action buttons

### 2. Projects Section
- Interactive project tiles with tilt effects
- Hover animations and transitions
- Project filtering and categorization
- External links to live demos

### 3. Skills Section
- Categorized skill display
- Animated skill icons
- Hover effects with tooltips
- Progressive reveal animations

### 4. Timeline Section
- Career milestones and achievements
- Branching timeline design
- Scroll-triggered animations
- Interactive checkpoints

### 5. About Section
- Personal introduction
- Animated statistics counter
- Code-style visual representation
- Skills tags

### 6. Quote Section
- Inspirational messaging
- Decorative patterns
- Parallax background effects

### 7. Collaboration Section
- Scrolling text animations
- Call-to-action elements
- Feature highlights

### 8. Contact Section
- Contact form with validation
- Social media integration
- Interactive elements

## 🛠 Technologies Used

- **React 19** - UI library
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Typed.js** - Text typing animation
- **Vanilla Tilt** - 3D tilt effects

## 🎯 Key Features

### Animations
- Scroll-triggered animations using GSAP ScrollTrigger
- Smooth page transitions
- Hover and interaction effects
- Parallax scrolling
- Stagger animations for lists

### Performance
- Optimized GSAP animations
- Lazy loading for images
- Efficient re-renders
- Smooth 60fps animations

### Accessibility
- Keyboard navigation
- Screen reader support
- Proper semantic HTML
- Focus management

## 🚀 Getting Started

1. Navigate to the React project:
   ```bash
   cd react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Visit the folio page:
   ```
   http://localhost:3000/folio
   ```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The color scheme uses Tailwind CSS classes and can be customized in the components or by modifying the Tailwind configuration.

### Content
Update the `constants.ts` file to modify:
- Personal information
- Project data
- Skills list
- Timeline events
- Social media links

### Animations
Modify animation settings in `utils/animations.ts` and `utils/gsap.ts`.

## 📄 License

This project is inspired by the original folio by Ayush Singh and is built for educational purposes.

## 🙏 Acknowledgments

- Original design inspiration from [ayush013/folio](https://github.com/ayush013/folio)
- GSAP for amazing animation capabilities
- React and Next.js communities for excellent documentation
