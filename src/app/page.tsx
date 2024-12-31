"use client"
import { IKImage } from "imagekitio-next";


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
export default function Home() {
  return (
    <div className="flex relative justify-center m-3">
     
     <div className="relative justify-center p-0">
     <IKImage urlEndpoint={urlEndpoint} path="ruff.jpg" 
     transformation={[ {raw: "l-text,i-iloveyou,fs-50,l-end"}]}
     width={500} height={500} alt="Ruff Day" />
    </div>     

  

    
    </div>
  );
}
