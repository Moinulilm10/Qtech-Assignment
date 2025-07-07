const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 px-32 mb-8 md:grid-cols-4">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
              style={{ color: "#994d51" }}
            >
              About Us
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
              style={{ color: "#994d51" }}
            >
              Contact
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
              style={{ color: "#994d51" }}
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80 sm:text-base"
              style={{ color: "#994d51" }}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center border-t border-gray-200">
          <p className="text-sm sm:text-base" style={{ color: "#994d51" }}>
            ©2024 ShopSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
