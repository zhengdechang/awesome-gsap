# Awesome GSAP Examples

A comprehensive collection of GSAP (GreenSock Animation Platform) examples implemented across three different frontend frameworks: Vanilla HTML/JS, React, and Vue.js.

## 🎯 Project Overview

This project demonstrates how to implement the same GSAP animations using different frontend frameworks, showcasing best practices and framework-specific patterns for each approach.

## 📁 Project Structure

```
awesome-gsap/
├── html/                 # Vanilla HTML/CSS/JavaScript examples
├── react/                # React-based GSAP examples
├── vue/                  # Vue.js-based GSAP examples
└── README.md            # This file
```

## 🚀 Animation Examples Included

Each framework implementation includes the following GSAP animation examples:

### Basic Animations

- **Simple Tweens** - Basic property animations (position, scale, rotation)
- **Timeline Sequences** - Coordinated animation sequences
- **Easing Functions** - Various easing and timing demonstrations

### Advanced Animations

- **ScrollTrigger** - Scroll-based animations and parallax effects
- **Morphing & Paths** - SVG path morphing and drawing animations
- **Physics Animations** - Realistic physics-based movements
- **Interactive Animations** - Mouse/touch-triggered animations
- **Complex Sequences** - Multi-element choreographed animations

### Special Effects

- **Text Animations** - Character and word-level text effects
- **Image Effects** - Photo galleries and image transitions
- **Loading Animations** - Creative loading indicators
- **Navigation Animations** - Animated menus and transitions

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd awesome-gsap
   ```

2. **Choose your framework and follow the specific setup instructions:**

   - **HTML/Vanilla JS**: Navigate to `html/` directory and open `index.html` in your browser
   - **React (Next.js)**: Navigate to `react/` directory and run `npm install && npm run dev` (opens on http://localhost:3000)
   - **Vue 3**: Navigate to `vue/` directory and run `npm install && npm run dev` (opens on http://localhost:5173)

3. **System Requirements**:
   - **HTML**: Any modern web browser
   - **React**: Node.js 18+
   - **Vue**: Node.js 22+ (required for latest Vite compatibility)

## 📚 Framework-Specific Documentation

Each framework directory contains its own README with detailed setup instructions and framework-specific considerations:

- [HTML/Vanilla JS Documentation](./html/README.md)
- [React Documentation](./react/README.md)
- [Vue.js Documentation](./vue/README.md)

## 🎨 GSAP Features Demonstrated

- **Core GSAP Library** - Basic tweening and timeline functionality
- **ScrollTrigger Plugin** - Scroll-based animations
- **MotionPath Plugin** - Path-following animations
- **TextPlugin** - Text animation effects
- **MorphSVG Plugin** - SVG morphing (requires GSAP membership)
- **Physics2D Plugin** - Physics-based animations (requires GSAP membership)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GreenSock (GSAP)](https://greensock.com/) for the amazing animation library
- The frontend community for framework-specific best practices
- Contributors and maintainers of React and Vue.js

## 🚀 Vercel 部署

这个项目已经配置好了 Vercel 部署，可以一键部署到 Vercel 平台：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录并部署
vercel login
vercel --prod
```

部署后可以通过以下路径访问：

- **[/folio](https://awesome-gsap.vercel.app/folio)** - Folio 创意作品集演示
- **[/honor](https://awesome-gsap.vercel.app/honor)** - Honor 产品展示演示
- **[/](https://awesome-gsap.vercel.app/)** - 主页导航
- `/html` - HTML 项目
- `/react` - React 项目
- `/vue` - Vue 项目

详细部署说明请查看 [DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)

## 📞 Support

If you have any questions or need help with the examples, please open an issue in the repository.

---

**Happy Animating! 🎬✨**
