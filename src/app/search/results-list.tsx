/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../providers";



export default function ResultsList({ 
    files, 
    
         }: {
     files: FileObject[];
     counts: {
     memeId: string;
     count: number;
     }[];
     }) {

    return (
        <div>
        {files.map((file) => (
        <IKImage
            key={file.fileId}
            path={file.filePath}
            alt={file.name}
            urlEndpoint={urlEndpoint}
            width={300}
            height={300}
            />
        ))}
        
       </div>
    );
}


