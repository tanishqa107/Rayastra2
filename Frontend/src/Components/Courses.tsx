import { CardHoverEffectDemo } from "./cardHover";

const Courses = () => {
  return (
    <section
      id="who-are-we"
      className="w-full py-20 bg-yellow-50  transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-12">
          Courses We Offer
        </h1>

        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
         From counting stars to crafting stories, our courses cover every corner of the learning universe!
Explore subjects designed to spark curiosity, creativity, and confidence in every young explorer.

        </p>
        <CardHoverEffectDemo />
      </div>
    </section>
  );
};

export default Courses;
