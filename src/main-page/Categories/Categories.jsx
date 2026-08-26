import "./Categories.css";

import hairCare from "../../assets/hair-care.webp";
import skinCare from "../../assets/skin-care.webp";
import ayurvedicWellness from "../../assets/ayurvedic-wellness.webp";
import healthMixes from "../../assets/health-mixes.webp";
import healthyFoods from "../../assets/healthy-foods.webp";
import honey from "../../assets/honey.webp";
import coldPressOils from "../../assets/cold-press-oils.webp";
import homePersonalCare from "../../assets/home-personal-care.webp";


function Categories() {
    return (
        <section className="categories-section">

            <h2>Shop By Categories</h2>

            <div className="categories-track">

                {/* 1. Hair Care */}
                <div className="category-card">
                    <img src={hairCare} alt="Hair Care" />
                    <p>Hair Care</p>
                </div>


                {/* 2. Skin Care */}
                <div className="category-card">
                    <img src={skinCare} alt="Skin Care" />
                    <p>Skin Care</p>
                </div>


                {/* 3. Ayurvedic Wellness */}
                <div className="category-card">
                    <img
                        src={ayurvedicWellness}
                        alt="Ayurvedic Wellness"
                    />
                    <p>Ayurvedic Wellness</p>
                </div>


                {/* 4. Health Mixes */}
                <div className="category-card">
                    <img src={healthMixes} alt="Health Mixes" />
                    <p>Health Mixes</p>
                </div>


                {/* 5. Healthy Foods */}
                <div className="category-card">
                    <img src={healthyFoods} alt="Healthy Foods" />
                    <p>Healthy Foods</p>
                </div>


                {/* 6. Honey & Sweetners */}
                <div className="category-card">
                    <img src={honey} alt="Honey & Sweetners" />
                    <p>Honey & Sweetners</p>
                </div>


                {/* 7. Cold Press Oils & Ghee */}
                <div className="category-card">
                    <img
                        src={coldPressOils}
                        alt="Cold Press Oils & Ghee"
                    />
                    <p>Cold Press Oils & Ghee</p>
                </div>


                {/* 8. Home & Personal Care */}
                <div className="category-card">
                    <img
                        src={homePersonalCare}
                        alt="Home & Personal Care"
                    />
                    <p>Home & Personal Care</p>
                </div>

            </div>


            <div className="category-scroll-bar">
                <div className="category-scroll-progress"></div>
            </div>

        </section>
    );
}


export default Categories;