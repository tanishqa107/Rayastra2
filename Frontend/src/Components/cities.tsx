import { DraggableCardDemo } from "./DragAble";

const Cities = () =>{
    return(
        <>
        <section
              id="who-are-we"
              className="w-full py-20 bg-yellow-50  transition-colors"
            >
              <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
                <h1 className="text-black text-4xl md:text-6xl font-bold mb-12">
                  Cities we have left our Mark in
                </h1>

                <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
     Drag the cards to reveal if your city is in the list?

        </p>

                <DraggableCardDemo />
              </div>
            </section>
        </>
    )
}

export default Cities;