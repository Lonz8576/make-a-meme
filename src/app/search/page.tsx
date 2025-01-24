/* eslint-disable @typescript-eslint/no-require-imports */

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey:process.env.NEXT_PUBLIC_PUBLIC_KEY,
    privateKey:process.env.PRIVATE_KEY,
    urlEndpoint:process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

export default async function SearchPage( {
    searchParams,
}: {
    searchParams: { q: string };
}) {
    const files = await imagekit.listFiles({
        searchQuery: `name:${searchParams.q}`, skip : 0,
        limit : 10
    }, function(error: any, result: any) { 
        if(error) console.log(error);
        else console.log(result);
    });
    

    return (
    <div>
        {files.map((file: { fieldId: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
            return <div key={file.fieldId}>{file.name}</div>;

        })}
        </div>
    );
}
