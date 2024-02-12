"use client";

import { MyDialog } from "@/components/CardModalSkill";
import { GithubCalendar } from "@/components/GithubCalendar";
import { Heading } from "@/components/Heading";
import { Motion } from "@/components/Motion";
import { SkillsCard } from "@/components/SkillsCard";
import { SKILLS_CARD } from "@/utils/skills-card";
import { SKILLS_TOOLS } from "@/utils/skills-tools";
import { useState } from "react";

/* export const metadata: Metadata = {
  title: "Habilidades",
  description:
    "Aqui estão as tecnologias que eu uso atualmente e alguns ferramentas",
}; */

function SkillCardRender({ icon: Icon, color, onClick }) {
  return (
    <SkillsCard onClick={onClick}>
      <Icon size={90} color={color} />
    </SkillsCard>
  );
}

export default function Skills() {
  const [modalId, setModalId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log(modalId);

  const foundModal = SKILLS_CARD.find((skill) => skill.id === modalId);

  const handleOnClose = () => setIsOpen(false);

  return (
    <div className="max-w-xl px-4">
      <Motion>
        <div>
          <Heading>Habilidades</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_CARD.map((skill) => (
              <SkillCardRender
                icon={skill.icon}
                key={skill.id}
                color={skill.color}
                onClick={() => setModalId(skill.id)}
              />
            ))}
            {/*  {modalId && Boolean(foundModal) ? (
              <CardModalSkill
                title={foundModal?.title ?? ""}
                description={foundModal?.description ?? ""}
                isOpenModal={!isOpen}
                toggleModal={() => setIsOpen(!isOpen)}
              />
            ) : null} */}
            {modalId && Boolean(foundModal) ? (
              <MyDialog
                title={foundModal?.title ?? ""}
                description={foundModal?.description ?? ""}
                icon={foundModal?.icon ?? ""}
                isOpenModal={isOpen}
                toggleModal={() => setIsOpen(false)}
              />
            ) : null}

            {/*  {modalId && Boolean(foundModal) ? (
              <MeuModal
                title={foundModal?.title ?? ""}
                description={foundModal?.description ?? ""}
                icon={foundModal?.icon ?? ""}
                isOpenModal={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
              />
            ) : null} */}
          </div>
          <button onClick={() => setIsOpen(true)}>open</button>
        </div>

        <div>
          <Heading>Ferramentas</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SKILLS_TOOLS.map((skill) => (
              <SkillCardRender
                icon={skill.icon}
                key={skill.id}
                color={skill.color}
                onClick={() => setModalId(skill.id)}
              />
            ))}
          </div>
        </div>

        <GithubCalendar />
      </Motion>
    </div>
  );
}
