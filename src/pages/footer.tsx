import '../App.css'

import { useNavigate } from 'react-router-dom'

import logoTopFooter1 from '../logos/logo-top-footer1.png'
import logoTopFooter2 from '../logos/logo-top-footer2.png'
import logoTopFooter3 from '../logos/logo-top-footer3.png'
import logoLeftBottomFooter from '../logos/logo-bottom-left-footer.png'
import logoInsta from '../logos/logo-insta.png'
import logoWhatsApp from '../logos/logo-whatsApp.png'
import logoTelegram from '../logos/logo-Telegram.png'
import logoEnamad from '../logos/logo-Enamad.png'
import logoScroll from '../logos/Link - دکمه اسکرول به بالا.png'

function Footer (){

    const navigate = useNavigate();

    const handleProducts = ()=>{
        navigate('/allProducts')
    }
    const handleBlog = ()=>{
        navigate('/ourBlog')
    }
    const handleCall = ()=>{
        navigate("/call-to-us");
    }
    const scrollToTop = ()=>{
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }

    return(
        <footer className='footer'>
            <div className='top-footer'>
                <div className="box-top-footer">
                    <img src={logoTopFooter1} alt="logo" className="logo-top-footer" />
                    <div>
                        <h2 className="title-box-footer">تلفن تماس</h2>
                        <p className="text-box-footer">091212345678</p>
                    </div>
                </div>
                <div className="box-top-footer">
                    <img src={logoTopFooter2} alt="logo" className="logo-top-footer" />
                    <div>
                        <h2 className="title-box-footer">آدرس</h2>
                        <p className="text-box-footer">جاده چالوس ، رشت ، رادیو دریا 2</p>
                    </div>
                </div>
                <div className="box-top-footer">
                    <img src={logoTopFooter3} alt="logo" className="logo-top-footer" />
                    <div>
                        <h2 className="title-box-footer">ساعات کاری:</h2>
                        <p className="text-box-footer">8 صبح الی 11 شب</p>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <img src={logoLeftBottomFooter} alt="" className="logo-bottom-footer" />
                <div className="nav-footer">
                    <p onClick={handleProducts} className="btn-nav-footer">محصولات</p>
                    <p onClick={handleBlog} className="btn-nav-footer">درباره ما</p>
                    <p onClick={handleCall} className="btn-nav-footer">تماس با ما</p>
                </div>
                <div className="left-footer">
                    <img src={logoInsta} alt="logo" className="logo-left-footer" />
                    <img src={logoWhatsApp} alt="logo" className="logo-left-footer" />
                    <img src={logoTelegram} alt="logo" className="logo-left-footer" />
                </div>
            </div>
            <div className="lastINfo-bottom">
                <p className="text-last-footer">تمام حقوق این سایت متعلق به خانه قهوه چالوس میباشد</p>
                <img src={logoEnamad} alt="" className="logoEnammad" />
                <img onClick={scrollToTop} src={logoScroll} alt="" className="logo-goTO-Top" />
            </div>
        </footer>
    )
}

export default Footer;