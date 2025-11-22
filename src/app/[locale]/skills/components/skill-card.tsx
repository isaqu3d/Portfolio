"use client";

import { urlFor } from "@/lib/sanity/url";
import { Skill } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
  index: number;
}

export function SkillCard({ skill, onClick, index }: SkillCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-900 p-6 shadow-sm transition-all hover:scale-105 hover:border-pink-400 hover:shadow-xl dark:hover:border-teal-400 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Badge for featured skills */}
      {skill.featured && (
        <div className="text-white absolute -right-2 -top-2 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 px-2 py-1 text-xs font-bold shadow-lg dark:from-teal-500 dark:to-cyan-600">
          ⭐
        </div>
      )}

      {/* Logo Container */}
      <div
        className="relative h-16 w-16 transition-transform group-hover:rotate-3 group-hover:scale-110"
        style={{
          filter: skill.color
            ? `drop-shadow(0 4px 12px ${skill.color}40)`
            : undefined,
        }}
      >
        <Image
          src={urlFor(skill.logo).url()}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Skill Name */}
      <span className="text-center text-sm font-semibold text-zinc-50 ">
        {skill.name}
      </span>

      {/* Hover Effect Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
        style={{
          backgroundColor: skill.color || "#ec4899",
        }}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
