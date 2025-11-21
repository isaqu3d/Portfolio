"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { GithubCalendar } from "@/components/github/github-calendar";
import { Heading } from "@/components/shared/heading";
import { Motion } from "@/components/shared/motion";
import { SkillCard } from "@/features/skills/components/skill-card";
import { SkillModal } from "@/features/skills/components/skill-modal";
import { getSkills } from "@/services/skills.service";
import { Skill } from "@/types";

export default function Skills() {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: skills = [],
    isLoading,
    error,
  } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: () => getSkills(),
  });

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 200);
  };

  // Group skills by category
  const technologies = skills.filter(
    (skill) => skill.category === "technology" || skill.category === "language"
  );
  const tools = skills.filter(
    (skill) => skill.category === "tool" || skill.category === "framework"
  );

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent dark:border-teal-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">
          {locale === "pt"
            ? "Erro ao carregar habilidades"
            : "Error loading skills"}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Motion>
        {/* Technologies Section */}
        {technologies.length > 0 && (
          <section className="mb-12">
            <Heading>{t("technicalSkills.technologies")}</Heading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {technologies.map((skill, index) => (
                <SkillCard
                  key={skill._id}
                  skill={skill}
                  onClick={() => handleSkillClick(skill)}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

        {/* Tools & Frameworks Section */}
        {tools.length > 0 && (
          <section className="mb-12">
            <Heading>{t("technicalSkills.tools")}</Heading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {tools.map((skill, index) => (
                <SkillCard
                  key={skill._id}
                  skill={skill}
                  onClick={() => handleSkillClick(skill)}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {skills.length === 0 && (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">
            {locale === "pt"
              ? "Nenhuma habilidade cadastrada ainda. Configure no Sanity Studio."
              : "No skills registered yet. Set up in Sanity Studio."}
          </div>
        )}

        {/* GitHub Calendar */}
        <GithubCalendar />
      </Motion>

      {/* Skill Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        open={isModalOpen}
        onClose={handleCloseModal}
        locale={locale}
      />
    </div>
  );
}
