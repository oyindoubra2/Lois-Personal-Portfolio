import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<App/>} /> 
          <Route path="/AboutMe" element={<AboutMe/>} /> 
          <Route path="/Portfolio" element={<Portfolio/>} /> 
        </Routes> 
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>,
)
