"use client";
import { useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { FaBook, FaDice, FaFilePowerpoint, FaVideo } from "react-icons/fa";

export function Supports({ supports }: { supports: { text: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nosSupports = [
    { name: "Études de cas", icon: FaBook, color: "#2845AD" },
    {
      name: "Présentation PowerPoint",
      icon: FaFilePowerpoint,
      color: "rgb(234 88 12)",
    },
    { name: "Jeux de rôle", icon: FaDice, color: "rgb(5 150 105)" },
    { name: "Vidéos de formation", icon: FaVideo, color: "rgb(225 29 72)" },
  ];

  return (
    <ul className='mt-8 flex justify-between md:space-y-12 md:flex-col md:w-8'>
      {supports.map((support, index) => (
        <Tooltip key={support.text} content={support.text}>
          <li
            key={support.text}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {nosSupports.map(
              (item) =>
                item.name === support.text && (
                  <span
                    key={item.name}
                    style={{
                      color: item.color,
                      opacity: hoveredIndex === index ? 0.5 : 1,
                      transition: "color 0.3s",
                      cursor: "pointer",
                    }}
                  >
                    {item.icon({ size: 32 })}
                  </span>
                )
            )}
          </li>
        </Tooltip>
      ))}
    </ul>
  );
}
