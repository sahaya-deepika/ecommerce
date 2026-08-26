import "./Bestsellingcombo.css";

import combo1 from "../../assets/bestselling-combo1.webp";
import combo2 from "../../assets/bestselling-combo2.webp";
import combo3 from "../../assets/bestselling-combo3.webp";
import combo4 from "../../assets/bestselling-combo4.webp";
import combo5 from "../../assets/bestselling-combo5.webp";
import combo6 from "../../assets/bestselling-combo6.webp";

function Bestsellingcombo() {
    return (
        <section className="best-selling-combo-section">

            <h2>Best Selling Combos</h2>

            <div className="combo-track">

                {/* COMBO 1 */}
                <div className="combo-card">
                    <img
                        src={combo1}
                        alt="Pirandai Rice Milk Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Pirandai Rice Milk Combo
                        </p>

                        <p className="combo-price">
                            ₹999
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>


                {/* COMBO 2 */}
                <div className="combo-card">
                    <img
                        src={combo2}
                        alt="Hair Growth Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Hair Growth Combo
                        </p>

                        <p className="combo-price">
                            ₹899
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>


                {/* COMBO 3 */}
                <div className="combo-card">
                    <img
                        src={combo3}
                        alt="Hair Care Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Hair Care Combo
                        </p>

                        <p className="combo-price">
                            ₹799
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>


                {/* COMBO 4 */}
                <div className="combo-card">
                    <img
                        src={combo4}
                        alt="Natural Wellness Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Natural Wellness Combo
                        </p>

                        <p className="combo-price">
                            ₹999
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>


                {/* COMBO 5 */}
                <div className="combo-card">
                    <img
                        src={combo5}
                        alt="Healthy Hair Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Healthy Hair Combo
                        </p>

                        <p className="combo-price">
                            ₹899
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>


                {/* COMBO 6 */}
                <div className="combo-card">
                    <img
                        src={combo6}
                        alt="Complete Care Combo"
                    />

                    <div className="combo-details">
                        <p className="combo-name">
                            Complete Care Combo
                        </p>

                        <p className="combo-price">
                            ₹1099
                        </p>

                        <button className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>


            <button className="combo-view-all-btn">
                View All
            </button>

        </section>
    );
}

export default Bestsellingcombo;