"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const onReset = () => {
    setCount(0);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFDAB9]">
      <div className="text-center">
        <div className="text-4xl text-center bg-white box-border h-11 w-72">
          {count}
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-orange-600" onClick={onIncrease}>
            +
          </button>
          <button className="px-4 py-2 bg-orange-600" onClick={onDecrease}>
            -
          </button>
          <button className="px-4 py-2 bg-orange-600" onClick={onReset}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
