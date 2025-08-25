import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  content: string;
  keyPhrase: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 2,
    breakpoints: {
      '(max-width: 768px)': { slidesToScroll: 1 }
    }
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pr-6">
              <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth h-full">
                <Quote className="text-primary mb-6" size={32} />
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-foreground block mb-2">"{testimonial.keyPhrase}"</strong>
                  {testimonial.content}
                </p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="rounded-full"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="rounded-full"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;