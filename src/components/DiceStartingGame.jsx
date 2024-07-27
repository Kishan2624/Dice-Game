import React from "react";

const DiceStartingGame = ({ handlePlayBtn }) => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center md:flex-row">
        <div>
          <img
            src="dice.png"
            alt=""
            className="h-full max-h-[522px] min-h-[277px] w-full min-w-[320px] max-w-[649px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:me-8">
          <h1 className="text-4xl font-bold md:whitespace-nowrap md:text-6xl lg:text-8xl">
            DICE GAME
          </h1>
          <button
            onClick={handlePlayBtn}
            className="rounded-md border-2 border-solid border-transparent bg-black px-4 py-1 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:border-black hover:bg-white hover:font-bold hover:text-black md:w-[180px] md:self-end lg:w-[220px] lg:px-3 lg:py-[10px]"
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DiceStartingGame;
