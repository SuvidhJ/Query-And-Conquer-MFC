"use client";
import React, { useState } from "react";
import Content from "@/components/Content";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

const HomePage: React.FC = () => {
  const [entered, setEntered] = useState<boolean>(false);
  const [videoEnded, setVideoEnded] = useState<boolean>(false); // Track when video ends
  const router = useRouter(); // Initialize useRouter

  const handleEnterClick = (): void => {
    setEntered(true);
  };

  const handleVideoEnd = (): void => {
    router.push("/login"); // Redirect to /login
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* Background Images */}
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <Image
          src="/images/homeBg.webp"
          alt="background image"
          className="w-full h-full object-cover object-center"
          fill={true}
        />
      </div>
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50 bg-[#00000077]"></div>
      <div className="fixed w-[90%] h-[80%]  rounded-3xl p-16 -z-40"></div>

      {/* Conditionally Render Content or Video */}
      {!entered ? (
        <div className="w-full md:w-[90%] h-[80%] p-4 md:p-16 relative -top-12 md:top-0">
          <Content onEnterClick={handleEnterClick} />
        </div>
      ) : (
        <div className=" flex items-center justify-center fixed top-0 left-0 w-screen">
          <div className="w-full h-screen bg-black absolute top-0 left-0 z-[-1]"></div>
          <video
            className="w-screen h-screen relative z-100 "
            autoPlay
            muted={false}
            onEnded={() => setVideoEnded(true)} // Handle video end
          >
            <source src="/images/introVid.webm" type="video/webm" />
            Your browser does not support the video tag...
          </video>

          {videoEnded && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                className="font-geistVF font-bold text-8xl px-4 mt-4 relative"
                onClick={handleVideoEnd} // Redirect to /login
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
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
