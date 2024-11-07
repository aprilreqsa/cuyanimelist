import AnimeList from "../components/AnimeList";

const Populer = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const topAnimes = await response.json()
    return (
        
        <AnimeList api={topAnimes} />
    )
}
export default Populer;