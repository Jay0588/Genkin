import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          {project.category}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-sm font-semibold text-slate-50">
          {project.name}
        </h3>
        <p className="text-xs text-slate-400">{project.location}</p>
        <p className="text-xs text-slate-400 line-clamp-2">
          {project.description}
        </p>
        <p className="text-[11px] text-slate-500">Completed: {project.year}</p>
      </div>
    </motion.article>
  );
};
