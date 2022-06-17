import React from "react";
import arrow from "../assets/angle-small-down-free-icon-font (1).png";

export const DropDown = ({quiz , answer ,id , expand , setExpand}) => {
    function handleClick() {
        if(expand === id){
            setExpand(null)
        }else{
            setExpand(id)
        }
    }
  return (
    <div onClick={handleClick} className="block mb-[8px] pb-[0px] items-center rounded-[32px] bg-white hover:scale-[1.01] duration-[200ms]">
      <div className="relative flex w-full px-[2em] py-[1.2em] flex-nowrap rounded-[20px] bg-[#ffffff00] duration-[200ms] cursor-pointer">
        <img
          src={arrow}
          alt="arrow"
          className="mr-[2em] absolute top-[0px] right-[0] bottom-[0] mt-[auto] mb-[auto] ml-[auto] w-[1em] h-[1em]"
        />
        <p className="text-[#222] relative text-[1.125rem] font-normal">
        {quiz}
        </p>
      </div>
     {expand === id && <div className="static pt-[0] pr-[2em] pb-[1.2em] pl-[1.7em] bg-[#ffffff00] text-[18px] duration-[200ms]">
        <p className="block mb-[0] text-[#17273499] leading-[27px]">
          {answer}
        </p>
      </div>}
    </div>
  );
};
