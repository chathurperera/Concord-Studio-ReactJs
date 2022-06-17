import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

export const HowWeWorkSection = () => {
  return (
    <section className="bg-[#f1f2f2]">
      <div className="max-w-[1450px] mx-auto px-[50px]">
        <div className="pt-[6rem] pb-[18rem] lg:block grid grid-cols-12">
          <div className="text-[#172734] text-[26px]  col-span-4">
            How we work?
            <br />
            <span className="text-[#00000080]">
              We act as your partner, not a consultant.
            </span>
          </div>
          <div className="col-span-8 relative lg:mt-[50px]">
            <img src="https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499110f0e2ee05a8b456_arrow-1.svg" className="absolute left-[10px] lg:hidden top-[227px] z-[99]" alt="" />
            <img src="	https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499110f0e2ee05a8b456_arrow-1.svg" className="absolute left-[10px] lg:hidden top-[71px] z-[99]" alt="" />
            <img src="https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499397cb952c5f0dcb31_arrow-2.svg" className="absolute right-[-10px] lg:hidden top-[50px] z-[99]" alt="" />
            <div className="flex mb-[1rem] items-start py-[2rem] pr-[6rem] pl-[2rem] rounded-[32px] bg-white hover:scale-[1.01] duration-[200ms]">
              <img
                className="w-[44px] mr-[2rem] flex-[0_0_auto] inline-block "
                src={one}
                alt="one"
              />
              <div>
                <p className="mb-[5px] text-[#172734] font-semibold">
                  Kick off
                </p>
                <p className="text-[#17273499] text-[1.125rem] leading-[22px]">
                  Tell us about your product and the challenges you're trying to
                  solve, and how we can help.
                </p>
              </div>
            </div>
            <div className="flex mb-[1rem] items-start py-[2rem] pr-[6rem] pl-[2rem] rounded-[32px] bg-white hover:scale-[1.01] duration-[200ms]">
              <img
                className="w-[44px] mr-[2rem] flex-[0_0_auto] inline-block "
                src={two}
                alt="one"
              />
              <div>
                <p className="mb-[5px] text-[#172734] font-semibold">
                  Understanding
                </p>
                <p className="text-[#17273499] text-[1.125rem] leading-[22px]">
                  We will understand the product and business more as we
                  collaborate with your team.
                </p>
              </div>
            </div>
            <div className="flex mb-[1rem] items-start py-[2rem] pr-[6rem] pl-[2rem] rounded-[32px] bg-white hover:scale-[1.01] duration-[200ms]">
              <img
                className="w-[44px] mr-[2rem] flex-[0_0_auto] inline-block "
                src={three}
                alt="one"
              />
              <div>
                <p className="mb-[5px] text-[#172734] font-semibold">
                  Delivery
                </p>
                <p className="text-[#17273499] text-[1.125rem] leading-[22px]">
                  We give you a turnaround estimate based on a scoped problem
                  and deliver on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
