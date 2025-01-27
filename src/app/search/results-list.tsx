"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../providers";


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
            urlEndpoint={urlEndpoint}
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
