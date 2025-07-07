import { useState } from "react";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
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

        {/* Navigation Links (Desktop + Mobile) */}
        <div className="flex items-center gap-6">
          <a
            className="text-[#1b0e0e] text-sm font-medium leading-normal hover:underline"
            href="#"
          >
            Home
          </a>
          <button
            onClick={handleCartClick}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e8d5d6] transition-colors"
          >
            <span className="truncate">Cart</span>
          </button>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
