import { Button } from "../buttons/Button";

export const KeyPad = (props) => {
    const background = props.background ? props.background : 'bg-th1-toggle';

  return (
    <div className={`${background} grid grid-cols-4 grid-rows-5 gap-4 p-6 rounded-lg`}>
      <Button key={1} name="7" />
      <Button key={2} name="8" />
      <Button key={3} name="9" />
      <Button key={4} name="DEL" />
      <Button key={5} name="4" />
      <Button key={6} name="5" />
      <Button key={7} name="6" />
      <Button key={8} name="+" />
      <Button key={9} name="1" />
      <Button key={10} name="2" />
      <Button key={11} name="3" />
      <Button key={12} name="-" />
      <Button key={13} name="." />
      <Button key={14} name="0" />
      <Button key={15} name="/" />
      <Button key={16} name="x" />
      <div className=" col-span-2">
      <Button key={17} name="RESET" />      
      </div>
      <div className=" col-span-2">  
        <Button key={18} name="=" width="w-[220px]"/>
      </div>
    </div>
  );
};
