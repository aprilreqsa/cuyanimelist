"use client"
import AnimeList from "../components/AnimeList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import {useState, useEffect} from "react"
import { getAnimeResponse } from "../components/libs/libs-api";


const Populer =  () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const fetchData = async() => {
        const topAnimes = await getAnimeResponse("top/anime",`page=${page}`)

        setData(topAnimes)
    }
    useEffect(()=> {
        fetchData()
    },[page])
    
    return (
        <div>
        <HeaderMenu title={`Anime Terpopuler #${page}`} />
        <AnimeList api={data} />
        <Pagination setPages={setPage} page={page} lastPage={data?.pagination?.last_visible_page}/>
        </div>
    )
}
export default Populer;