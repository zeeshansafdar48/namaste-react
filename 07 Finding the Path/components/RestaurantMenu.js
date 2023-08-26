import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const data = await response.json();
    setRestaurant(data?.data);
  };

  if (restaurant === null) return <Shimmer />;
  const { name } = restaurant.cards[0].card.card.info;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default RestaurantMenu;
