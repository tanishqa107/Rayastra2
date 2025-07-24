"use client";
import { Boxes } from "../ui/background-boxes";
import { FloatingDockDemo } from "./floating-dock";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <footer className="w-full z-50 mt-10 sm:mt-20 text-white py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-center space-y-8 sm:space-y-12 max-w-5xl mx-auto">
        {/* Branding and Newsletter */}
        <div className="text-center space-y-2 sm:space-y-4 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white animate-pulse">
            RAYASTRA
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base">
            Join our newsletter for the latest updates
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 max-w-md mx-auto mt-2 sm:mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 sm:p-3 border w-full sm:w-60 md:w-80 rounded-lg sm:rounded-xl flex-grow"
            />
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white text-black text-sm sm:text-base font-semibold hover:bg-zinc-200 hover:cursor-pointer transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links - Floating Dock */}
        <div className="w-full flex justify-center">
          <div className="scale-75 sm:scale-90 md:scale-100">
            <FloatingDockDemo />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-xs text-zinc-500 mt-2 sm:mt-4 text-center">
          © {new Date().getFullYear()} Rayastra. All rights reserved.
        </div>
      </footer>
    </div>
  );
}