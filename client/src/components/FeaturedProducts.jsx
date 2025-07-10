import { Heart } from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Swal from "sweetalert2";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoriteContext";
import useFetch from "../hooks/useFetch";
import ProductDetailsPopup from "./ProductDetailsPopup";

const FeaturedProducts = () => {
  const { data: products, loading, error } = useFetch("/products");
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    });
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5 } },
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  if (loading) return <p>Loading featured products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="px-4">
      {isPopupOpen && (
        <ProductDetailsPopup
          product={selectedProduct}
          onClose={closePopup}
          onAddToCart={(item) => {
            addToCart(item);
            Swal.fire("Added!", "Product added to cart.", "success");
          }}
        />
      )}

      <Slider {...settings}>
        {products.map((product) => {
          const isFavorite = favorites.some((fav) => fav.id === product.id);

          return (
            <div key={product.id}>
              <div className="product-card">
                <div
                  className="cursor-pointer product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                  onClick={() => openProductDetails(product)}
                />
                <div className="content-wrapper">
                  <p className="product-title">{product.title}</p>
                  <div className="price-fav">
                    <p className="price">${product.price}</p>
                    <span
                      className="favourite-icon"
                      onClick={() => toggleFavorite(product)}
                      role="button"
                      aria-label={
                        isFavorite
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                      style={{
                        color: isFavorite ? "#f87171" : "#994d51",
                      }}
                    >
                      <Heart size={20} fill={isFavorite ? "#f87171" : "none"} />
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
