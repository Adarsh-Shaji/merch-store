import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10">
      
      {/* Top Horizontal Newsletter Bar */}
      <div className="bg-gray-800 text-white px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-sm md:text-base">
            Xclusive coupons, extra savings, and tons of EVERYDAY deals delivered straight to your inbox.
          </p>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-l-md w-full md:w-72 text-black"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Grid */}
      <div className="bg-gray-100 text-gray-700 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Collection</a></li>
              <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>Email: <a href="mailto:contact@ram.shop" className="hover:text-gray-900">contact@ram.shop</a></p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123 Chennai, Tamil Nadu, India</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-10">
          © 2025 MerchStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
