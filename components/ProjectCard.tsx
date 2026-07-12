import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaFileLines,
} from "react-icons/fa6";

import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
   <article className="w-[340px] sm:w-[380px] md:w-[450px] lg:w-[550px] shrink-0 h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
      <div className="flex flex-wrap justify-between gap-2 mb-5">
        <div>{project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary mr-5"
          >
            <FaArrowUpRightFromSquare />
            Demo
          </a>
        )}</div>
        
        <div>{project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-1 text-xs"
          >
            {item}
          </span>
        ))}</div>
      </div>

      <h3 className="text-xl font-bold mb-3">{project.title}</h3>

      <p className="text-[14px] mb-5">
        {project.description}
      </p>

      <div className="mb-5 rounded-xl border border-border bg-bg p-3">
        <p className="text-sm font-semibold">Architecture</p>

        <p className="text-sm text-text-secondary mt-2">
          {project.architecture}
        </p>
      </div>

      <ul className="space-y-2 mb-6">
        {project.highlights.map((item) => (
          <li
            key={item}
            className="text-sm text-text-secondary flex gap-2"
          >
            <span className="text-primary">•</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        {/* {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary"
          >
            <FaGithub />
            GitHub
          </a>
        )} */}

        
      </div>
    </article>
  );
}