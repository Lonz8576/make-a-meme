
"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";




export default function ResultsList({ 
    files, 
    counts,
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
          
            <div key={file.filePath}>
                <div>
                {counts.find((c) => c.memeId === file.fileId)?.count ?? 0}
                </div>
        <IKImage
            key={file.fileId}
            path={file.filePath}
            alt={file.name}
            width={300}
            height={300}
            />
            </div>
        ))}
       console.log(file);
       </div>
    );
}


