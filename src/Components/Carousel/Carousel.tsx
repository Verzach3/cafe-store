import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Product } from "../../types/types";
import Card from "../Cards/Card";
export function CarouselComponent({ product }: { product: Product[] }) {
  const autoplay = useRef(Autoplay({ delay: 2400 }));

  return (
    <div className="component">
      <h3>
        Café granito <span>marron</span>
      </h3>
      <Carousel
        withIndicators
        height={900}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        slidesToScroll={1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {product.map((product) => (
          <Carousel.Slide key={product.id}>
              <Card product={product} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
