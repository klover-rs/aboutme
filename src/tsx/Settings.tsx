import { Link } from "react-router-dom"
import TopBar from "./Topbar"

export default function Settings() {
    return (
    <div>
        <TopBar />
        <div className="container">
            <div className="settings-container">
                <div className="settings-navlink">
                    <Link to="/settings/themes">Themes</Link>
                </div>
            </div>
        </div>
    </div>
    )
}