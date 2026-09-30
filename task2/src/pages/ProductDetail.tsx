
import { useParams, NavLink } from "react-router";

import Header from "../component/Header";
import Footer from "../component/Footer";

import { products } from "../data/product";
import "../css/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Header />

        <div
          className="product-detail-container"
          style={{ textAlign: "center" }}
        >
          <h2>Product Not Found</h2>

          <p>
            The product you are looking for does not exist.
          </p>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="product-detail-container">

        <NavLink to="/products" className="back-btn">
          ← Back to Products
        </NavLink>

        <div className="product-detail-card">

          <div className="detail-image-box">
            <img
              src={product.image}
              alt={product.title}
              className="detail-image"
            />
          </div>

          <div className="detail-info">

            <span className="detail-category">
              {product.category}
            </span>

            <h1 className="detail-title">
              {product.title}
            </h1>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              ⭐ {product.rating} ({product.reviews} reviews)
            </p>

            <h2 className="detail-price">
              ₹{product.price}
            </h2>

            <p>
              <del>₹{product.originalPrice}</del>{" "}
              <strong>{product.discount}% OFF</strong>
            </p>

            <div className="detail-description-section">

              <h3>Description:</h3>

              <p>
                {product.description}
              </p>

            </div>

              <p>
              <strong>Status:</strong>{" "}
              {product.stock}
            </p>

            <button
              className="add-cart-btn"
              onClick={() =>
                alert(`Added ${product.title} to cart!`)
              }
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;