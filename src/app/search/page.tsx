import ImageKit from "imagekit";

// eslint-disable-next-line @typescript-eslint/no-require-imports
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
        searchQuery: `name:${searchParams.q}`,
    });

    return 
    <div>SearchPage</div>
    
}
