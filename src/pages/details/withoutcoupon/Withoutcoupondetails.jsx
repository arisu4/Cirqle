import React from "react";
import "./Withoutcoupndetails.css";
import component2 from "../../../assets/images/component2.png";
import sofa1 from "../../../assets/images/sofa1.png";
import sofa2 from "../../../assets/images/sofa2.png";
import sofa3 from "../../../assets/images/sofa3.png";
import sofa4 from "../../../assets/images/sofa4.png";
import Logos from "../../../assets/images/Logos.png";
import location from "../../../assets/images/location.png";
import AirplaneTilt from "../../../assets/images/AirplaneTilt.png";
import coupon from "../../../assets/images/coupon2.png";
const Withoutcoupondetails = () => {
  return (
    <div className="listing">
      <div className="listing__images">
        <div className="listing__main-image-wrapper">
          <img
            src={component2}
            alt="Main Sofa"
            className="listing__main-image"
          />
        </div>

        <div className="listing__thumbnails">
          <img src={sofa1} alt="Sofa 1" />
          <img src={sofa2} alt="Sofa 2" />
          <img
            src={sofa3}
            alt="Sofa 3"
            className="listing__thumbnail--highlighted"
          />
          <img src={sofa4} alt="Sofa 4" />
        </div>
      </div>

      <div className="listing__details">
        <div className="listing__breadcrumb">
          <span className="listing__breadcrumb-item">Home</span> /
          <span className="listing__breadcrumb-item"> Listing</span> /
          <span className="listing__breadcrumb-item listing__breadcrumb-item--active">
            {" "}
            Details
          </span>
        </div>

        <div className="listing__brand">
          <div className="listing__travel">
            <img
              src={AirplaneTilt}
              alt="Travel Icon"
              className="listing__travel-icon"
            />
            <span className="listing__travel-text">Travel</span>
          </div>

          <h5 className="listing__brand-name">
            <img src={Logos} alt="Brand Logo" className="listing__brand-logo" />
            <span className="listing__brand-text">DUNELM</span>
          </h5>
        </div>

        <h2 className="listing__title">
          Embrace Tranquility with a <br />
          45, 60 or 90-Min Sessions of <br />
          Reflexology (Up to 45% Off)
        </h2>

        <p className="listing__location listing__location--top">
          <img
            src={location}
            alt="Location Icon"
            className="listing__location-icon"
          />
          70 Washington Square South, New York
        </p>

        <div className="listing__offer-coupon">
          <div className="listing__offer">
            <div className="listing__offer-wrapper">
              <img src={coupon} alt="Offer" className="listing__offer-image" />
              <div className="listing__offer-text">45%Off</div>
            </div>
          </div>

          <div className="listing__coupon">
            <button className="listing__buy-now-btn">
              Login to get the coupon
            </button>
          </div>
        </div>

        <div className="listing__coupon-info-wrapper">
          <h3 className="listing__coupon-info-heading">Coupon Info</h3>
          <div className="listing__coupon-info">
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

        <p className="listing__location listing__location--bottom">
          <img src={location} alt="Location pin icon" />
          70 Washington Square South, New York, NY 10012, USA
        </p>
      </div>
    </div>
  );
};

export default Withoutcoupondetails;
