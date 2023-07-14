import { useState } from "react";
import "./App.css";
import { Theme } from "./components/theme/theme";
import { Display } from "./components/display/Display";
import { Button } from "./components/buttons/Button";
import { KeyPad } from "./components/keyPad/KeyPad";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-th1-main w-screen h-screen">
        <div className=" mx-auto  font-bold text-[32px] sm:w-[375px] md:w-[490px]">
          <Theme />
          <Display />
          <KeyPad background="bg-white"/>
        </div>
      </div>
    </>
  );
}

export default App;
