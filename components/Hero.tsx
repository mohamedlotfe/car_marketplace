"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScrolling = () => console.log("Scrolling...");

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily.
        </h1>
        <p className="hero__subtitle">
          Stremline your car rental experience with effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue test-white rounded-full mt-10"
          handleClick={handleScrolling}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
