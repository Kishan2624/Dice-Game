import React from "react";

const Dice = ({
  handleDice,
  diceNumber,
  handleResetScore,
  handleRuleBtn,
  showRule,
}) => {
  return (
    <div className="mt-6 flex h-full w-full flex-col gap-5 md:mt-8 lg:mt-12">
      <div className="flex flex-col items-center gap-2">
        <img
          onClick={() => handleDice({ Max: 7, Min: 1 })}
          src={`dice/dice_${diceNumber}.png`}
          alt={`dice ${diceNumber}`}
          className="w-44 cursor-pointer md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]"
        />
        <p className="text-base font-semibold capitalize md:text-lg lg:text-xl">
          Click on Dice to roll
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={handleResetScore}
          className="w-44 rounded-md border-2 border-solid border-black bg-white px-4 py-1 text-base font-semibold text-black transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-black hover:font-bold hover:text-white md:w-[180px] md:text-lg lg:w-[220px] lg:px-3 lg:py-[10px] lg:text-xl"
        >
          Reset Score
        </button>
        <button
          onClick={handleRuleBtn}
          className="w-44 rounded-md border-2 border-solid border-transparent bg-black px-4 py-1 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:border-black hover:bg-white hover:font-bold hover:text-black md:w-[180px] md:text-lg lg:w-[220px] lg:px-3 lg:py-[10px] lg:text-xl"
        >
          Show Rules
        </button>
      </div>
      <div
        className={`mb-4 mt-4 flex w-full max-w-[794px] flex-col items-center self-center rounded-md bg-[#FBF1F1] px-4 py-2 md:mt-11 lg:mt-16 ${showRule ? "block" : "hidden"}`}
      >
        <h1 className="w-full text-lg font-extrabold">How to play dice game</h1>
        <p className="mt-4 w-full text-base md:mt-6">
          1. Select any number <br />
          2. Click on dice image <br />
          3. after click on dice if selected number is equal to dice number you
          4. will get same point as dice <br />
          5. if you get wrong guess then 2 point will be dedcuted <br />
        </p>
      </div>
    </div>
  );
};

export default Dice;
