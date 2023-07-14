

export const Button = (props) => {
    
  return (
    <div className=" text-[26px] rounded-lg  text-center border-b-4 
    bg-th1-button border-th1-button hover:bg-th1-button-hover hover:border-th1-button-hover ">
        {props.name}
    </div>
  )
}
