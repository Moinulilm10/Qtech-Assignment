import bannerImage from "../assets/img/HeroBanner.svg";

const HeroBanner = () => {
  return (
    <div className="w-full">
      <div className="p-0 sm:p-4">
        <div
          className="flex min-h-[300px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-none sm:rounded-lg items-start justify-end px-4 pb-6 sm:pb-10 sm:px-6 md:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${bannerImage})`,
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
              Elevate Your Home
            </h1>
            <h2 className="text-sm font-normal leading-normal text-white sm:text-base">
              Discover curated collections of furniture and decor to transform
              your living space.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#e92932] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-[#d41e27] transition-colors">
            <span className="truncate">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
