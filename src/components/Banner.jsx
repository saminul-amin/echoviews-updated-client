import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <Carousel
        autoPlay
        dynamicHeight
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        <div className="w-2/3 lg:w-full mx-auto">
          <img
            src="https://i.ibb.co.com/0DgMjCL/tax.jpg"
            className="w-2/3 rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 lg:w-full mx-auto">
          <img
            src="https://i.ibb.co.com/Fs8RGfj/photography.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 lg:w-full mx-auto">
          <img
            src="https://i.ibb.co.com/R3jGMCG/mobile.png"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 lg:w-full mx-auto">
          <img
            src="https://i.ibb.co.com/hKLf206/hair.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 lg:w-full mx-auto">
          <img
            src="https://i.ibb.co.com/yFSxwWs/Food-delivery.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
      </Carousel>
    </div>
  );
}
