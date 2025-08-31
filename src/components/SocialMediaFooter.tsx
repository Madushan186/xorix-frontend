import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SocialMediaFooter = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="bg-black flex justify-center items-center flex-col py-9 gap-3 mt-24 mx-5 max-[400px]:mx-3">
        <p className="text-base text-white font-light">Follow us on:</p>
        <div className="flex gap-6 text-white">
          <a href="https://www.facebook.com/xorixfashions/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-4xl hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/xorix_fashions/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFooter;
