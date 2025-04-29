import React, {useState} from 'react';
import '../../styles/Global.css';
import '../../styles/Product_card.css';

const Product_card = ({product_title, image_url, product_owner, product_location, product_rate, product_category}) =>{
    const [isLiked, setIsLiked] = useState(false); // state to track the icon

    const toogleHeart = () => {
        setIsLiked(!isLiked); // toggle the state
    }
    return(
        <>
        <div className="Product_card w_100 h_100 flex_cl padding_xs">
            <div className="image_holder_card w_100 h_50vh">
                <img src={image_url} className="w_100 h_100 object_fc aspect_1_1" />
            </div>
            <div className="product_card_content w_100 h_fc flex_cl gap_xsvh mtop_2vh">
                <div className="product_card_title grid col_2 gap_s w_100 ">
                    <h4 className="w_100">{product_title}</h4>
                    <button className="love_button w_fc"
                     onClick={toogleHeart} // toggle the heart icon on click
                    >
                        <h4 className="w_100 flex justify_fe"><i className={isLiked ? "ri-heart-fill" : "ri-heart-line"}  style={{ color: isLiked ? "rgb(230, 18, 18)" : "inherit" }}></i></h4>
                    </button>
                </div>
                <h5 className="font_w500 light_cl">{product_owner}, {product_location}</h5>
                <h5 className="font_w500">Rs {product_rate} / Day</h5>
                <h5 className="category_tag light_cl">{product_category}</h5>
            </div>
        </div>
        </>
    );
}

export default Product_card;