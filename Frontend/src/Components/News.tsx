import { InfiniteMovingCardsDemo } from "./moving-cards";

const Updates = () => {
  return (
    <section
      id="updates"
      className="w-full h-auto py-20 bg-yellow-50  transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-12">
          Updates about US
        </h1>

        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
    Stay in zone with our latest launches, events, and exciting milestones!
From new courses to cosmic achievements — there’s always something shining at Rayastra.

        </p>


        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};

export default Updates;
