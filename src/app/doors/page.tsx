import React from "react";
import Image from "next/image";
import DoorComponent from "./DoorComponent";
import { useState } from "react";
const DoorsPage = () => {
  return (
    <div className="bg-[url('/images/doorbg.png')] relative h-screen w-full overflow-hidden  ">
      <Image
        src="/images/image 14.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full z-[0]"
      />
      <div className="z-[100] relative flex flex-wrap justify-center gap-40 top-32">
        <DoorComponent myId={1} className="w-1/2 sm:w-1/4" />
        <DoorComponent myId={2} className="w-1/2 sm:w-1/4" />
        <DoorComponent myId={3} className="w-1/2 sm:w-1/4" />
        <DoorComponent myId={4} className="w-1/2 sm:w-1/4" />
      </div>
    </div>
  );
};

export default DoorsPage;
