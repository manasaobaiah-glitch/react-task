import { NavLink } from "react-router";

import Header from "../component/Header";
import Footer from "../component/Footer";

import "../css/notfound.css";

function NotFound() {
  return (
    <>
      <Header />

      <section className="not-found">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <NavLink to="/">
          Go to Home
        </NavLink>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;