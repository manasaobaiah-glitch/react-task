import HeroCard from "../component/herocard";
import { heroCards } from "../data/herocard";
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Discover Your Style</h1>

        <p>
          Explore the latest fashion trends and find styles
          that match your personality.
        </p>
      </div>

      <div className="hero-cards">
        {heroCards.map((item) => (
          <HeroCard key={item.id} data={item} />
        ))}
      </div>

    </section>
  );
}

export default Hero;