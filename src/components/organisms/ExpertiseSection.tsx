import { ExpertiseCard } from "../atoms/ExpertiseCard";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export const ExpertiseSection=()=>{
    return(
        <section className="max-w-6xl mx-auto py-5 px-6">
            <h2 className="text-4xl font-extrabold text-center mb-16">
                My Expertise
            </h2>

            <div className="grid grid-cols-3 gap-6">
                <ExpertiseCard 
                icon={<FaLaptopCode />}
                highlight="Software"
                title="Developer"
                description="Experiencia en java, python, TypeScript, JavaScript"
                color="#ec4899"
                />

                <ExpertiseCard
                icon={<FaReact/>}
                highlight="Fronend Dev"
                title="React, NextJS"
                description="Experiencia de entornos de desarrollo como angular, react, nextjs"
                color="#3b82f6"
                />

                <ExpertiseCard
                icon={<SiFlutter/>}
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