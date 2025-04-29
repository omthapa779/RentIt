import Landing_Hero from "../sections/Home_essentials/Landing_Hero";
import Featured_categories from "../sections/Home_essentials/Featured_categories";
import Ads_section from "../sections/ads_section";
import Featured_Products from "../sections/Featured_Products";

function Home(){
    return(
        <>
            <Landing_Hero />
            <Featured_categories />
            <Ads_section />
            <Featured_Products />
        </>
    );
}

export default Home;