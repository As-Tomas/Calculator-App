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

  return (
    <>
      <div className="bg-th1-main w-screen h-screen  ">
        <div className=" mx-auto  font-bold text-[32px] sm:w-[375px] md:w-[490px]">
          <Theme />
          <Display result={count.toString()} />
          <KeyPad onKeyClick={handleKeyClick} background="bg-white"/>
        </div>
      </div>
    </>
  );
}

export default App;
