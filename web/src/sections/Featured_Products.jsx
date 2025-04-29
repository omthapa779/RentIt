import '../styles/Global.css';
import Product_card from '../components/ui/Product_card';
import PrimaryButton from '../components/ui/PrimaryButton';

function Featured_Products(){
    return(
        <>
        <section className="Featured_Products w_100 h_fc padding_s5 padding_vs flex_cl bg_light">
            <h2 className="primary_cl">Featured Products</h2>

            <div className="grid col_4 gap_s mtop_5vh">
                <Product_card product_title="Canon Mirrorless Camera" 
                    product_owner="Raju Photography"
                    product_category="Electronics"
                    product_rate="2500"
                    product_location="Pokhara"
                    image_url="https://images.pexels.com/photos/2042539/pexels-photo-2042539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Product_card product_title="Cozy Studio Apartment"
                    product_owner="CozyHomes Nepal"
                    product_category="spaces"
                    product_rate="5000"
                    product_location="Kathmandu"
                    image_url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Product_card product_title="Pink Jacket (Female)" 
                    product_owner="Fashion Hub"
                    product_category={"Fashion / Clothing"}
                    product_rate="300"
                    product_location="Lalitpur"
                    image_url="https://images.pexels.com/photos/31765041/pexels-photo-31765041/free-photo-of-stylish-woman-in-pink-coat-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                />
                <Product_card product_title="Fender Stratocaster Guitar" 
                    product_owner="Guitar World"
                    product_category="Musical Instruments"
                    product_rate="1500"
                    product_location="Bhaktapur"
                    image_url="https://images.pexels.com/photos/12976807/pexels-photo-12976807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
            <div className="grid col_4 gap_s mtop_5vh">
                <Product_card product_title="Canon Mirrorless Camera" 
                    product_owner="Raju Photography"
                    product_category="Electronics"
                    product_rate="2500"
                    product_location="Pokhara"
                    image_url="https://images.pexels.com/photos/2042539/pexels-photo-2042539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Product_card product_title="Cozy Studio Apartment"
                    product_owner="CozyHomes Nepal"
                    product_category="spaces"
                    product_rate="5000"
                    product_location="Kathmandu"
                    image_url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Product_card product_title="Pink Jacket (Female)" 
                    product_owner="Fashion Hub"
                    product_category={"Fashion / Clothing"}
                    product_rate="300"
                    product_location="Lalitpur"
                    image_url="https://images.pexels.com/photos/31765041/pexels-photo-31765041/free-photo-of-stylish-woman-in-pink-coat-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                />
                <Product_card product_title="Fender Stratocaster Guitar" 
                    product_owner="Guitar World"
                    product_category="Musical Instruments"
                    product_rate="1500"
                    product_location="Bhaktapur"
                    image_url="https://images.pexels.com/photos/12976807/pexels-photo-12976807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
            <PrimaryButton className="mtop_5vh"> Load More </PrimaryButton>
        </section>
        </>
    );
}

export default Featured_Products;