import { Link } from "react-router-dom";
import TopBar from "../Topbar";
import '../../style/Settings/Themes.scss';
import { useEffect, useState } from "react";


import { Style } from '../../Router';

export default function SettingsThemes() {

    const [jsonTheme, setJsonTheme] = useState<Style | null>(null); 
    const [isTransparencyEnabled, setIsTransparencyEnabled] = useState<boolean>(false);
    
    useEffect(() => {
        const storage = localStorage.getItem("theme");

        if (storage) {
            const jsonTheme_: Style = JSON.parse(storage);

            setJsonTheme(jsonTheme_);
            
            setIsTransparencyEnabled(jsonTheme_.transparency);
        }
    }, []);

    
    const handleToggleTransparency = () => {
        setIsTransparencyEnabled((prev) => !prev);
        if (jsonTheme) {
            const updatedTheme = { ...jsonTheme, transparency: !isTransparencyEnabled };
            setJsonTheme(updatedTheme);
            localStorage.setItem("theme", JSON.stringify(updatedTheme));
        }
    };


    return (
    <div>
        <TopBar />
        <div className="container">
            <div className="settings-container">
                <div className="settings-container-inner">
                    <div className="settings-navlink-container">
                        <div className="settings-navlink">
                            <Link to="/settings/themes">Themes</Link>
                        </div>
                    </div>
                    <div className="settings-content">
                        <div className="settings-themes-container">
                            <div className="settings-themes-container-inner">
                               <h2>Themes</h2>
                               <hr/> 
                               <div>
                                    <div className="transparency-effects-container">
                                        <div className="transparency-effects-container-text">
                                            <p>Transparency effects</p>
                                            <p className="small-p"><small>(requires refresh)</small></p>
                                        </div>
                                        <div className="transparency-effects-toggle-container">
                                            <p className="transparency-effects-toggle-text">On</p>
                                            <label className="transparency-effects-toggle-switch">
                                                <input
                                                    type="checkbox" 
                                                    checked={isTransparencyEnabled}
                                                    onChange={handleToggleTransparency}
                                                />
                                                <div className="transparency-effects-toggle-slider"></div>
                                                <div className="transparency-effects-toggle-slider-card">
                                                    <div className="slider-card-face slider-card-front"></div>
                                                    <div className="slider-card-face slider-card-back"></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <hr/>
                                    <details>
                                        <summary>Accent Color</summary>
                                        <p>accent colors</p>
                                    </details>
                                    <hr/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}