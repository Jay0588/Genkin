import { SectionWrapper } from "@/components/SectionWrapper";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <SectionWrapper
      id="projects-page"
      eyebrow="Our portfolio"
      title="Completed projects demonstrating scale, quality and timelines."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
