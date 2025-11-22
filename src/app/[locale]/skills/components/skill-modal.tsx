"use client";

import { urlFor } from "@/lib/sanity/url";
import { Skill } from "@/types";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface SkillModalProps {
  skill: Skill | null;
  open: boolean;
  onClose: () => void;
  locale: string;
}

const PROFICIENCY_LABELS = {
  pt: {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
    expert: "Especialista",
  },
  en: {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  },
};

const CATEGORY_LABELS = {
  pt: {
    technology: "Tecnologia",
    tool: "Ferramenta",
    framework: "Framework",
    language: "Linguagem",
  },
  en: {
    technology: "Technology",
    tool: "Tool",
    framework: "Framework",
    language: "Language",
  },
};

export function SkillModal({ skill, open, onClose, locale }: SkillModalProps) {
  if (!skill) return null;

  const description =
    skill.description[locale as "pt" | "en"] || skill.description.en;
  const proficiencyLabel = skill.proficiency
    ? PROFICIENCY_LABELS[locale as "pt" | "en"][skill.proficiency]
    : null;
  const categoryLabel = CATEGORY_LABELS[locale as "pt" | "en"][skill.category];

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-md rounded-3xl bg-zinc-900 p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Close Button */}
                <Dialog.Close asChild>
                  <button
                    className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </Dialog.Close>

                {/* Content */}
                <div className="flex flex-col items-center gap-6 px-2">
                  {/* Logo */}
                  <motion.div
                    className="relative h-28 w-28 rounded-2xl bg-white-100 p-5 shadow-lg dark:bg-zinc-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={urlFor(skill.logo).url()}
                      alt={skill.name}
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>

                  {/* Title */}
                  <div className="w-full text-center">
                    <Dialog.Title asChild>
                      <h2 className="text-3xl font-bold leading-tight text-white-100">
                        {skill.name}
                      </h2>
                    </Dialog.Title>

                    {/* Category & Proficiency */}
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                      <span className="rounded-full bg-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200">
                        {categoryLabel}
                      </span>
                      {proficiencyLabel && (
                        <span className="text-white rounded-full bg-pink-500 px-4 py-1.5 text-sm font-semibold dark:bg-teal-500">
                          {proficiencyLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <Dialog.Description asChild>
                    <p className="w-full text-center text-base leading-relaxed text-zinc-500 dark:text-zinc-300">
                      {description}
                    </p>
                  </Dialog.Description>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
