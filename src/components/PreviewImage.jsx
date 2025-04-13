import React from "react";
import Loader from "./Loader";
import { LuDownload } from "react-icons/lu";

const PreviewImage = ({ upload, remove, loader }) => {
  
  const downloadEventHandle = ()=>{
    const a = document.createElement('a');
    a.href=remove;
    a.download = "background_removed.png"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (


  <>
    <div id="previewImage" className="max-w-screen-sm   mx-auto flex justify-center items-center gap-4">


       {/* preview image  */}

      <div id="uploadImage" className=" w-1/2 h-[54vh]  rounded-lg relative">
        {upload === null && (
          <div className="h-full w-full bg-zinc-800 absolute z-99 top-0 rounded-lg flex justify-center items-center backdrop-blur-md">
      
            <span className="text-md text-zinc-600">Preivew Image</span>
          </div>
        )}
        <img
          className="h-full w-full object-cover object-center rounded-lg"
          src={upload}
          alt=""
        />
      </div>
 
     

      {/* final image  */}
      <div id="finalImage" className="w-1/2 h-[54vh]  rounded-lg relative border-[1px] border-dashed border-zinc-500">
      
      {upload === null && (
          <div className="h-full w-full bg-zinc-800 absolute z-99 top-0 rounded-lg flex justify-center items-center backdrop-blur-md">
            
            <span className="text-md text-zinc-600">Removeal background</span>
          </div>
        )  }

      {loader && <Loader/>}
      {remove &&    <img
          className="h-full w-full object-cover object-center rounded-lg"
          src={remove}
          alt=""
        />}
      </div>
    </div>
        <div className=" max-w-screen-sm mx-auto mt-3 flex justify-end items-center">
          {remove===null ? "":<button onClick={downloadEventHandle} className=" flex justify-center items-center gap-1 px-3 py-2 bg-red-700 rounded-full">Download<LuDownload /></button>}
        </div>
    </>
  );
};

export default PreviewImage;
