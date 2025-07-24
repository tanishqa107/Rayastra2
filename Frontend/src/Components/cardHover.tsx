import { HoverEffect } from "../ui/card-hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Rayastra Scholars Program",
    description:
      "Covers: Full School CurriculumPurpose:\n Align with academic syllabus, including school-given tests, assignments, and projects.\nHighlights: Academic excellence + skill-based learning + critical thinking",
    link: "https://stripe.com",
  },
  {
    title: "CodeVoyagers (Computer Science & Coding)",
    description:
      "Covers: Coding, Web Dev, AI, ML, Data Science, Cyber Security, etc.\nPurpose: Build logical thinking, coding confidence, and modern tech exposure.\nHighlights: Real-world projects, Olympiads, Hackathons, trending tech stacks",
    link: "https://netflix.com",
  },
  {
    title: "Cosmic Communicators (Spoken & Written English)",
    description:
      "Covers: Speaking fluency, writing, vocabulary, grammar, stage confidence.\nPurpose: Master English communication with optional multilingual integrations (e.g. French, German, etc.).\nHighlights: Accent improvement, storytelling, multilingual integration, vocabulary enhancement",
    link: "https://google.com",
  },
  {
    title: "MathMagicians’ Lab (Mathematics)",
    description:
      "Covers: Math fundamentals, advanced reasoning, Olympiads, practical math.\nPurpose: Turn fear of math into fun with puzzles, games, logic, and real-life applications.\nHighlights: Hands-on projects, Olympiad-ready modules, logical thinking",
    link: "https://meta.com",
  },
  
];
