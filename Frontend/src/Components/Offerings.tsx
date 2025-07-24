import { TabsDemo } from "./TabsDemo";

export default function Offerings() {
  return (
    <section
      id="who-are-we"
      className="w-full py-20 bg-yellow-50  transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black drop-shadow-sm">
          Our Offerings
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
         Rayastra offers a galaxy to your child to explore the possibilities, stars to choose the path from, and a mentor to guide you on each constellation.
        </p>

        {/* Tabs component */}
        <div className="rounded-3xl h-[45rem] shadow-xl  bg-white dark:bg-zinc-900 p-4 md:p-8">
          <TabsDemo />
        </div>
      </div>
    </section>
  );
}
