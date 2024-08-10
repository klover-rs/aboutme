
import '../style/Topbar.css';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="open-navbar-container">
                <button>open navbar</button>
            </div>
            <div className="current-page-header-container">
                <div className='current-page-header-container-inner'>
                    <h3>current page</h3>
                </div>
            </div>
            
        </div>
    )
}