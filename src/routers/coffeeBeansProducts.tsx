import '../App.css'

import { useDispatch, UseDispatch } from 'react-redux';
import { addTocart } from '../redux/cartSlice';
import { apiAccesory } from '../api/apiAccesory';

import logoTitleParts from '../logos/logo-title-services.png'

import { apiCoffeeBans } from '../api/apiCoffeeBaens';

function CoffeeBeansProduct (){

    const dispatch = useDispatch();

    const handleAddToCart = (item: typeof apiAccesory[0])=>{
        dispatch(addTocart(item));
    }

    return(
        <div className="products-site-container">
            <img src={logoTitleParts} alt="logo" id='logo-title-Products' className="logo-title-parts" />
            <div className='title-parts'>دانه قهوه</div>
            <div className="products-site">
                {apiCoffeeBans.map((item)=>(
                    <div className="product" key={item.id}>
                        <img src={item.img} alt="" className="image-products" />
                        <h3 className="name-products">{item.name}</h3>
                        <h5 className="price-products">{item.price} تومان</h5>
                        <button onClick={()=> handleAddToCart(item)}  className="btn-newProducts">افزودن به سبد خرید</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoffeeBeansProduct;