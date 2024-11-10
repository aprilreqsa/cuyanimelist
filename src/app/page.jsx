import AnimeList from "./components/AnimeList";
import Header from "./components/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/libs-api";

const Home = async () => {
  const topAnimes =  await getAnimeResponse("top/anime","limit=8")
  let reccomendation =  await getNestedAnimeResponse("recommendations/anime","entry")
  reccomendation = reproduce(reccomendation,7)
  return (
    <div>
       <div>
      <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
      <AnimeList api={topAnimes} />
      </div>
       <div>
      <Header title="Rekomendasi"/>
      <AnimeList api={reccomendation} />
      </div>
   
  </div>
    
  );
}
export default Home;
