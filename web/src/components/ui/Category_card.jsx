import React from 'react';
import PrimaryButton from "../../components/ui/PrimaryButton";
import '../../styles/Global.css';

const Category_card = ({ category_title , category_description, image_url}) => {
    return(
        <>
        <div className="cateogry_card w_100 h_35vh bg_white grid col_2 padding_s gap_2vh">
            <div className="image_holder_category w_100 h_100">
                <img src={image_url} alt="electronics" className="w_100 h_100 object_fc aspect_16_9" />
            </div>
            <div className="card_category_content w_100 h_100 flex_cl justify_fe gap_1vh">
                <h3>{category_title}</h3>
                <h4 className="light_cl font_w500">{category_description}</h4>
                <PrimaryButton size="small"><i className="ri-search-line"></i> Explore</PrimaryButton>
            </div>
        </div>
        </>
    );
}

export default Category_card;