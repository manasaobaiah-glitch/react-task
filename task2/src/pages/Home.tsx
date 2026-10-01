import Header from "../component/Header";
import Hero from "./hero";
import ProductCard from "../component/ProductCard";
import CategoryCard from "../component/category";
import Footer from "../component/Footer";

import { products } from "../data/product";
import { categories } from "../data/category";

import "../css/Product.css";
import "../css/Category.css";

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section className="category-section">
        <h1>Fashion Categories</h1>

        <div className="category-grid">
          {categories.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h1>Our Products</h1>

        <div className="product-grid">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;