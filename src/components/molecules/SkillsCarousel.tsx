'use client'

import Image from 'next/image'
import {
  SiAngular,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={40}/> },
  { name: 'React', icon: <SiReact className="text-cyan-400" size={40}/> },
  {
    name: 'Python', icon: (
        <Image
            src="/python-logo.png"
            alt="Python"
            className="rounded-full"
            width={40}
            height={40}/>
    ),
  },
  { name: 'NextJS', icon: <SiNextdotjs className="text-white" size={40}/> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" size={40}/> },
  {
    name: 'Java', icon: (
        <Image
            src="/java-logo.png"
            alt="Java"
            width={45}
            height={45}/>
    ),
  },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={40}/> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" size={40}/> },
  { name: 'Git', icon: <SiGit className="text-orange-500" size={40}/> },
  { name: 'Php', icon: <SiPhp className="text-violet-500" size={40}/> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" size={40}/> },
  { name: 'Angular', icon: <SiAngular className="text-red-600" size={40}/> },

]

export const SkillsCarousel = () => {
  return (
      <div className="relative w-full overflow-hidden py-6">
        <div className="flex gap-4 md:gap-6 animate-scroll">
          {[...skills, ...skills].map((skill, index) => (
              <div
                  key={index}
                  className="flex flex-col items-center justify-center
            flex-[0_0_auto] 
            min-w-[90px] sm:min-w-[100px] md:min-w-[110px] lg:min-w-[120px] 
            h-20 sm:h-24 md:h-28
            bg-gray-800 rounded-xl shadow-md 
            hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="mb-2">{skill.icon}</span>
                <p className="text-xs sm:text-sm md:text-base text-gray-200">{skill.name}</p>
              </div>
          ))}
        </div>
      </div>
  )
}