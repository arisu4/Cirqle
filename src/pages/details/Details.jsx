import React from "react";
import "./Details.css";
import component2 from "../../assets/images/component2.png";
import sofa1 from "../../assets/images/sofa1.png";
import sofa2 from "../../assets/images/sofa2.png";
import sofa3 from "../../assets/images/sofa3.png";
import sofa4 from "../../assets/images/sofa4.png";
import Logos from "../../assets/images/Logos.png";
import location from "../../assets/images/location.png";
import AirplaneTilt from "../../assets/images/AirplaneTilt.png";
import coupon from "../../assets/images/coupon.png";

const ListingDetails = () => {
  return (
    <div className="listing-container">
      <div className="listing-images-section">
        <div className="main-image-wrapper">
          <img src={component2} alt="Main Sofa" className="main-sofaimage" />

          {/* for Right side badge */}
          {/* <div className="verified-badge right-badge">
            <img src={SealCheck} alt="Verified Right" />
          </div> */}

          {/* for Left side badge */}
          {/* <div className="verified-badge left-badge">
            <img src={vip} alt="Verified Left" />
          </div> */}
        </div>

        <div className="thumbnail-images">
          <img src={sofa1} alt="sofa1" />
          <img src={sofa2} alt="sofa2" />
          <img src={sofa3} alt="sofa3" className="highlighted-thumbnail" />
          <img src={sofa4} alt="sofa4" />
        </div>
      </div>

      <div className="listing-details-section">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Home</span> /
          <span className="breadcrumb-item"> Listing</span> /
          <span className="breadcrumb-item active"> Details</span>
        </div>
        <div className="brand-wrapper">
          <div className="travel-box">
            <img src={AirplaneTilt} alt="Travel Icon" className="travel-icon" />
            <span className="travel-text">Travel</span>
          </div>

          <h5 className="brand-name">
            <img src={Logos} alt="Brand Logo" className="brand-logo" />
            <span className="brand-text">DUNELM</span>
          </h5>
        </div>

        <h2 className="listing-title">
          Embrace Tranquility with a <br />
          45, 60 or 90-Min Sessions of <br />
          Reflexology (Up to 45% Off)
        </h2>

        <p className="location-top">
          <img
            src={location}
            alt="Location Icon"
            className="locationtop-icon"
          />
          70 Washington Square South, New York
        </p>
        <br />
        <div className="offer-coupon-box">
          <div className="offer-section">
            <img src={coupon} alt="Offer" className="offer-image" />
          </div>

          <div className="coupon-section">
            <span>
              <span className="coupon-label">Coupon Code: </span>
              <span className="coupon-code">HOLIDAY25</span>
            </span>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>

        <div className="coupon-info-wrapper">
          <h3 className="coupon-info-heading">Coupon Info</h3>
          <div className="coupon-info">
            Lorem ipsum dolor sit amet consectetur. Non nullam nunc placerat
            mauris. <br />
            In amet eget lorem. Porttitor in eu molestie in. Eros cras lectus
            venenatis. <br />
            At turpis. Amet ultrices magnis nec hendrerit non. Nisi elementum
            elit cras. <br />
            Sit amet magna. Sed sed suspendisse vel nec pellentesque morbi
            faucibus. <br />
            Lobortis sem.
          </div>
        </div>

        <p className="location-bottom">
          <img src={location} alt="Location pin icon" />
          70 Washington Square South, New York, NY 10012, USA
        </p>
      </div>
    </div>
  );
};

export default ListingDetails;
