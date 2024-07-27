import React from "react";

const NumberBtn = ({ number, handleNumber, selectNumber }) => {
  return (
    <div
      className={`h-full max-h-[72px] w-full max-w-[72px] items-center justify-center rounded-md border-2 border-solid border-black transition-colors duration-300 ease-in-out ${selectNumber == number ? "bg-black" : "bg-white"} ${selectNumber == number ? "text-white" : "text-black"}`}
    >
      <button
        onClick={handleNumber}
        className="h-full w-full text-2xl font-bold"
      >
        {number}
      </button>
    </div>
  );
};

export default NumberBtn;
