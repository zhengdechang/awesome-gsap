// Simplified Module Loader for GSAP Examples

// Global modules registry
if (typeof window.GSAPModules === "undefined") {
  window.GSAPModules = {};
}

// Load and run a specific module
function loadModule(moduleName) {
  const module = window.GSAPModules[moduleName];
  if (module && module.init) {
    // Reset the module first if it has a reset function
    if (module.reset) {
      module.reset();
    }

    // Initialize the module
    module.init();

    console.log(`✅ Loaded module: ${module.name}`);
  } else {
    console.warn(`❌ Module not found: ${moduleName}`);
  }
}

// Initialize scroll-based modules on page load
function initializeScrollModules() {
  // Register GSAP plugins
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (typeof MotionPathPlugin !== "undefined") {
    gsap.registerPlugin(MotionPathPlugin);
  }

  // Initialize scroll-based modules
  const scrollModules = ["scroll-trigger", "parallax-effects", "card-reveals"];
  scrollModules.forEach((moduleName) => {
    if (window.GSAPModules[moduleName]) {
      loadModule(moduleName);
    }
  });

  // Initialize interactive modules
  const interactiveModules = ["hover-interactions", "mouse-follow"];
  interactiveModules.forEach((moduleName) => {
    if (window.GSAPModules[moduleName]) {
      loadModule(moduleName);
    }
  });

  // Note: Advanced animation modules (svg-path, shape-morphing, loading-animations)
  // are loaded but only run when triggered manually via Run Demo buttons
  console.log(
    "🎯 Advanced modules (svg-path, shape-morphing, loading-animations) ready for manual trigger"
  );
}

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for all module scripts to load
  setTimeout(initializeScrollModules, 200);
});

console.log("🚀 Module Loader initialized");
