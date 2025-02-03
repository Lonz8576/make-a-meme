/* eslint-disable @typescript-eslint/no-require-imports */


import ResultsList from "./results-list";



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
    tags: searchParams.q,
  });

 

    return (
    <div>
     <ResultsList files={files} counts={[]} />
        
        </div>
    );
}
