"use client"
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";



const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
 
export default function Home() {
  const [filePath, setFilePath] = useState("");
  return (
    <div className="m-3">
    
     <ImageKitProvider 
     publicKey={publicKey}
      urlEndpoint={urlEndpoint} 
      authenticator={authenticator}>

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

      

    </ImageKitProvider>
    
    </div>
  );
}
