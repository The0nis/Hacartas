
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Embla from "embla-carousel-react";

interface GameScreenshot {
  title: string;
  description: string;
  image: string;
}

const gameScreenshots: GameScreenshot[] = [
  {
    title: "Bisca",
    description: "Jogue a tradicional Bisca com amigos online",
    image: "/image2-min.jpg",
  },
  {
    title: "Sueca",
    description: "Desafie amigos para um jogo de Sueca",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "King",
    description: "Experimente o jogo King com efeitos especiais",
    image: "/image1-min.jpg",
  },
  {
    title: "Copas",
    description: "Jogue Copas em qualquer lugar com seus amigos",
    image: "/image3-min.jpg",
  },
];

const GameCarousel = () => {
  const [emblaRef, setEmblaRef] = React.useState<Embla.EmblaCarouselType | null>(null);
  
  // Auto-scroll effect
  useEffect(() => {
    if (emblaRef) {
      // Auto-scroll interval (5 seconds)
      const autoScrollInterval = setInterval(() => {
        emblaRef.scrollNext();
      }, 5000);

      // Clean up interval on component unmount
      return () => clearInterval(autoScrollInterval);
    }
  }, [emblaRef]);

  return (
    <div className="w-full max-w-xl mx-auto" data-aos="fade-up"
     data-aos-duration="3000">
      <Carousel 
        className="w-full"
        setApi={setEmblaRef}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {gameScreenshots.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0 relative">
                    {/* Image with overlay */}
                    <div className="relative aspect-video overflow-hidden rounded-md">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      
                      {/* Text content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base">{item.description}</p>
                        
                        <div className="mt-4 flex justify-center">
                          {/* Decorative cards animation */}
                          <div className="relative h-20 w-14">
                            <div className="absolute top-0 left-0 h-20 w-14 bg-white rounded-md transform -rotate-12"></div>
                            <div className="absolute top-0 left-0 h-20 w-14 bg-white rounded-md transform rotate-12"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      
      {/* Progress indicator dots */}
      <div className="flex justify-center mt-4 gap-2">
        {gameScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaRef?.scrollTo(index)}
            className="h-2 w-2 rounded-full bg-gray-400 hover:bg-[#003049] focus:bg-[#003049] focus:outline-none transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
