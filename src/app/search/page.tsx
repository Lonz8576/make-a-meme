/* eslint-disable @typescript-eslint/no-require-imports */


import { unstable_noStore } from "next/cache";
import ResultsList from "./results-list";
import { imagekit } from "../lib/image-kit";







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
