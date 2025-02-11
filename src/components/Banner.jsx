import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel
        autoPlay
        dynamicHeight
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
      >
        <div className="w-2/3 mx-auto">
          <img
            src="https://i.ibb.co.com/0DgMjCL/tax.jpg"
            className="w-2/3 rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 mx-auto">
          <img
            src="https://i.ibb.co.com/Fs8RGfj/photography.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 mx-auto">
          <img
            src="https://i.ibb.co.com/R3jGMCG/mobile.png"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 mx-auto">
          <img
            src="https://i.ibb.co.com/hKLf206/hair.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="w-2/3 mx-auto">
          <img
            src="https://i.ibb.co.com/yFSxwWs/Food-delivery.jpg"
            className="rounded-2xl h-[200px] md:h-[350px] lg:h-[450px]"
          />
        </div>
      </Carousel>
    </div>
  );
  // return (
  //   <div className="w-2/3 mx-auto my-12 max-w-6xl">
  //     <div className="carousel w-full">
  //       <div id="slide1" className="carousel-item relative w-full">
  //         <img
  //           src="https://i.ibb.co.com/0DgMjCL/tax.jpg"
  //           className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-2xl"
  //         />
  //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
  //           <a href="#slide5" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide2" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide2" className="carousel-item relative w-full">
  //         <img
  //           src="https://i.ibb.co.com/Fs8RGfj/photography.jpg"
  //           className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-2xl"
  //         />
  //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
  //           <a href="#slide1" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide3" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide3" className="carousel-item relative w-full">
  //         <img
  //           src="https://i.ibb.co.com/R3jGMCG/mobile.png"
  //           className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-2xl"
  //         />
  //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
  //           <a href="#slide2" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide4" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide4" className="carousel-item relative w-full">
  //         <img
  //           src="https://i.ibb.co.com/hKLf206/hair.jpg"
  //           className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-2xl"
  //         />
  //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
  //           <a href="#slide3" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide5" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide5" className="carousel-item relative w-full">
  //         <img
  //           src="https://i.ibb.co.com/yFSxwWs/Food-delivery.jpg"
  //           className="w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-2xl"
  //         />
  //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
  //           <a href="#slide4" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide1" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
