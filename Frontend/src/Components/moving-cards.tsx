"use client";

import { InfiniteMovingCards } from "../ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-yellow-50  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Programs Live for 2025 Batch: Our four core programs — Rayastra Scholars, CodeVoyagers, Cosmic Communicators, and MathMagicians’ Lab — are now open for registrations and live learning pilots.",
   
  },
  {
    quote:
      "Open to More Schools: We are actively inviting schools, educators, and clubs to join hands with us in bringing innovation and clarity to classrooms.",
    
  },
  {
    quote: "Feedback-Driven Improvements: Every pilot session ends with feedback from both students and teachers — helping us constantly fine-tune and adapt the Rayastra experience.",
 
  },
  {
    quote:
      "Brain-Boosting Weekly Challenges: We’ve introduced optional weekly curiosity challenges for students — puzzles, logic missions, micro-projects — that spark independent thinking and excitement beyond class hours.",
   
  },
  {
    quote:
      "Mini-Olympiad Tracks: Each subject includes optional Olympiad-aligned extensions so students who want to go deeper can prepare for coding, English, or math Olympiads in a creative, guided way.",
    
  },
];
