import { NavLink } from "react-router";
import type { ProductType } from "../type/product";

import "../css/ProductCard.css";

function ProductCard({ data }: { data: ProductType }) {
  return (
    <div className="product-card">
      <img
        src={data.image}
        alt={data.title}
      />

      <h2>{data.title}</h2>

      <p>{data.category}</p>

      <h3>₹{data.price}</h3>

      <NavLink to={`/products/${data.id}`}>
        View Product
      </NavLink>
    </div>
  );
}

export default ProductCard;