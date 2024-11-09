import Anime from "./Anime";


const AnimeList = ({api}) => {
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
            {api.data?.map((anime,index) => {
             return (
            <Anime key={index} title={anime.title} images={anime.images.webp.image_url}/>
              )
        
             })}
        </div>
    )
}

export default AnimeList;