import { ProjectGrid } from '../molecules/ProjectsGrid'

export const WorkSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Un portafolio moderno con Next.js y TailwindCSS.',
      image: '/',

    },
    {
      title: 'E-commerce App',
      description: 'Tienda online con carrito, pagos y panel de admin.',
      image: '/',

    },
    {
      title: 'API REST',
      description: 'API escalable con Node.js y Express.',
      image: '/ApiRest.png',

    },
    {
      title: 'Portfolio Website',
      description: 'Un portafolio moderno con Next.js y TailwindCSS.',
      image: '/',

    },
    {
      title: 'E-commerce App',
      description: 'Tienda online con carrito, pagos y panel de admin.',
      image: '/',

    },
    {
      title: 'API REST',
      description: 'API escalable con Node.js y Express.',
      image: '/',

    },
  ]

  return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-center mb-12">My Work</h2>
        <ProjectGrid projects={projects}/>
      </section>
  )
}
