import cirqlelogo from '../../assets/images/Layer 1.png';
import cirqle from '../../assets/images/Layer 2.png';
import facebook from '../../assets/images/facebook.png';
import insta from '../../assets/images/insta.png';
import youtube from '../../assets/images/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-white mt-12 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img src={cirqlelogo} alt="Cirqle Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <img src={cirqle} alt="Cirqle" className="h-4 md:h-6 object-contain" />
            <span className="text-[10px] font-semibold tracking-wide text-gray-600">SAVING YOUR MONEY</span>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center text-[11px] md:text-[12px] text-gray-500">
          ©2025 Cirqle. All rights reserved. <br className="block md:hidden" />
          <span className="hidden md:inline"> &nbsp;|&nbsp; </span>
          Terms and Conditions <span className="hidden md:inline"> &nbsp;|&nbsp; </span>
          Contact Us
        </div>

        {/* Right Side Icons */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
