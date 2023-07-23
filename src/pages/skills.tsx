import { Heading } from "@components/Heading";
import { Motion } from "@components/Motion";
import { SkillsCard } from "@components/SkillsCard";
import { SKILLS_CARD } from "@utils/skills-card";
import { SKILLS_TOOLS } from "@utils/skills-tools";
import { NextSeo } from "next-seo";
import GitHubCalendar from "react-github-calendar";

function SkillCardRender({ icon: Icon, color }) {
  return (
    <SkillsCard>
      <Icon size={90} color={color} />
    </SkillsCard>
  );
}

export default function Skills() {
  return (
    <>
      <NextSeo
        title="Habilidades - Isaque de Sousa"
        description="Pagina das minhas habilidades e ferramentas que eu utilizo no meu dia a dia"
      />
      <div>
        <Motion>
          <Heading>Habilidades</Heading>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_CARD.map((skills) => (
              <SkillCardRender
                icon={skills.icon}
                key={skills.id}
                color={skills.color}
              />
            ))}
          </div>

          <Heading>Ferramentas</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_TOOLS.map((skills) => (
              <SkillCardRender
                icon={skills.icon}
                key={skills.id}
                color={skills.color}
              />
            ))}
          </div>
          <Heading>Commits</Heading>
          <div>
            <GitHubCalendar
              username="x-speedblack-x"
              year={new Date().getFullYear()}
              color="#cd5ff8"
              hideColorLegend
              fontSize={18}
              blockSize={14}
              blockMargin={5}
            />
          </div>
        </Motion>
      </div>
    </>
  );
}
