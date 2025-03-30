import '../App.css'

import { useNavigate } from 'react-router-dom'
import RightPanelUser from '../components/right0apnel-user'

import logoProfile from '../logos/logo-user-profile.png'



function UserPanel (){

    const navigate = useNavigate();

    const nameUser = localStorage.getItem('name');
    const emailUser = localStorage.getItem('email :');

    const handleLogOut = ()=>{
        navigate('/login')
    }
    const handleChangePassword = ()=>{
        navigate('/changePassword')
    }
    const handleInfoUser = ()=>{
        navigate('/infoUser')
    }
    const handleCart = ()=>{
        navigate('/cart')
    }

    return(
        <div>
            <div className="admin-panel">
            <div className="right-panel-admin">
                <RightPanelUser />
            </div>
            <div className="left-panel-admin">
                <h1 className="title-left-panel-admin">پنل کاربر</h1>
                <h3 className="title-box-admin">اطلاعات حساب کاربری</h3>
                <div className="box-admins">
                    <img style={{width: "45px" , height: "45px"}} src={logoProfile} alt="" className="image-admin" />
                    <h4 className="name-admin">{nameUser}</h4>
                    <h5 className="name-admin">{emailUser}</h5>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserPanel;
