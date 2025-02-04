import { unstable_noStore } from "next/cache";
import ResultsList from "./results-list";
import { imagekit } from "../lib/image-kit";







export default async function SearchPage({
    params,
}: {
 params: { q: string };
}) {
    unstable_noStore();
    
    const files = await imagekit.listFiles({
        tags:params.q,
    
    });
  

    return (
    <div>
     <ResultsList files={files}  tags={[]} />
        
        </div>
    );
}
