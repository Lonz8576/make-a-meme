
"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";




export function ResultsList({ 
    files, 
    counts,
  
}: {
  files: FileObject[];
  counts: {
    memeId: string;
    count: number;   
  }[];
     }) {
        console.log(files)
    return (
        <div>
            
        {files.map((file) => (
                
        <IKImage
            key={file.fileId}
            path={file.filePath}
            alt={file.name}
            width={300}
            height={300}
            />
           
        ))};
       
       </div>
    );
}


