import React, { useState } from "react";
import content1 from "../../assets/images/content1.jpg";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.jpg";
import content4 from "../../assets/images/content4.png";
import content5 from "../../assets/images/content5.jpg";
import content6 from "../../assets/images/content6.jpg";
import sortbyimage from "../../assets/images/sortby.png";
import logos from "../../assets/images/Logos.png";
import logo1 from "../../assets/images/logo1.png";
import lg from "../../assets/images/lg.png";
import vip from "../../assets/images/vip.png";
import sealcheck from "../../assets/images/SealCheck.png";
import search from "../../assets/images/search.png";
import airplane from "../../assets/images/AirplaneTilt.png";
import compass from "../../assets/images/Compass.png";
import { Link } from "react-router-dom";
import "./CategoryList.css";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const categories = [
  " Home & Garden (10)",
  " Women's Fashion (10)",
  " Going Out (10)",
  " Gifts & Flowers (10)",
  " Health & Beauty (10)",
  " Technology (10)",
  " Men's Fashion (10)",
  " Sports & Outdoors (10)",
  " Utilities (10)",
  " Food & Drink (10)",
  " Books, Music, Games & Movies (10)",
  " Baby & Child (10)",
  " Sports & Outdoors (10)",
];

const deals = [
  {
    id: 1,
    image: content1,
    title: "£10 discount on Furniture",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    // location: '',
    // distance: '',
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
    description:
      "70 Washington Square South, New York, NY 10012, United States",
    // location: '70 Washington Square South, New York, NY 10012, United States',
    // distance: '15 miles away',
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
    // location: '70 Washington Square South, New York',
    // distance: '15 miles away',
    tags: ["15 miles away", "Travel"],
    hasOverlayTop: true,
    overlayImageTop: sealcheck,
    hasOverlayBottom: true,
    overlayImageBottom: lg,
  },
  {
    id: 4,
    image: content4,
    title: "Enjoy upto 10% discount on mobile",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    // location: '70 Washington Square South, New York',
    // distance: '15 miles away',
    tags: ["Travel"],
    hasOverlayBottom: true,
    overlayImageBottom: logo1,
  },
  {
    id: 5,
    image: content5,
    title: "£10 discount on Furniture",
    description: "Free £10 Amazon Voucher with Orders Over £99 at Dunelm",
    // location: '70 Washington Square South, New York',
    // distance: '15 miles away',
    tags: ["Travel"],
    hasOverlayBottom: true,
    overlayImageBottom: logos,
  },
  {
    id: 6,
    image: content6,
    title: "Enjoy discount on nearest apple store",
    description:
      "70 Washington Square South, New York, NY 10012, United States",
    // location: '70 Washington Square South, New York',
    distance: "15 miles away",
    tags: ["15 miles away", "Travel"],
    hasOverlayTop: true,
    overlayImageTop: sealcheck,
    hasOverlayBottom: true,
    overlayImageBottom: logos,
    hasOverlayTopSmall: true,
    overlayImageTopSmall: vip,
  },
];

const CategoryList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <Header/>
      <br/>
      <div className="closeby-header">
        <p className="breadcrumb">
          <span className="home">Home</span> /{" "}
          <span className="listing">Listing</span>
        </p>
        <h1>Close by finds (100 Deals)</h1>
      </div>

      <div className="category-container">
        <aside className="category-sidebar">
          <div className="sidebar-title-box">
            <h3 className="sidebar-title">
              <span>Search Category</span>
              <img src={search} alt="Search" className="search-icon" />
            </h3>
          </div>

          <div className="category-list">
            <label className="category-item">
              <input
                type="checkbox"
                checked={selectedCategories.length === 0}
                readOnly
              />
              <span className="category-label-text">All Categories (100)</span>
            </label>

            {categories.map((cat, index) => (
              <label key={index} className="category-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="category-label-text">{cat}</span>
              </label>
            ))}
          </div>
        </aside>

        <div className="deal-cards-container">
          <div className="deals-header">
            <div className="deals-header-left">
              {" "}
              {/* Distance, Rating by on Left */}
              <div className="deals-filters">
                <select className="deals-distance-select" defaultValue="">
                  <option value="" disabled hidden>
                    Distance
                  </option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>

                <select className="deals-rating-select" defaultValue="">
                  <option value="" disabled hidden>
                    Rating
                  </option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </div>

            {/* sort by */}
            <div className="deals-header-right">
              <div className="deals-sort-section">
                <button className="deals-sort-btn">
                  <span>Sort by</span>
                  <img
                    src={sortbyimage}
                    alt="Sort Icon"
                    className="deals-sort-icon"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* cards */}
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
      <br/>
      <Footer/>
     
    </div>
  );
};

export default CategoryList;
