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
      <h1 className="text-4xl font-geistVF">ADMIN PORTAL</h1>
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
            <button
              className="bg-red-500 p-2 text-sm rounded-md"
              onClick={() => {
                setSelectedUser(score.username);
                setOpenScoreChange(true);
                setScoreChange(score.score.toString());
              }}
            >
              Change Score
            </button>
          </div>
        ))}
      </div>
      {openScoreChange && (
        <div className="w-1/2 p-8 h-[50%] bg-[#111111] border-2 border-white rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-geistVF mb-8">Change Score</h1>
          <input
            type="text"
            placeholder="Username"
            value={selectedUser}
            onChange={(e) => {
              setSelectedUser(e.target.value);
            }}
            className="text-xl bg-transparent px-4 py-3 w-full border-2 border-white/30 rounded-md"
          />
          <input
            type="number"
            placeholder="Score"
            value={scoreChange}
            onChange={(e) => {
              setScoreChange(e.target.value);
            }}
            className="text-xl mt-3 bg-transparent px-4 py-3 w-full border-2 border-white/30 rounded-md"
          />
          <div className="w-full flex items-center justify-center gap-8 mt-6">
            <button
              type="button"
              className="text-lg font-geistVF uppercase bg-transparent px-12 py-3 rounded-md"
              onClick={() => {
                setOpenScoreChange(false);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="text-lg font-geistVF uppercase bg-red-600 px-12 py-3 rounded-md"
              onClick={changeScore}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
