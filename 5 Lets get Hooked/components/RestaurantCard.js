import { CARD_IMAGE_BASE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, price, image } = props;
  return (
    <div className="restaurant-card-container">
      <img src={CARD_IMAGE_BASE_URL + image} alt="card image" />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Price {price}</h4>
      <h4>Stars {avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
