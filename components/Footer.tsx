import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-container mx-auto px-5 md:px-8 py-2">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold text-text-primary">
              {siteConfig.name}
            </h3>

             <p className="text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              href={siteConfig.social.leetcode}
              target="_blank"
              aria-label="LeetCode"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              <FaCode size={20} />
            </Link>

            <Link
              href={`mailto:${siteConfig.social.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-lg"
            >
              <FaEnvelope size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}