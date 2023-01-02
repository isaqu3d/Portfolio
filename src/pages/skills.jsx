import { SkillsCard } from "../components/SkillsCard";

import GitHubCalendar from "react-github-calendar";
import { Heading } from "../components/Heading";

import { Motion } from "../components/Motion";
import { SKILLS_CARD } from "../utils/skills-card";
import { SKILLS_TOOLS } from "../utils/skills-tools";

function SkillCardRender({ icon: Icon, color, onClick }) {
  return (
    <SkillsCard onClick={onClick}>
      <Icon size={90} color={color} />
    </SkillsCard>
  );
}

export default function Skills() {
  /* const [modalContent, setModalContent] = useState(); */

  return (
    <Motion>
      <div className="max-w-lg px-4">
        <Heading>Habilidades</Heading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {SKILLS_CARD.map((skills) => (
            <SkillCardRender
              icon={skills.icon}
              key={skills.id}
              color={skills.color}
            /> /* onClick={disclosure.onOpen} */
          ))}
        </div>

        <Heading>Ferramentas</Heading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
      </div>
    </Motion>
  );
}
