"use client";
import React, { useEffect, useState } from "react";
import "../bg.css"
import Image from "next/image";
import axios from "axios";
import { BACKEND_URL } from "@/lib/constants";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [teamName, setTeamName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    const token = Cookies.get("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      router.push("/doors");
    }
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!teamName || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await axiosInstance.post("user/login", {
        Username: teamName,
        Password: password,
      });
      if (!response.data.token) {
        toast.error("Invalid Credentials");
        return;
      }
      toast.success("Login Successfull");
      Cookies.set("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("username", response.data.username);
      router.push("/doors");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-full min-h-screen overflow-hidden -z-50 bg-neutral-800 opacity-90">
        <Image
          fill={true}
          src="/images/login-new.jpg"
          alt="background image"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] max-sm:w-[95%] flex items-center justify-center bg-slate-600 bg-opacity-90 rounded-3xl">
          <div className="bg-[#00000080] rounded-3xl w-full h-full z-0  shadow-md l flex flex-col items-center justify-center">
            <h2 className="text-6xl fot-bold text-white font-semibold text-center font-audiowide mb-24">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex items-center justify-center flex-col w-full gap-4"
            >
              <div className="w-full flex items-center justify-center flex-col gap-2">
                <div className="w-[500px] max-sm:w-full px-4">
                  <label
                    htmlFor="teamName"
                    className="block text-2xl font-light text-white font-elegant"
                  >
                    TEAM NAME
                  </label>
                </div>
                <input
                  type="text"
                  id="teamName"
                  className="mt-1 p-2 px-6 text-xl w-[500px] max-sm:w-[90%] bg-[#FFFFFF38] h-[50px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div className="w-full flex items-center justify-center flex-col gap-2">
                <div className="w-[500px] max-sm:w-full px-4">
                  <label
                    htmlFor="password"
                    className="block text-2xl font-light text-white font-elegant"
                  >
                    PASSWORD
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  className="mt-1 p-2 px-6 text-xl w-[500px] max-sm:w-[90%] bg-[#FFFFFF38] h-[50px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-[200px] bg-[#00698D66] text-white font-medium py-2 px-4 rounded-full font-elegant"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
