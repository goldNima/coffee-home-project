import '../App.css'

import RightPanelAdmin from '../components/right-panel-admin';
import imageAdmin from '../images/image-panel-admin.png'

function AdminPanel (){

    return(
        <div className="admin-panel">
            <div className="right-panel-admin">
                <RightPanelAdmin />
            </div>
            <div className="left-panel-admin">
                <h1 className="title-left-panel-admin">پنل ادمین</h1>
                <h3 className="title-box-admin">ادمین ها :</h3>
                <div className="box-admins">
                    <img src={imageAdmin} alt="" className="image-admin" />
                    <h5 className="name-admin">نیما تاجیک</h5>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;