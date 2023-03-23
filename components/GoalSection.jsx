import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
const GoalSection = () => {

  return (
    <>
      <div className=" px-10 bg-[#EDEDED]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left text-center space-y-5">
              {/* <h1 className="text-[44px] text-[#313131] font-semibold max-w-[680px]"> */}
              <h1 className="px-4 md:px-0 text-[#313131] text-[30px] md:text-[48px] w-[345px] md:w-[680px] h-[84px] md:h-[64px] leading:[42px] md:leading-[64px] text-left font-medium	font-serif font-semibold not-italic  max-w-[680px]">
                Goal Planning Session
              </h1>
              <p className="px-4 md:px-0 text-[#71717A] text-left text-[15px] md:text-[24px]  w-[345px] md:w-[680px] h-[80px] md:h-[96px] leading-[20px] md:leading-[32px] font-serif font-normal not-italic">
                8 week program curated to give children a perspective on the world of careers and other important skill sets, such as soft skills & personal finance.
              </p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[260px] h-[31px] md:w-[400px] md:h-[48px] rounded-[5px] md:rounded-[8px] flex mx-auto justify-center items-center cursor-pointer" onClick={() => window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  <span className=" text-[#FFFFFF] text-[10px] md:text-[16px] w-[98px] h-[16px]   md:w-[155px] md:h-[24px] leading-[16px] md:leading-[24px]  font-serif font-medium not-italic"> Download the fllyer</span>
                </div>
                <div className="relative w-[260px] h-[44px] md:w-[400px] md:h-[51px] mx-auto">
                  <Image
                    src="/Whatsapp button.png"
                    className="mt-[15.01px]"
                    alt="whatsapp"
                    width={260}
                    height={44}
                    priority
                  />
                  <div className="absolute md:left-[150px] md:top-[12.01px]  top-[.08px]  cursor-pointer mt-[16px]" onClick={() => window.open('https://web.whatsapp.com/')}>
                    <span className="ml-[100px] md:ml-0 text-center text-[10px] md:text-[16px] w-[64px] h-[16px] md:w-[99px] md:h-[24px] md:leading-[24px] leading-[16px] font-medium font-serif text-white">Enquire now</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="goal" src="/Goal Planning Session.png" width={629.99}
                height={403.12}
                priority />
            </div> */}
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-[168px] mt-[4px] md:mt-0  md:-mt-0">
              <Image className="md:mx-aut md:ml-[120px] md:mt-[190px] lg:ml-0 lg:mt-0 object-cover object-center rounded" alt="goal" src="/Goal Planning Session.png"
                width={629.99}
                height={403.12}
                priority />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoalSection;
