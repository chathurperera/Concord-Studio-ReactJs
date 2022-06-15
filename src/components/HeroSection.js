import React from "react";
import heroImage from '../assets/heroImage.jpg'

function HeroSection() {
  return (
    <section className="max-w-[1450px] px-[50px] mx-auto">
      <div className="pt-56 pb-12 ">
        <span className="text-6xl leading-[74px] text-[#172734]">
          Design studio with a fixed fee.
        </span>
        <p className="text-6xl text-[#8B9399] leading-[74px]">
          We replace unreliable freelancers and expensive agencies for one flat
          monthly fee.
        </p>
      </div>
      <img src={heroImage} alt="people working in office" className="rounded-[32px]" />
    </section>
  );
}

export default HeroSection;
