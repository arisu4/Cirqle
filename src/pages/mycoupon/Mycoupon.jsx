import React, { useState } from "react";
import coupon1 from "../../assets/images/mycoupon1.png";
import coupon2 from "../../assets/images/mycoupon2.png";
import coupon3 from "../../assets/images/mycoupon3.png";
import coupon4 from "../../assets/images/mycoupon4.png";
import coupon5 from "../../assets/images/mycoupon5.png";
import coupon6 from "../../assets/images/mycoupon6.png";
import sortbyimage from "../../assets/images/sortby.png";
import airplane from "../../assets/images/AirplaneTilt.png";
import compass from "../../assets/images/Compass.png";
import { Link } from "react-router-dom";
import "./Mycoupon.css";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const deals = [
  {
    id: 1,
    image: coupon1,
    title: "£10 discount on Furniture",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    tags: ["Travel"],
  },
  {
    id: 2,
    image: coupon2,
    title: "50% off in our Newyork store",
    description:
      "70 Washington Square South, New York, NY 10012, United States",
    tags: ["15 miles away", "Travel"],
  },
  {
    id: 3,
    image: coupon3,
    title: "LG summer sale is on",
    description: "Up to 20% off Selected OLED TVs at LG",
    tags: ["15 miles away", "Travel"],
  },
  {
    id: 4,
    image: coupon4,
    title: "Enjoy upto 10% discount on mobile",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    tags: ["Travel"],
  },
  {
    id: 5,
    image: coupon5,
    title: "£10 discount on Furniture",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    tags: ["Travel"],
  },
  {
    id: 6,
    image: coupon6,
    title: "Enjoy discount on nearest apple store",
    description:
      "70 Washington Square South, New York, NY 10012, United States",
    distance: "15 miles away",
    tags: ["15 miles away", "Travel"],
  },
];

const Mycoupon = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div>
      <div className="category-header">
        <h1>My Coupons</h1>
        <div className="all-coupons-box">
          All Coupons
          <img
            src={sortbyimage}
            alt="All Coupons Icon"
            className="all-coupons-icon"
          />
        </div>
      </div>
      <br />
      <div className="deal-cards-container">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="deal-card-image-wrapper">
              <Link to="/imageclick">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="deal-card-main-image"
                />
              </Link>
              {deal.imageText && (
                <div className="deal-card-image-text">{deal.imageText}</div>
              )}
            </div>
            <hr className="deal-card-divider" />
            <h3 className="deal-card-title">{deal.title}</h3>
            <p className="deal-card-description">
              {deal.description || "\u00A0"}
            </p>
            <div className="deal-card-tags">
              {deal.tags.map((tag, i) => (
                <span key={i} className="deal-card-tag">
                  {tag === "Travel" && (
                    <img
                      src={airplane}
                      alt="Travel Icon"
                      className="deal-card-tag-icon"
                    />
                  )}
                  {tag === "15 miles away" && (
                    <img
                      src={compass}
                      alt="Distance Icon"
                      className="deal-card-tag-icon"
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycoupon;
