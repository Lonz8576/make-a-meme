"use client"
import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";
import { urlEndpoint } from "./providers";





export default function Home() {
  const [name, setName] = useState("");
  
  return (
    <div className="m-3">

     <div className=" flex relative justify-start m-5">
     
      {name && (

     <IKImage 
      path={name}
      urlEndpoint={urlEndpoint}
      
      width={300} 
      height={300}
      alt="Alt text" />

      )}


    </div>     

    <div className="flex relative justify-start items-center mx-2">
          <h2 className="mx-2 font-display text-2xl">
            Upload your file to create memes!
          </h2>

      <IKUpload fileName="test-upload.png" 
       onError={(error) => {
         console.log("error", error)
         }  } 
         onSuccess={(response) => {
          console.log("success", response)
          setName(response.filePath)
       }} />
        </div>
      

      

   
    
    </div>
  );
}
