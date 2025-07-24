import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
    const [initialScrollDone, setInitialScrollDone] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: "Traditional Technology",
      content: "We are here to expand the learning possibilities for the young minds, we blend in together the offline experience into the online learning, by frequently conducting offline follow ups, PTMs, sessions and workshops for the kids and the parents in your cities.",
      image: "https://images.unsplash.com/photo-1641569707854-c80945fb4719?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Turning Curiosity into Clarity",
      content: "At Rayastra, we believe every child is born curious — it's the spark that drives discovery. Our mission is to guide that spark through the vast galaxy of learning, helping kids connect the dots between questions and understanding. We turn “Why?” into “Wow!” with fun, personalized, and meaningful education.",
      image: "https://images.unsplash.com/photo-1613271752699-ede48a285196?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Learning That Feels Like an Adventure",
      content: "We blend real life experience with education. Whether it’s through interactive videos, 1:1 mentorship, or engaging activities, our platform transforms everyday learning into a journey through the stars. Kids don’t just study here — they explore, create, and grow.",
      image: "https://images.unsplash.com/photo-1565425518476-3229123699c5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "A Galaxy of Possibilities for Every Child",
      content: "We imagine a future where education is limitless — not locked in textbooks, but open like the night sky. Our vision is to build a world where every child, no matter where they come from, can reach for the stars and achieve their full potential. With Rayastra, every child’s path is lit with possibility.",
      image: "https://plus.unsplash.com/premium_photo-1681843577413-c5a1c41dd0a3?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollTop;
      const sectionHeight = container.scrollHeight / sections.length;
      const newIndex = Math.floor(scrollPosition / sectionHeight);

        if (!initialScrollDone && scrollPosition > 10) {
        setInitialScrollDone(true);
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);

     if (container && !initialScrollDone) {
      const sectionHeight = container.scrollHeight / (sections.length + 1);
      container.scrollTo({
        top: sectionHeight * 0.7, // Scroll to 70% of first section
        behavior: 'smooth'
      });
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, sections.length, initialScrollDone]);

  return (
    <section
  ref={scrollContainerRef}
  className="h-screen w-full flex flex-col lg:flex-row overflow-y-auto snap-y snap-mandatory bg-yellow-50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
>
  {/* Left Half (Sticky Image Pane) */}
  <div className="w-full lg:w-1/2 sticky top-10 h-[40vh] lg:h-screen flex items-center justify-center px-6 md:px-12 py-6 lg:py-0">
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Right Half (Scrollable Content) */}
  <div className="w-full lg:w-1/2">
    {/* Introduction Section */}
    <div className="h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 snap-start">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-black text-center lg:text-left">
          Who Are We?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-center lg:text-left">
          At Rayastra, we are dreamers, explorers, and passionate educators on a mission to transform curiosity into clarity. Founded with the belief that learning should be fun, engaging, and limitless, we create a space where young minds can discover the universe of knowledge at their own pace.
        </p>
        <div className="flex items-center justify-center mt-10">
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
          <span className="mx-4 text-gray-500 font-medium tracking-wider text-sm">SCROLL TO EXPLORE</span>
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
        </div>
      </div>
    </div>

    {/* Content Sections */}
    {sections.map((section, index) => (
      <div
        key={index}
        className="h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 snap-start"
      >
        <div className={`max-w-2xl transition-all duration-700 ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-12'}`}>
          <span className="text-sm font-semibold text-blue-600 tracking-wider mb-4 block">
            {`0${index + 1}`}
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">{section.title}</h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{section.content}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}