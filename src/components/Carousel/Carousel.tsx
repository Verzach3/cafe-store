import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Product } from "../../types/types";
import Card from "../Cards/Card";
import "./Carousel.css";
export function CarouselComponent({ product }: { product: Product[] }) {

  return (
    <div className="component">
      <h3>
        Café granito <span>marron</span>
      </h3>
      <Carousel
        withIndicators
        height={1200}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: "xs", sm: "md" }}
        loop
        align="start"
        slidesToScroll={product.length > 3 ? 3 : 1}
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
