import BannerMovie from '../hooks/get_first_movie';
import ListTrendingMovie from '../hooks/get_list_movie';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
    return(
        <>
        <Header />
        <BannerMovie />
        <ListTrendingMovie />
        <Footer />
        </>
    );
}
export default Home;