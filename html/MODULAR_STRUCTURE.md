# GSAP HTML 模块化结构

## 📁 项目结构

```
html/
├── index.html                    # 主页面
├── styles/
│   ├── main.css                 # 基础样式
│   └── modules.css              # 模块化样式
├── js/
│   ├── module-loader.js         # 模块加载器
│   └── main-modular.js          # 主要脚本
├── modules/                     # 模块目录
│   ├── basic-animations/        # 基础动画
│   │   ├── basic-animations.css
│   │   └── basic-animations.js
│   ├── timeline-sequences/      # 时间轴序列
│   │   ├── timeline-sequences.css
│   │   └── timeline-sequences.js
│   ├── text-animations/         # 文本动画
│   │   ├── text-animations.css
│   │   └── text-animations.js
│   ├── scroll-trigger/          # 滚动触发
│   │   ├── scroll-trigger.css
│   │   └── scroll-trigger.js
│   ├── parallax-effects/        # 视差效果
│   │   ├── parallax-effects.css
│   │   └── parallax-effects.js
│   ├── card-reveals/            # 卡片揭示
│   │   ├── card-reveals.css
│   │   └── card-reveals.js
│   ├── hover-interactions/      # 悬停交互
│   │   ├── hover-interactions.css
│   │   └── hover-interactions.js
│   ├── mouse-follow/            # 鼠标跟随
│   ├── svg-path/                # SVG路径动画
│   ├── shape-morphing/          # 形状变形
│   └── loading-animations/      # 加载动画
└── README.md
```

## 🎯 已实现的模块

### ✅ 完成的模块

1. **Basic Animations** - 基础动画（缩放、旋转、移动）
2. **Timeline Sequences** - 时间轴序列动画
3. **Text Animations** - 文本动画效果
4. **ScrollTrigger** - 滚动触发动画
5. **Parallax Effects** - 视差效果
6. **Card Reveals** - 卡片揭示动画
7. **Hover Interactions** - 悬停交互效果

### 🚧 待完成的模块

- Mouse Follow - 鼠标跟随动画
- SVG Path - SVG 路径动画
- Shape Morphing - 形状变形动画
- Loading Animations - 加载动画效果

## 🎨 设计特点

### 布局设计

- **一行一个示例**：每个动画示例占据一整行
- **左中右布局**：标题 | 演示区域 | 运行按钮
- **响应式设计**：移动端自动调整为垂直布局

### 模块化架构

- **独立 CSS 文件**：每个模块有自己的样式文件
- **独立 JS 文件**：每个模块有自己的逻辑文件
- **自动注册**：模块自动注册到全局注册表
- **统一接口**：所有模块都有 `init()` 和 `reset()` 方法

## 🔧 技术实现

### 模块注册系统

```javascript
// 每个模块自动注册
window.GSAPModules["module-name"] = ModuleObject;
```

### 模块加载器

```javascript
function loadModule(moduleName) {
  const module = window.GSAPModules[moduleName];
  if (module && module.init) {
    if (module.reset) module.reset();
    module.init();
  }
}
```

### 统一的模块接口

```javascript
window.ModuleName = {
  name: "Module Display Name",
  init: function () {
    // 初始化动画
  },
  reset: function () {
    // 重置状态
  },
};
```

## 🚀 运行方式

1. **启动服务器**：

   ```bash
   cd html
   python3 -m http.server 8080
   ```

2. **访问页面**：
   打开 http://localhost:8080

3. **运行动画**：
   点击每个模块的"Run Demo"按钮

## 📱 响应式支持

- **桌面端**：水平布局，完整功能
- **平板端**：调整间距和大小
- **移动端**：垂直布局，触摸友好

## 🎯 下一步计划

1. 完成剩余的 4 个模块
2. 实现 React 版本的模块化
3. 实现 Vue 版本的模块化
4. 添加代码查看功能（可选）
5. 优化性能和用户体验
