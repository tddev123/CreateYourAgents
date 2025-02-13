"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface Agent {
  id: number;
  name: string;
  image: string;
}

const agents: Agent[] = [
  { id: 1, name: "AI Assistant", image: "/static/images/image_fx_ (1).jpg" },
  { id: 2, name: "Data Analyst", image: "/static/images/image_fx_ (2).jpg" },
  { id: 3, name: "Code Generator", image: "/static/images/image_fx_ (3).jpg" },
  { id: 4, name: "Image Creator", image: "/static/images/image_fx_ (4).jpg" },
  { id: 5, name: "Language Translator", image: "/static/images/image_fx_ (5).jpg" },
];

const AgentCards: React.FC = () => {
  // Start with the middle card centered
  const [centerIndex, setCenterIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragDistanceRef = useRef(0);

  // When the mouse is pressed down, begin dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    dragDistanceRef.current = 0;
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  // Update the container scroll based on mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - startX;
    dragDistanceRef.current = Math.abs(x);
    containerRef.current.scrollLeft = scrollLeft - x;
  };

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Only update the center card if the drag distance is minimal (i.e. it's a click, not a drag)
  const handleCardClick = (index: number) => {
    if (dragDistanceRef.current < 5) {
      setCenterIndex(index);
    }
  };

  // Determine card styles based on how far they are from the center card
  const getCardStyle = (index: number) => {
    const distance = Math.abs(index - centerIndex);
    const scale = 1 - distance * 0.2; // Each step away scales down by 20%
    const opacity = 1 - distance * 0.3; // Each step away fades by 30%
    const translateX = (index - centerIndex) * 250; // Adjust spacing between cards

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex: agents.length - distance, // Ensure the center card is on top
    };
  };

  return (
    <div
      className="w-full overflow-hidden z-10"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex min-h-[400px] items-center justify-center relative">
        {agents.map((agent, index) => (
          <div
            key={agent.id}
            className="absolute transition-all duration-300 ease-out cursor-pointer"
            style={{ ...getCardStyle(index), width: "300px" }}
            onClick={() => handleCardClick(index)}
          >
            <div className="rounded-xl shadow-lg overflow-hidden text-white">
              <Image
                src={agent.image}
                alt={agent.name}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCards;
