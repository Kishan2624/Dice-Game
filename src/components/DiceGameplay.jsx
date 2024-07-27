import React, { useState } from "react";
import Dice from "./Dice";
import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";

const DiceGameplay = ({
  numbers,
  handleNumber,
  selectNumber,
  handleDice,
  diceNumber,
  score,
  handleResetScore,
  error,
  handleRuleBtn,
  showRule,
}) => {
  return (
    <>
      <div className="container mx-auto mt-4 flex h-full w-full flex-col justify-center md:mt-0">
        <div className="flex max-h-[151px] max-w-full flex-col gap-4 md:mx-10 md:mt-3 md:min-h-[120px] md:flex-row md:justify-between lg:mx-20 lg:min-h-[151px]">
          <TotalScore score={score} />
          <SelectNumber
            numbers={numbers}
            handleNumber={handleNumber}
            selectNumber={selectNumber}
            error={error}
          />
        </div>
        <Dice
          handleDice={handleDice}
          diceNumber={diceNumber}
          handleResetScore={handleResetScore}
          showRule={showRule}
          handleRuleBtn={handleRuleBtn}
        />
      </div>
    </>
  );
};

export default DiceGameplay;
