import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestuarants, setListOfRestuarants] = useState(resList);
    const [query, setQuery] = useState("");

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
            <div className="search">
                <input type="text" placeholder="search your resturant" onChange={(e) => setQuery(e.target.value)} />
            </div>
            
            <div className="res-container">
                {listOfRestuarants.filter(res => {
                        if (query === '') {
                            return listOfRestuarants;
                        } else if (res.data.name.toLowerCase().includes(query.toLowerCase())) {
                            return listOfRestuarants;
                        }
                    })
                    .map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;