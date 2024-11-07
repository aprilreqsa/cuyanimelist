import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/Header";

const Page = async ({params}) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnimes = await response.json()
    return (
        <div>
            <Header title={`Pencarian Untuk ${keyword}`}/>
            <AnimeList api={searchAnimes} />
        </div>
    )
}

export default Page;