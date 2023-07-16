

export const Button = (props) => {
    const handleClick = () => {
        // Trigger the onClick event and pass the key ID
        props.onClick(props.keyId);
      };
    
  return (
    <div className=" text-[26px] rounded-lg  text-center text-skin-base border-b-4 
     bg-skin-button-color border-skin-border-color  hover:bg-skin-button-color-hover hover:border-skin-border-color-hover "
    onClick={handleClick} >
        {props.name}
    </div>
  )
}
