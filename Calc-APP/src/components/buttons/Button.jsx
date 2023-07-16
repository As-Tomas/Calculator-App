export const Button = (props) => {
  const handleClick = () => {
    props.onClick(props.keyId);
  };

  let buttonClasses = " rounded-lg text-center text-skin-text-color-keypad border-b-4 ";

  if (props.name === "DEL" || props.name === "RESET") {
    buttonClasses += " bg-skin-button-color-del border-skin-button-color-del-border hover:bg-skin-button-color-del-hover hover:border-skin-button-color-del-border-hover text-white text-[24px] "; 
  } else if (props.name === "=") {
    buttonClasses += " bg-skin-button-color-equal border-skin-button-color-equal-border hover:bg-skin-button-color-equal-hover hover:border-skin-button-color-equal-border-hover text-white text-[24px] "; 
  } else {
    buttonClasses += "text-[26px] bg-skin-button-color border-skin-border-color hover:bg-skin-button-color-hover hover:border-skin-border-color-hover"
  }

  return (
    <div className={buttonClasses} onClick={handleClick}>
      {props.name}
    </div>
  );
};
