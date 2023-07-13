import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
    <div className="container">
        <div className="logo">Namaste React</div>
        <div className="search"><input type="text" className="searchInput" placeholder="Serach Something..."/></div>
        <div className="icon"><span className="user_profile"><strong>PD</strong></span></div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)