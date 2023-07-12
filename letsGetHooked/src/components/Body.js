import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {reslist.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;