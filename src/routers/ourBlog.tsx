import '../App.css'


function OurBlog (){
    return(
        <div className="our-blog">
            <div className="our-blog-container">
                <h1 className="title-blog"><span className='span-blog'>خـــانه قـهــوه </span>چـــالوس☕ </h1>
                <p id='text-ourblog' className="text-blog">با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال سابقه در عرصه‌ی آموزش و
                تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه به شما اطمینان می‌دهیم. تخصص ما در ترکیب  
                بی‌نظیر علم قهوه با تجربه رستورانی، تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.</p>
                <br />
                <div className="our-address-container">
                    <h3 className="title-address-our-blog">آدرس ما :</h3>
                    <p className="text-our-address">جاده چالوس ، رشت ، رادیو دریا 2</p>
                </div>
                <div className="our-address-container">
                    <h3 className="title-address-our-blog">ساعت کاری ما :</h3>
                    <p className="text-our-address">8 صبح الی 11 شب</p>
                </div>
                <div className="our-address-container">
                    <h3 className="title-address-our-blog"> شماره تماس ما :</h3>
                    <p className="text-our-address">091212345678</p>
                </div>
            </div>
        </div>
    )
}

export default OurBlog;