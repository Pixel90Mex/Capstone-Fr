import React from "react";
import  {carouselItems} from "../data/carouselItems";
import {Carousel, CarouselItem} from "react-bootstrap";

const CarouselHero = () => {
    return (
        <Carousel fade>
            {carouselItems.map((item) => {
                return (
                    <CarouselItem  style={{ maxHeight: '550px' }}>
                        <img className={item.className} src={item.src} alt={item.alt} />
                        <Carousel.Caption>
                            <h3>{item.captionTitle}</h3>
                            <p>{item.captionDescription}</p>
                        </Carousel.Caption>
                    </CarouselItem>
                )
            })}
        </Carousel>
    );
};

export default CarouselHero;