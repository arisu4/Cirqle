import React from "react";
import grabdeal from "../../assets/images/grabdeal.png";
import postoninsta from "../../assets/images/PostOnInsta.png";
import earncashback from "../../assets/images/EarnCashback.png";
import youtubetumhbail from "../../assets/images/youtubethumbail.png";
import arrow from "../../assets/images/Arrow.png";
import closedeal from "../../assets/images/closedeal.png";
import bannermid from "../../assets/images/bannermid.png";
import Banner2 from "./Banner2";


const Banner1 = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      {/* Top Icons Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={grabdeal}
            alt="Grab Deals"
            className="w-72 h-56 object-contain"
          />
        </div>

        <img
          src={arrow}
          alt="Arrow"
          className="w-7 h-6 md:w-21 md:h-18 object-contain"
        />

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={postoninsta}
            alt="Post on Insta"
            className="w-72 h-56 object-contain"
          />
        </div>

        <img
          src={arrow}
          alt="Arrow"
          className="w-6 h-6 md:w-21 md:h-18 object-contain"
        />

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={earncashback}
            alt="Earn Cashback"
            className="w-72 h-56 object-contain"
          />
        </div>
      </div>

      {/* Text & Video Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-xl">
          <img
            src={bannermid}
            alt="How it works"
            className="mb-6 mt-10 w-full max-w-xl object-contain"
          />

          <p
            className="mb-6 text-sm md:text-base leading-relaxed"
            style={{ color: "#1D2939" }}
          >
            Get rewarded for flaunting your purchases on Instagram. SHOP from
            CIRQLE's
            <br />
            Partners → POST & TAG your experiences on Instagram → Earn CASHBACK.
          </p>

          <button>
            <img
              src={closedeal}
              alt="Close by deals"
              className="h-18 w-40 object-contain" // increased size
            />
          </button>
        </div>

        {/* Video Thumbnail */}
        <div className="relative group">
          <img
            src={youtubetumhbail}
            alt="Video"
            className="h-65 w-110 object-cover rounded-2xl" // adjust these values as needed
          />
        </div>
      </div>
     
    </section>
  );
};

export default Banner1;
