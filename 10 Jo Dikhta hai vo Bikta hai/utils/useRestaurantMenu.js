import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const data = await response.json();
    setRestaurant(data?.data);
  };

  return restaurant;
};

export default useRestaurantMenu;
