// src/Testimonial.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "DR ALOK CHOPRA",
        message: "Disha ..as the name suggests, she is in the right directionI’ve known Disha early in my practice of functional medicine , and I realised how sincere and hardworking she is , and put all that energy in creating the perfect food products , which were the envy of all…not just that she would oblige everyone and make them happyThe knowledge that she has procured is enviable and I congratulate her in her steadfast efforts and wish her the best for her newest venture , and I’m sure she will flourish well .May she enrich people’s lives with her work",
        image: "images/17.png"
    },
    {
        name: "MALINI RAMANI",
        message: "Disha is a saviour for us all. She has been way ahead of her times in developing a variety of healing and nutritional remedies of all kinds. My favourites are the black garlic pods , immunity boosting shots , kefir and my number one obsession …the divine seed crackers! I can eat the entire.jar in one sitting. Thank you  Angel Disha",
        image: "images/18.png"
    },
    {
        name: "DILIP CHERIAN",
        message: "This unique “reverse engineering” that Disha brings to health and wellness consulting is the segue from product to process. Its very rare, yet rigorous.. What may seem an inside out approach will be uniquely useful given her depth of knowledge..we’re lucky that her obsession may include the solution that’s just right for us.",
        image: "images/19.png"
    },
    {
        name: "NESS WADIA",
        message: "Disha unequivocally has a huge penchant and hunger to help solve people’s issues and problems and improve their day to day life through holistic healing.She has not only studied several avenues of holistic healing, but has also been practicing her profession for several years.Her products such as Kombucha, Korean Kimchi, Sauerkraut, amongst others are indeed very beneficial if taken on a daily and continuous basis.Disha is not only passionate about what she does but cares about each person she services, and has a ‘Midas’ touch in dealing with anyone and everyone that she meets and interacts with.It would be extremely beneficial for anyone and everyone to try Disha’s array of holistic products and it would be a folly if one didn’t.",
        image: "images/20.png"
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };

    return (
        <div className="bg-teal-600 text-white py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Testimonial</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6">
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white" 
                            />
                            <h3 className="text-2xl font-semibold mb-4">{testimonial.name}</h3>
                            <p className="text-lg">{testimonial.message}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
