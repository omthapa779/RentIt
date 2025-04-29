import '../styles/Navbar.css';
import '../styles/Global.css';

function Footer(){
    return(
        <>
        <footer className="w_100 bg_dark flex_cl justify_sb">
            <div className="footer_logo_holder w_100 h_10vh text_ac flex justify_c align_c">
                <h2 className="text_white">RentIt.</h2>
            </div>
            <div className="socials_holder_footer w_100 h_10vh padding_s10 grid col_2 justify_sb">
                <div className="social_links flex align_c h_100 w_fc gap_s">
                    <h3 className="light_cl font_w500"><i className="ri-facebook-circle-line"></i></h3>
                    <h3 className="light_cl font_w500"><i className="ri-instagram-line"></i></h3>
                    <h3 className="light_cl font_w500"><i className="ri-twitter-x-line"></i></h3>
                    <h3 className="light_cl font_w500"><i className="ri-linkedin-fill"></i></h3>
                    <h3 className="light_cl font_w500"><i className="ri-tiktok-line"></i></h3>
                </div>
                <div className="contact_footer flex align_c h_100 w_100 text_ar">
                    <h4 className="light_cl font_w500 w_100 text_ar">Contact.rentit@gmail.com | +977-9814926692</h4>
                </div>
            </div>
            <div className="footer_content grid col_4 padding_s10 padding_vxs pbottom_10vh">
                <div className="collections_footer flex_cl justify_c">
                    <h4 class="text_white">Collections</h4>
                    <div className="links_holder flex_cl mtop_2vh">
                        <h5 className="light_cl font_w500">Electronics and Essentials</h5>
                        <h5 className="light_cl font_w500">Laptops and Smartphones</h5>
                        <h5 className="light_cl font_w500">Hotels and Apartments</h5>
                        <h5 className="light_cl font_w500">Clothing & Thrift</h5>
                        <h5 className="light_cl font_w500">Musical Instruments</h5>
                        <h5 className="light_cl font_w500">Books & Study Materials</h5>
                        <h5 className="light_cl font_w500">Adventure & Travel Gears</h5>
                    </div>
                    <h5 className="light_cl font_w500 mtop_2vh">Explore More...</h5>
                </div>

                <div className="RentIt flex_cl">
                    <h4 className="text_white">RentIt.</h4>

                    <div className="links_holder flex_cl mtop_2vh">
                        <h5 className="light_cl font_w500">About Rentit.</h5>
                        <h5 className="light_cl font_w500">Careers</h5>
                        <h5 className="light_cl font_w500">How it Works</h5>
                    </div>
                </div>

                <div className="Support flex_cl">
                    <h4 className="text_white">Support</h4>

                    <div className="links_holder flex_cl mtop_2vh">
                        <h5 className="light_cl font_w500">Contact Us</h5>
                        <h5 className="light_cl font_w500">FAQ</h5>
                        <h5 className="light_cl font_w500">Notice / Updates</h5>
                        <h5 className="light_cl font_w500">Terms & Conditions</h5>
                        <h5 className="light_cl font_w500">Report Errors and Bugs</h5>
                    </div>
                </div>

                <div className="Quick_links flex_cl">
                    <h4 className="text_white">Quick Links</h4>

                    <div className="links_holder flex_cl mtop_2vh">
                        <h5 className="light_cl font_w500">Home</h5>
                        <h5 className="light_cl font_w500">Browse Listings</h5>
                        <h5 className="light_cl font_w500">Categories</h5>
                        <h5 className="light_cl font_w500">Most Popular</h5>
                        <h5 className="light_cl font_w500">Renters List</h5>
                        <h5 className="light_cl font_w500">Dashboard</h5>
                        <h5 className="light_cl font_w500">Register New User</h5>
                    </div>

                    <h5 className="light_cl font_w500 mtop_2vh">Login</h5>
                </div>
            </div>

            <div className="copyright flex justify_c align_c text_ac padding_s gap_xsvh">
                <h4 className="light_cl"><i className="ri-copyright-line"></i></h4>
                <h5 className="light_cl font_w500">RentIt. - 2025</h5>
            </div>
        </footer>
        </>
    );
}

export default Footer;