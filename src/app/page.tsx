"use client"
import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";




export default function Home() {
  const [filePath, setFilePath] = useState("");
  return (
    <div className="m-3">
    
    

     <div className=" flex relative justify-start align-middle m-5">
      {filePath && (

     <IKImage 
      path={filePath}
     transformation={[ {raw: "l-text,i-iloveyou,fs-50,l-end"}]}
     width={500} height={500} alt="Ruff Day" />

      )}


    </div>     

    <div className="flex relative justify-start items-center mx-2">
          <h2 className="mx-2 font-display text-2xl">Upload your file to create memes!</h2>
          <IKUpload fileName="test-upload.png" 
          onError={(error) => {
            console.log("error", error)
          }  } 
          onSuccess={(response) => {
            console.log("success", response)
            setFilePath(response.filePath)
          }} />
        </div>

      

   
    
    </div>
  );
}
