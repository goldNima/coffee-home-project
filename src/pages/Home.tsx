import '../App.css'

import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import imageBgHome from '../images/image-bg-home.png'

import Services from '../parts/srvices';
import NewProducts from '../parts/newProducts';
import Brand from '../parts/brand';
import OffProducts from '../parts/offProducts';
import Blog from '../parts/blog';
import Article from '../parts/article';
import AD from '../parts/ad';

function Home (){

    useEffect (()=>{
        AOS.init({duration: 1000});
    } , [])

    const navigate = useNavigate();

    const handleAllProducts = ()=>{
        navigate("/allProducts");
    }

    return(
        <div className='Home'>
            <h1  data-aos="fade-down" className="title-home"><span className='span-title-home'>قهوت </span>یـادت نـره!</h1>
            <h4  data-aos="fade-down" className="text-home">بهترین و با کیفیت ترین قهوه ها و اکسسوری ها در خانه قهوه چالوس</h4>
            <button onClick={handleAllProducts} className="btn-home">نمایش محصولات</button>
            <br />
            <img src={imageBgHome} alt="image" className="img-bg-home" />
            <div className="box-home-container">
                <div className="box-home">
                    <h2 className="title-box-home">100+</h2>
                    <h5 className="text-box-home">نوع قهوه</h5>
                </div>
                <div className="box-home">
                    <h2 className="title-box-home">1000+</h2>
                    <h5 className="text-box-home">مشتری راضی</h5>
                </div>
                <div className="box-home">
                    <h2 className="title-box-home">3+</h2>
                    <h5 className="text-box-home">شعبه</h5>
                </div>
                <div className="box-home">
                    <h2 className="title-box-home">100+</h2>
                    <h5 className="text-box-home">اکسسوری</h5>
                </div>
            </div>
            <Services />
            <NewProducts />
            <Brand />
            <OffProducts />
            <Blog />
            <Article />
            <AD />
        </div>
    )
}

export default Home;