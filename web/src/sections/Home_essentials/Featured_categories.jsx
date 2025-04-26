import '../../styles/Global.css';
import Category_card from '../../components/ui/Category_card';

function Featured_categories(){
    return(
        <section className="featured_category w_100 h_100vh padding_s5 bg_light padding_vs">
            <h2 className="primary_cl">Featured Categories</h2>

            <div className="grid w_100 col_2 mtop_5vh gap_2vh">
                <Category_card category_title="Electronics" category_description="Cameras | Laptops | Phones | Ipads  | Speakers" 
                image_url="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg" />

                <Category_card category_title="Spaces" category_description="Rooms | Apartments | Flats | Hotels | Offices"
                image_url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>

            <div className="grid w_100 col_2 mtop_2vh gap_2vh">
                <Category_card category_title="Clothing" category_description="Clothes | Bags | Shoes | Accessories | Thrift" 
                image_url="https://images.pexels.com/photos/4602025/pexels-photo-4602025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                <div className="cateogry_card w_100 h_35vh bg_white flex justify_c align_c">
                    <h4>Explore More Categories <i className="ri-arrow-right-line"></i></h4>
                </div>
            </div>
        </section>
    );
}

export default Featured_categories;