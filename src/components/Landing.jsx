import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import MyForm from './MyForm';
import Success from './Success';


const Landing = () => {
   
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MyForm />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </HashRouter>
            
        </div>
    );
};

export default Landing;