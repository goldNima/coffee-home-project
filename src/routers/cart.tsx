import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';

import logoDelete from '../logos/logo-delete.png'

function Cart (){

    const cartItems = useSelector((state: RootState)=> state.cart.items);
    const totalPrice = useSelector ((state : RootState)=> state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id:number)=>{
        dispatch(removeFromCart(id));
    }

    return(
        <div className="cart">
            <div className="right-cart">
                <h1 className='title-cart'>سبد خرید</h1>
                {cartItems.map((item)=>(
                    <div className="box-cart" key={item.id}>
                        <img onClick={()=> handleRemoveFromCart(item.id)} src={logoDelete} alt="" className="logo-delete-item" />
                        <img src={item.img} alt="" className="image-products-cart" />
                        <h2 className="name-products-cart">{item.name}</h2>
                        <h3 className="price-products-cart">{item.price} تومان</h3>
                    </div>
                ))}
            </div>
            <div className="left-cart">
                <h2 className="title-left-cart">قیمت کل و ثبت سفارش</h2>
                <div className="box-left-cart">
                    <h3 className="all-price-cart">قیمت کل : <span className="span-cart">{totalPrice}</span></h3>
                </div>
                <button className="btn-cart-products">ثبت سفارش</button>
            </div>
        </div>
    )
}

export default Cart;
