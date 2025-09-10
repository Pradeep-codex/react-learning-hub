import React from "react";
function Card({cardName,imgName})
{
    return(
        <div className='flex flex-col  justify-center items-center'>
    <div className='flex mt-5 w-[60%] justify-center items-center gap-2' >
      <div className='w-[30%]'>
        <img className='h-60' src={imgName} alt="hhh" /></div>
      <div className='w-[70%]  text-black bg-gray-300 p-5 rounded-4xl'>
        <h1 className='text-left text-purple-700'>{cardName}</h1>
        <p className='text-justify'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit natus placeat minus tenetur eligendi repellendus culpa, iste eos aut ratione earum asperiores eius sed necessitatibus quae maxime! Perferendis, rem, sunt, soluta at tenetur ipsa fugiat veniam ex magni maxime corporis distinctio iusto perspiciatis pariatur quisquam mollitia repellat veritatis! Reiciendis</p></div>
    </div>
   </div>
    )
}

export default Card