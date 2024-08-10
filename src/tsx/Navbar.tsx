import { Link } from "react-router-dom";
import '../style/Navbar.css'


export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="navbar-link">
                    <div className="navbar-link-inner"><Link to="/">Home</Link></div>
                </div>
                <br/>
                <div className="navbar-link">
                    <div className="navbar-link-inner"><Link to="/about">About</Link></div>
                </div>
                <br/>
                <div className="navbar-link">
                    <div className="navbar-link-inner"><Link to="/mysaviour">My Saviour</Link></div>
                </div>
                <br/>
                <div className="navbar-link">
                    <div className="navbar-link-inner"><Link to="/settings">Settings</Link></div>
                </div>
            </div>
        </div>
    )
}