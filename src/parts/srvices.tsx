import '../App.css'

import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import logoTitleParts from '../logos/logo-title-services.png'
import logoService1 from '../logos/logo-service1.png'
import logoService2 from '../logos/logo-service2.png'
import logoService3 from '../logos/logo-service3.png'
import logoService4 from '../logos/logo-service4.png'
import logoService5 from '../logos/logo-service5.png'


function Services (){

    useEffect (()=>{
        AOS.init({duration: 1000});
    } , [])

    const navigate = useNavigate();

    const handleCoffeeBeans = ()=>{
        navigate("/coffeeBeans")
    }
    const handlePowders = ()=>{
        navigate("/powders")
    }
    const handleDripback = ()=>{
        navigate("/dripBack")
    }
    const handleSyrups = ()=>{
        navigate("/syrups")
    }
    const handleAccesory = ()=>{
        navigate("/accesory")
    }

    return(
        <div className="  ">
            <img src={logoTitleParts} alt="logo" className="logo-title-parts" />
            <div className='title-parts'>
                دسته بندی محصولات
            </div>
            <h5 className="text-parts">بهترین و باکیفیت ترین برند ها ، چون شما لایق بهترین ها هستید</h5>
            <div data-aos="fade-down" className="box-services-container">
                <div onClick={handleCoffeeBeans} className="box-services">
                    <img src={logoService1} alt="logo" className="logo-box-services" />
                    <h4 className="text-box-services">دانه قهوه</h4>
                </div>
                <div className="box-services">
                    <img src={logoService2} alt="logo" className="logo-box-services" />
                    <h4 onClick={handlePowders} className="text-box-services">پودریجات</h4>
                </div>
                <div onClick={handleDripback} className="box-services">
                    <img src={logoService3} alt="logo" className="logo-box-services" />
                    <h4 className="text-box-services">دریپ بک</h4>
                </div>
                <div onClick={handleSyrups} className="box-services">
                    <img src={logoService4} alt="logo" className="logo-box-services" />
                    <h4 className="text-box-services">سیروپ</h4>
                </div>
                <div onClick={handleAccesory} className="box-services">
                    <img src={logoService5} alt="logo" className="logo-box-services" />
                    <h4 className="text-box-services">اکسسوری</h4>
                </div>
            </div>
        </div>
    )
}

export default Services;