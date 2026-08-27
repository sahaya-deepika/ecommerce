import './homepage.css';

import fixedImage from '../../assets/fixed-image.webp.webp';

import scrollImage1 from '../../assets/scroll-image1.webp.avif';
import scrollImage2 from '../../assets/scroll-image2.webp.avif';
import scrollImage3 from '../../assets/scroll-image3.webp.avif';
import scrollImage4 from '../../assets/scroll-image4.webp.avif';

import Categories from '../Categories/Categories.jsx';
import BestSellers from "../BestSellers/BestSellers.jsx";
import Concern from "../Concern/Concern.jsx";
import Bestsellingcombo from '../Bestsellingcombo/Bestsellingcombo.jsx';
import Mothercare from '../mothercare/mothercare.jsx';

function HomePage() {
    const name = "sakal";

    return (
        <div className="homepage">

     
            <div className="main-banner">
                <img
                    src={fixedImage}
                    alt="Main Banner"
                />
            </div>



            <div className="benefits-container">

                <div className="benefits-track">

                    {/* FIRST SET */}

                    <div className="benefit-item">
                        <span>CRUELTY FREE</span>

                        <img
                            src={scrollImage1}
                            alt="Cruelty Free"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>GMP CERTIFIED</span>

                        <img
                            src={scrollImage2}
                            alt="GMP Certified"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>AYUSH CERTIFIED</span>

                        <img
                            src={scrollImage4}
                            alt="AYUSH Certified"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>100% ORGANIC INGREDIENTS</span>

                        <img
                            src={scrollImage3}
                            alt="Organic Ingredients"
                        />
                    </div>



               

                    <div className="benefit-item">
                        <span>CRUELTY FREE</span>

                        <img
                            src={scrollImage1}
                            alt="Cruelty Free"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>GMP CERTIFIED</span>

                        <img
                            src={scrollImage2}
                            alt="GMP Certified"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>AYUSH CERTIFIED</span>

                        <img
                            src={scrollImage4}
                            alt="AYUSH Certified"
                        />
                    </div>


                    <div className="benefit-item">
                        <span>100% ORGANIC INGREDIENTS</span>

                        <img
                            src={scrollImage3}
                            alt="Organic Ingredients"
                        />
                    </div>

                </div>

            </div>, 

        {true && (<>//ithu parcel react or vite react ?? vite  , you shut u</>)} 
         <Categories name={"DEEPI"} />
         <BestSellers />
            <Concern />
            <Bestsellingcombo/>
            <Mothercare />
        </div>
    );
}


export default HomePage;