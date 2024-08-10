
import { useState } from 'react';
import '../style/Topbar.css';
import NavBar from './Navbar';

export default function TopBar() {

    const [elapse, setElapse] = useState(false);

    const handleButtonClick = () => {
        setElapse(prevElapse => !prevElapse);
    };

    return (
    <div>
        <div className='navbar-container'>
            {elapse ? 
                (
                    <div>
                        <NavBar />
                    </div>
                )
                :
                (
                    <div></div>
                )
            }
        </div>
        <div className="topbar">
            <div className="open-navbar-container">
                <button onClick={handleButtonClick}>open navbar</button>
            </div>
            <div className="current-page-header-container">
                <div className='current-page-header-container-inner'>
                    <h3>current page</h3>
                </div>
            </div>
            
        </div>
    </div>

    )
}