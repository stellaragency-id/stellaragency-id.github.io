import React, { useState, useEffect }from 'react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate testimonials every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <div className="transition-transform duration-500 ease-in-out transform">
        <Testimonial
          key={currentIndex}
          image={testimonials[currentIndex].image}
          testimonial={testimonials[currentIndex].testimonial}
          name={testimonials[currentIndex].name}
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-violet-900 text-2xl px-4 py-2 bg-transparent rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-violet-900 text-2xl px-4 py-2 bg-transparent rounded-full"
      >
        &#8250;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full ${
              index === currentIndex ? 'bg-violet-900' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonial = ({ image, testimonial, name }) => {
  return (
    <div className="py-[3rem] px-10">
      <div className="flex flex-col md:flex-row bg-violet-900 rounded-xl shadow-lg">
        <div className="py-8 md:p-0 mx-auto max-w-[18rem] flex-none relative md:ml-12 md:my-[-2rem] md:aspect-[3/4]">
          <img src={image} alt={"testimonial-by-" + name}   
            className="rounded-full w-[16rem] h-[16rem] md:rounded-xl md:w-[100%] md:h-[100%] object-cover inset-0 " />
        </div>
        <div className="flex-1 px-4 py-8 text-center justify-center">
          <h2 className="text-md text-white">
            {testimonial}
          </h2>
          <p className="mt-8 text-md text-white">
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider;