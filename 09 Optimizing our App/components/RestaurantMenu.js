import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  if (restaurant === null) return <Shimmer />;
  const { name } = restaurant.cards[0].card.card.info;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default RestaurantMenu;
