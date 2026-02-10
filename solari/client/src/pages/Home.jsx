import BannerMovie from "../components/movies/MovieCard.jsx";
import {ListTrendingAll, ListDiscoverMovie, ListDiscoverTv, ListRatedMovies, ListRatedTv} from "../components/movies/MovieList.jsx";
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";

function Home() {
  return (
    <>
      <div className="bg-zinc-900">
        <Header />
        <BannerMovie />
        <ListTrendingAll />
        {/*<br />
        <ListDiscoverMovie />
        <br />
        <ListRatedMovies />
        <br />
        <ListDiscoverTv />
        <br />
        <ListRatedTv />
        <Footer />*/}
      </div>
    </>
  );
}
export default Home;
