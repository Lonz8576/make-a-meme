"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";


export default function ResultsList({ files }: { files: FileObject[] }) {

    return (
        <div>
        {files.map({file} => {
            return (
            
        <IKImage
            key={file.fileId}
            src={file.filePath}
            alt={file.name}
            width={300}
            height={300}
            />
        );
    })}
        
        </div>
    )
}
/*
{files.map({file} => {
    return (
    <IKImage 
    key={file.fileId}
    src={file.filePath}
    alt={file.name}
    width={300}
    height={300}
    />


);
})}

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
*/
