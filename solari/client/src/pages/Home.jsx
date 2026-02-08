import BannerMovie from "../hooks/get_first_movie";
import {ListTrendingAll, ListDiscoverMovie, ListDiscoverTv, ListRatedMovies, ListRatedTv} from "../hooks/get_list_movie";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="bg-zinc-900">
        <Header />
        <BannerMovie />
        <ListTrendingAll />
        <br />
        <ListDiscoverMovie />
        <br />
        <ListRatedMovies />
        <br />
        <ListDiscoverTv />
        <br />
        <ListRatedTv />
        <Footer />
      </div>
    </>
  );
}
export default Home;
