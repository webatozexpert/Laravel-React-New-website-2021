import React from 'react';
import Menu from "./components/menu";
import banner from "../images/banner.svg"
function App() {
    return (
        <div >
            <Menu/>
            <img src={banner}/>
            <button className="normal-btn btn"> Login</button>
        </div>
    );
}

export default App;
