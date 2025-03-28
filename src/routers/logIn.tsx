import '../App.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import logoLogin from '../logos/logo-login.png'
import imageLogin from '../images/image-login.png'

function Login (){

    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");
    const [name , setName] = useState<string>('');
    const [error , setError] = useState<string | number>()

    const navigate = useNavigate();

    const handleSing = ()=>{
        navigate("/singUp")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        localStorage.setItem('email :' , email);
        localStorage.setItem('password :' , password);
        localStorage.setItem('name' , name);

        if(email === '' && password === ''){
            setError("لطفا اطلاعات را به صورت کامل وارد کنید ...")
        }else if(name === 'nimaF' && email === 'nimaFA@gmail.com' && password === 'nimaFA8687'){
            navigate('/panelAdmin')
        }else{
            navigate("/userPanel")
        }

        const emailRegax = /^[6\s@]+@[^\s@]+\.[^s@]+\.[^s@]+$/;
        if (!emailRegax.test(email)){
            return;
        }
    }

    return(
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    <div className="right-login">
                        <img src={logoLogin} alt="logo" className="logo-login" />
                        <h1 className="title-login">خوش آمدید</h1>
                        <br />
                        <input onChange={(e)=> setName(e.target.value)}  type="text" className="input-login" placeholder='نام خود را وارد کنید :' /> 
                        <br />    
                        <input onChange={handleChange} value={email} type="email" className="input-login" placeholder='ایمیل خود را وارد کنید :' /> 
                        <br />             
                        <input onChange={(e)=> setPassword(e.target.value)} type="password" className="input-login" placeholder='گذروازه خود را وارد کنید :' />
                        <br />
                        <button type='submit' className='btn-login'>وارد شوید</button>
                        <p style={{color: "red" , textAlign: "center"}}>{error}</p>
                        <p onClick={handleSing} className="last-btn-login">حسابی ندارید ؟</p>
                    </div>
                </label>
            </form>
            <div className="left-login">
                <img src={imageLogin} alt="image" className="img-login" />
            </div>
        </div>
    )
}

export default Login;