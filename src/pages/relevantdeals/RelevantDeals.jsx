import React from "react";
import { Link } from "react-router-dom";
import content1 from "../../assets/images/content1.jpg";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.jpg";
import sortbyimage from "../../assets/images/sortby.png";
import logos from "../../assets/images/Logos.png";
import sealcheck from "../../assets/images/SealCheck.png";
import vip from "../../assets/images/vip.png";
import logo1 from "../../assets/images/logo1.png";
import lg from "../../assets/images/lg.png";
import airplane from "../../assets/images/AirplaneTilt.png";
import compass from "../../assets/images/Compass.png";

const RelevantDeals = () => {
  const deals = [
    {
      id: 1,
      image: content1,
      title: "£10 discount on Furniture",
      description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
      tags: ["Travel"],
      hasOverlayBottom: true,
      overlayImageBottom: logos,
      hasOverlayTop: true,
      overlayImageTop: sealcheck,
      hasOverlayTopSmall: true,
      overlayImageTopSmall: vip,
    },
    {
      id: 2,
      image: content2,
      title: "50% off in our Newyork store",
      description: "70 Washington Square South, New York, NY 10012, United States",
      tags: ["15 miles away", "Travel"],
      hasOverlayBottom: true,
      overlayImageBottom: logo1,
      hasOverlayTopSmall: true,
      overlayImageTopSmall: vip,
    },
    {
      id: 3,
      image: content3,
      title: "LG summer sale is on",
      description: "Up to 20% off Selected OLED TVs at LG",
      tags: ["15 miles away", "Travel"],
      hasOverlayTop: true,
      overlayImageTop: sealcheck,
      hasOverlayBottom: true,
      overlayImageBottom: lg,
    },
  ];

  return (
    <div>
      <h2 className="relevant-deals-heading">Relevant Deals</h2>

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

              {deal.hasOverlayTop && (
                <img
                  src={deal.overlayImageTop}
                  alt="Top Overlay"
                  className="deal-card-overlay-top"
                />
              )}
              {deal.hasOverlayTopSmall && (
                <img
                  src={deal.overlayImageTopSmall}
                  alt="Small Top Overlay"
                  className="deal-card-overlay-small-top"
                />
              )}
              {deal.hasOverlayBottom && (
                <img
                  src={deal.overlayImageBottom}
                  alt="Bottom Overlay"
                  className="deal-card-overlay-bottom"
                />
              )}
            </div>

            <hr className="deal-card-divider" />

            <h3 className="deal-card-title">{deal.title}</h3>
            <p className="deal-card-description">{deal.description || "\u00A0"}</p>

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

export default RelevantDeals;
