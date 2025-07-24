"use client";
import { Carousel } from "../ui/carousels";
import image1 from "../assets/Testi1.jpg"
import image4 from "../assets/Testi4.jpg";
import testi2 from "../assets/Testi2.mp4";
import testi3 from "../assets/Testi3.mp4"

import type { SlideData } from "../ui/carousels";


export function CarouselDemo() {
  const slideData: SlideData[] = [
    {
      title: "~Natasha Bansal ",
      type: "image",
      src: image1,
    },
    {
      title: "~Akshit Sharma",
      type: "video",
      src: testi2,
    },
    {
      title: "~Vayu Singhania",
      type: "video",
      src: testi3,
    },
    {
      title: "~Preet Kaur",
      type: "image",
      src: image4,
    },
  ];
  

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

