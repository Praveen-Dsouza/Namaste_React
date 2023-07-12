import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 * - Links
 * - Address
 * - Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Inline styles
// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/79f013330e23a4f1bcb5262db7a7fc26" 
                />
            <h3>Persian Darbar</h3>
            <h4>Biryani, North Indian, Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
        <Header/>
        <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />);
