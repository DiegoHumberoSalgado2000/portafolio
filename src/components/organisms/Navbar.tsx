'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { number: '01', label: '// home', href: '/' },
  { number: '02', label: '// expertise', href: '/expertise' },
  { number: '03', label: '// work', href: '/work' },
  { number: '04', label: '// experience', href: '/experience' },
  { number: '05', label: '// contac', href: '/contac' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
        <nav className="mx-auto flex items-center justify-between py-6  px-6">
          <div className="text-xl font-bold font-mono">
            <span
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-2xl text-transparent bg-clip-text hover:from-cyan-600 hover:to-purple-800">
              Diego._
            </span>
          </div>
          {/* Menu desktop */}
          <ul className="hidden md:flex gap-8 text-sm font-mono mx-auto">
            {navItems.map((item) => (
                <li key={item.number} className="flex items-center gap-1">
                  <span className="text-gray-400 text-xs">{item.number}</span>
                  <Link
                      href={item.href}
                      className="text-white hover:text-cyan-400 transition-colors text-lg">
                    {item.label}
                  </Link>
                </li>
            ))}
          </ul>
          {/* Movil Button */}
          <button className="md:hidden text-white text-2xl"
                  onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX/> : <FiMenu/>}
          </button>
        </nav>
        {/* Menu Movil*/}
        {isOpen && (
            <div
                className="md:hidden bg-black bg-opacity-90 backdrop-blue-md absolute top-16 left-0 w-full flex flex-col items-center gao-6 py-8">
              {navItems.map((item) => (
                  <Link
                      key={item.number}
                      href={item.href}
                      className="text-white hover:text-cyan-400 transition-colors text-lg"
                      onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
              ))}
            </div>
        )}
      </header>
  )
}
