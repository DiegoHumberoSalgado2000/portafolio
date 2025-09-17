"use client";
import Link from "next/link";

const navItems = [
  { number: "01", label: "// home", href: "/" },
  { number: "02", label: "// expertise", href: "/expertise" },
  { number: "03", label: "// work", href: "/work" },
  { number: "04", label: "// experience", href: "/experience" },
  { number: "05", label: "// contac", href: "/contac" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
      <nav className="mx-auto flex items-center justify-between py-6  px-6">
        <div className="text-xl font-bold font-mono">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-2xl text-transparent bg-clip-text hover:from-cyan-600 hover:to-purple-800">
            Diego._
          </span>
        </div>
        <ul className="flex gap-8 text-sm font-mono mx-auto">
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
      </nav>
    </header>
  );
};
