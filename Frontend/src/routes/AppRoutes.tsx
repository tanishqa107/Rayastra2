import React from "react";
import { Routes, Route } from 'react-router-dom';
import Landing from "../Pages/Landing";
import SignUpPage from "../Pages/SignUpPage";
import SignUpFormPage from "../Pages/SignUpFormPage";
import DashboardPage from "../Pages/Dashboard";


const AppRoutes:React.FC = () =>{
    return(
        <>
        <Routes>

            <Route path="/" element={<Landing/>}/>
            <Route path="/signupform" element={<SignUpFormPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
           
            <Route path="/dashboard" element={<DashboardPage/>}/>


        </Routes>
        </>
    )
}

export default AppRoutes