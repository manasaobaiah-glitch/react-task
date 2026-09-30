import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Product />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);