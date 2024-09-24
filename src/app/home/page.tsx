'use client';
import React, { useState } from "react";
import Content from "./Content";
import Image from "next/image";

// interface HomePageProps {}

const HomePage: React.FC = () => {
  const [entered, setEntered] = useState<boolean>(false);

  const handleEnterClick = (): void => {
    setEntered(true);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <Image
          src="/images/homeBg.webp"
          alt="background image"
          className="w-full h-full object-cover object-center"
          // width={4000}
          // height={4000}
          fill={true}
        />
      </div>
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50 bg-[#00000077]"></div>
      <div className="fixed w-[90%] h-[80%] bg-[#00000044] rounded-3xl p-16 -z-40"></div>
      <div className="w-[90%] h-[80%] p-16 overflow-y-auto relative">
        {!entered ? (
          <Content onEnterClick={handleEnterClick} />
        ) : (
          <div className="text-white text-center">You’ve entered the game! replace with video</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
