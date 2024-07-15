import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full my-6  mt-0 ">
            <Slider {...settings} className="relative overflow-hidden">
                <div>
                    <img src="images/1.jpg" alt="Slide 1" className="w-full h-[500px] object-cover" />
                </div>
                <div>
                    <img src="images/2.jpg" alt="Slide 2" className="w-full h-[500px] object-cover" />
                </div>
                <div>
                    <img src="images/3.jpg" alt="Slide 3" className="w-full h-[500px] object-cover" />
                </div>
                <div>
                    <img src="images/4.jpg" alt="Slide 4" className="w-full h-[500px] object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
