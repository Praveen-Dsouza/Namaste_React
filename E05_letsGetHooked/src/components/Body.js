import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestuarants, setListOfRestuarants] = useState(resList);

    // Normal JS Variable                State Variable
    // let listOfRestuarants = [] equals setListOfRestuarants([])

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestuarants.filter(
                        (ele) => ele.data.avgRating > 4
                    );
                    setListOfRestuarants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestuarants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;