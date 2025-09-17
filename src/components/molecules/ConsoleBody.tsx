"use client";

import { useEffect, useState } from "react";
import { Line } from "../atoms/Line";
import { Cursor } from "../atoms/Cursor";

const lines: string[] = [
  "<!DOCTYPE html>",
  '<html lang="es">',
  "<head>",
  '  <meta charset="UTF-8">',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  "  <title>Portafolio</title>",
  "</head>",
  '<body class="bg-black text-white font-sans">',
  '  <div class="container mx-auto px-4">',
  '    <header class="mb-8">',
  '      <h1 class="text-5xl font-bold">',
  '        Hola, soy <span class="text-blue-400">Diego Humberto Salgado</span>',
  "      </h1>",
  '      <p class="text-xl text-gray-300">',
  "        Ingeniero de Software especializado en desarrollo web y backend.",
  "      </p>",
  "    </header>",
  "  </div>",
  "</body>",
  "</html>",
];

export const ConsoleBody = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<string>("");
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setCurrentLine("");
        }, 200);
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, lineIndex])

  return (
    <div className="p-4 whitespace-pre text-gray-200 overflow-x-auto max-w-full font-mono text-sm">
      {displayedLines.map((line, i) => (
        <Line key={i} text={line} />
      ))}
      {currentLine}
      {lineIndex < lines.length && <Cursor />}
    </div>
  );
};
