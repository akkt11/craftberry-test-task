import { useNavigate } from "react-router";
import { Button, Product, Typography } from "../../components/Elements";
import "./result-page.scss";
import { useEffect, useState } from "react";
import type { ProductResponse, ProductType } from "../../common/types";

const PRODUCTS_URL =
  "https://jeval.com.au/collections/hair-care/products.json?page=1";

export const ResultPage = () => {
  const navigateTo = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(PRODUCTS_URL);
      const newResponse: ProductResponse = await response.json();

      console.log(newResponse, "newResponse");

      setProducts(newResponse.products);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigateToHome = () => {
    navigateTo("/");
  };

  return (
    <section className="result">
      <div className="result__container">
        <div className="result__overlay" />

        <div className="result__inner">
          <div className="result__text">
            <Typography variant="h1" color="white">
              Build you everyday self care routine.
            </Typography>

            <Typography
              variant="paragraph"
              color="white"
              className="result__paragraph"
            >
              Perfect for if you're looking for soft, nourished skin, our
              moisturizing body washes are made with skin-natural nutrients that
              work with your skin to replenish moisture. With a light formula,
              the bubbly lather leaves your skin feeling cleansed and cared for.
              And by choosing relaxing fragrances you can add a moment of calm
              to the end of your day.
            </Typography>
          </div>

          <Button
            intent="inner"
            className="result__btn--quiz"
            onClick={navigateToHome}
          >
            Retake the quiz
          </Button>
        </div>
      </div>

      <div className="result__blocks">
        <div className="result__block">
          <div className="inner result__block-inner">
            <Typography variant="h3" className="inner__title">
              Daily routine
            </Typography>

            <Typography variant="paragraph">
              Perfect for if you're looking for soft, nourished skin, our
              moisturizing body washes are made with skin-natural nutrients that
              work with your skin to replenish moisture. With a light formula,
              the bubbly lather leaves your skin feeling cleansed and cared for.
              And by choosing relaxing fragrances you can add a moment of calm
              to the end of your day.
            </Typography>
          </div>
        </div>

        {products.map(({ title, images, variants }) => {
          const { src } = images[0];
          const { price } = variants[0];

          return <Product title={title} image={src} price={price} />;
        })}
      </div>
    </section>
  );
};
