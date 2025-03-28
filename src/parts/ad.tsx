import '../App.css'

import imageAd from '../images/image-ad.png'

function AD (){
    return(
        <div className="ad">
            <div className="right-ad">
                <h1 className="title-ad"><span className='span-ad'>ایـنستـاگــرام </span>مـــا</h1>
                <h2 className="text-ad">Coffeehouse_north@</h2>
            </div>
            <div className="left-ad">
                <img src={imageAd} alt="image" className="image-ad" />
            </div>
        </div>
    )
}

export default AD;