"use client";
import { doorData } from "@/app/doors/DoorComponent";
import axiosInstance from "@/lib/axios";
import { BACKEND_URL, doorIds } from "@/lib/constants";
import VerifyUser from "@/lib/routeSecure";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
type doors = "obsidian liar" | "onyx hall" | "shadow crypt" | "ebon veil" | "shadow fortress" | "";
type data = {
  Question: string;
  QuestionId: number;
  QuestionImage: string;
  AudioFile?: string;
  TextFile?: string; 
  Room: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  OptionD: string;
  Answered: string;
};
export default function DoorPage({ params }: { params: { id: string } }) {
  
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [doorName, setDoorName] = useState<doors>("");
  const [data, setData] = useState<data | null>(null);
  const router = useRouter();
  const [fetchAgain, setFetchAgain] = useState(0);
  const [escapeOpen, setEscapeOpen] = useState(false);
  const [clue, setClue] = useState("");
  const [isCluePresent, setIsCluePresent] = useState(false);
  const [doorId, setDoorId] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = () => {};
  useEffect(() => {
    const secured = VerifyUser();
    if (!secured) {
      router.push("/login");
    }
    if (!doorData.includes(params.id.split("%20").join(" "))) {
      toast.error("Invalid Quiz Access");
    } else {
      setDoorName(params.id.split("%20").join(" ") as doors);
    }
  }, [params.id, router]);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/question/${userId}/getQuestions`
        );
        console.log(response.data)
        if (response.status !== 200) {
          toast.error("Failed to fetch question! please try again");
          setError(true);
          return;
        }
        if (response.data.message) {
          setIsCluePresent(true);
          setClue(response.data.message);
        } else {
          setData(response.data);
          setAnswer("");
        }
        setError(false);
      } catch (error) {
        toast.error("Failed to fetch the questions");
        setError(true);
        router.push("/doors");
      }
    })();
  }, [fetchAgain, router]);

  async function handleSubmitQuestion() {
    const userId = localStorage.getItem("id");
    if (!answer || answer === "") {
      toast.error("Answer can't be empty");
      return;
    }
    if (!userId) return;
    try {
      console.log(data);
      const response = await axiosInstance.post(
        `/question/${userId}/postAnswer`,
        {
          Room: data?.Room,
          QuestionId: data?.QuestionId,
          Question: data?.Question,
          Answer: answer,
        }
      );
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      if (response.data.message) {
        toast.success(response.data.success || "Answer submitted!");
      }
    } catch (error) {
      toast.error("Incorrect Answer or Submission Failed!");
    } finally {
      setAnswer("");
      setSelectedIndex(-1);
      setFetchAgain(fetchAgain + 1);
    }
  }

  function convertDriveLink(url: string) {
    if (!url.includes("drive.google.com")) return url;

    const fileIdMatch = url.match(/d\/(.+?)\//);
    if (!fileIdMatch) return url; 

    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }

  async function handleClickEscape() {
    const index = doorData.findIndex(
      (door) => door === params.id.split("%20").join(" ")
    );
    const room = doorIds[index];
    try {
      const userId = localStorage.getItem("id");
      const response = await axiosInstance.post(`/room/${userId}/escape`, {
        RoomEntered: room,
      });
      if (response.status === 200) {
        toast.success("You have escaped the room!");
        router.push("/doors");
      }
    } catch (error) {
      toast.error("Failed to escape the room!");
      setEscapeOpen(false);
    }
  }

  return (
    <div className="bg-[url('/images/bg1.png')] bg-cover h-full min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative gap-6 pt-4">
      <button
        className="text-sm font-semibold font-geistMonoVF bg-black absolute top-2 right-2 text-white px-12 py-2 rounded-md"
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Logout
      </button>
      {doorName.length > 0 && !isCluePresent && (
        <>
          <div className="relative w-[90%] flex flex-col p-8">
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
              {data?.QuestionImage && <div className="w-full flex justify-center">
                <Image
                  src={data.QuestionImage}
                  width={400}
                  height={400}
                  alt="Question"
                  className="w-full max-w-screen-md"
                />
              </div>}
              {data?.AudioFile && (
                <div className="w-full flex justify-center">
                  <audio controls className="w-full max-w-screen-md">
                    <source src={convertDriveLink(data.AudioFile)} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              {data?.TextFile && (
                <div className="w-full flex justify-center">
                  <a
                    href={convertDriveLink(data.TextFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    View Text File
                  </a>
                </div>
              )}
              <p className=" bg-transparent outline-none text-white mx-auto md:w-3/4 w-full py-2 text-sm md:text-base ">
                {data?.Question}
              </p>
              {[data?.OptionA, data?.OptionB, data?.OptionC, data?.OptionD].map((option, index) => (
                <p key={index} className={`bg-[#bb986a] outline-none font-medium w-full md:w-[70%] mx-auto px-4 py-3 rounded-lg md:rounded-2xl text-sm md:text-xl placeholder:text-black text-black cursor-pointer1 ${selectedIndex == index && 'bg-orange-400'}`} onClick={() => {
                  setAnswer(option!)
                  setSelectedIndex(index)
                }}>{option}</p>
              ))}
              <button
                onClick={handleSubmitQuestion}
                className="bg-[#B69E75] w-fit rounded-lg px-12 mx-auto text-center pt-2 pb-2 font-geistMonoVF font-extrabold"
              >
                SUBMIT
              </button>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <button
              className="bg-[#B69E75] rounded-lg pl-6 pr-6 pt-2 pb-2 font-geistMonoVF font-extrabold"
              onClick={() => {
                setEscapeOpen(true);
              }}
            >
              ESCAPE
            </button>
          </div>
          {escapeOpen && (
            <div className="min-w-[90%] md:min-w-[30%] p-8 rounded-md min-h-40 flex items-center justify-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 z-[400] border-2 border-red-500 text-white font-geistVF">
              <h1 className="text-xl font-semibold">
                Are you sure you want to Escape the room?
              </h1>
              <p className="text-sm">
                You can&apos;t come back to the room again! and some points will
                be dedcuted!
              </p>
              <div className="w-full flex items-center gap-4 mt-8">
                <button
                  className="w-full px-4 py-2 rounded-md text-white"
                  onClick={() => {
                    setEscapeOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="w-full px-4 py-2 rounded-md text-white bg-red-500"
                  onClick={handleClickEscape}
                >
                  Escape
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {doorName.length === 0 && (
        <>
          <div className="bg-[#00000050] backdrop-blur-sm w-1/2 h-1/3 flex flex-col gap-3 items-center justify-center  font-irish text-4xl font-semibold rounded-xl text-white">
            {!isCluePresent && <p>Please Select a valid door</p>}
            <Link
              href="/doors"
              className="text-base text-white bg-black px-12 py-3 rounded-md font-geistMonoVF"
            >
              Go Back
            </Link>
          </div>
        </>
      )}
      {isCluePresent && (
        <div className="w-[90%] mx-auto">
          <button
            className="bg-[#B69E75] rounded-lg pl-6 pr-6 pt-2 pb-2 font-geistMonoVF font-extrabold"
            onClick={() => {
              handleClickEscape();
            }}
          >
            ESCAPE
          </button>
        </div>
      )}
    </div>
  );
}
