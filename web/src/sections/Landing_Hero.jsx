import PrimaryButton from '../components/ui/PrimaryButton';

function Landing_Hero(){
    return(
     <div className="hero_section w_100 h_90vh bg_light padding_s5 flex_cl justify_c align_c gap_2vh">
        <div className="image_holder w_100 h_70 ">
            <img src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ADs" className="w_100 h_100 object_fc"/>
        </div>
        <h1 className="text_ac">RENT ANYTHING. <br></br> OWN NOTHING.</h1>
        <PrimaryButton> Start Exploring <i class="ri-arrow-right-line"></i></PrimaryButton>
     </div>
    );
}

export default Landing_Hero;
