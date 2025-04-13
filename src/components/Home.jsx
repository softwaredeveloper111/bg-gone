import React, { useState } from 'react'
import UploadImage from "./UploadImage"
import PreviewImage from "./PreviewImage"
import {fetchremovalbackgroundAPI} from "../utils/Axios"

const Home = () => {

  const [upload,setUpload] = useState(null);
  const [remove,setRemove] = useState(null);
  const [loader,setLoader] = useState(false)

 const uploadImagefunc = async(file)=>{
    const urlfile = URL.createObjectURL(file)
    setUpload(urlfile)
    setLoader(true)


    try {
     const result = await fetchremovalbackgroundAPI(file)
     setRemove(result.image)
     setLoader(false)
      
    } catch (error) {
      console.log(error.message);
    }

 }

  return (
    <div className='w-full '>
      <UploadImage uploadImagefunc={uploadImagefunc}/>
      <PreviewImage upload={upload} remove={remove} loader={loader}/>
    </div>
  )
}

export default Home