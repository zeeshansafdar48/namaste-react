import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let allRestaurants = [];

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [inputText, setInputText] = useState("");

  // useEffect is a Hook and a hook at the end of the day is a normal Javascript function
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    allRestaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsList(allRestaurants);
  };

  return restaurantsList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search-filter">
          <input
            type="text"
            className="search-text-input"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              console.log("inputText ==>", inputText);
              console.log("allRestaurants ==>", allRestaurants);
              const filteredRestaurantsList = allRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              );
              setRestaurantsList(filteredRestaurantsList);
            }}
          >
            Search
          </button>
        </div>
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
        {restaurantsList?.map((restaurant) => {
          const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurant.info;
          return (
            <Link to={"/restaurant/" + id} key={id}>
              <RestaurantCard
                name={name}
                cuisines={cuisines}
                avgRating={avgRating}
                price={costForTwo}
                image={cloudinaryImageId}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
