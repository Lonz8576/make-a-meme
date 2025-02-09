
"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";




export default function ResultsList({ 
    files, 
  
}: {
  files: FileObject[];
  tags: {
    name: string;
    count: number;
  }[];
     }) {
        console.log(files)
    return (
        <div>
            
        {files.map((file) => (
         
            <div key={file.fileId}>
                
        <IKImage
            key={file.fileId}
            path={file.filePath}
            alt={file.name}
            width={300}
            height={300}
            />
            </div>
        ))};
       
       </div>
    );
}


