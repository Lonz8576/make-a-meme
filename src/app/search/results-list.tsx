"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";


export default function ResultsList({ 
    files

     }: {
     files: FileObject[];
     }) {

    return (
        <div>
            <div>
        {files.map((file) => (
  
        <IKImage
            key={file.fileId}
            src={file.filePath}
            alt={file.name}
            urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
            width={300}
            height={300}
            />
        ))};
        
    
        </div>
        </div>
    );
}

/*
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
*/
