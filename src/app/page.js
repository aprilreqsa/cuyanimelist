import AnimeList from "./components/AnimeList";
import Header from "./components/Header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnimes = await response.json()
  return (
    <div>
      <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
      <AnimeList api={topAnimes} />
    </div>
    
  );
}
export default Home;
