import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Login_Page from '../pages/Login_Page';

const PrivateRoute = ({ children, redirecTo }) => {
    const isAuth = localStorage.getItem('token') !== null;
    console.log('isAuth', isAuth);
    return isAuth ? children : <Navigate to={redirecTo} />;
}

export function PathRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login_Page />} />
                <Route exact path="/home" element={
                    <PrivateRoute redirecTo={'/'}>
                        <Home/>
                    </PrivateRoute>
                }
                />
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </>
    )
} 