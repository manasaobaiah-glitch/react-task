
import "../css/About.css";

function about() {
    return (
        <section className="about">

            <div className="about-image">
                <img
                    src="https://cdn.shopify.com/s/files/1/0025/1350/2326/files/Rope-Nossa-Loja-01_2048x2048.jpg?v=1596849208"
                    alt="Fashion Boutique"
                />
            </div>

            <div className="about-content">

                <h1>About FashionHub</h1>

                <p>
                    FashionHub is an online fashion store created to
                    make modern fashion simple, stylish, and accessible.
                </p>

                <h2>Our Mission</h2>

                <p>
                    Our mission is to bring together stylish clothing,
                    footwear, and accessories that help you express
                    your unique personality.
                </p>

                <h2>Our Story</h2>

                <p>
                    FashionHub was created with a simple idea — fashion
                    should be easy to explore and enjoyable to wear.
                    We bring together modern trends and everyday styles
                    in one convenient place.
                </p>

            </div>

        </section>
    );
}

export default about;
