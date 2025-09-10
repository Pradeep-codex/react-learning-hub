import React from "react";
function ClrButton({name,colour,onSelect})
{
  return(

    <div onClick={() => onSelect(colour)} style={{backgroundColor:colour}} className='bg-{colour} h-[70%] w-[10%] rounded-3xl flex justify-center items-center'>
              <h3>{name}</h3>
            </div>
  )
}
export default ClrButton