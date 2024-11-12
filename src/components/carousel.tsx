import { useState } from "react";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

export default function Carousel({ slides }: { slides: string[] }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="relative flex w-full h-[255px] md:h-[415px] overflow-hidden my-4">
      {length > 1 && (
        <img
          src={left}
          alt="gauche"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="droite"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        />
      )}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {index === current && (
            <img
              src={slide}
              alt="appartement à louer"
              className="object-cover w-full h-full rounded-sm md:rounded-lg"
            />
          )}
          {index === current && length > 1 && (
            <span className="hidden md:block absolute text-lg font-medium text-tertiary-color left-1/2 bottom-8 transform -translate-x-1/2">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
