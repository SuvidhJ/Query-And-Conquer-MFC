"use client";
// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
type doors = "obsidian liar" | "onyx hall" | "shadow crypt" | "ebon veil" | "";
export default function DoorPage({ params }: { params: { id: string } }) {
  const [answer, setAnswer] = useState("");
  const [doorName, setDoorName] = useState<doors>("");
  // const handleClick = () => {};
  useEffect(() => {
    console.log(answer);
    if (
      !["obsidian liar", "onyx hall", "shadow crypt", "ebon veil"].includes(
        params.id.split("%20").join(" ")
      )
    ) {
      toast.error("Invalid Quiz Access");
    } else {
      setDoorName(params.id.split("%20").join(" ") as doors);
    }
  }, [answer]);
  return (
    <div className="bg-[url('/images/bg1.png')] bg-cover h-screen w-full overflow-hidden flex flex-col items-center justify-center relative gap-6 pt-4">
      {doorName.length > 0 && (
        <>
          <div className="relative w-[90%] h-[80vh] flex flex-col p-8">
            <Image
              src="/images/transparent.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full z-[0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <h1 className="font-geistMonoVF text-white text-xl  font-extrabold uppercase relative z-10">
              {doorName}
            </h1>
            <div className="flex flex-col w-full h-full mt-12 gap-10 relative z-10">
              <p className=" bg-transparent outline-none text-white mx-auto md:w-3/4 w-full py-2 text-sm md:text-base ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                corporis eaque vitae neque recusandae, quasi doloremque?
                Officia, repudiandae aut impedit et vero distinctio qui commodi,
                aspernatur nobis quam, a accusantium?
              </p>
              <input
                type="text"
                className=" bg-[#bb986a] outline-none font-medium w-full md:w-[70%] mx-auto px-4 py-3 rounded-lg md:rounded-2xl text-sm md:text-xl placeholder:text-black text-black"
                placeholder="Write your answer here"
                onChange={(e) => setAnswer(e.target.value.trim().toLowerCase())}
              />
              <button
                // onClick={handleClick}
                className="bg-[#B69E75] w-fit rounded-lg px-12 mx-auto text-center pt-2 pb-2 font-geistMonoVF font-extrabold"
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
        </>
      )}
      {doorName.length === 0 && (
        <div className="bg-[#00000050] backdrop-blur-sm w-1/2 h-1/2 flex flex-col gap-3 items-center justify-center  font-irish text-4xl font-semibold rounded-xl text-white">
          <p>Please Select a valid door</p>
          <Link
            href="/doors"
            className="text-base text-white bg-black px-12 py-3 rounded-md font-geistMonoVF"
          >
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
}
