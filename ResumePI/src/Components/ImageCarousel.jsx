import React, { useState } from "react";

const images = [
  "/Images/vmart11.png",
  "/Images/vmart2.png",
  "/Images/vmart3.png",
  "/Images/vmart4.png",
];
const ImageCarousel = () => {
  const [current, setcurrent] = useState(0);

  const nextSlide = () => {
    setcurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setcurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="mt-6 mb-6 relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-xl
     border-2  border-[#17c3b2] rounded-lg hover:scale-105">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full sm:h-80 object-contain transition duration-500 ease-in-out bg-white p-2"
      />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setcurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
