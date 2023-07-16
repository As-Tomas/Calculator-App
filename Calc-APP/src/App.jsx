import { useState } from "react";
import "./App.css";
import { Theme } from "./components/theme/theme";
import { Display } from "./components/display/Display";
import { KeyPad } from "./components/keyPad/KeyPad";
import { performCalculation } from "./components/logic/Logic";


function App() {
  const [count, setCount] = useState(0);

  const handleKeyClick = (keyId) => {
    const newResult = performCalculation(keyId, count);
    setCount(newResult);
  };

  const [theme, setTheme] = useState("theme-first");
  const handleThemeSelection = (themeId) => {

  if (themeId === 1) {
    setTheme("theme-first");
  } else if (themeId === 2) {
    setTheme("theme-second");
  } else if (themeId === 3) {
    setTheme("theme-third");
  } 
  }

  return (
    <>
    <div className={`${theme}`}>

      <div className="bg-skin-main-background   w-screen h-screen flex items-center ">
        <div className=" mx-auto font-League Spartan font-bold w-[300px] md:w-[375px]">
          <Theme themeId={handleThemeSelection}/>
          <Display result={count.toString()} />
          <KeyPad onKeyClick={handleKeyClick} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
