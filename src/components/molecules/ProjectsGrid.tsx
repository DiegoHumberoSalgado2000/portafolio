import { ProjectCard } from "../atoms/ProjectCard";


type Project={
        title: string;
        description: string;
        image: string;
        
    }

type ProjectGridProps={
    projects: Project[];
} 

export const ProjectGrid=({projects}: ProjectGridProps)=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx)=>(
                <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                image={project.image}
                />
            ))}
        </div>
    );   
}