import { useNavigate } from "react-router";
import { Button, Typography } from "../../components/Elements";
import "./home-page.scss";
import { useEffect } from "react";
import { ANSWERS_KEY, WISHLIST_KEY } from "../../common";
import useLocalStorage from "../../components/Hooks/useLocalStorage";

export const HomePage = () => {
  const navigateTo = useNavigate();
  const { removeValue: removeQuizValue } = useLocalStorage(ANSWERS_KEY, {});
  const { removeValue: removeWishlistValue } = useLocalStorage(
    WISHLIST_KEY,
    [],
  );

  useEffect(() => {
    removeQuizValue();
    removeWishlistValue();
  }, []);

  const navigateToQuiz = () => {
    navigateTo("/quiz/1");
  };

  return (
    <section className="home">
      <div className="home__hero-container">
        <div className="home__overlay" />

        <div className="home__inner">
          <div className="home__text">
            <Typography variant="h1" color="white">
              Build a self care routine suitable for you
            </Typography>

            <Typography
              variant="paragraph"
              color="white"
              className="home__paragraph"
            >
              Take out test to get a personalised self care routine based on
              your needs.
            </Typography>
          </div>

          <Button
            intent="primary"
            className="home__btn--quiz"
            onClick={navigateToQuiz}
          >
            Start the quiz
          </Button>
        </div>
      </div>
    </section>
  );
};
