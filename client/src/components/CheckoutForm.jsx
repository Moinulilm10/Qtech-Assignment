import { X } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.address) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Order placed successfully!",
        confirmButtonText: "OK",
        confirmButtonColor: "#994d51",
      }).then(() => {
        onClose();
        setFormData({ name: "", email: "", address: "" });
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={handleBackdropClick}
      >
        {/* Modal */}
        <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Modal Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1b0e0e] mb-8">
              Checkout
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-base font-medium text-[#1b0e0e] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 placeholder-gray-400 transition-colors border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#994d51] focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-base font-medium text-[#1b0e0e] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 placeholder-gray-400 transition-colors border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#994d51] focus:border-transparent"
                  required
                />
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-base font-medium text-[#1b0e0e] mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  rows="4"
                  className="w-full px-4 py-3 placeholder-gray-400 transition-colors border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#994d51] focus:border-transparent"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 mt-8 text-base font-bold text-white transition-colors bg-[#994d51] rounded-lg hover:bg-[#994d51]"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
