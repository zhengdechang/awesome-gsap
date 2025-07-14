# 🚀 Vercel 一键部署指南

## 快速部署

### 方法一：Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 在项目根目录运行部署
vercel --prod
```

### 方法二：Git 集成

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel 控制台](https://vercel.com) 导入项目
3. Vercel 会自动检测配置并部署

## 🎯 部署后访问路径

- **`/`** → HTML 项目（主页导航）
- **`/html`** → HTML 项目
- **`/react`** → React (Next.js) 项目  
- **`/vue`** → Vue 项目

## 📁 项目结构

```
awesome-gsap/
├── vercel.json          # Vercel 部署配置
├── package.json         # 根目录构建脚本
├── index.html          # 主页导航
├── html/               # 静态 HTML 项目
├── react/              # Next.js React 项目
└── vue/                # Vue + Vite 项目
```

## ⚙️ 配置文件说明

### `vercel.json`
- 配置了静态构建和路由规则
- 自动将不同路径路由到对应项目

### `package.json`
- 包含 `build` 脚本用于 Vercel 构建
- 自动安装依赖、构建所有项目、复制文件

## 🔧 本地测试

```bash
# 测试完整构建流程
npm run build:vercel

# 构建成功后，dist/ 目录包含所有项目文件
```

## ✅ 部署成功

部署成功后，你将获得类似 `https://your-project.vercel.app` 的域名，可以通过不同路径访问各个项目。

## 🎉 就是这么简单！

所有配置都已准备就绪，只需要运行 `vercel --prod` 即可完成部署！
