import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
     // Dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs text-left">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="px-2 bg-black text-white shadow-lg mx-16 rounded-lg"
              onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img
              className="rounded-md bg-gray-200 shadow-lg"
              src={CDN_URL + item?.card?.info?.imageId} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
