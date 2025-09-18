import { ExpertiseCard } from "../atoms/ExpertiseCard";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export const ExpertiseSection=()=>{
    return(
        <section className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 ms:mb-16">
                My Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <ExpertiseCard 
                icon={<FaLaptopCode size={40}/>}
                highlight="Software"
                title="Developer"
                description="Experiencia en java, python, TypeScript, JavaScript"
                color="#ec4899"
                />

                <ExpertiseCard
                icon={<FaReact size={40}/>}
                highlight="Fronend Dev"
                title="React, NextJS"
                description="Experiencia de entornos de desarrollo como angular, react, nextjs"
                color="#3b82f6"
                />

                <ExpertiseCard
                icon={<SiFlutter size={40}/>}
                highlight="Flutter Dev"
                title="Android, IOS"
                description="Skilled in developing hybrid mobile apps and cross-platform solutions using Flutter framework."
                color="#f97316"
                />
            </div>

            <div className=""></div>
        </section>
    );
}