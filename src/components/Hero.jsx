import { background, curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { slides } from "../constants";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] min-h-90 h-4/5"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="absolute top-0 right-0 h-screen w-full bg-cover bg-right bg-no-repeat min-h-90 transition-all duration-12000 ease delay-7500 scale-100"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="container relative">
        <div className="relative z-1 max-w-[50rem] mr-auto text-left mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Chorus design &{` `}
            <span className="block relative">Communications </span>
          </h1>
          <p className="body-1 font-light mx-auto mb-6 text-n-2 lg:mb-8">
            We are a design & communication agency based in Bangalore, India.{" "}
            <br />
            We specialise in Branding and advertising for products and services.
          </p>
          <Button href="/contact" white className="p-5">
            Connect With Us
          </Button>
          <Button href="/works" white>
            See our works
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
