import '../App.css'

import { useNavigate } from 'react-router-dom'

import logoRightNav from '../logos/logo-right-nav.png'
import logoHome from '../logos/icon-home-panel-admin.png'
import logoUsers from '../logos/icon-users-panel-admin.png'
import logoShop from '../logos/icons8-shop-50-panel-admin.png'
import logoSingOut from '../logos/SignOut-panel-admin.png'

function RightPanelAdmin (){

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate('/')
    }
    const handleusers = ()=>{
        navigate('/panelAdmin-users')
    }
    const handleshops = ()=>{
        navigate('/panelAdmin-shops')
    }
    const handleOut = ()=>{
        navigate('/login')
    }
    const handleMessages = ()=>{
        navigate('/messages')
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
        <div onClick={handleusers} className="btn-right-panel-admin">
            <img src={logoUsers} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">کاربر ها</h3>
        </div>
        <div onClick={handleshops} className="btn-right-panel-admin">
            <img src={logoShop} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">خرید ها</h3>
        </div>
        <div onClick={handleMessages} className="btn-right-panel-admin">
            <img src={logoSingOut} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">پیام ها</h3>
        </div>
        <div onClick={handleOut} className="btn-right-panel-admin">
            <img src={logoSingOut} alt="" className="logo-btn-right-panel-admin" />
            <h3 className="text-btn-right-panel-admin">خروج</h3>
        </div>
    </div>
    )
}

export default RightPanelAdmin;