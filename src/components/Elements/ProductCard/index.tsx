import { Heart } from "../../../assets/Icons";
import { useWishlist } from "../../Hooks";
import { Typography } from "../Typography";
import "./product.scss";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

export const ProductCard = ({ id, title, image, price }: ProductProps) => {
  const { isWishlisted, toggle } = useWishlist();

  console.log(isWishlisted(id), "isWishlisted(id)");

  return (
    <div className="product">
      <div
        style={{
          position: "absolute",
          right: 0,
          padding: 16,
          cursor: "pointer",
        }}
        onClick={() => toggle(id)}
      >
        <Heart fill={isWishlisted(id) ? "red" : ""} />
      </div>

      <img src={image} className="product__image" alt="product" />

      <div className="product__description">
        <Typography
          variant="h3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <Typography variant="caption">${price}</Typography>
      </div>
    </div>
  );
};
