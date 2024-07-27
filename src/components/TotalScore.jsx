import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col items-center md:justify-center">
      <h1 className="text-4xl font-semibold md:text-6xl lg:text-8xl">
        {score}
      </h1>
      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
        Total Score
      </p>
    </div>
  );
};

export default TotalScore;
