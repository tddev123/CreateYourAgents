import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  image: string;
  video: string;
}

const agents: Agent[] = [
  { id: 1, name: "Instagram", image: "/static/images/image_fx_ (17).jpg"},
  { id: 2, name: "Facebook", image: "/static/images/image_fx_ (19).jpg", video: "/static/images/fbagentvid.mp4" },
  { id: 3, name: "Universal", image: "/static/images/alien11111.png"},
  { id: 4, name: "Youtube", image: "/static/images/image_fx_ (24).jpg", video: "/static/images/Youtubeshortsbot.mp4" },
  { id: 5, name: "CustomerService", image: "/static/images/image_fx_ (15).jpg"},
];

const AgentCards: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragDistanceRef = useRef(0);
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    dragDistanceRef.current = 0;
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - startX;
    dragDistanceRef.current = Math.abs(x);
    containerRef.current.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCardClick = (index: number) => {
    if (dragDistanceRef.current < 5) {
      setCenterIndex(index);
    }
  };

  const toggleVideo = (id: number) => {
    setOpenVideoId((prev) => (prev === id ? null : id));
  };

  const getCardStyle = (index: number) => {
    const distance = Math.abs(index - centerIndex);
    const scale = 1 - distance * 0.2;
    const opacity = 1 - distance * 0.3;
    const translateX = (index - centerIndex) * 250;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex: agents.length - distance,
    };
  };

  const handlePrevious = () => {
    setCenterIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => Math.min(agents.length - 1, prev + 1));
  };

  return (
    // The outer container now has a default margin-top of 28 (mobile)
    // that resets to 0 on medium screens and up.
    <div className="relative mt-28 md:mt-0">
      <div
        className="w-full overflow-hidden z-10 -mt-24"
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
                  className="w-full h-[200px] object-cover transform transition-transform duration-200 hover:scale-110"
                  onClick={() => toggleVideo(agent.id)}
                />
                {openVideoId === agent.id ? (
                  <div className="w-full flex flex-col items-center mt-2">
                    {/* Button positioned above the video */}
                    <Link href={`/${agent.name}`}>
                      <button className="mb-4 mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Price
                      </button>
                    </Link>
                    {/* Video player */}
                    <video controls className="w-3/4 rounded-lg shadow-lg">
                      <source src={agent.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  // Only display the agent name when video is not open
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button
          onClick={handlePrevious}
          disabled={centerIndex === 0}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={centerIndex === agents.length - 1}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AgentCards;
