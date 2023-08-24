import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  // useEffect is a Hook and a hook at the end of the day is a normal Javascript function
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("useEffect called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestaurantsList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (restaurantsList?.length === 0) {
    return <Shimmer />;
  }
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
