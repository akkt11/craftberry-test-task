import { useNavigate } from "react-router";
import { Button, Typography } from "../../../../components/Elements";
import "./result-inner.scss";

export const ResultInner = () => {
  const navigateTo = useNavigate();

  const navigateToHome = () => {
    navigateTo("/");
  };

  return (
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
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
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
  );
};
