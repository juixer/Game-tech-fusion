import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/FAQ/FAQ";
import Reviews from "../../Components/Reviews/Reviews";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div className="my-6">
            <Banner/>
            <Services/>
            <Reviews/>
            <Faq/>
        </div>
    );
};

export default Home;