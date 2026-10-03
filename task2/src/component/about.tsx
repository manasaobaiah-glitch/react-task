import "../css/About.css";

function about() {
    return (
        <>
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

            <section className="values">

                <h1>Our Values</h1>

                <div className="values-container">

                    <div className="value-card">
                        <div className="value-icon">◆</div>
                        <h2>Quality</h2>
                        <p>
                            We focus on bringing quality products
                            that you can enjoy with confidence.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">✦</div>
                        <h2>Style</h2>
                        <p>
                            We bring modern fashion trends to help
                            you create your own unique style.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">♡</div>
                        <h2>Comfort</h2>
                        <p>
                            We believe fashion should look good
                            while keeping you comfortable.
                        </p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default about;