import '../App.css'

import { useParams } from 'react-router-dom';
import { apiArticle } from '../api/apiArticle';


function FullTextArticle (){

    const {id} = useParams<{id: string}>();
    const article = apiArticle.find(item => item.id.toString() === id);

    if (!article){
        return <p>مقاله ای وجود ندارد</p>
    }

    return(
        <div className='full-article-text'>
            <h1 className="title-full-article">مقالات :</h1>
            <div className="full-article-text-container">
                <img src={article.img} alt="" className="image-article-full-text" />
                <h2 className="name-full-article">{article.name}</h2>
                <p className="text-full-article">{article.textFull}</p>
            </div>
        </div>
    )
}

export default FullTextArticle;