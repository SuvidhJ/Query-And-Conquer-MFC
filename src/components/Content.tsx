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
        <div className="text-8xl text-wrap text-center text-[#FDF8D6] font-fade tracking-wide">Query and Conquer</div>
        <div className="relative flex flex-col items-center justify-center font-geistMonoVF text-xl font-bold text-[#100A0B] max-w-screen-md">
          <p className="p-8 opacity-70 border-4 rounded-xl text-amber-500 border-amber-500 shirt font-stickmarket text-4xl tracking-wider cursor-stick">
          SQL Scape is an exciting escape room challenge by Mozilla Firefox Club (MFC), Bengali Literary Association (BLA), and The Next Chapter (TNC) Participants solve SQL queries to crack MCQs that guide them through the game. Combining logic, database skills, and an immersive storyline, the event tests critical thinking and teamwork. Open to all skill levels, SQL Scape offers a fun, educational experience where solving puzzles is the key to escaping the room. Challenge yourself into this.
          </p>
        </div>
        <button
          className="font-audiowide w-fit font-bold text-5xl px-4 mt-4 relative cursor-fox border-4 rounded-md p-2 active:translate-y-1 shadow-md shadow-sky-900 active:shadow-none text-sky-800 border-sky-800 blue"
          onClick={onEnterClick}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Content;
