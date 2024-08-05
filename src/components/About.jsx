import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[6vh] leading-[6.5vh] '>
        We specialize in custom software development,{" "}
        <span className="text-bold underline">Web Application</span>, and IT
        consulting. Our expert team delivers innovative solutions to help your
        business thrive in today’s digital world.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-zinc-800 mt-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="px-10 py-6 mt-10 uppercase bg-zinc-900 text-white rounded-full flex gap-10 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="relative w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden">
          <img
            src="https://admin.itsnicethat.com/images/Q8DAfO_v_Vao-LYEBXj_1U8J3o8=/240336/format-webp%7Cwidth-1440/streamline-itsnicethat-Samples-A-white-2.png"
            alt="Icon"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
