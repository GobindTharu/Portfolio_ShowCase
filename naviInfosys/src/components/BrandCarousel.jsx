import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { brands } from "../utils/crouselbrands";

const BrandCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-[0_0_200px] mx-4 relative group"
                >
                  <a
                    href={brand.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className="w-full h-24 object-contain transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background/90"
            onClick={scrollPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background/90"
            onClick={scrollNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
