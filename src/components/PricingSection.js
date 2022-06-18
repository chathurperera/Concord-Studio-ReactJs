import React from "react";
import mobileMockups from "../assets/mobileMockups.jpg";
import checkMark from "../assets/checkMark.png";
export const PricingSection = () => {
  const features = [
    "Unlimited requests",
    "Unlimited review",
    "Unlimited brands",
    "Unlimited team members",
    "Unlimited stock photography",
    "Native source files included",
  ];
  return (
    <section
      className='bg-[#172734] bg-[url("https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/62533b7d9f9c3504edfb7c13_blur.svg")] bg-auto bg-no-repeat'
      style={{ backgroundPositionX: "170%", backgroundPositionY: "210%" }}
    >
      <div className="max-w-[1450px]  mx-auto px-[50px]">
        <img
          src={mobileMockups}
          alt="mobileMockups"
          className="static inline-block w-full sm:mt-[4rem]  mt-[-10rem] rounded-[32px]"
        />
        <div className="mt-[7rem] text-white sm:text-[1.8rem] sm:mt-[2rem] sm:text-left sm:leading-[2.3rem] lg:text-[3.2rem] lg:leading-[3.5rem] text-[3.625rem] leading-[4.2rem] text-center">
          Flat monthly fee,
          <br />
          for all your design needs.
        </div>
        <div
          className="hover:scale-[1.01] duration-[200ms] mt-[5rem] mb-[5rem] border-solid border-[2px] border-[#ffffff1a] bg-[#ffffff03] bg-clip-border max-w-[520px] mx-[auto] p-[2rem] rounded-[32px] "
          style={{
            backgroundImage:
              "linear-gradient(202deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.04) 44%,hsla(0,0%,100%,.05))",
          }}
        >
          <div className="flex items-end">
            <p className="text-white text-[58px] leading-[3.625rem] font-medium">
              $4,995
            </p>
            <p className="pl-[8px] text-white text-[1rem] leading-[1.5rem] font-normal">
              per month
            </p>
          </div>
          <div className="mt-[1rem] text-[#ffffffb3] opacity-100">
            No contracts, no minimums, and no fees.
          </div>
          <div
            className="h-[1px] my-[2rem] "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#fff,hsla(0,0%,100%,.4) 58%,#fff)",
            }}
          ></div>
          <div className="mb-[1.4rem] text-white font-semibold">
            What's Included?
          </div>
          <div>
            {features.map((feature) => {
              return (
                <div className="flex mb-[1rem] items-start ">
                  <img
                    src={checkMark}
                    alt="check mark"
                    className="mr-[1rem] w-[20px] inline-block"
                  />
                  <div className="text-[#64ffc7]">{feature}</div>
                </div>
              );
            })}
          </div>
          <a
            href="#"
            className="mt-[1rem] py-[1.2rem] duration-[200ms] font-semibold rounded-[100px] bg-white text-[#010203] text-[1.125rem] leading-[1.8rem] text-center w-full inline-block  px-[15px] hover:scale-[1.01]"
          >
            Get started
          </a>
        </div>
        <div className="mt-[0.5rem] text-[#ffffff80] text-center">
          Interested in learning more?
        </div>
        <div className="mt-[0.5rem] text-[#ffffff80] text-center">
          <a
            href="#"
            className="static text-white inline-block pb-[4px] border-b-[1px] border-b-[solid] border-b-[#ffffff80] hover:border-b-[#fff] no-underline"
          >
            Schedule call
          </a>
        </div>
        <footer className="flex pt-[10rem] pb-[3rem] justify-between items-center">
          <div className="flex items-center">
            <p className="text-white">Concord Studio®</p>
            <p className="text-[#17273480] pl-[8px]">
              <span className="text-[#ffffff80]">
                Digital agency, reinvented
              </span>
            </p>
          </div>
          <div className="flex">
            <div className="ml-[24px] pl-[0] text-[#ffffff80]">
              <a href="#" className="text-[#ffffff80] no-underline hover:text-white">
                Twitter
              </a>
            </div>
            <div className="ml-[24px] pl-[0] text-[#ffffff80]">
              <a href="#" className="text-[#ffffff80] no-underline hover:text-white">
              Terms
              </a>
            </div>
            <div className="ml-[24px] pl-[0] text-[#ffffff80]">
              <a href="#" className="text-[#ffffff80] no-underline hover:text-white">
              Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
