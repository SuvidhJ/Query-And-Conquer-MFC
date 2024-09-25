// import React, { useState } from "react";
import Image from "next/image";
const page = ({ question }) => {
  // const [answer, setAnswer] = useState("");
  // const handleClick = () => {};
  return (
    <div className="bg-[url('/images/bg1.png')] bg-cover h-screen w-full overflow-hidden flex flex-col items-center justify-center relative gap-6 pt-4">
      <div className="relative w-[90%] h-[80vh] flex flex-col">
        <Image
          src="/images/transparent.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full z-[0]"
        />
        <h1 className="font-geistMonoVF text-white absolute top-4 left-3 font-extrabold">
          OBSIDIAN LAYER
        </h1>
        <div className="flex flex-col items-center absolute w-full h-full justify-center gap-10 p-10">
          <p className=" bg-transparent outline-none text-white w-[60%] h-[20%] pb-2 pt-2 pl-4 pr-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            corporis eaque vitae neque recusandae, quasi doloremque? Officia,
            repudiandae aut impedit et vero distinctio qui commodi, aspernatur
            nobis quam, a accusantium?
          </p>
          <input
            type="text"
            className=" bg-black outline-none text-white w-[20%] h-[20%] p-4 rounded-2xl text-xl "
            placeholder="Answer"
            // onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            // onClick={handleClick}
            className="bg-[#B69E75] rounded-lg pl-6 pr-6 pt-2 pb-2 font-geistMonoVF font-extrabold"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <button className="bg-[#B69E75] rounded-lg pl-6 pr-6 pt-2 pb-2 font-geistMonoVF font-extrabold">
          ESCAPE
        </button>
      </div>
    </div>
  );
};

export default page;
