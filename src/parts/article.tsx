import '../App.css'

import logoTitleParts from '../logos/logo-title-services.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { apiArticle } from '../api/apiArticle';
import { Link } from 'react-router-dom';

function Article (){
    
    useEffect (()=>{
        AOS.init({duration: 1000});
    } , [])
    
    return(
        <div className="article">
            <img src={logoTitleParts} alt="logo" id='logo-article' className="logo-title-parts" />
            <div className='title-parts'>
                مقالات آموزشی  
            </div>
            <h5 className="text-parts">مقالات و آموزش های خانه قهوه چالـــوس</h5>
            <div className="article-container">
                {apiArticle.map((item)=> (
                    <div data-aos="zoom-in-down" className="box-article" key={item.id}>
                        <img src={item.img} alt="" className="image-article" />
                        <h3 className="name-article">{item.name}</h3>
                        <p className="text-article">{item.text}</p>
                        <Link to={`/articles/${item.id}`} className="btn-article">ادامه مطلب »</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Article;