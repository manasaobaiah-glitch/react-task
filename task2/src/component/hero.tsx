import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-image">
       <img
          src="https://images.openai.com/static-rsc-4/vG1dzTqRzA_wMrQ_MmwpydYLRL4F9LEPcdSBxzkSo3cQ4f09CS_OHZ3AZB4nqk3HuKoFANt6PUVa22JwTnkD42XoMdxMH_Cw4vFiSEzS34t_61OfdtlfuqReFw8dAG1bfP4zr21_Z4cyfFlrKpCRwaI-w8lRufC18uRSZ8aWKwLG6PuYGt5u2PNfOvlcjcR_?purpose=fullsize"
          alt="Fashion Collection"
        />
      </div>

      <div className="hero-content">
        <h1>Discover Your Style</h1>

        <p>
          Explore the latest fashion trends and find styles
          that match your personality.
        </p>

        <button>Shop Now</button>
      </div>

    </section>
  );
}

export default Hero;