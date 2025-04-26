import '../styles/Navbar.css';
import '../styles/Global.css';

function Navbar(){
    return(
        <nav className='w_100 h_10vh bg_light padding_s5 flex justify_sb align_c'>
            <div className="right_nav h_100 flex align_c gap_s">
                <h4 className="font_w500"><i className="ri-menu-line"></i> Menu</h4>
                <h4 className="font_w500"><i className="ri-search-line"></i> Search</h4>
            </div>
            <h2 className="primary_cl">RentIt.</h2>
            <div className="left_nav h_100 flex align_c gap_s">
                <h4 className="font_w500">Contact us</h4>
                <h4 className="font_w500"><i className="ri-user-3-line"></i></h4>
                <h4 className="font_w500"><i className="ri-shopping-cart-2-line"></i></h4>
            </div>
        </nav>
    );
}

export default Navbar;