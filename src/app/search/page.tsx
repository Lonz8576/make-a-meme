/* eslint-disable @typescript-eslint/no-require-imports */


import { unstable_noStore } from "next/cache";
import ResultsList from "./results-list";



/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey:process.env.NEXT_PUBLIC_PUBLIC_KEY,
    privateKey:process.env.PRIVATE_KEY,
    urlEndpoint:process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

export default async function SearchPage( {
    
}: {
    searchParams: { q: string };
}) {
    unstable_noStore();
    
  const files = await imagekit.listFiles({
    searchQuery: 'name:${searchParams.q}',
  });

 

    return (
    <div>
     <ResultsList files={files} counts={[]} />
        
        </div>
    );
}
