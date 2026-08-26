import "./Concern.css";

import hairFall from "../../assets/hair-fall.webp";
import glowSkin from "../../assets/glow-skin.webp";
import diabeticWellness from "../../assets/diabetic-wellness.webp";
import weightLoss from "../../assets/weight-loss.webp";
import mensHealth from "../../assets/mens-health.webp";
import womensHealth from "../../assets/womens-health.webp";

function Concern() {
    return (
        <section className="concern-section">

            {/* TITLE */}
            <h2>Shop By Concern</h2>

            {/* CONCERN CARDS */}
            <div className="concern-track">

                {/* Hair Fall */}
                <div className="concern-card">
                    <img
                        src={hairFall}
                        alt="Hair Fall"
                    />
                    <p>Hair Fall</p>
                </div>

                {/* Glow Skin */}
                <div className="concern-card">
                    <img
                        src={glowSkin}
                        alt="Glow Skin"
                    />
                    <p>Glow Skin</p>
                </div>

                {/* Diabetic Wellness */}
                <div className="concern-card">
                    <img
                        src={diabeticWellness}
                        alt="Diabetic Wellness"
                    />
                    <p>Diabetic Wellness</p>
                </div>

                {/* Weight Loss */}
                <div className="concern-card">
                    <img
                        src={weightLoss}
                        alt="Weight Loss"
                    />
                    <p>Weight Loss</p>
                </div>

                {/* Mens Health */}
                <div className="concern-card">
                    <img
                        src={mensHealth}
                        alt="Mens Health"
                    />
                    <p>Mens Health</p>
                </div>

                {/* Womens Health */}
                <div className="concern-card">
                    <img
                        src={womensHealth}
                        alt="Womens Health"
                    />
                    <p>Womens Health</p>
                </div>

            </div>

            
        </section>
    );
}

export default Concern;