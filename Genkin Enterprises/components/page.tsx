import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { SectionWrapper } from "@/components/SectionWrapper";
import { services, projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />

      <SectionWrapper
        id="services"
        eyebrow="What we do"
        title="End-to-end building and civil engineering services."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-sm font-semibold text-slate-50">{service.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/services" className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            View all services →
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        eyebrow="Selected work"
        title="Projects that demonstrate depth of execution."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            View all projects →
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
