import { unstable_noStore } from "next/cache";
import ResultsList from "./results-list";
import { imagekit } from "../lib/image-kit";







export default async function SearchPage({
    searchParams,
}: {
  searchParams: { q: string };
}) {
    unstable_noStore();
    
    const files = imagekit.listFiles({
        tags:searchParams.q
    
    });
  

    return (
    <div>
     <ResultsList files={files}   counts={[]} />
        
        </div>
    );
}
