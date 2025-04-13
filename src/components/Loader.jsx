import React from 'react'

const Loader = () => {
  return (
    <div className="h-full w-full bg-zinc-800 absolute z-99 top-0 rounded-lg flex justify-center items-center backdrop-blur-md">
      <div className='h-16 w-16 rounded-full border-t-[1px] border-teal-400 animate-spin'></div>
    </div>
  )
}

export default Loader