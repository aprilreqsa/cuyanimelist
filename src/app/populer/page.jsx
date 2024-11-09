"use client"
import AnimeList from "../components/AnimeList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import {useState, useEffect} from "react"


const Populer =  () => {
    const [page, setPage] = useState(2)
    const [data, setData] = useState([])
    const fetchData = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const topAnimes = await response.json()
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