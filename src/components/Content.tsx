import React from "react";
import Image from "next/image";
import "../app/bg.css"

interface ContentProps {
  onEnterClick: () => void;
}

const Content: React.FC<ContentProps> = ({ onEnterClick }) => {
  return (
    <div className="justify-center flex w-full h-full min-h-screen p-10">
      <div className="max-w-screen-lg flex flex-col gap-10 items-center">
        <div className="text-8xl max-md:text-6xl text-wrap text-center text-[#FDF8D6] font-fade tracking-wide">CyberSec 101</div>
        <div className="relative flex flex-col items-center justify-center font-geistMonoVF text-xl font-bold text-[#100A0B] max-w-screen-md">
          <p className="p-8 opacity-70 border-4 rounded-xl text-amber-500 border-amber-500 shirt font-stickmarket text-4xl max-md:text-3xl max-sm:text-2xl tracking-wider cursor-stick">
          CyberSec101 plunges into the core if cybersecurity unraveling encryption, fortifying data, and dissecting real world vulnerabilities. Through dynamic discussions, hands-on exercises, and a high-stakes Capture The Flag challenge, participants will crack ciphers, expose hidden exploits, and implement security tactics in real time. Whether securing systems or unveiling hidden threats, this session sharpens instincts and equips you with the expertise to thrive in an ever-evolving cyber battleground.
          </p>
        </div>
        <button
          className="font-audiowide w-fit font-bold text-5xl max-md:text-3xl px-4 mt-4 relative cursor-fox border-4 rounded-md p-2 active:translate-y-1 shadow-md shadow-sky-900 active:shadow-none text-sky-800 border-sky-800 blue"
          onClick={onEnterClick}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Content;
