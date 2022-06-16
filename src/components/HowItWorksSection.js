import React from "react";
import "../components/howItWorksSection.scss";
import async from "../assets/async.png";
import review from "../assets/review.png";
import claender from "../assets/claender.png";

export const HowItWorksSection = () => {
  return (
    <section className="how-it-works  bg-[#172734] ">
      <div className="pt-24 pb-24 max-w-[1450px] px-[50px] mx-auto lg:block grid grid-cols-12">
        <div className="text-white text-[26px]  col-span-4">
          How does it work?
          <br />
          <span className="text-[#ffffff80]">
            Simple, unlimited design for a fixed monthly fee.
          </span>
        </div>
        <div className="col-span-8 pl-[150px] lg:pl-[0px] lg:pt-[40px]">
          <div className="bg-[#ffffff1a] rounded-[32px] py-[15px] px-8 flex items-center mb-[16px] hover:scale-[1.01] duration-[200ms]">
            <div className="flex-[0_0_auto]">
              <img
                src={claender}
                alt="calender icon"
                className="object-contain w-[150px] inline-block"
              />
            </div>
            <div className="grow-[3]">
              <p className="text-[#fff] font-semibold text-[18px]">
                Fixed monthly rate
              </p>
              <p className="text-[#ffffffb3] text-[18px]">
                Subscribe and request your designs. No contracts, no minimums,
                and no fees.
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff1a] rounded-[32px] py-[15px] px-8 flex items-center mb-[16px] hover:scale-[1.01] duration-[200ms]">
            <div className="flex-[0_0_auto]">
              <img
                src={review}
                alt="review icon"
                className="object-contain w-[150px] inline-block"
              />
            </div>
            <div>
              <p className="text-[#fff] font-semibold text-[18px]">
                Unlimited review
              </p>
              <p className="text-[#ffffffb3] text-[18px]">
                Receive your design within a few business days, and be updated
                on the process.
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff1a] rounded-[32px] py-[15px] px-8 flex items-center mb-[16px] hover:scale-[1.01] duration-[200ms]">
            <div className="flex-[0_0_auto]">
              <img
                src={async}
                alt="async icon"
                className="object-contain w-[150px] inline-block"
              />
            </div>
            <div>
              <p className="text-[#fff] font-semibold text-[18px]">
                Totally async
              </p>
              <p className="text-[#ffffffb3] text-[18px]">
                Don't like meetings? We don't either, so we have outlawed them
                completely—async embedded within your flow.
              </p>
            </div>
          </div>
          <div className="mt-[32px] rounded-[32px] bg-[#0d161e33] p-[2rem]">
            <p className="text-[18px] text-white font-semibold mb-3">
              What do we do
            </p>
            <div className="flex">
              <div className="grow text-[18px] text-[#ffffffb3] leading-[32px]">
                <p>User interface</p>
                <p>User experience</p>
                <p>Wireframing</p>
                <p>Responsive design</p>
                <p>Web apps</p>
                <p>iOS+Android</p>
              </div>
              <div className="grow text-[18px] text-[#ffffffb3] leading-[32px]">
                <p>Design systems</p>
                <p>Social Media</p>
                <p>Online ads</p>
                <p>Email design</p>
                <p>Presentation decks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
