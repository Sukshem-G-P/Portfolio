"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaUserLarge,
  FaLayerGroup,
  FaDiagramProject,
  FaBriefcase,
  FaTrophy,
  FaFileLines,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaTerminal,
  FaEnvelope,
  FaBars,
} from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "#about", label: "About", icon: FaUserLarge },
  { href: "#skills", label: "Skills", icon: FaLayerGroup },
  { href: "#projects", label: "Projects", icon: FaDiagramProject },
  { href: "#experience", label: "Experience", icon: FaBriefcase },
  { href: "#achievements", label: "Achievements", icon: FaTrophy },
  { href: "#resume", label: "Resume", icon: FaFileLines },
  { href: "#contact", label: "Contact", icon: FaPaperPlane },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[900] backdrop-blur-md bg-bg/80 border-b border-border">
      <nav className="max-w-container mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-mono font-semibold text-lg flex items-center gap-2">
          <span className="w-[7px] h-[7px] rounded-full bg-success" />
          Sukshem<span className="text-primary"></span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors group"
              >
                <Icon className="text-xs group-hover:text-primary transition-colors" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn hidden sm:flex">
            <FaGithub />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn hidden sm:flex">
            <FaLinkedinIn />
          </a>
          <a href={siteConfig.social.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile" className="icon-btn hidden sm:flex">
            <FaCode />
          </a>
          <a href={siteConfig.social.gfg} target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks profile" className="icon-btn hidden lg:flex">
            <FaTerminal />
          </a>
          <a href={`mailto:${siteConfig.social.email}`} aria-label="Email" className="icon-btn hidden lg:flex">
            <FaEnvelope />
          </a>
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-xl text-text"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-5 pb-5 border-b border-border bg-bg">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-text-secondary"
              >
                <Icon className="text-xs" /> {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
