import React, { useState } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import arrow from "../assets/angle-small-down-free-icon-font (1).png";
import { DropDown } from "./DropDown";

export const HowWeWorkSection = () => {
  const [expand, setExpand] = useState(null);
  return (
    <section className="bg-[#f1f2f2]">
      <div className="max-w-[1450px] mx-auto px-[50px]">
        <div className="pt-[6rem] pb-[18px] lg:block grid grid-cols-12">
          <div className="text-[#172734] text-[26px]  col-span-4">
            How we work?
            <br />
            <span className="text-[#00000080]">
              We act as your partner, not a consultant.
            </span>
          </div>
          <div className="col-span-8 relative lg:mt-[50px]">
            <img
              src="https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499110f0e2ee05a8b456_arrow-1.svg"
              className="absolute left-[10px] lg:hidden top-[227px] z-[99]"
              alt=""
            />
            <img
              src="	https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499110f0e2ee05a8b456_arrow-1.svg"
              className="absolute left-[10px] lg:hidden top-[71px] z-[99]"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/62517a5448ad13673bbfeb7f/6255499397cb952c5f0dcb31_arrow-2.svg"
              className="absolute right-[-10px] lg:hidden top-[50px] z-[99]"
              alt=""
            />
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
        <div className="pt-[6em] lg:block grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8 ">
            <DropDown
              id={1}
              expand={expand}
              setExpand={setExpand}
              quiz="How do unlimited requests work?"
              answer="Once you subscribe, you can add as many design requests to your queue as you want, and we will deliver them one by one."
            />
            <DropDown
              id={2}
              expand={expand}
              setExpand={setExpand}
              quiz="How quickly will i receive my design work? "
              answer="Depending on the task size, you will receive your design within a few business days. Some tasks are more complex than others."
            />
            <DropDown
              id={3}
              expand={expand}
              setExpand={setExpand}
              quiz="Who is behind Concord Studio"
              answer="We are a group of London-based Product Designers with an experience of 10+ years. We worked for brands like Nissan, Ford, Meta, HSBC, etc."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="What programs do you design in?"
              answer="We use Figma, best for handovers and online collaboration."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="How do i request designs? "
              answer="We use Trello for task management. Trello allows you to create your task and attach your assets if you need it. Prefer to explain your task without writing? Simply attach your Loom video link on task."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="What if I don't like the design? "
              answer="Simply request a review of your task, and we will work together to make sure it's 100% right."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="Can i pause my subscription? "
              answer="Yes, you can pause anytime. No contracts, no minimums, and no fees."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="Why is it a monthly subscription ? "
              answer="Running a business is hard; finding a freelancer or dealing with expensive design agencies are harder and more costly. With our monthly subscription, you can get a reliable design partner."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="What if i need more ways to communicate? "
              answer="Although Trello is excellent for handling all communications, we have an add on for businesses that want more on-demand communications. With an additional fee, we can integrate you with Slack. Contact us for more info."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="What is not included in the subscription? "
              answer="We don't include custom illustrations and animations, weekly or daily calls, workshops, hosting and domain costs, or paid fonts."
            />
            <DropDown
              id={4}
              expand={expand}
              setExpand={setExpand}
              quiz="I have more questions; what do I do? "
              answer="Please reach out through our chat, or schedule a call."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
