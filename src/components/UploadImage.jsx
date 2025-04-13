import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const UploadImage = ({uploadImagefunc}) => {

  const handleuploadImageEvent = (e)=>{
 
    uploadImagefunc(e.target.files[0])
  }

  return (
    <div className='w-full my-5 max-w-screen-sm mx-auto text-center py-12 cursor-pointer rounded-lg border-[2px] border-zinc-600 border-dashed'>
      <label htmlFor='upload' className='flex justify-center items-center  gap-1 cursor-pointer  w-fit mx-auto px-3 py-2 rounded-lg bg-white text-black'>
         Upload image
         <FaArrowUp />
         <input className='hidden' type="file" id='upload' onChange={handleuploadImageEvent}/>  
      </label>
    </div>
  )
}

export default UploadImage