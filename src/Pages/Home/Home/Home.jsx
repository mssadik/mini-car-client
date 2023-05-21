import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewCollection from "../NewCollection/NewCollection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewCollection></NewCollection>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;