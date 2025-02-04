
"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";




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
            path={file.name}
            alt={file.name}
            width={300}
            height={300}
            />
            
        ))}
       
       </div>
    );
}


