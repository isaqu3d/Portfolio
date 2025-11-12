import { GithubCalendar } from "@/components/github/github-calendar";
import { Heading } from "@/components/shared/heading";
import { Motion } from "@/components/shared/motion";
import { SkillsCard } from "@/features/skills/components/skills-card";
import { getLocalTranslations } from "@/services/local-translations.service";
import { SKILLS_CARD } from "@/features/skills/utils/skills-card";
import { SKILLS_TOOLS } from "@/features/skills/utils/skills-tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Habilidades e ferramentas que utilizo no meu dia a dia.",
};

function SkillCardRender({ icon: Icon, color }) {
  return (
    <SkillsCard>
      <Icon size={90} color={color} />
    </SkillsCard>
  );
}

export default function Skills({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { technicalSkills } = getLocalTranslations(locale);

  return (
    <div className="max-w-xl px-4">
      <Motion>
        <div>
          <Heading>{technicalSkills.technologies}</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_CARD.map((skill) => (
              <SkillCardRender
                icon={skill.icon}
                key={skill.id}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        <div>
          <Heading>{technicalSkills.tools}</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_TOOLS.map((skill) => (
              <SkillCardRender
                icon={skill.icon}
                key={skill.id}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        <GithubCalendar />
      </Motion>
    </div>
  );
}
