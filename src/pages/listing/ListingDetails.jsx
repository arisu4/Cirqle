import React from "react";
import "./ListingDetails.css";
import mainsofa from "../../assets/images/mainsofa.png";
import sofa1 from "../../assets/images/sofa1.png";
import sofa2 from "../../assets/images/sofa2.png";
import sofa3 from "../../assets/images/sofa3.png";
import sofa4 from "../../assets/images/sofa4.png";
import SealCheck from "../../assets/images/SealCheck.png";

const ListingDetails = () => {
  return (
    <div className="listing-container">
      <div className="listing-images-section">
        <div className="main-image-wrapper">
          <img src={mainsofa} alt="Main Sofa" className="main-sofaimage" />
          <div className="verified-badge">
            <img src={SealCheck} alt="Verified" />
          </div>
        </div>

        <div className="thumbnail-images">
          <img src={sofa1} alt="sofa1" />
          <img src={sofa2} alt="sofa2" />
          <img src={sofa3} alt="sofa3" className="highlighted-thumbnail" />
          <img src={sofa4} alt="sofa4" />
        </div>
      </div>

      <div className="listing-details-section">
        
        <h4 className="brand-name">DUNELM</h4>
        <h2 className="listing-title">
          Embrace Tranquility with a 45, 60 or 90-Min Sessions of Reflexology
          (Up to 45% Off)
        </h2>
        <p className="location">📍 70 Washington Square South, New York</p>

        <div className="offer-section">
          <div className="discount-badge">45% Off</div>
          <div className="discount-text">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>

        <div className="coupon-section">
          <span className="coupon-label">Coupon Code:</span>
          <span className="coupon-code">HOLIDAY25</span>
          <button className="buy-now-btn">Buy Now</button>
        </div>

        <div className="coupon-info">
          Lorem ipsum dolor sit amet consectetur. Non nullam nunc placerat
          mauris in amet eget lorem. Porttitor in eu molestie in. Eros cras
          lectus venenatis at turpis. Amet ultrices magnis nec hendrerit non.
          Nisi elementum elit cras sit amet magna.
        </div>

        <p className="location-bottom">
          📍 70 Washington Square South, New York, NY 10012, USA
        </p>
      </div>
    </div>
  );
};

export default ListingDetails;
