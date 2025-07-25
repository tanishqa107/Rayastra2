import { CarouselDemo } from "./carouselDemo";


export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-yellow-50  transition-colors"
    >
       
      <div className="max-w-6xl mx-auto px-6 text-center">
        
      
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black drop-shadow-sm">
          Hear from our parents and their LOVELY Kids
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
         Real voices from our Rayastra family — heartfelt stories, smiles, and starry success!
See how learning with us has made a galaxy of difference in their lives.
        </p>

    <CarouselDemo/>
       
      </div>
    </section>
  );
}
