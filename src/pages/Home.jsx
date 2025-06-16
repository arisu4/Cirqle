import "./Home.css";
import sealcheck from "../assets/images/SealCheck.png";

import airplane from "../assets/images/AirplaneTilt.png";
import compass from "../assets/images/Compass.png";
import sortbyimage from "../assets/images/sortby.png";
import content1 from "../assets/images/content1.jpg";
import content2 from "../assets/images/content2.png";
import content3 from "../assets/images/content3.jpg";
import content4 from "../assets/images/content4.png";
import content5 from "../assets/images/content5.jpg";
import content6 from "../assets/images/content6.jpg";

import { Link } from "react-router-dom";
import logos from "../assets/images/Logos.png";
import logo1 from "../assets/images/logo1.png";
import lg from "../assets/images/lg.png";
import vip from "../assets/images/vip.png";
import Footer from "../components/common/Footer";
// import DealContent from "./DealContent";
// import HowitsWork from "./HowitsWork";
// import RelevantDeal from "../components/common/RelevantDeal";

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

export default function DealsList() {
  return (
    <div className="deals-container">
      <div className="header-section">
        <div className="header-left">
          <h2 className="brand-name">Trending deals</h2>
          <div className="filters">
            <select className="category-select" defaultValue="">
              <option value="" disabled hidden>
                Categories: All
              </option>
              <option value="All">All</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Women's Fashion">Women's Fashion</option>
              <option value="Travel">Travel</option>
              <option value="Goning Out">Goning Out</option>
              <option value="Gift and Flowers">Gift and Flowers</option>
              <option value="Health and Beauty">Health and Beauty</option>
              <option value="Technology">Technology</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
              <option value="Utilites">Utilites</option>
              <option value="Food & Drink">Food & Drink</option>
              {/* <option value="Book,Music,Games & Movies">Book,Music,Games & Movies</option>
  <option value="Baby & Child">Baby & Child</option> */}
            </select>

            <select defaultValue="">
              <option value="" disabled hidden>
                Distance
              </option>
              <option value="All">Low to High</option>
              <option value="All">High to Low</option>
            </select>

            <select defaultValue="">
              <option value="" disabled hidden>
                Rating
              </option>
              <option value="All">Low to High</option>
              <option value="All">High to Low</option>
            </select>
          </div>
        </div>

        <div className="header-right">
        <h2 className="save-tagline">
  <img src={sealcheck} alt="Save" className="save-icon" />
  <span>
    <span className="save-green"> SAVE</span>
    <span className="save-black"> now with Deals that </span>
    <span className="save-green">ALWAYS</span>
    <span className="save-black"> work</span>
  </span>
</h2>


          <div className="filter-buttons">
            <button className="sort-btn">
              <span>Sort by</span>
              <img src={sortbyimage} alt="Sort Icon" className="sort-icon" />
            </button>

            <Link to="/viewall">
              <button className="view-btn">View All</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="cards-wrapper">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card1">
            <div className="card-image">
              <Link to="/imageclick">
                <img src={deal.image} alt={deal.title} />
              </Link>

              {deal.hasOverlayTop && (
                <img
                  src={deal.overlayImageTop}
                  alt="Top Overlay"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "10%",
                    height: "auto",
                  }}
                />
              )}
              {deal.hasOverlayTopSmall && (
                <img
                  src={deal.overlayImageTopSmall}
                  alt="Small Top Overlay"
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "27px",
                    width: "8%",
                    height: "auto",
                    borderRadius: "3px",
                    zIndex: 1,
                  }}
                />
              )}
              {deal.hasOverlayBottom && (
                <img
                  src={deal.overlayImageBottom}
                  alt="Overlay"
                  className="deal-overlay"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: "10%",
                    height: "auto",
                  }}
                />
              )}
              {deal.imageText && (
                <div className="image-text">{deal.imageText}</div>
              )}
            </div>

            {/* adding divider here */}
            <hr className="divider" />

            <h3>{deal.title}</h3>
            <p>{deal.description || "\u00A0"}</p>
            <div className="tags">
              {deal.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag === "Travel" && (
                    <img
                      src={airplane}
                      alt="Travel Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                  {tag === "15 miles away" && (
                    <img
                      src={compass}
                      alt="Distance Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <DealContent/> */}
      {/* footer section */}
      {/* <HowitsWork/> */}
      <Footer />
    </div>
  );
}
