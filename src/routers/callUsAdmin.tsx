import '../App.css'

import RightPanelAdmin from '../components/right-panel-admin';


function CallUsAdmin (){

    const nameMessage = localStorage.getItem('name')
    const lastNameMessage = localStorage.getItem('lastname')
    const emailMessage = localStorage.getItem('Email')
    const phoneNumberMessage = localStorage.getItem('phoneNumber')
    const textMessage = localStorage.getItem('text')
    

    return(
        <div className="admin-panel">
        <div className="right-panel-admin">
            <RightPanelAdmin />
        </div>
        <div className="left-panel-admin">
            <h1 className="title-left-panel-admin">پنل ادمین</h1>
            <h3 className="title-box-admin">پیام ها :</h3>
            <div className="box-messages-admin-container">
                    <div className='box-messages-admin'>
                        <h3 className="title-user-message">نام :</h3>
                        <h5 className="text-user-message">{nameMessage}</h5>
                    </div>
                    <div className='box-messages-admin'>
                        <h3 className="title-user-message">نام خانوادگی:</h3>
                        <h5 className="text-user-message">{lastNameMessage}</h5>
                    </div>
                    <div className='box-messages-admin'>
                        <h3 className="title-user-message">ایمیل :</h3>
                        <h5 className="text-user-message">{emailMessage}</h5>
                    </div>
                    <div className='box-messages-admin'>
                        <h3 className="title-user-message">شماره تماس : </h3>
                        <h5 className="text-user-message">{phoneNumberMessage}</h5>
                    </div>
                    <div className='box-messages-admin'>
                        <h3 className="title-user-message">متن :</h3>
                        <h5 className="text-user-message">{textMessage}</h5>
                    </div>
                </div>
                <button className='btn-messages'>پاسخ</button>
            </div>
            
        </div>
    )
}

export default CallUsAdmin;