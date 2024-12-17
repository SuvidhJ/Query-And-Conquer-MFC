"use client";
import React, { useState } from "react";
import Content from "@/components/Content";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import "./bg.css"

const HomePage: React.FC = () => {
  const [entered, setEntered] = useState<boolean>(false);
  // const [videoEnded, setVideoEnded] = useState<boolean>(true); // Track when video ends
  const router = useRouter(); // Initialize useRouter

  const handleEnterClick = (): void => {
    router.push("/login");
  };
  
  return (
    <div className="w-full h-full min-h-screen cursor-fox">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-full min-h-screen overflow-hidden -z-50 bg-neutral-800">
        <Image
          fill={true}
          src="/images/landing.jpg"
          alt="background image"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
      <Content onEnterClick={handleEnterClick} />
    </div>
  );
};

export default HomePage;
