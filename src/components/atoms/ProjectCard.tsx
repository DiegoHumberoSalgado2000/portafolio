'use client'
import Image from 'next/image'
import { useState } from 'react'

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
}

export const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - card.left
    const y = e.clientY - card.top

    const rotateX = ((y / card.height) - 0.5) * -30
    const rotateY = ((x / card.width) - 0.5) * 30

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }
  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)')
  }

  return (
      <div className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
           style={{
             transform,
             perspective: '1000px',
           }}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
      >
        <div className="p-5">
          <h2 className="text-gray-800 text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="relative aspect-video h-48 bg-white flex items-center justify-center">
          <Image src={image} alt={title} fill className="object-contain"/>
        </div>
      </div>
  )
}