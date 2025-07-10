import { Minus, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

import { useCart } from "../Context/CartContext";
import CheckoutForm from "./CheckoutForm";

const CartSidebar = ({ isOpen, onClose }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { cartItems, updateQuantity, removeItem, removeAllItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const tax = 15.0;
  const total = subtotal + shipping + tax;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#1b0e0e]">
              Your Shopping Bag
            </h2>
            <button
              onClick={onClose}
              className="p-2 transition-colors rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-[#1b0e0e]" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto md:p-6">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="relative flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-gray-400 transition-colors bg-gray-100 rounded-full hover:text-red-600 hover:bg-gray-200"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg md:w-20 md:h-20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain w-12 h-12 md:w-14 md:h-14"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#1b0e0e] text-sm md:text-base leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-100 rounded-full md:w-10 md:h-10 hover:bg-gray-200"
                    >
                      <Minus className="w-3 h-3 md:w-4 md:h-4 text-[#1b0e0e]" />
                    </button>

                    <span className="w-6 md:w-8 text-center text-sm md:text-base font-medium text-[#1b0e0e]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-100 rounded-full md:w-10 md:h-10 hover:bg-gray-200"
                    >
                      <Plus className="w-3 h-3 md:w-4 md:h-4 text-[#1b0e0e]" />
                    </button>
                  </div>
                </div>
              ))}

              {cartItems.length > 0 && (
                <button
                  onClick={removeAllItems}
                  className="flex items-center gap-2 px-4 py-2 mt-4 text-sm font-semibold text-red-600 transition-colors rounded hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete All
                </button>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 md:p-6">
            <div className="mb-6 space-y-3">
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-[#1b0e0e] font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-600">Shipping</span>
                <span className="text-[#1b0e0e] font-medium">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-600">Tax</span>
                <span className="text-[#1b0e0e] font-medium">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between text-base font-bold md:text-lg">
                  <span className="text-[#1b0e0e]">Total</span>
                  <span className="text-[#1b0e0e]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full px-6 py-3 text-sm font-bold text-white transition-colors bg-[#994d51] rounded-lg hover:bg-[#994d51] md:py-4 md:text-base"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default CartSidebar;
