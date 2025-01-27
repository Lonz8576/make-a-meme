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
            path={file.filePath}
            alt={file.name}
            width={500}
            height={500}
            />
        ))}
        
       </div>
    );
}


