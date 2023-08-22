import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
  return (
    <div>
      <Search />

      <div className="restaurants-container">
        {restaurants.map((restaurant) => {
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
