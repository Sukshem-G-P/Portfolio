"use client";

import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedinIn, FaGithub, FaCode, FaUser, FaMessage, FaPaperPlane } from "react-icons/fa6";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site";

const rows = [
  { icon: FaEnvelope, label: "Email", value: siteConfig.social.email, href: `mailto:${siteConfig.social.email}` },
  { icon: FaPhone, label: "Phone", value: siteConfig.social.phone, href: `tel:${siteConfig.social.phone}` },
  { icon: FaLocationDot, label: "Location", value: "Mangaluru, Karnataka, India" },
  { icon: FaLinkedinIn, label: "LinkedIn", value: "/in/sukshemgp", href: siteConfig.social.linkedin },
  { icon: FaGithub, label: "GitHub", value: "/sukshemgp", href: siteConfig.social.github },
  { icon: FaCode, label: "LeetCode / GfG", value: "@sukshemgp", href: siteConfig.social.leetcode },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">contact</div>
          <h2 className="text-[28px] font-bold">Let&apos;s talk</h2>
          <p className="text-lg text-text-secondary mt-3">
            Open to full-time roles and interesting freelance work.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          <Reveal>
            {rows.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-md bg-surface border border-border flex items-center justify-center text-primary flex-shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-sm text-text-secondary">{label}</h4>
                    <p className="text-[15px] font-semibold">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </Reveal>

          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message noted — wire this to your backend or a form service (e.g. Resend, Formspree).");
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-semibold mb-1.5 flex items-center gap-1.5">
                  <FaUser className="text-primary text-xs" /> Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-3.5 py-3 rounded-md border border-border bg-bg text-text text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 flex items-center gap-1.5">
                  <FaEnvelope className="text-primary text-xs" /> Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-3 rounded-md border border-border bg-bg text-text text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 flex items-center gap-1.5">
                  <FaMessage className="text-primary text-xs" /> Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What are you building?"
                  className="w-full px-3.5 py-3 rounded-md border border-border bg-bg text-text text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
