import '../App.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import logoLogin from '../logos/logo-login.png'
import imageLogin from '../images/image-login.png'


function Singup (){

    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");
    const [name , setName] = useState<string>("");
    const [lastName , setLastName] = useState<string>("");
    const [error , setError] = useState<string | number>()

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        if(email === '' && password === ''){
            alert("لطفا اطلاعات رو به درستی وارد کنید ")
        }else{
                navigate("/login")
        }
        const emailRegax = /^[6\s@]+@[^\s@]+\.[^s@]+\.[^s@]+$/;
        if (!emailRegax.test(email)){
            return;
        }

    }

    return(
        <div className="singup">
            <form onSubmit={handleSubmit}>
                <label htmlFor='emil'>
                    <div className="right-login">
                        <img src={logoLogin} alt="logo" className="logo-login" />
                        <h1 className="title-login">خوش آمدید <br /> حساب خود را بسازید</h1>
                        <br />
                        <input onChange={(e)=> setName(e.target.value)} maxLength={10} type="text" className="input-login" placeholder='نام خود را وارد کنید :' />
                        <br />            
                        <input onChange={(e)=> setLastName(e.target.value)} maxLength={15} type="text" className="input-login" placeholder='نام خانوادگی خود را وارد کنید :' />
                        <br />
                        <input onChange={handleChange} value={email} type="email" className="input-login" placeholder='ایمیل خود را وارد کنید :' /> 
                        <br /> 
                        <input onChange={(e)=> setPassword(e.target.value)} maxLength={20} type="password" className="input-login" placeholder='رمز خود را وارد کنید :' />
                        <br />
                        <button type='submit' className='btn-login'>وارد شوید</button> 
                     </div>
                </label>
            </form>
            <div className="left-login">
                <img src={imageLogin} alt="image" className="img-login" />
            </div>
        </div>
    )
}

export default Singup;