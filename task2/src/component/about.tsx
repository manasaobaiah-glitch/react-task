
import "../css/About.css";

function about() {
    return (
        <section className="about">

            <div className="about-image">
                <img
                    src="https://i.pinimg.com/originals/d9/24/2e/d9242e421f1144b1d1d8466b91925c06.jpg"
                    alt="FashionHub"
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
