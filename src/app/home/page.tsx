'use client'
import React, { useState } from "react";
import Content from "./Content";
// import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [entered, setEntered] = useState(false);
  // const router = useRouter()

  const handleEnterClick = () => {
    setEntered(true);
    // if (entered) {
    //   redirect('/login')
    //   router.push('/login');
    // }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <img
          src="/images/homeBg.webp"
          alt="background image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50 bg-[#00000077]"></div>
      <div className="fixed w-[90%] h-[80%] bg-[#00000044] rounded-3xl p-16 -z-40"></div>
      <div className="w-[90%] h-[80%] p-16 overflow-y-auto relative">
        {!entered ? (
          <Content entered={false} onEnterClick={handleEnterClick} />
        ) : (
          // Show something else after clicking "Enter"
          <div className="text-white text-center">You’ve entered the game!</div>
          
        )}
      </div>
    </div>
  );
};

export default HomePage;
