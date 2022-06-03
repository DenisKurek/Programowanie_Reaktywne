import './App.css';
import Posts from "./components/posts";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { isExpired } from "react-jwt";

function App() {
 return (
    <div className="container-fluid">
       <NavBar />
       <div className="container">
            <Outlet />
       </div>
     </div>
 );
}

export default App;

