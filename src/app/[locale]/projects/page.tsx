"use client";

import { Heading } from "@/components/heading";
import { MotionSlide } from "@/components/motion";
import { getLocalTranslations } from "@/lib/get-local-translations";
import ProjectLoading from "./components/loading";
import { ProjectItem } from "./components/project-item";
import { useProjects } from "./hooks/use-projects";

export default function Projects({ params }: { params: { locale: string } }) {
  const { data: translations, isLoading, error } = useProjects();
  const { locale } = params;
  const local = getLocalTranslations(locale);

  if (isLoading) return <ProjectLoading />;
  if (error || !translations) return <p>Erro ao carregar projetos.</p>;

  const { projects } = translations;

  if (!projects || projects.length === 0) {
    return <p>Projetos não encontrados.</p>;
  }

  return (
    <div className="max-w-xl px-4">
      <MotionSlide>
        <Heading>{local.projects.title}</Heading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectItem key={project._key} project={project} />
          ))}
        </div>
      </MotionSlide>
    </div>
  );
}
