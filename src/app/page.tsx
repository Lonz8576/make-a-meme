"use client"
import { IKImage } from "imagekitio-next";


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
export default function Home() {
  return (
    <div className="place-items-center h-full">
     
     <div className="relative justify-center">
     <IKImage urlEndpoint={urlEndpoint} path="boxer.png" width={400} height={400} alt="boxer meme" />
    </div>     

    grid grid-rows-[20px_1fr_20px] relative items-center justify-items-center h-96 p-8 pb-20 gap-16 sm:p-20 font-display

    </div>
  );
}
