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
    console.log('Clicked key ID:', keyId);
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
    console.log('Clicked key ID:', themeId);
  }

  return (
    <>
    <div className={`${theme}`}>

      <div className="bg-skin-main-background   w-screen h-screen  ">
        <div className=" mx-auto font-League Spartan font-bold  sm:w-[375px] md:w-[490px]">
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
