import { Link } from "react-router-dom";
import '../style/Navbar.css'


export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/mysaviour">My Saviour</Link>
            <br/>
            <Link to="/settings">Settings</Link>
        </div>
    )
}