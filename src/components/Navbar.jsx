import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Title on the left */}
        <div className="text-4xl font-extrabold text-gray-800">
          MerchStore
        </div>

        {/* Right-side nav: links, search, cart, user */}
        <div className="flex items-center gap-8">
          {/* Navigation links */}
          <div className="flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-500 transition">Home</a>
            <a href="#" className="hover:text-blue-500 transition">About</a>
            <a href="#" className="hover:text-blue-500 transition">Products</a>
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* Search bar */}
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 py-1 w-48 bg-transparent"
            />
          </div>

          {/* Cart and user icon */}
          <div className="flex items-center gap-6">
            <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer" />
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
              <FaUser className="text-xl text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
