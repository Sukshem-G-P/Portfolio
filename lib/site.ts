// ⚠️ Replace siteUrl with your real deployed domain before going live.
// Every SEO surface (metadata, JSON-LD, sitemap, robots) reads from this file,
// so updating it here updates the whole site.

export const siteConfig = {
  name: "Sukshem G P",
  role: "Full Stack Developer",
  title: "Sukshem G P — Full Stack Developer",
  description:
    "Portfolio of Sukshem G P, a full-stack developer specializing in React, Next.js, Node.js and AI-integrated web systems. Web Developer at FareFirst.",
  siteUrl: "https://sukshemgp.com", // <-- replace with your real domain
  ogImage: "/og-image.jpg", // 1200x630, replace with a real exported image
  keywords: [
    "Sukshem G P",
    "Sukshem",
    "FareFirst web developer",
    "Full Stack Developer portfolio",
    "React developer Mangaluru",
    "Next.js developer India",
    "Canara Engineering College",
    "Sukshem portfolio",
  ],
  social: {
    github: "https://github.com/sukshemgp",
    linkedin: "https://linkedin.com/in/sukshemgp",
    leetcode: "https://leetcode.com/sukshemgp",
    gfg: "https://www.geeksforgeeks.org/user/sukshemgp",
    email: "sukshemgp@gmail.com",
    phone: "+91-9844218989",
  },
  location: {
    city: "Mangaluru",
    region: "Karnataka",
    country: "India",
  },
};

export type SiteConfig = typeof siteConfig;
