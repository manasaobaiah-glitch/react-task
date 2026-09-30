import Header from "../component/Header";
import ProductCard from "../component/ProductCard";
import Footer from "../component/Footer";

import { products } from "../data/product";
import "../css/Product.css";

function Product() {
  return (
    <>
      <Header />

      <section className="product-section">
        <h1>All Products</h1>

        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product;