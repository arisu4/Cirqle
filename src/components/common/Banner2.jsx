import star from "../../assets/images/star.png";

const Banner2 = () => {
  const content = (
    <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 h-14 sm:h-16">
      <img
        src={star}
        alt="star"
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
      />
      <span className="text-white font-wanted font-bold text-lg sm:text-[20px] md:text-[22px] uppercase whitespace-nowrap">
        Sign up. Cash in. It's your era. Start now
      </span>
    </div>
  );

  return (
    <div className="w-full h-14 bg-gradient-to-r from-[#318CE7] to-[#0063C5] overflow-hidden">
      <div className="flex items-center h-full animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {/* First content set */}
        {[...Array(10)].map((_, i) => (
          <div key={`first-${i}`}>{content}</div>
        ))}
        {/* Second content set */}
        {[...Array(10)].map((_, i) => (
          <div key={`second-${i}`}>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default Banner2;