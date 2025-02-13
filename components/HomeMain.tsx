"use client";

import { Button } from "@/components/ui/button";
import AgentCards from "@/components/agent-cards";
import ParticlesComponent from '@/components/particles.jsx';


export default function HomeMain() {
  return (
    <div className="relative min-h-screen  w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent id="particles" />
      </div>

      <main className="flex flex-col items-center justify-center px-4 py-12 md:py-24 text-white relative">
        <div className="w-full text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-white">
            AI Agents
          </h1>
        </div>

        <div className="w-full">
          <AgentCards />
        </div>

        <div className="mt-8">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Try AI Agent Now
          </Button>
        </div>
      </main>
    </div>
  );
}
