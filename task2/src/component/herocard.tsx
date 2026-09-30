import type { heroType } from "../type/hero";

function HeroCard({ data }: { data: heroType }) {
  return (
    <div className="hero-card">
      <img src={data.image} alt={data.title} />

      <h2>{data.title}</h2>

      <p>{data.description}</p>

      <button>{data.buttonText}</button>
    </div>
  );
}

export default HeroCard;