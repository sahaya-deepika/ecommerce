import "./mothercare.css";

import baby1 from "../../assets/baby1.jpg";

function mothercare() {
    return (
        <section className="mother-care-section">

            <h2>Mother Care</h2>

            <div className="mother-care-track">

                {/* PRODUCT 1 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="Mommy Nutrition Care Powder"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            Mommy Nutrition Care Powder
                        </p>

                        <p className="mother-care-price">
                            ₹1,899.00
                        </p>

                        <button className="mother-care-btn">
                            add to cart
                        </button>
                    </div>
                </div>


                {/* PRODUCT 2 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="Mother Wellness Care"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            Mother Wellness Care
                        </p>

                        <p className="mother-care-price">
                            ₹1,299.00
                        </p>

                        <button className="mother-care-btn">
                            add to cart
                        </button>
                    </div>
                </div>


                {/* PRODUCT 3 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="Postnatal Nutrition Support"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            Postnatal Nutrition Support
                        </p>

                        <p className="mother-care-price">
                            ₹1,499.00
                        </p>

                        <button className="mother-care-btn">
                            add to cart
                        </button>
                    </div>
                </div>


                {/* PRODUCT 4 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="Mommy Daily Wellness Combo"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            Mommy Daily Wellness Combo
                        </p>

                        <p className="mother-care-price">
                            ₹1,399.00
                        </p>

                        <button className="mother-care-btn">
                            add to cart
                        </button>
                    </div>
                </div>


                {/* PRODUCT 5 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="Mother Health Care Combo"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            Mother Health Care Combo
                        </p>

                        <p className="mother-care-price">
                            ₹1,599.00
                        </p>

                        <button className="mother-care-btn">
                            add to cart
                        </button>
                    </div>
                </div>


                {/* PRODUCT 6 */}
                <div className="mother-care-card">
                    <img
                        src={baby1}
                        alt="New Mom Essential Care Combo"
                    />

                    <div className="mother-care-details">
                        <p className="mother-care-name">
                            New Mom Essential Care Combo
                        </p>

                        <p className="mother-care-price">
                            ₹1,799.00
                        </p>

                        <button className="mother-care-btn">
                        add to cart
                        </button>
                    </div>
                </div>

            </div>


            <button className="mother-care-view-all-btn">
                View All
            </button>

        </section>
    );
}

export default mothercare;