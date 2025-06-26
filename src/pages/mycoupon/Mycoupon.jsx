import React from "react";
import coupon1 from "../../assets/images/frame1.png";
import coupon2 from "../../assets/images/frame2.png";
import coupon3 from "../../assets/images/frame3.png";
import coupon4 from "../../assets/images/frame4.png";
import coupon5 from "../../assets/images/frame5.png";
import coupon6 from "../../assets/images/frame6.png";
import sortyby from "../../assets/images/sortby.png";
import "./Mycoupon.css";

const deals = [
  { id: 1, image: coupon1 },
  { id: 2, image: coupon2 },
  { id: 3, image: coupon3 },
  { id: 4, image: coupon4 },
  { id: 5, image: coupon5 },
  { id: 6, image: coupon6 },
];

const Mycoupon = () => {
  return (
    <div className="mycoupon-wrapper">
      <div className="mycoupon-header">
        <span className="mycoupon-title">My Coupons</span>
        <div className="all-coupon-box">
          <span>All Coupons</span>
          <img src={sortyby} alt="arrow" className="all-coupon-icon" />
        </div>
      </div>

      <div className="dealing-cards-container">
        {deals.map((deal) => (
          <div key={deal.id} className="dealingcard">
            <img
              src={deal.image}
              alt={`Deal ${deal.id}`}
              className="dealing-card-main-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycoupon;
