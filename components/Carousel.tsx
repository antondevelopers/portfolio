import React, { useState, useEffect } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import svgsCarousel from "./SvgsCarousel";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Velocidade de transição em milissegundos
        slidesToShow: 1, // Quantidade de slides a serem exibidos por vez
        slidesToScroll: 1, // Quantidade de slides a serem percorridos por vez
        autoplay: true, // Auto play habilitado
        autoplaySpeed: 1000, // Velocidade de auto play em milissegundos
        arrows: false,
    };

    const [svgList, setSvgList] = useState([]);

    useEffect(() => {
        setSvgList(svgsCarousel);
    }, []);

    return (
        <div className="h-[110px] pl-24 ">
            <Slider {...settings}>
                {svgList.map((svg, index) => (
                    <div key={index}>
                        <Image
                            src={svg}
                            alt={`svg-${index}`}
                            width={92}
                            height={92}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
