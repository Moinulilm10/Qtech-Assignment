import { ShoppingCart, X } from "lucide-react";
import Swal from "sweetalert2";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoriteContext";

const FavoriteSidebar = ({ isOpen, onClose }) => {
  const { favorites, removeFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    });

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-[#1b0e0e]">Favorite Items</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-[#1b0e0e]" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
          {favorites.length === 0 ? (
            <p className="text-gray-500">No favorite products.</p>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 pb-3 border-b"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-16 h-16 bg-gray-100 rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm text-[#1b0e0e]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#994d51]">${item.price}</p>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center gap-1 mt-2 text-sm text-white bg-[#994d51] hover:bg-[#f3e7e8] hover:text-[#994d51] px-3 py-1.5 rounded transition-all"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <X />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteSidebar;
