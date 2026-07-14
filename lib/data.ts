export const stats = [
  { value: "1+", label: "Years Exp." },
  { value: "3", label: "Projects" },
  { value: "75+", label: "LeetCode" },
  { value: "5+", label: "Repositories" },
  { value: "8.75", label: "CGPA" },
  { value: "FareFirst", label: "Current Co." },
];

export const skillGroups = [
  { title: "Programming", icon: "code", items: ["Java", "JavaScript", "TypeScript", "C"] },
  { title: "Frontend", icon: "display", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
  { title: "Database", icon: "database", items: ["SQL", "MySQL"] },
  { title: "Core CS", icon: "project", items: ["DSA", "Algorithms", "OOP", "DBMS", "OS", "Networks"] },
  { title: "AI & Tools", icon: "robot", items: ["OpenAI API", "Prompt Eng.", "MCP", "Git", "Postman", "Figma", "UiPath"] },
];

export type Project = {
  slug: string;
  title: string;
  stack: string[];
  architecture: string;
  icon: string;
  description: string;
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "flight-search-assistant",
    title: "Conversational Flight Search Assistant",
    stack: ["Node.js", "OpenAI", "MCP", "React"],
    architecture: "client → MCP server → OpenAI → flight data",
    icon: "plane",
    description:
      "An AI-powered flight search assistant that understands natural-language travel queries and returns structured results.",
    highlights: [
      "Built an MCP server to route prompts and fetch real-time flight data",
      "Designed dynamic UI components for routes, pricing & airline details",
      "Handled ambiguous queries with follow-up prompt clarification",
    ],
    link: "https://github.com/sukshemgp/flight-search-assistant",
  },
  {
    slug: "task-manager",
    title: "Full-Stack Task Manager with Auth",
    stack: ["React", "Node", "Express", "SQL", "JWT"],
    architecture: "React → Express API → JWT → MySQL",
    icon: "tasks",
    description:
      "A task management platform with role-based access and secure protected routes.",
    highlights: [
      "JWT authentication with role-based access control",
      "Optimized SQL queries for efficient task & user management",
      "Responsive UI with filtering and real-time updates",
    ],
    link: "https://github.com/sukshemgp/task-manager",
  },
  {
    slug: "disk-monitoring-system",
    title: "Disk Monitoring & Clean-Up System",
    stack: ["UiPath", "RPA"],
    architecture: "UiPath scheduler → scan → cleanup → alert",
    icon: "broom",
    description:
      "An automation system that monitors disk usage and performs cleanup without manual intervention.",
    highlights: [
      "Automated alerts on threshold breaches",
      "File cleanup workflows improving storage efficiency",
      "Reduced manual storage maintenance effort",
    ],
    link: "https://github.com/sukshemgp/disk-monitoring-rpa",
  },
];

export const experience = [
  {
    company: "FareFirst",
    role: "Web Developer",
    date: "Jun 2025 — Present",
    points: [
      "Improved page load performance by 25% with React.js & Tailwind CSS",
      "Integrated REST APIs for real-time travel search functionality",
      "Optimized UI components, resolving production stability issues",
      "Collaborated cross-functionally on booking workflow features",
    ],
  },
];

export const education = [
  { date: "2021 — 2025", title: "Canara Engineering College", detail: "B.E. Information Science · CGPA 8.75" },
  { date: "2019 — 2021", title: "Vivekananda PU College", detail: "Class XII · 94.67%" },
  { date: "2019", title: "Sri Sathya Sai Loka Seva High School", detail: "Class X · 92.67%" },
];

export const certifications = [
  { title: "Programming in Java", issuer: "NPTEL", icon: "java" },
  { title: "Problem Solving in C", issuer: "NPTEL", icon: "c" },
  { title: "Employability (RPA)", issuer: "Infosys Foundation", icon: "building" },
  { title: "Full Stack Web Dev", issuer: "Udemy", icon: "layers" },
];

export const achievements = [
  { value: "75+", label: "LeetCode Solved", icon: "code" },
  { value: "75+", label: "Contest Rating", icon: "chart" },
  { value: "20+", label: "GitHub Repos", icon: "github" },
  { value: "8.75", label: "CGPA", icon: "cap" },
];
