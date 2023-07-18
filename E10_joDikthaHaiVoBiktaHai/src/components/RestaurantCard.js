import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.data

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
            <img 
                className="rounded-lg"
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId} 
                />
            <h3 className="py-4 text-lg font-bold ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;