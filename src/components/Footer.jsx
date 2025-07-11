// const Footer = () => {
//   return (
//     <footer className="px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Navigation Links */}
//         <div className="grid grid-cols-2 gap-6 px-32 mb-8 md:grid-cols-4">
//           <div className="text-center md:text-left">
//             <a
//               href="#"
//               className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
//               style={{ color: "#994d51" }}
//             >
//               About Us
//             </a>
//           </div>
//           <div className="text-center md:text-left">
//             <a
//               href="#"
//               className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
//               style={{ color: "#994d51" }}
//             >
//               Contact
//             </a>
//           </div>
//           <div className="text-center md:text-left">
//             <a
//               href="#"
//               className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
//               style={{ color: "#994d51" }}
//             >
//               Privacy Policy
//             </a>
//           </div>
//           <div className="text-center md:text-left">
//             <a
//               href="#"
//               className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
//               style={{ color: "#994d51" }}
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="pt-6 text-center border-t border-gray-200">
//           <p className="text-sm sm:text-base" style={{ color: "#994d51" }}>
//             ©2024 ShopSmart. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="px-4 py-6 border-t border-gray-200 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 xs:py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl 2xl:max-w-8xl">
        {/* Brand/Logo Section - Optional */}
        <div className="mb-6 text-center sm:mb-8 md:mb-10 lg:mb-12">
          <h3
            className="mb-2 text-lg font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xs:mb-3 sm:mb-4"
            style={{ color: "#994d51" }}
          >
            ShopSmart
          </h3>
          <p className="max-w-md mx-auto text-xs text-gray-600 xs:text-sm sm:text-base md:text-lg">
            Your trusted partner for quality products and exceptional service
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 gap-4 mb-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-80 hover:scale-105 active:scale-95 xs:py-3 sm:py-4 xs:px-4 sm:px-6 hover:bg-white hover:shadow-md"
              style={{ color: "#994d51" }}
            >
              About Us
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-80 hover:scale-105 active:scale-95 xs:py-3 sm:py-4 xs:px-4 sm:px-6 hover:bg-white hover:shadow-md"
              style={{ color: "#994d51" }}
            >
              Contact
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-80 hover:scale-105 active:scale-95 xs:py-3 sm:py-4 xs:px-4 sm:px-6 hover:bg-white hover:shadow-md"
              style={{ color: "#994d51" }}
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-80 hover:scale-105 active:scale-95 xs:py-3 sm:py-4 xs:px-4 sm:px-6 hover:bg-white hover:shadow-md"
              style={{ color: "#994d51" }}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Additional Footer Content - Optional */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3 xs:gap-8 sm:gap-10 md:gap-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h4
              className="mb-2 text-sm font-semibold xs:text-base sm:text-lg md:text-xl xs:mb-3 sm:mb-4"
              style={{ color: "#994d51" }}
            >
              Customer Service
            </h4>
            <div className="space-y-1 xs:space-y-2 sm:space-y-3">
              <p className="text-xs text-gray-600 xs:text-sm sm:text-base md:text-lg">
                📞 +1 (555) 123-4567
              </p>
              <p className="text-xs text-gray-600 xs:text-sm sm:text-base md:text-lg">
                ✉️ support@shopsmart.com
              </p>
              <p className="text-xs text-gray-600 xs:text-sm sm:text-base md:text-lg">
                🕒 Mon-Fri 9AM-6PM EST
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4
              className="mb-2 text-sm font-semibold xs:text-base sm:text-lg md:text-xl xs:mb-3 sm:mb-4"
              style={{ color: "#994d51" }}
            >
              Quick Links
            </h4>
            <div className="space-y-1 xs:space-y-2 sm:space-y-3">
              <a
                href="#"
                className="block text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                Shipping Info
              </a>
              <a
                href="#"
                className="block text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                Returns
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4
              className="mb-2 text-sm font-semibold xs:text-base sm:text-lg md:text-xl xs:mb-3 sm:mb-4"
              style={{ color: "#994d51" }}
            >
              Follow Us
            </h4>
            <div className="flex justify-center space-x-3 sm:justify-start xs:space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-600 transition-all duration-300 hover:opacity-80 hover:scale-110"
              >
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">
                  📘
                </span>
              </a>
              <a
                href="#"
                className="text-gray-600 transition-all duration-300 hover:opacity-80 hover:scale-110"
              >
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">
                  📷
                </span>
              </a>
              <a
                href="#"
                className="text-gray-600 transition-all duration-300 hover:opacity-80 hover:scale-110"
              >
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">
                  🐦
                </span>
              </a>
              <a
                href="#"
                className="text-gray-600 transition-all duration-300 hover:opacity-80 hover:scale-110"
              >
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">
                  💼
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - Optional */}
        <div className="p-4 mb-6 bg-white border border-gray-100 rounded-lg shadow-sm xs:rounded-xl sm:rounded-2xl xs:p-6 sm:p-8 md:p-10 lg:p-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="text-center">
            <h4
              className="mb-2 text-sm font-semibold xs:text-base sm:text-lg md:text-xl lg:text-2xl xs:mb-3 sm:mb-4"
              style={{ color: "#994d51" }}
            >
              Stay Updated
            </h4>
            <p className="max-w-md mx-auto mb-4 text-xs text-gray-600 xs:text-sm sm:text-base md:text-lg xs:mb-6 sm:mb-8">
              Subscribe to our newsletter for exclusive deals and updates
            </p>
            <div className="flex flex-col max-w-md gap-2 mx-auto xs:flex-row xs:gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base md:text-lg border border-gray-300 rounded-lg xs:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#994d51] focus:border-transparent"
              />
              <button className="bg-[#994d51] hover:bg-[#7a3e42] text-white px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base md:text-lg font-medium rounded-lg xs:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center border-t border-gray-200 xs:pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col items-center justify-center gap-2 xs:flex-row xs:justify-between xs:gap-4 sm:gap-6">
            <p
              className="text-xs font-medium xs:text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ color: "#994d51" }}
            >
              ©2024 ShopSmart. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2 xs:justify-end xs:gap-3 sm:gap-4 md:gap-6">
              <a
                href="#"
                className="text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                Sitemap
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                Accessibility
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-xs text-gray-600 transition-opacity xs:text-sm sm:text-base md:text-lg hover:opacity-80"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
