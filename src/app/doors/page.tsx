"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DoorComponent, { doorData } from "./DoorComponent";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { toast } from "react-toastify";
import VerifyUser from "@/lib/routeSecure";
import { doorIds } from "@/lib/constants";
import "../bg.css"

const DoorsPage = () => {
  const router = useRouter();
  const [selectedDoor, setSelectedDoor] = useState<number>(-1);
  const [mutex, setMutex] = useState(false);
  useEffect(() => {
    const secured = VerifyUser();
    if (!secured) {
      router.push("/login");
    }
    if (selectedDoor === -1) return;
    if (!doorIds[selectedDoor]) return;
    const userId = localStorage.getItem("id");
    (async () => {
      try {
        setMutex(true);
        const response = await axiosInstance.post(`/room/${userId}/enter`, {
          RoomEntered: doorIds[selectedDoor],
        });
        setMutex(false);
        if (response.status === 200) {
          toast.success("Room Entered Successfully");
          router.push(`/quiz/${doorData[selectedDoor]}`);
        }
      } catch (error) {
        setMutex(false);

        toast.error("Failed to enter the room");
      } finally {
        setSelectedDoor(-1);
      }
    })();
  }, [selectedDoor, router]);
  return (
    <div className="bg-[url('/images/doorbg.png')] relative overflow-scroll bg-cover bg-center min-h-screen w-full shirt">
      <Image
        src="/images/doors.jpg"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full z-0 opacity-30"
      />
      <button
        className="text-sm font-semibold font-geistMonoVF bg-black absolute top-2 right-2 text-white px-12 py-2 rounded-md"
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Logout
      </button>
      {!mutex && (
        <div className="flex flex-col w-full h-full min-h-screen items-center justify-between">
          <div className="z-[100] relative grid grid-cols-2 gap-2 lg:gap-0 lg:grid-cols-4  top-32">
            <DoorComponent id={1} setDoor={setSelectedDoor} />
            <DoorComponent id={2} setDoor={setSelectedDoor} />
            <DoorComponent id={3} setDoor={setSelectedDoor} />
            <DoorComponent id={4} setDoor={setSelectedDoor} />
          </div>
          {/* <button
            className="px-12 py-2 bg-[#7d4a34] relative z-[100] rounded-full text-white border-2 border-black font-geistMonoVF w-fit mb-16"
            onClick={() => {
                router.push("/challenge");
            }}
        >
            Decrypt the clues
        </button> */}
        </div>
      )}
      {mutex && (
        <div className="text-white text-3xl font-geistMonoVF z-[100]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Entering the room...
        </div>
      )}

    </div>
  );
};

export default DoorsPage;
