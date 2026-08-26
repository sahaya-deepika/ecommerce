import './footer-bottom.css';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from 'react-icons/fa';

function FooterBottom() {
    return (
        <>
            <div className="footer-top-line" />

            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-column contact-column">
                        <h3>Contact us</h3>

                        <p>No 5 Karungadu Road, Pettai, Tirunelveli-627004, Tamil Nadu, India</p>
                        <p>+91 6385815500</p>
                        <p>vangaannachilonline@gmail.com</p>
                        <p>Prepaid Orders : <strong>+916369599378</strong> (Call/WhatsApp)</p>
                        <p>Courier Tracking/Courier Complaints: <strong>+919360757970</strong> (Call/WhatsApp)</p>
                        <p>Bulk Business Enquiries/Direct Contact with Owner : <strong>+916385815500</strong> (Call/WhatsApp)</p>

                        <div className="socials" aria-label="social media links">
                            <a href="#" aria-label="Facebook" className="social-circle social-facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram" className="social-circle social-instagram"><FaInstagram /></a>
                            <a href="#" aria-label="YouTube" className="social-circle social-youtube"><FaYoutube /></a>
                            <a href="#" aria-label="WhatsApp" className="social-circle social-whatsapp"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div className="footer-column links-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Shipping policy</li>
                            <li>Return and Refund policy</li>
                            <li>Privacy policy</li>
                            <li>About Us</li>
                            <li>Terms and conditions</li>
                        </ul>
                    </div>

                    <div className="footer-column brand-column">
                        <div className="brand-mark" aria-label="FSSAI logo">
                            <div className="brand-emblem">
                                <span className="emblem-center" />
                            </div>
                            <div className="brand-wordmark">
                                <span className="fssai">fssai</span>
                            </div>
                        </div>
                        <div className="brand-phone">22421587000231</div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2025 vangaannachi. All rights reserved.</span>
            </div>
        </>
    );
}

export default FooterBottom;
