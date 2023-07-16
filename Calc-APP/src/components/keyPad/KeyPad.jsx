import { Button } from "../buttons/Button";

export const KeyPad = (props) => {
    const background = props.background ? props.background : 'bg-th1-toggle';

    const handleClick = (keyId) => {
        // Pass the key ID to the parent component
        props.onKeyClick(keyId);
      };

  return (
    <div className={`${background} grid grid-cols-4 grid-rows-5 gap-4 p-6 rounded-lg`}>
      <Button key={1} name="7" onClick={() => handleClick(7)}/>
      <Button key={2} name="8" onClick={() => handleClick(8)}/>
      <Button key={3} name="9" onClick={() => handleClick(9)}/>
      <Button key={4} name="DEL" onClick={() => handleClick("del")}/>
      <Button key={5} name="4" onClick={() => handleClick(4)}/>
      <Button key={6} name="5" onClick={() => handleClick(5)}/>
      <Button key={7} name="6" onClick={() => handleClick(6)}/>
      <Button key={8} name="+" onClick={() => handleClick("+")}/>
      <Button key={9} name="1" onClick={() => handleClick(1)}/>
      <Button key={10} name="2" onClick={() => handleClick(2)}/>
      <Button key={11} name="3" onClick={() => handleClick(3)}/>
      <Button key={12} name="-" onClick={() => handleClick("-")}/>
      <Button key={13} name="." onClick={() => handleClick(",")}/>
      <Button key={14} name="0" onClick={() => handleClick(0)}/>
      <Button key={15} name="/" onClick={() => handleClick("/")}/>
      <Button key={16} name="x" onClick={() => handleClick("*")}/>
      <div className=" col-span-2">
      <Button key={17} name="RESET" onClick={() => handleClick("reset")}/>      
      </div>
      <div className=" col-span-2">  
        <Button key={18} name="=" onClick={() => handleClick("=")}/>
      </div>
    </div>
  );
};
