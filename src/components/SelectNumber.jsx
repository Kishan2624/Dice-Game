import React from "react";
import NumberBtn from "./NumberBtn";

const SelectNumber = ({ numbers, handleNumber, selectNumber, error }) => {
  return (
    <div className="flex w-full flex-col gap-1 px-2 md:max-w-[350px] md:items-end md:gap-0 lg:max-w-[522px]">
      <div className={`${error ? "visiable" : "invisible"}`}>
        <p className="font-light text-red-500 md:font-bold">
          You have not selected any number
        </p>
      </div>
      <div className="flex h-full w-full items-center gap-2 md:justify-end">
        {numbers.map((number, i) => {
          return (
            <NumberBtn
              key={i}
              number={number}
              handleNumber={handleNumber}
              selectNumber={selectNumber}
            />
          );
        })}
      </div>
      <div>
        <p className="text-base font-bold md:text-xl lg:text-2xl">
          Select Number
        </p>
      </div>
    </div>
  );
};

export default SelectNumber;
