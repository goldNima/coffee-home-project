import '../App.css'

import { useNavigate } from 'react-router-dom'

import logoRightNav from '../logos/logo-right-nav.png'
import logoSearch from '../logos/logo-search-nav.png'
import logoLog from '../logos/logo-log-nav.png'
import logoCart from '../logos/logo-cart-nav.png'

function NavBar (){

    const navigate = useNavigate();

    const handleLog = ()=>{
        navigate("/login");
    }
    const handleAllProducts = ()=>{
        navigate("/allProducts");
    }
    const handleCart = ()=>{
        navigate("/cart");
    }
    const handleCall = ()=>{
        navigate("/call-to-us");
    }
    const scrollToBlog = ()=>{
        window.scrollTo({top: 4100 , behavior: 'smooth'});
    }

    return(
        <div className='NavBar'>
            <div className="right-nav">
                <div style={{display: "flex"}} className="btn1-right-nav">
                    <img src={logoRightNav} alt="logo" className="logo-right-nav" />
                    <h1 className="title-nav">خانه قهوه</h1>
                </div>
                <div style={{display: "flex"}} className="btn2-right-nav">
                    <p onClick={handleAllProducts} className="btn-nan">محصولات</p>
                    <p onClick={scrollToBlog} className="btn-nan">درباره ما</p>
                    <p onClick={handleCall} className="btn-nan">تماس با ما</p>
                </div>
            </div>
            <div className="left-nav">
                <img src={logoSearch} alt="logo" className="logo-searchNav" />
                <div onClick={handleLog} className="buttonLog-nav-container">
                    <img src={logoLog} alt="logo" className="logo-logNav" />
                    <h3 className="text-btn-log-nan">ورود / ثبت نام</h3>
                </div>
                <div onClick={handleCart} className="button-cart-nav-container">
                    <img src={logoCart} alt="logo" className="logo-cart-nav" />
                    <h3 className="text-cart-nav">0 تومن</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar;