import AnimeList from "./components/AnimeList";
import Header from "./components/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/libs-api";
import _ from "underscore";

const Home = async () => {
  const topAnimes =  await getAnimeResponse("top/anime","limit=8")
  let reccomendation =  await getNestedAnimeResponse("recommendations/anime")
  let randomArray = []
  const randomAnime = () => {
    for(let i=0; i<4;i++){
      randomArray.push(reccomendation[Math.floor(Math.random()*reccomendation.length)])
    }
  }
  randomAnime()
  reccomendation = {
    data: randomArray
  }
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
