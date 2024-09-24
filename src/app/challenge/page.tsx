'use client';
import React, { useState } from "react";

const EscapeSequence: React.FC = () => {
  const randomWords = ["apple", "banana", "cherry", "date"];
  const correctSequence = ["apple", "banana", "cherry", "date"]; // Define the correct sequence

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false); // Track if the sequence is correct

  // Add word to the selected array
  const handleWordClick = (word: string) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  // Remove word from the selected array
  const handleSlotClick = (word: string) => {
    setSelectedWords(
      selectedWords.filter((selectedWord) => selectedWord !== word)
    );
  };

  // Check if selected sequence is correct
  const checkSequence = () => {
    if (selectedWords.length === 4) {
      const isSequenceCorrect = selectedWords.every(
        (word, index) => word === correctSequence[index]
      );

      if (isSequenceCorrect) {
        setIsCorrect(true); // If correct, set isCorrect to true
      } else {
        alert("Try Again!");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      {/* Background images */}
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <img
          src="/images/handsBg.webp"
          alt="test"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <img
          src="/images/bricks.webp"
          alt="test"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50 bg-black opacity-45"></div>

      {isCorrect ? (
        <div className={`flex items-center justify-center w-full h-full transform transition-all duration-500 ${isCorrect ? 'transition-opacity duration-1000 opacity-100' : ""}`}> {/* transition for fade-in */}
          <img
            src="/images/letter.webp"
            alt="Success"
            className="w-[50%] h-[50%] object-cover fixed -z-30"
          />
          <p className="font-geistMonoVF tracking-wide text-4xl pb-28 max-sm:text-2xl max-sm:pb-20">
            You have<br />Escaped
          </p>
        </div>
      ) : (
        <>
          {/* Random words to be selected */}
          <div className="flex justify-around mb-8">
            {randomWords.map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`relative text-white px-4 py-2 m-2 rounded-lg transform transition-transform duration-300 font-geistMonoVF ${
                  selectedWords.includes(word)
                    ? "bg-gray-400 cursor-not-allowed scale-90"
                    : " hover:scale-105"
                }`}
                disabled={selectedWords.includes(word)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="relative z-10">{word}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Slots to show selected words */}
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                onClick={() =>
                  selectedWords[idx] && handleSlotClick(selectedWords[idx])
                }
                className={`relative w-32 h-12 rounded-lg flex items-center justify-center cursor-pointer transform transition-all duration-500 font-geistMonoVF ${
                  selectedWords[idx]
                    ? " text-white opacity-100 translate-y-0"
                    : "bg-gray-100 opacity-0"
                }`}
              >
                <span className="relative z-10">
                  {selectedWords[idx] ? selectedWords[idx] : "Slot"}
                </span>
              </div>
            ))}
          </div>
            {/* <div className="w-full flex items-center justify-center"> */}

          <button
            className="mt-4 px-4 py-2 text-black font-geistMonoVF text-3xl relative tracking-wider"
            onClick={checkSequence} // Call checkSequence on button click
            disabled={selectedWords.length !== 4} // Disable if not all slots filled
            >
            Submit
            <img src="/images/enter-paper.webp" className="absolute inset-0 h-full w-full -z-10"/>
          </button>
            {/* </div> */}
        </>
      )}
    </div>
  );
};

export default EscapeSequence;
