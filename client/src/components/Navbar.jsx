import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoriteContext";
import CartSidebar from "./CartSidebar";
import FavoriteSidebar from "./FavoriteSidebar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setIsCartOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleFavoriteClick = () => {
    setIsFavoriteOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e7e8] px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4 text-[#1b0e0e]">
          <div className="w-4 h-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em]">
            ShopSmart
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="items-center justify-end flex-1 hidden gap-8 md:flex">
          <Link to="/" className="text-[#1b0e0e] text-sm font-medium">
            Home
          </Link>

          {/* Favorite Icon */}
          <button
            onClick={handleFavoriteClick}
            className="relative p-2 rounded-lg hover:bg-[#f3e7e8]"
          >
            <div className="flex items-center justify-between gap-3 bg-[#f3e7e8] hover:bg-[#e8d5d6] transition-colors px-4 rounded-lg py-2">
              <Heart className="w-5 h-5 text-[#1b0e0e]" />
              <span className="text-sm font-bold">Favorite List</span>
              {favorites.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full -top-1 -right-1">
                  {favorites.length}
                </span>
              )}
            </div>
          </button>

          {/* Cart Button */}
          <button
            onClick={handleCartClick}
            className="relative flex min-w-[84px] items-center justify-center h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold rounded-lg hover:bg-[#e8d5d6] transition-colors"
          >
            <span className="truncate">Cart</span>
            {totalItems > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full -top-1 -right-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={handleFavoriteClick}
            className="relative p-2 rounded-lg hover:bg-[#f3e7e8]"
          >
            <div className="flex items-center justify-between gap-3 bg-[#f3e7e8] hover:bg-[#e8d5d6] transition-colors px-4 rounded-lg py-2">
              <Heart className="w-5 h-5 text-[#1b0e0e]" />
              <span className="text-sm font-bold">Favorite List</span>
              {favorites.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full -top-1 -right-1">
                  {favorites.length}
                </span>
              )}
            </div>
          </button>
          <button
            onClick={handleCartClick}
            className="relative p-2 rounded-lg hover:bg-[#f3e7e8]"
          >
            <ShoppingCart className="w-5 h-5 text-[#1b0e0e]" />
            {totalItems > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full -top-1 -right-1">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#1b0e0e] hover:text-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#f3e7e8]">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block text-[#1b0e0e] text-sm font-medium py-2"
            >
              Home
            </Link>
          </div>
        </div>
      )}

      {/* Sidebars */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoriteSidebar
        isOpen={isFavoriteOpen}
        onClose={() => setIsFavoriteOpen(false)}
      />
    </>
  );
};

export default Navbar;
