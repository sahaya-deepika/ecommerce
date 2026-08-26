import './footer.css';
import hairOilFooter from '../../assets/hair oil footer.webp';
import hairGrowthOil from '../../assets/hair-growth-oil.webp';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import FooterBottom from '../footer-bottom/footer-bottom';

const reviews = [
  {
    name: 'suguna senthilvelan',
    text: 'Lorem ipsum dolor sit esse doloremque fugiat impet',
    product: 'Hair regrowth kit',
    type: 'Hair Oil',
    price: 'Rs.1499',
  },
  {
    name: 'suguna senthilvelan',
    text: 'Lorem ipsum dolor sit esse doloremque fugiat impet',
    product: 'Hair regrowth kit',
    type: 'Hair Oil',
    price: 'Rs.1499',
  },
];

const deliveryCards = [
  'Faster Delivery',
  'Faster Delivery',
  'Faster Delivery',
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-hero">
        <img src={hairOilFooter} alt="Hair oil footer banner" className="footer-hero-image" />
      </div>

      <div className="customer-say-section">
        <h2>Customer Say</h2>
        <p>Customers love our products and we always strive to please them all.</p>

        <div className="customer-review-grid">
          {reviews.map((review, index) => (
            <div className="customer-column" key={index}>
              <div className="review-card">
                <div className="review-header-row">
                  <span className="review-product-name">{review.product}</span>
                  <div className="stars" aria-label="5 star rating">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="star" />
                    ))}
                  </div>
                </div>

                <div className="review-main">
                  <div className="product-figure" aria-hidden="true">
                    <img src={hairGrowthOil} alt="Hair oil" className="product-photo" />
                    <div className="stand" />
                  </div>

                  <div className="review-copy">
                    <div className="identity-row">
                      <h3>{review.name}</h3>
                      <span className="verified-buyer">
                        <FaCheckCircle /> Verified Buyer
                      </span>
                    </div>

                    <p>{review.text}</p>
                  </div>
                </div>
              </div>

              <div className="mini-product-card">
                <div className="mini-product-header">{review.product}</div>
                <div className="mini-product-body">
                  <div className="mini-product-figure" aria-hidden="true">
                    <img src={hairGrowthOil} alt="Hair oil product" className="mini-product-photo" />
                  </div>

                  <div className="mini-product-text">
                    <span className="mini-label">{review.type}</span>
                    <strong>{review.price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="delivery-strip">
        {deliveryCards.map((label, index) => (
          <div className="delivery-card" key={index}>
            <div className="delivery-figure">
              <img src={hairOilFooter} alt="Hair oil product" className="delivery-product-img" />
            </div>
            <div className="delivery-copy">
              <h4>{label}</h4>
              <p>Your Order Delivered in Just 6-7 Days!</p>
            </div>
          </div>
        ))}
      </div>

      <FooterBottom />
    </footer>
  );
}

export default Footer;
