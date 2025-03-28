import '../App.css'

import { useDispatch, UseDispatch } from 'react-redux';
import { addTocart } from '../redux/cartSlice';
import { apiAccesory } from '../api/apiAccesory';

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import logoTitleParts from '../logos/logo-title-services.png'

import { apiNewProducts } from '../api/apiNewProducts';
import { useNavigate } from 'react-router-dom';

function NewProducts (){

    useEffect (()=>{
        AOS.init({duration: 1000});
    } , [])

    const dispatch = useDispatch();

    const handleAddToCart = (item: typeof apiAccesory[0])=>{
        dispatch(addTocart(item));
    }
    

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
        <div className="new-products">
            <img src={logoTitleParts} alt="logo" id='logo-title-newproducts' className="logo-title-parts" />
            <div className='title-parts'>جدیدترین محصولات</div>
            <div className="nav-newProducts">
                <p onClick={handleCoffeeBeans} className="btn-nav-newProducts">انواع قهوه</p>
                <p onClick={handlePowders} className="btn-nav-newProducts">انواع پودریجات</p>
                <p onClick={handleDripback} className="btn-nav-newProducts">دریپ بک</p>
                <p onClick={handleSyrups} className="btn-nav-newProducts" id='responsive-delete-new-products'>سیروپ ها</p>
                <p onClick={handleAccesory} className="btn-nav-newProducts" id='responsive-delete-new-products'>انواع اکسسوری</p>
            </div>
            <div className="products-newProducts-container">
                {apiNewProducts.map((item)=> (
                    <div  data-aos="zoom-in" className="box-products-newProducts" key={item.id}>
                        <img src={item.img} alt="" className="image-newProducts" />
                        <h3 className="name-newProducts">{item.name}</h3>
                        <p className="price-newProducts">تومان {item.price}</p>
                        <button onClick={()=> handleAddToCart(item)} className="btn-newProducts">افزودن به سبد خرید</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewProducts;