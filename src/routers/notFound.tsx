import '../App.css'

import { Link } from 'react-router-dom'

export const NotFound = ()=>{
    return(
        <div style={{textAlign: "center" , marginTop: "50px" , paddingBottom: "300px" , paddingTop: "50px"}} className='notFound'>
            <h1>404 - صفحه یافت نشد</h1>
            <p>صفحه ای که به دنبال آن هستید وجود ندارد</p>
            <Link to= "/">بازگشت به صفحه اصلی </Link>
        </div>
    )
}