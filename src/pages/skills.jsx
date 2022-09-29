import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import SkillsCard from "../components/SkillsCard";
import { SKILLS_CARD } from "../utils/skills-card";
import { SKILLS_TOOLS } from "../utils/skills-tools";

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
      <Container>
        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Habilidades
        </Heading>
        <Section>
          <SimpleGrid columns={[2, 2, 4]} gap={6}>
            {SKILLS_CARD.map((skills) => (
              <SkillCardRender
                icon={skills.icon}
                key={skills.id}
                color={skills.color}
              />
            ))}
          </SimpleGrid>
        </Section>

        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Ferramentas
        </Heading>

        <Section>
          <SimpleGrid columns={[2, 2, 4]} gap={6}>
            {SKILLS_TOOLS.map((skills) => (
              <SkillCardRender
                icon={skills.icon}
                key={skills.id}
                color={skills.color}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </>
  );
}
