// Portfolio constants and data
export const METADATA = {
  title: "Portfolio | GSAP Folio",
  description: "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://awesome-gsap.vercel.app/folio",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Works", ref: "works" },
  { name: "Skills", ref: "skills" },
  { name: "Timeline", ref: "timeline" },
  { name: "Contact", ref: "contact" },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps", 
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "contact@example.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  medium: "https://medium.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  dribbble: "https://dribbble.com/",
  behance: "https://www.behance.net/",
  twitter: "https://twitter.com/",
  topmate: "https://www.topmate.io/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "GSAP Animation Library",
    image: "/folio/projects/gsap-lib.jpg",
    blurImage: "/folio/projects/blur/gsap-lib-blur.jpg",
    description: "Comprehensive GSAP animation examples and tutorials",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "/",
    tech: ["react", "gsap", "typescript", "tailwind"],
  },
  {
    name: "Interactive Portfolio",
    image: "/folio/projects/portfolio.jpg", 
    blurImage: "/folio/projects/blur/portfolio-blur.jpg",
    description: "Modern portfolio with GSAP animations and smooth interactions",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "/folio",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "Motion Graphics Showcase",
    image: "/folio/projects/motion.jpg",
    blurImage: "/folio/projects/blur/motion-blur.jpg", 
    description: "Creative motion graphics and animation experiments",
    gradient: ["#245B57", "#004741"],
    url: "#",
    tech: ["gsap", "svg", "css", "javascript"],
  },
  {
    name: "UI Component Library",
    image: "/folio/projects/components.jpg",
    blurImage: "/folio/projects/blur/components-blur.jpg",
    description: "Reusable React components with GSAP animations",
    gradient: ["#003052", "#167187"],
    url: "#",
    tech: ["react", "typescript", "storybook", "gsap"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react", 
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide", 
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge", 
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "GSAP Animation Expert",
    size: ItemSize.SMALL,
    subtitle: "Mastering advanced GSAP techniques and creating interactive web experiences",
    image: "/folio/timeline/gsap.svg",
    slideImage: "/folio/timeline/gsap.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Building modern web applications with React, Next.js and advanced animations",
    image: "/folio/timeline/react.svg", 
    slideImage: "/folio/timeline/react.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}
