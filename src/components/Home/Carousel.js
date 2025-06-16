import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const totalSlides = 3; // Number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    return (
        <div className="relative w-full max-w-[80%] mx-auto">
            {/* Carousel items */}
            <div className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}>
                <img
                    src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.amazonaws.com%2FMisc%2F1731918852657.jpg&w=1920&q=75"
                    className="w-full h-[30rem] object-cover rounded-lg"
                    alt="Slide 1"
                />
            </div>
            <div className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}>
                <img
                    src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2FMisc%2F1735283041055.jpg&w=1920&q=75"
                    className="w-full h-[30rem] object-cover rounded-lg"
                    alt="Slide 2"
                />
            </div>
            <div className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}>
                <img
                    src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2FCategories%2FFruits%2520And%2520Vegetables&w=1920&q=75"
                    className="w-full h-[30rem] object-cover rounded-lg"
                    alt="Slide 3"
                />
            </div>

            {/* Left and right buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={() => setActiveSlide(activeSlide === 1 ? totalSlides : activeSlide - 1)} className="btn btn-circle">❮</button>
                <button onClick={() => setActiveSlide(activeSlide === totalSlides ? 1 : activeSlide + 1)} className="btn btn-circle">❯</button>
            </div>

            {/* Dots for navigation on top of the image */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index + 1)}
                        className={`w-3 h-3 rounded-full ${activeSlide === index + 1 ? 'bg-blue-500' : 'bg-gray-500'} transition-all duration-200`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
