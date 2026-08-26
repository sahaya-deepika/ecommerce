import "./BestSellers.css";

import hairGrowthOil from "../../assets/hair-growth-oil.webp";
import aloeveraShampoo from "../../assets/aloevera-shampoo.webp";
import herbalShampoo from "../../assets/herbal-shampoo.webp";
import couplesLegiyam from "../../assets/couples-legiyam.jpg";
import bodyGlowOil from "../../assets/HerbalBodyGlowOil.webp";
import hairWashPowder from "../../assets/HerbalHairWashPowder1.webp";


function BestSellers() {

    const products = [
        {
            image: hairGrowthOil,
            rating: "4.68",
            reviews: "25 Reviews",
            name: "36 Herbs Hair Growth Oil – Natural, Chemical-Free | Vanga Annachi",
            description: "100% natural homemade formula",
            price: "Rs. 1,090.00",
            oldPrice: "Rs. 1,499.00",
            save: "Rs. 409.00"
        },

        {
            image: aloeveraShampoo,
            rating: "4.0",
            reviews: "3 Reviews",
            name: "Aloevera Shampoo - Natural Aloe Vera Hair Wash | Vanga Annachi",
            description: "Controls hair fall",
            price: "Rs. 499.00",
            oldPrice: "Rs. 649.00",
            save: "Rs. 150.00"
        },

        {
            image: herbalShampoo,
            rating: "5.0",
            reviews: "2 Reviews",
            name: "Herbal Shampoo (Specially for Oily Scalp)",
            description: "Controls excess oil production",
            price: "Rs. 629.00",
            oldPrice: "Rs. 799.00",
            save: "Rs. 170.00"
        },

        {
            image: couplesLegiyam,
            rating: "4.5",
            reviews: "4 Reviews",
            name: "Couples Legiyam (Kayakalpam)",
            description: "",
            price: "Rs. 1,740.00",
            oldPrice: "Rs. 2,500.00",
            save: "Rs. 760.00"
        },

        {
            image: bodyGlowOil,
            rating: "4.5",
            reviews: "5 Reviews",
            name: "Body Glow Oil – Traditional Herbal Bath & Body Oil",
            description: "",
            price: "Rs. 799.00",
            oldPrice: "Rs. 1,049.00",
            save: "Rs. 250.00"
        },

        {
            image: hairWashPowder,
            rating: "4.5",
            reviews: "4 Reviews",
            name: "Herbal Hair Wash Powder",
            description: "Strengthens hair naturally",
            price: "Rs. 599.00",
            oldPrice: "Rs. 799.00",
            save: "Rs. 200.00"
        }
    ];


    return (
        <section className="best-sellers-section">

            <h2>Our Best Sellers</h2>
            <div className="best-sellers-description">
                <p>Discover our most popular products</p>
            </div>

            <div className="products-container">

                <div className="products-track">

                    {products.map((product, index) => (

                        <div className="product-card" key={index}>

                            {/* Product Image */}

                            <div className="product-image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <span className="sale-badge">
                                    Sale
                                </span>

                            </div>


                            {/* Rating */}

                            <div className="product-rating">

                                <span className="star">
                                    ⭐
                                </span>

                                <span>
                                    {product.rating}
                                </span>

                                <span>
                                    ({product.reviews})
                                </span>

                            </div>


                            {/* Product Name */}

                            <h3>
                                {product.name}
                            </h3>


                            {/* Description */}

                            {product.description && (
                                <p className="product-description">
                                    {product.description}
                                </p>
                            )}


                            {/* Price */}

                            <div className="product-price">

                                <strong>
                                    {product.price}
                                </strong>

                                <del>
                                    {product.oldPrice}
                                </del>

                            </div>


                            {/* Saving */}

                            <p className="product-saving">
                                You'll save {product.save}
                            </p>


                            {/* Add Cart */}

                            <button className="add-cart-btn">
                                Add to cart
                            </button>

                        </div>

                    ))}
                    

                </div>


               <button className="view-all-btn">
    View All
</button>

            </div>

        </section>
    );
}


export default BestSellers;