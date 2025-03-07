import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa"; // ✅ Import Social Icons

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#2e0249] rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          <div>
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your project and provide help.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <FaEnvelope className="text-white text-lg" /> {/*  Email Icon */}
                <a href="mailto:yehulachinmachinerhub@gmail.com" className="text-white text-sm ml-4">
                  yehulachinmachinerhub@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-white text-lg" /> {/*  Phone Icon */}
                <a href="tel:+158996888" className="text-white text-sm ml-4">
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-white text-lg" /> {/*  Location Icon */}
                <span className="text-white text-sm ml-4">
                  123 Street 256 House
                </span>
              </li>
            </ul>

            {/* Social Media Links */}
            <ul className="flex mt-12 space-x-4">
              <li className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white text-xl" /> {/*  Facebook */}
                </a>
              </li>
              <li className="bg-pink-500 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-xl" /> {/*  Instagram */}
                </a>
              </li>
              <li className="bg-sky-400 hover:bg-sky-500 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-xl" /> {/*  Twitter */}
                </a>
              </li>
              <li className="bg-blue-500 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="text-white text-xl" /> {/*  Telegram */}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm font-semibold text-gray-800">I'm interested in...</p>

            <div className="space-y-4 max-lg:mt-4">
              <button type="button" className="px-4 py-2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">
                Web design
              </button>
              <button type="button" className="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">
                Graphic design
              </button>
            </div>

            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <input type="email" placeholder="Email" className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
              <textarea placeholder="Message" rows="6" className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
              <button type="button" className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
