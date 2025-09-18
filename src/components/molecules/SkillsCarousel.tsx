"use client";

import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiOpenjdk,
    SiJavascript,
    SiMysql,
    SiGit,
} from "react-icons/si";

const skills = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={40} /> },
    { name: "React", icon: <SiReact className="text-cyan-400" size={40} /> },
    { name: "NextJS", icon: <SiNextdotjs className="text-white" size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" size={40} /> },
    { name: "Java", icon: <SiOpenjdk className="text-red-600" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} /> },
    { name: "Git", icon: <SiGit className="text-orange-500" size={40} /> },
];

export const SkillsCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Contenedor animado */}
      <div className="flex gap-6 animate-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px] h-28 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <p className="text-sm text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};