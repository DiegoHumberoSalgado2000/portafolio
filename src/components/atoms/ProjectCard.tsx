import Image from "next/image";

type ProjectCardProps={
    title: string;
    description: string;
    image: string;
}

export const ProjectCard=({title, description, image}: ProjectCardProps)=>{
    return(
        <div className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-5">
                <h2 className="text-gray-800 text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-500 text-sm">{description}</p>
                <div>
                    <Image src={image} alt={title} fill className="object-cover"/>
                </div>
            </div>
        </div>
    );
}