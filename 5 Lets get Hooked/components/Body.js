import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  return (
    <div>
      <div>
        <button
          className="btn-filter-top-rated"
          onClick={() => {
            const filteredRes = restaurantsList.filter((res) => res.info.avgRating > 4);
            setRestaurantsList(filteredRes);
          }}
        >
          Filter Top Rated
        </button>
      </div>

      <div className="restaurants-container">
        {restaurantsList.map((restaurant) => {
          const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurant.info;
          return (
            <RestaurantCard
              key={id}
              name={name}
              cuisines={cuisines}
              avgRating={avgRating}
              price={costForTwo}
              image={cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
