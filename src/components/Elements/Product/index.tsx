import { Typography } from "../Typography";
import "./product.scss";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

export const Product = ({ title, image, price }: ProductProps) => {
  return (
    <div className="product">
      <img src={image} className="product__image" alt="product" />

      <div className="product__description">
        <Typography variant="h3">{title}</Typography>

        <Typography variant="caption">${price}</Typography>
      </div>
    </div>
  );
};
