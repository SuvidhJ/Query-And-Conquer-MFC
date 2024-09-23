"use client";
import React, { useState } from "react";

const LoginPage = () => {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send login request to API
    console.log("Team Name:", teamName);
    console.log("Password:", password);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <img
          src="/images/hauntedHouse.webp"
          alt="background image"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-[80%] max-sm:w-[95%] flex items-center justify-center">
          <div className="bg-[#00000080] rounded-3xl pb-32 w-full h-full z-0 rounded-lg shadow-md w-full flex flex-col items-center justify-center">
            <h2 className="text-6xl fot-bold text-white font-semibold text-center mb-6 font-geistMonoVF mb-24">
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
                    className="block text-2xl font-light text-white font-geistMonoVF "
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
                    className="block text-2xl font-light text-white font-geistMonoVF"
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
                className="w-[200px] bg-[#00698D66] text-white font-medium py-2 px-4 rounded-full"
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
