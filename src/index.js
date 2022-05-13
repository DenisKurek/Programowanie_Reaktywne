import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import Home from "./components/home"
import Posts from "./components/posts"
import NotFound from "./components/notFound"
import Dicaprio from "./components/dicaprio"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}>
                   
                <Route path="home" element={<Home/>}/>

                <Route path="posts" element={<Posts/>}/>
                
                <Route path="easter_egg" element={<Dicaprio/>}/>
                <Route
                       path="*"
                       element={
                           <NotFound/>
                       }
                   />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
