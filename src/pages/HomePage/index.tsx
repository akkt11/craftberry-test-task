import HeroImage from "../../assets/Images/Hero.png";
import "./home-page.scss";

interface HomeProps {}

export const HomePage = (props: HomeProps) => {
  return (
    <section className="home">
      <div className="home__hero-container">
        <img src={HeroImage} alt="hero" className="home__hero-image" />
        <div className="home__overlay" />
      </div>
    </section>
  );
};
