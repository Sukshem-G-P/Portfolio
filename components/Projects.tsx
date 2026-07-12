"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -580 : 580,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">Projects</div>
          <h2 className="text-[28px] font-bold">
            Things I&apos;ve Built
          </h2>
        </Reveal>

        <div
          ref={scrollRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            no-scrollbar
            pb-4
          "
        >
          {projects.map((project) => (
            <div key={project.slug} className="snap-center shrink-0">
              <Reveal>
                <ProjectCard
                  project={project}
                 
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}