import React from 'react'
import Home from "./components/Home"

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white flex justify-center items-center flex-col'>
      <h1 className=' text-4xl font-semibold text-zinc-500'>Background Removal</h1>
      <p className='text-md mt-2 text-zinc-700'>Upload an Image and let AI help you to remove the background.</p>
      <Home/>
      <p className='text-sm text-zinc-500 mt-10'>Powered by Sourav Giri.</p>
    </div>
  )
}

export default App