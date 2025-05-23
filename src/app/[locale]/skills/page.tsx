import { GithubCalendar } from "@/components/github-calendar";
import { Heading } from "@/components/heading";
import { Motion } from "@/components/motion";
import { SkillsCard } from "@/components/skills-card";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { SKILLS_CARD } from "@/utils/skills-card";
import { SKILLS_TOOLS } from "@/utils/skills-tools";
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
