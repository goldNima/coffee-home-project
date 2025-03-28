import '../App.css'

import logoTitleParts from '../logos/logo-title-services.png'

import { apiBrand } from '../api/apiBrand';

function Brand (){
    return(
        <div className='brand'>
            <img src={logoTitleParts} alt="logo" className="logo-title-parts" />
            <div className='title-parts'>
                قهوه ها بر اساس برند      
            </div>
            <h5 className="text-parts">بر اساس برند مورد علاقتان انتخاب کنید</h5>
            <div className="brand-container">
                {apiBrand.map((item)=> (
                    <div className="box-brand" key={item.id}>
                        <img src={item.img} alt="logo" className="img-brand" />
                        <h3 className="name-brand">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brand;