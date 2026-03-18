import { useState } from "react";
import type { ProductType } from "../../../../common/types";
import {
  Button,
  ProductCard,
  Typography,
} from "../../../../components/Elements";
import "./result-blocks.scss";
import { ChevronRight } from "../../../../assets/Icons";

interface Props {
  products: ProductType[];
  loading: boolean;
}

const PAGE_SIZE = 2;

export const ResultBlocks = ({ products, loading }: Props) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginated = products.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  const handleNext = () => {
    if (page === totalPages - 1) {
      return setPage(0);
    }

    setPage((p) => p + 1);
  };

  return (
    <div className="result-blocks">
      <div className="result-blocks__main">
        <div className="result-blocks__text">
          <div className="inner result-blocks__inner">
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

        {loading ? (
          <div className="skeleton-wrapper">
            {[0, 1].map((i) => (
              <div key={i} className="skeleton-card" />
            ))}
          </div>
        ) : (
          paginated.map(({ id, title, images, variants }) => {
            const { src } = images[0];
            const { price } = variants[0];

            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                image={src}
                price={price}
              />
            );
          })
        )}

        <Button onClick={handleNext} className="result-blocks__button">
          <ChevronRight />
        </Button>
      </div>

      <div className="result-blocks__dots">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => setPage(i)}
            className={`result-blocks__dot ${i === page ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
