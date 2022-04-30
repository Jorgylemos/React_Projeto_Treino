import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from '../Pages/Home';

const Routeator = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/404' element={<h1>404 Not Found</h1>} />
                <Route path='/*' element={<Navigate replace to="/404" />} />
            </Routes>
        </Router>
    )
}

export default Routeator;