import '../App.css'

import { useNavigate } from 'react-router-dom';

import imageBlog from '../images/image-blog.png'

function Blog (){

    const navigate = useNavigate();

    const handleOurBlog = ()=>{
        navigate("/ourBlog")
    }
    const handleMovie = ()=>{
        navigate("/movie")
    }

    return(
        <div className="blog">
            <div className="right-blog">
            <img onClick={handleMovie} src={imageBlog} alt="image" className="image-blog" />
            </div>
            <div className="left-blog">
            
                <h1 className="title-blog"><span className='span-blog'>خـــانه قـهــوه </span>چـــالوس☕ </h1>
                <p className="text-blog">با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال سابقه در عرصه‌ی آموزش و
                تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه به شما اطمینان می‌دهیم. تخصص ما در ترکیب  
                بی‌نظیر علم قهوه با تجربه رستورانی، تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.</p>
                <button onClick={handleOurBlog} className="btn-blog">درباره ما</button>
            </div>
        </div>
    )
}

export default Blog;