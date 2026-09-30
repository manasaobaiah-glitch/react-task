
import "../css/Footer.css";

function Footer() {
  return (
    <footer>

      <div>
        <h2>FashionHub</h2>

        <p>
          Discover fashion that matches your style.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>

        <p>Home</p>
        <p>Products</p>
        <p>About</p>
      </div>

      <div>
        <h3>Contact</h3>

        <p>Email: support@fashionhub.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <div>
        <h3>Customer Support</h3>

        <p>Contact Us</p>
        <p>Shipping & Delivery</p>
        <p>Returns & Refunds</p>
        <p>FAQs</p>
      </div>

      <div>
        <h3>Follow Us</h3>

        <p>Instagram</p>
        <p>Facebook</p>
        <p>Pinterest</p>
      </div>

      <div>
        <h3>Newsletter</h3>

        <p>
          Subscribe for fashion updates and exclusive offers.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>

      <p>© 2026 FashionHub. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
