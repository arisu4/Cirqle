import React from "react";
import content1 from "../../assets/images/content1.jpg";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.jpg";

const RelevantDeals = () => {
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
  ];

  return <></>;
};

export default RelevantDeals;
