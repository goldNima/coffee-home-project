import '../App.css'

import { useNavigate } from 'react-router-dom'

import logoRightNav from '../logos/logo-right-nav.png'
import logoHome from '../logos/icon-home-panel-admin.png'
import logoShop from '../logos/icons8-shop-50-panel-admin.png'
import logoSingOut from '../logos/SignOut-panel-admin.png'
import logoPassword from '../logos/logo-user-box-password.png'
import logoInfro from '../logos/logo-user-box-user.png'

function RightPanelUser (){

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate('/')
    }
    const handleshops = ()=>{
        navigate('/cart')
    }
    const handleOut = ()=>{
        navigate('/login')
    }
    const handleChangePassword = ()=>{
        navigate('/changePassword')
    }
    const handleInfoUser = ()=>{
        navigate('/userPanel')
    }


    return(
        <div className="right-panel-admin">
        <div className="header-right-panel-admin">
            <img src={logoRightNav} alt="logo" className="logo-right-nav" />
            <h1 className="title-nav">خانه قهوه</h1>
        </div>
        <div onClick={handleHome} id='btn1-right-panel-admin' className="btn-right-panel-admin">
            <img src={logoHome} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">خانه</h3>
        </div>
        <div onClick={handleInfoUser} className="btn-right-panel-admin">
            <img src={logoInfro} alt="" className="logo-btn-right-panel-admin" />
            <h3 style={{fontSize: "12px"}} className="text-btn-right-panel-admin">اطلاعات حساب کاربری</h3>
        </div>
        <div onClick={handleChangePassword} className="btn-right-panel-admin">
            <img src={logoPassword} alt="" className="logo-btn-right-panel-admin" />
            <h3 style={{fontSize: "12px"}} className="text-btn-right-panel-admin">تغییر رمز عبور</h3>
        </div>
        <div onClick={handleshops} className="btn-right-panel-admin">
            <img src={logoShop} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">خرید ها</h3>
        </div>
        <div onClick={handleOut} className="btn-right-panel-admin">
            <img src={logoSingOut} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">خروج</h3>
        </div>
    </div>
    )
}

export default RightPanelUser;