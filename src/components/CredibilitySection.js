import React from "react";
import company1 from "../assets/meta.png";
import company2 from "../assets/hsbc.png";
import company3 from "../assets/accenture.png";
import company4 from "../assets/currys.png";
import company5 from "../assets/6251910bfcf3507e9bf41636_Group 283.png";
import company6 from "../assets/6251910bf9997ef18b409901_Group 287.png";
import company7 from "../assets/6251910becced814c6b422fe_Group 282-1.png";
import company8 from "../assets/6251910baceede49c0ec62df_Group 291-1.png";
import company9 from "../assets/6251910b8522bc064275a7e7_Group 289-1.png";
import company10 from "../assets/6251910b102f4bd9a886ea03_Group 288.png";
import company11 from "../assets/6251910b83aa8c8857324e3e_Group 291.png";
import company12 from "../assets/6251910b46ecbea4cbeffefa_Group 282.png";

function CredibilitySection() {
  return (
    <section className="   bg-[#F1F2F2] mt-[-192px]">
      <div className="max-w-[1450px] mx-auto px-[50px] pt-[256px] pb-[96px] lg:block grid grid-cols-12">
        <div className="col-span-4">
          <p className="text-[#172734] text-2xl">Who do we work with?</p>
          <p className="text-[#8B9399] text-2xl">
            Our services have been trusted by 100+ more companies.
          </p>
        </div>
        <div className="col-span-8 grid grid-cols-4">
          <div className='px-2'>
            <img src={company1} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company2} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company3} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company4} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company5} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company6} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company7} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company8} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company9} alt="company logo" className='w-32 mx-auto' />
          </div>
          <div className='px-2'>
            <img src={company10} alt="company logo" className='w-32 mx-auto2' />
          </div>
          <div className='px-2'>
            <img src={company11} alt="company logo" className='w-32 mx-auto2' />
          </div>
          <div className='px-2'>
            <img src={company12} alt="company logo" className='w-32 mx-auto2' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
