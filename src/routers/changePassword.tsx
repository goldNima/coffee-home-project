import '../App.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePassword (){

    const [newPassword , setNewPassword] = useState<string>('');
    const [error , setError] = useState<string | number>()
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        localStorage.setItem('newPassword' , newPassword)

        if(newPassword == ''){
            setError("لطفا اطلاعات را به صورت کامل وارد کنید ...")
        }else{
            navigate("/userPanel")
        }
    }

    return(
        <div className="change-password">
            <h1 className="title-change-password">تغییر رمز عبور :</h1>
            <div className="box-change-password">
                <h3 className="text-change-password">رمز عبور جدید خود را وارد کنید :</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        <input placeholder='گذروازه قبلی را وارد کنید :' type="password" className="input-change-password" />
                        <br />
                        <input onChange={(e)=> setNewPassword(e.target.value)} placeholder='گذروازه جدید را وارد کنید :' type="password" className="input-change-password" />
                        <br />
                        <button type='submit' className="btn-change-password">ثبت گذروازه جدید</button>
                        <p style={{color: "red" , textAlign: "center"}}>{error}</p>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;