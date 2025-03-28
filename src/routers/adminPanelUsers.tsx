import '../App.css'

import RightPanelAdmin from '../components/right-panel-admin';

import logoUsers from '../images/icons8-user-50-users-panel-admin.png'

function PanleAdminUsers (){

    const nameUser = localStorage.getItem('name');
    const emailUser = localStorage.getItem('email :');

    return(
        <div className="admin-panel">
            <div className="right-panel-admin">
                <RightPanelAdmin />
            </div>
            <div className="left-panel-admin">
                <h1 className="title-left-panel-admin">پنل ادمین</h1>
                <h3 className="title-box-admin">کاربر ها :</h3>
                <div className="box-users-amin-container">
                    <div className="box-users-admin">
                        <img src={logoUsers} alt="" className="image-user-admin" />
                        <h2 className="name-user-panel-admin">نام : {nameUser}</h2>
                        <h4 className="email-user-panel-admin">ایمیل: {emailUser}</h4>
                    </div>
                    <div className="box-users-admin">
                        <img src={logoUsers} alt="" className="image-user-admin" />
                        <h2 className="name-user-panel-admin">نام : محمد</h2>
                        <h4 className="email-user-panel-admin">ایمیل: moho@gmail.com</h4>
                    </div>
                    <div className="box-users-admin">
                        <img src={logoUsers} alt="" className="image-user-admin" />
                        <h2 className="name-user-panel-admin">نام : فاطمه</h2>
                        <h4 className="email-user-panel-admin">ایمیل: Fatimeh87@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanleAdminUsers;