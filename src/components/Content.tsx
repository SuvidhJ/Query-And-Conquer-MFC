import React from "react";
import Image from "next/image";

interface ContentProps {
  onEnterClick: () => void;
}

const Content: React.FC<ContentProps> = ({ onEnterClick }) => {
  return (
    <div className="items-center justify-center w-full h-full grid max-sm:flex-col max-sm:gap-8 sm:grid-cols-[0.9fr_1.1fr]">
      <div
        className="flex flex-col items-center justify-center gap-10"
        id="left-side"
      >
        <div id="upper" className="max-h-[50%]">
          <Image
            width={3500}
            height={3500}
            src="/images/cts-logo.webp"
            alt="An image"
            className="h-1/2"
          />
        </div>
        <div
          className="font-geistMonoVF text-2xl md:text-3xl text-center text-[#FDF8D6] tracking-wider"
          id="lower"
        >
          <p>“Will you survive?</p>
          <p>follow the clues,</p>
          <p>unravel the mystery!”</p>
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center font-geistMonoVF text-xl font-bold gap-3 text-[#100A0B] "
        id="right-side"
      >
        <Image
          width={3500}
          height={3500}
          src="/images/paperBg.webp"
          className="absolute -z-20 max-sm:hidden "
          alt="paper bg"
        />
        <p className="px-3 md:px-16 pt-8 max-lg:bg-[#FDF8D6] opacity-70 max-sm:rounded max-sm:pb-8 max-xl:text-sm">
          Welcome to the Virtual Escape Room! <br />
          You’re locked in a mansion, and time is running out. The only way to
          stop what’s coming is to crack the codes and solve the puzzles ahead.
          Each room holds secrets that will lead you to the next round—choose
          wisely, think fast, and work together. Solve the riddles, find the
          hidden words, and unlock the path to freedom. Your journey begins now…
          can you escape before it’s too late?
        </p>
        <button
          className="font-geistVF font-bold text-5xl px-4 mt-4 relative"
          onClick={onEnterClick}
        >
          <Image
            width={3500}
            height={3500}
            src="/images/enter-paper.webp"
            className="absolute inset-0 h-full w-full -z-10"
            alt="enter paper"
          />
          <span className="flex flex-row">
            <span className="inline-block">ENTER</span>
            <svg
              className="w-16 h-16 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Content;
