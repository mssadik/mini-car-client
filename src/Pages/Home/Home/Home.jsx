import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewCollection from "../NewCollection/NewCollection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewCollection></NewCollection>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;