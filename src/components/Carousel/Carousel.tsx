import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import "@mantine/carousel/styles.css";
import { Product } from "../../types/types";
import Card from "../Cards/Card";
import "./Carousel.css";
import '../styleComponent.css';
import { useRef } from "react";

export function CarouselComponent({ product }: { product: Product[] }) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="component">
      <h3>Nuestros <span>productos</span></h3>
      <Carousel
      withIndicators
      height={900}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize={800}
      initialSlide={0}
      controlSize={70}
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
