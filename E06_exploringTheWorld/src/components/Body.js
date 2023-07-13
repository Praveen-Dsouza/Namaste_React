import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[2].data.data.cards)
        setListOfRestuarants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // Conditional Rendering

    return listOfRestuarants.length === 0 ? <Shimmer/>: (
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
                <input type="text" placeholder="search your resturant..." onChange={(e) => setQuery(e.target.value)} />
            </div>
            
            <div className="res-container">
                {listOfRestuarants
                    .filter(res => {
                        if (query === '') {
                            return listOfRestuarants;
                        } else if (res.data?.name.toLowerCase().includes(query.toLowerCase())) {
                            console.log(res.data)
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