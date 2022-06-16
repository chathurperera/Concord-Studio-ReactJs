import React from "react";
import qouteImage from "../assets/qouteImage.jpg";

export const QuoteSection = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-[1450px] mx-auto px-[50px]">
        <div className="py-[6rem]">
          <div className="relative">
            <img
              className=" rounded-[32px] max-w-[752px] w-[100%] md:rounded-bl-[0px] md:rounded-br-[0px] inline-block"
              src={qouteImage}
              alt="a person holding a phone"
            />
            <div className=" lg:max-w-[500px] md:max-w-none lg:bottom-[-20%] lg:left-[20%]   md:static md:rounded-tl-[0px] md:rounded-tr-[0px]  absolute left-[40%] top-auto right-[0] bottom-[10%] pt-[2.1rem] pr-[2.5rem] pb-[2.5rem] pl-[2.5rem] rounded-[32px] bg-[#06c]">
              <p className="text-[#ffffffe6] lg:text-[1.2rem] text-[1.5rem] leading-[2.2rem] ">
                Concord has delivered a stunning design piece in a concise
                amount of time, all aligned with our branding. Their designs are
                so in detail and optimized for the best user experience.
              </p>
              <p className="mt-[1rem] text-[#ffffffb3] text-[1.125rem]">
                Matt G, Orderswift
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
