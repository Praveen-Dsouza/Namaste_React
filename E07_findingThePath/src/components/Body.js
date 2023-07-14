import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    console.log("Body Rendered")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        const restaurantData = json?.data?.cards[2]?.data?.data?.cards
        setListOfRestuarants(restaurantData)
        setFilteredRestaurant(restaurantData)
    }

    return listOfRestuarants.length === 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                        className="search-box" 
                        placeholder="search your resturant..." 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        />
                    <button onClick={() => {
                            const filteredRestaurant = listOfRestuarants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestuarants.filter(
                        (ele) => ele.data.avgRating > 4
                    );
                    setListOfRestuarants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
                {
                    filteredRestaurant
                        .map((restaurant) => (
                            <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}><RestaurantCard resData={restaurant}/></Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Body;