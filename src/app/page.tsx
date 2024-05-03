import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight 
      className="hidden md:flex left-80"
      fill="white"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
         <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
         bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 
         bg-opacity-50"> 
          Create, grow, and<br/>scale your business
         </div>
      </div>
    </div>
  );
}
