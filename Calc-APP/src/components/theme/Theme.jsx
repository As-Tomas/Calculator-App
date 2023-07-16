import { useState } from "react";

export const Theme = () => {
  const [activeButton, setActiveButton] = useState(1)
 // const activeButton = 2; // Set the active button ID here
 const handleButtonClick = (buttonId) => {
  setActiveButton(buttonId)
 }

  return (
    <div className="flex flex-row justify-between text-white text-[22px]">
      <h1>calc</h1>
      <div className="flex items-end text-[10px]">
        <div className="mr-3">THEME</div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-4 px-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="bg-th1-toggle flex flex-row rounded-lg space-x-2 mx-1 p-1">
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 1 ? "bg-red-400" : ""
              }`}
              onClick={() =>handleButtonClick(1)}
            ></button>
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 2 ? "bg-red-400" : ""
              }`}
              onClick={() =>handleButtonClick(2)}
            ></button>
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 3 ? "bg-red-400" : ""
              }`}
              onClick={() =>handleButtonClick(3)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

