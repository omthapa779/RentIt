import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//pages
import SignupPage from './pages/SignupPage.jsx';

import App from './App.jsx';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/signup' element={ <SignupPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);