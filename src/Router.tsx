import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import App from './tsx/App';
import About from './tsx/About';
import MySaviour from './tsx/MySaviour';
import Settings from './tsx/Settings';

export default function DomRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/mysaviour' element={<MySaviour />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </Router>
    )
}