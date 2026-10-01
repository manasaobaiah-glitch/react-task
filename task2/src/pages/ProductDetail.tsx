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

            <div className="product-buttons">

              <button
                className="add-cart-btn"
                onClick={() =>
                  alert(`Added ${product.title} to cart!`)
                }
              >
                Add to Cart
              </button>

              <button
                className="buy-now-btn"
                onClick={() =>
                  alert(`Buying ${product.title}`)
                }
              >
                Buy Now
              </button>

            </div>
          </div>

        </div>


        {/* Product Features */}

        <div className="product-extra-section">

          <h2>Key Features</h2>

          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>
                {feature}
              </li>
            ))}
          </ul>

        </div>


        {/* Specifications */}

        <div className="product-extra-section">

          <h2>Specifications</h2>

          <div className="specification-table">

            <div>
              <span>Product Type</span>
              <strong>
                {product.specifications.productType}
              </strong>
            </div>

            <div>
              <span>Material</span>
              <strong>
                {product.specifications.material}
              </strong>
            </div>

            <div>
              <span>Colour</span>
              <strong>
                {product.specifications.colour}
              </strong>
            </div>

            <div>
              <span>Height</span>
              <strong>
                {product.specifications.height}
              </strong>
            </div>

            <div>
              <span>Width</span>
              <strong>
                {product.specifications.width}
              </strong>
            </div>

            <div>
              <span>Weight</span>
              <strong>
                {product.specifications.weight}
              </strong>
            </div>

          </div>

        </div>


        {/* Size & Dimensions */}

        <div className="product-extra-section">

          <h2>Size & Dimensions</h2>

          <p>
            <strong>Product Height:</strong>{" "}
            {product.size.productHeight}
          </p>

          <p>
            <strong>Product Width:</strong>{" "}
            {product.size.productWidth}
          </p>

          <p>
            <strong>Package Dimensions:</strong>{" "}
            {product.size.packageDimensions}
          </p>

        </div>


        {/* What's Included */}

        <div className="product-extra-section">

          <h2>What's Included</h2>

          <ul>
            {product.whatsIncluded.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>

        </div>


        {/* Delivery Information */}

        <div className="product-extra-section">

          <h2>Delivery Information</h2>

          <p>
            <strong>Estimated Delivery:</strong>{" "}
            {product.delivery.estimatedTime}
          </p>

          <p>
            <strong>Shipping Charges:</strong>{" "}
            {product.delivery.shippingCharges}
          </p>

        </div>


        {/* Return Policy */}

        <div className="product-extra-section">

          <h2>Return & Replacement Policy</h2>

          <p>
            <strong>Return Window:</strong>{" "}
            {product.returnPolicy.returnWindow}
          </p>

          <p>
            <strong>Replacement:</strong>{" "}
            {product.returnPolicy.replacement}
          </p>

          <p>
            <strong>Refund:</strong>{" "}
            {product.returnPolicy.refund}
          </p>

        </div>


        {/* Care Instructions */}

        <div className="product-extra-section">

          <h2>Care Instructions</h2>

          <p>
            <strong>Sunlight:</strong>{" "}
            {product.careInstructions.sunlight}
          </p>

          <p>
            <strong>Watering:</strong>{" "}
            {product.careInstructions.watering}
          </p>

          <p>
            <strong>Maintenance:</strong>{" "}
            {product.careInstructions.maintenance}
          </p>

        </div>


        {/* Warranty */}

        <div className="product-extra-section">

          <h2>Warranty</h2>

          <p>
            {product.warranty}
          </p>

        </div>


        {/* Seller Information */}

        <div className="product-extra-section">

          <h2>Seller Information</h2>

          <p>
            <strong>Sold by:</strong>{" "}
            {product.seller}
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;