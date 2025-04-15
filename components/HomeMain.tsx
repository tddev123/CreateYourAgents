"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import AgentCards from "@/components/agent-cards";
import ParticlesComponent from "@/components/particles.jsx";
import AstralProjectionHome from "./AstralProjection";

export default function HomeMain() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay failed, user interaction required:", error);
        });
      }
    };

    
    //document.addEventListener("click", playAudio, { once: true });

   return () => {
     // document.removeEventListener("click", playAudiO);
    };
  }, []);

  //const toggleMusic = () => {
    //if (audioRef.current) {
      //if (isPlaying) {
      // audioRef.current.pause();
     // } else {
       // audioRef.current.play().catch(error => {
        //  console.log("Error resuming audio:", error);
       // });
     // }
    ///  setIsPlaying(!isPlaying);
   // }
 // };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent id="particles" />
      </div>

      {/* Hidden audio element */}
      

      <main className="flex flex-col items-center justify-center px-4 py-12 md:py-24 text-white relative">
        <div className="w-full">
          <AgentCards/>
        {/* AgentCards import to swithx back to aliens */ } 
        </div>
      </main>

      {/* Glowing Music Toggle Button */}
   
    </div>
  );
}
