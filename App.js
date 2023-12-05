import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
              <img  className="logo" src="./Media/Logo.png" alt="LogoNotRendered"/>  
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Orders</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
    )
};


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>

        </div>
    )

};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
 