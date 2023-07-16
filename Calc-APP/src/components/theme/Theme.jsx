import { useState } from "react";
export const Theme = (props) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    props.themeId(buttonId);
  };

  return (
    <div className="flex flex-row justify-between text-skin-text-color-upper text-[22px]">
      <h1>calc</h1>
      <div className="flex items-end text-[10px] ">
        <div className="mr-3">THEME</div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-4 px-2">
            <button
              className={`focus:outline-none ${
                activeButton === 1 ? "text-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              1
            </button>
            <button
              className={`focus:outline-none ${
                activeButton === 2 ? "text-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              2
            </button>
            <button
              className={`focus:outline-none ${
                activeButton === 3 ? "text-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              3
            </button>
          </div>
          <div className="bg-skin-display-background flex flex-row rounded-lg space-x-2 mx-1 p-1">
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 1 ? "bg-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            ></button>
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 2 ? "bg-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            ></button>
            <button
              className={`rounded-full w-3 h-3 ${
                activeButton === 3 ? "bg-skin-button-color-equal" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
