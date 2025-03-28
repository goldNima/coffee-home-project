import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import RightPanelAdmin from '../components/right-panel-admin'


function ShopsPanelAdmin (){

    const cartItems = useSelector((state: RootState)=> state.cart.items);
    const dispatch = useDispatch();

    return(
        <div className="admin-panel">
            <div className="right-panel-admin">
                <RightPanelAdmin />
            </div>
            <div className="left-panel-admin-shops">
                <h1 className="title-left-panel-admin">پنل ادمین</h1>
                <h3 className="title-box-admin">خرید ها :</h3>
                <div className="box-shop-admin-container">
                    {cartItems.map((item)=>(
                        <div className="box-shop-admin">
                            <div className="box-cart" key={item.id}>
                                <img src={item.img} alt="" className="image-products-cart" />
                                <h2 className="name-products-cart">{item.name}</h2>
                                <h3 className="price-products-cart">{item.price} تومان</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopsPanelAdmin;