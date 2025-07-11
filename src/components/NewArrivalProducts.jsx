import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetch from "../Hooks/useFetch.js";
import ProductDetailsPopup from "./ProductDetailsPopup.jsx";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-[-30px] z-10 transform -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-[-30px] z-10 transform -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const NewArrivalProducts = () => {
  const { data: products, loading, error } = useFetch("/products");
  const [favourites, setFavourites] = useState(new Set());

  const toggleFavourite = (id) => {
    setFavourites((prev) => {
      const newFav = new Set(prev);
      if (newFav.has(id)) {
        newFav.delete(id);
      } else {
        newFav.add(id);
      }
      return newFav;
    });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closePopup = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
      },
    ],
  };

  if (loading) return <p>Loading new arrivals...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="relative px-4">
      <style>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          color: #994d51;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #994d51;
        }
        .slick-slide > div {
          margin: 10px 8px;
        }
        .product-card {
          width:200px;
          height: 338px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
          background: white;
          padding: 1rem;
        }
        .product-image {
          height: 200px;
          width: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-top: 0.75rem;
          overflow: hidden;
        }
        .product-title {
          font-size: 1rem;
          font-weight: 500;
          color: #1b0e0e;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2em;
          max-height: 3.6em;
        }
        .price-fav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .price {
          color: #994d51;
          font-size: 0.875rem;
          font-weight: 400;
        }
        .favourite-icon {
          cursor: pointer;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          color: #994d51;
        }
        .favourite-icon:hover {
          color: #f87171;
        }
        .add-to-cart-btn {
          background-color: #994d51;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: auto;
        }
        .add-to-cart-btn:hover {
          background-color: #f3e7e8;
          color: #994d51;
        }
      `}</style>

      {isPopupOpen && (
        <ProductDetailsPopup product={selectedProduct} onClose={closePopup} />
      )}

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div
              onClick={() => openProductDetails(product)}
              className="product-card w-[200px] mx-auto"
            >
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="content-wrapper">
                <p className="product-title">{product.title}</p>
                <div className="price-fav">
                  <p className="price">${product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalProducts;
