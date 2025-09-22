import { ReactNode } from 'react'
import { Navbar } from '../organisms/Navbar'

type MainTemplateProps = { children: ReactNode };

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
      <main className="bg-gray-950 text-white font-sans min-h-screen">
        <Navbar/>
        <div className="pt-20">
          {children}
        </div>
      </main>
  )
}

export default MainTemplate
