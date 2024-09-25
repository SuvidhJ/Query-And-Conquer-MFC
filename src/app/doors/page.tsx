import React from "react";
import Image from "next/image";
import DoorComponent from "./DoorComponent";
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
      <div className="z-[100] relative grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-4  top-32">
        <DoorComponent id={1} />
        <DoorComponent id={2} />
        <DoorComponent id={3} />
        <DoorComponent id={4} />
      </div>
    </div>
  );
};

export default DoorsPage;
