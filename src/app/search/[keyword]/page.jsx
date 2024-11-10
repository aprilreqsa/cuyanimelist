import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/Header";
import { getAnimeResponse } from "@/app/components/libs/libs-api";

const Page = async ({params}) => {
    const { keyword } = await params
    const decodeKeyword = decodeURI(keyword)
    const searchAnimes =  await getAnimeResponse("anime",`q=${keyword}`)
    return (
        <div>
            <Header title={`Pencarian Untuk ${decodeKeyword}...`}/>
            <AnimeList api={searchAnimes} />
        </div>
    )
}

export default Page;