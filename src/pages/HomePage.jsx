import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import NewArrivalProducts from "../components/NewArrivalProducts";

const HomePage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fcf8f8]"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-col h-full grow">
        <Navbar />
        <div className="flex justify-center flex-1 px-4 py-5 mb-32 sm:px-8 md:px-16 lg:px-40">
          <div className="flex flex-col max-w-[1379px] flex-1">
            {/* Hero Section */}
            <HeroBanner />
            {/* Featured Products */}
            <h2 className="text-[#1b0e0e] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Products
            </h2>
            <FeaturedProducts />
            <h2 className="text-[#1b0e0e] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-20">
              New Arrival Products
            </h2>
            <NewArrivalProducts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
