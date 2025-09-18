import { ReactNode } from "react"

type ExpertiseCardProps={
    icon: ReactNode;
    title: string;
    highlight: string;
    description: string;
    color: string;
};

export const ExpertiseCard=({icon, title, highlight, description, color,}: ExpertiseCardProps)=>{
    return(
        <div className="border border-gray-700 p-6 md:flex flex-col gap-4 hover:bg-gray-900/50 transition">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-3xl font-bold leading-snug">
                <span className="relative inline-block" style={{boxShadow:`inset 0 -4px 0 0 ${color}`,

                }}
                >
                    {highlight}
                </span>{" "}
                {title}
            </h3>
            <p className="text-gray-300 text-2xl leading-relaxed">{description}</p>
        </div>
    );
}