// import { X } from "lucide-react";
// import { useState } from "react";

// const ProductDetailsPopup = ({ product, onClose, onAddToCart }) => {
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);

//   const handleAddToCart = () => {
//     if (!selectedSize || !selectedColor) {
//       alert("Please select size and color.");
//       return;
//     }

//     onAddToCart({
//       ...product,
//       selectedSize,
//       selectedColor,
//     });
//     onClose();
//   };

//   if (!product) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//       <div className="relative w-full max-w-xl bg-[#fcf8f8] rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute text-gray-500 top-4 right-4 hover:text-red-500"
//         >
//           <X size={20} />
//         </button>

//         <div className="flex flex-col p-6">
//           {/* Breadcrumb */}

//           {/* Image */}
//           <div className="flex justify-center mb-6">
//             <div className="aspect-[4/5] w-full max-w-xs rounded-lg overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-fit"
//               />
//             </div>
//           </div>

//           {/* Details */}
//           <h2 className="text-xl font-bold text-[#1b0e0e] mb-1">
//             {product.title}
//           </h2>
//           <p className="text-sm text-[#994d51] mb-4">{product.description}</p>

//           <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Price</h3>
//           <p className="text-xl font-bold text-[#1b0e0e] mb-4">
//             ${product.price}
//           </p>

//           <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Size</h3>
//           <div className="flex flex-wrap gap-3 mb-4">
//             {["XS", "S", "M", "L", "XL"].map((size) => (
//               <label
//                 key={size}
//                 className={`cursor-pointer px-4 py-2 border rounded-lg text-sm font-medium ${
//                   selectedSize === size
//                     ? "border-[#e92932] text-[#e92932]"
//                     : "border-[#e7d0d1] text-[#1b0e0e]"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </label>
//             ))}
//           </div>

//           <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Color</h3>
//           <div className="flex flex-wrap gap-4 mb-6">
//             {["#000", "#fff", "#800080", "#0000ff"].map((color) => (
//               <span
//                 key={color}
//                 onClick={() => setSelectedColor(color)}
//                 className={`w-10 h-10 rounded-full border cursor-pointer ${
//                   selectedColor === color ? "ring-2 ring-[#e92932]" : ""
//                 }`}
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="w-full h-12 bg-[#e92932] text-white font-bold rounded-lg hover:bg-red-600 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPopup;

import { Heart, HeartOff, X } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useFavorites } from "../Context/FavoriteContext";

const ProductDetailsPopup = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        icon: "warning",
        title: "Missing Selection",
        text: "Please select both size and color.",
        confirmButtonColor: "#e92932",
      });
      return;
    }

    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
    });

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.title} has been added to your cart.`,
      timer: 1800,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });

    onClose();
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(product.id);
      Swal.fire({
        icon: "success",
        title: "Removed from Favorites",
        text: `${product.title} removed from favorites.`,
        timer: 1800,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    } else {
      addFavorite(product);
      Swal.fire({
        icon: "success",
        title: "Added to Favorites",
        text: `${product.title} added to favorites.`,
        timer: 1800,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-xl bg-[#fcf8f8] rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close & Favorite Buttons */}
        <div className="absolute flex gap-2 top-4 right-4">
          <button
            onClick={toggleFavorite}
            className="text-[#e92932] hover:scale-110 transition"
          >
            {isFavorite ? (
              <HeartOff size={20} fill="#e92932" />
            ) : (
              <Heart size={20} />
            )}
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col p-6">
          {/* Image */}
          <div className="flex justify-center mb-6">
            <div className="aspect-[4/5] w-full max-w-xs rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Details */}
          <h2 className="text-xl font-bold text-[#1b0e0e] mb-1">
            {product.title}
          </h2>
          <p className="text-sm text-[#994d51] mb-4">{product.description}</p>

          <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Price</h3>
          <p className="text-xl font-bold text-[#1b0e0e] mb-4">
            ${product.price}
          </p>

          <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Size</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label
                key={size}
                className={`cursor-pointer px-4 py-2 border rounded-lg text-sm font-medium ${
                  selectedSize === size
                    ? "border-[#e92932] text-[#e92932]"
                    : "border-[#e7d0d1] text-[#1b0e0e]"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </label>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#1b0e0e] mb-1">Color</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            {["#000", "#fff", "#800080", "#0000ff"].map((color) => (
              <span
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border cursor-pointer ${
                  selectedColor === color ? "ring-2 ring-[#e92932]" : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full h-12 bg-[#e92932] text-white font-bold rounded-lg hover:bg-red-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
