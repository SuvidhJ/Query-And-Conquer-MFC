"use client";
import axiosInstance from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type scores = {
  score: number;
  username: string;
};
export default function AdminPage() {
  const [data, setData] = useState<scores[]>([]);
  const [openScoreChange, setOpenScoreChange] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [scoreChange, setScoreChange] = useState("0");
  async function getLeaderboardData() {
    try {
      const response = await axiosInstance.get("/leaderboard");
      if (!response.data) {
        return;
      }
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching user data");
    }
  }
  async function changeScore() {
    try {
      const response = await axiosInstance.put(`/admin/user/${selectedUser}`, {
        Score: parseInt(scoreChange),
      });
      if (!response.data) {
        return;
      }
      setOpenScoreChange(false);
      getLeaderboardData();
      setScoreChange("0");
      setSelectedUser("");
      toast.success("Score updated successfully");
    } catch (error) {
      toast.error("Error changing score");
    }
  }
  useEffect(() => {
    getLeaderboardData();
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#232323] text-white p-8">
      <h1 className="text-4xl font-geistVF">Leaderboard</h1>
      <div className="w-full md:w-1/2 mx-auto flex flex-col rounded-xl overflow-hidden mt-8">
        {data.length === 0 && (
          <div className="w-full text-center text-red-300 text-xl">
            No Data Found
          </div>
        )}
        {data.map((score: scores, index: number) => (
          <div
            className={`${
              index % 2 === 0 ? "bg-gray-700/50" : "bg-transparent"
            } text-white p-3 flex items-center justify-between px-8`}
            key={index}
          >
            <div className="">{score.username}</div>
            <div className="">{score.score}</div>
            {/* <button
              className="bg-red-500 p-2 text-sm rounded-md"
              onClick={() => {
                setSelectedUser(score.username);
                setOpenScoreChange(true);
                setScoreChange(score.score.toString());
              }}
            >
              Change Score
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
