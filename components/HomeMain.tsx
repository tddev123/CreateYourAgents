"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import AgentCards from "@/components/agent-cards";
import ParticlesComponent from "@/components/particles.jsx";

export default function HomeMain() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay failed, user interaction required:", error);
        });
      }
    };

    // Try playing automatically
    playAudio();

    // Fallback: play on user interaction
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent id="particles" />
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/static/images/Crazy.mp3" loop />

      <main className="flex flex-col items-center justify-center px-4 py-12 md:py-24 text-white relative">
        <div className="w-full">
          <AgentCards />
        </div>
      </main>
    </div>
  );
}
