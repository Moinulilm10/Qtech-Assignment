import productImage from "../assets/img/productImage.svg";

const NewArrivalProducts = () => {
  const products = [
    {
      name: "Modern Sofa",
      price: "$799",
      image: productImage,
    },
    {
      name: "Minimalist Dining Table",
      price: "$499",
      image: productImage,
    },
    {
      name: "Cozy Armchair",
      price: "$299",
      image: productImage,
    },
    {
      name: "Stylish Coffee Table",
      price: "$199",
      image: productImage,
    },
    {
      name: "Elegant Floor Lamp",
      price: "$149",
      image: productImage,
    },
    {
      name: "Decorative Wall Art",
      price: "$99",
      image: productImage,
    },
  ];

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    // Add your cart logic here
  };

  return (
    <div className="px-4">
      {/* Mobile: Horizontal scroll */}
      <div className="flex gap-3 pb-4 overflow-x-auto sm:hidden">
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-[200px]">
            <div className="flex flex-col gap-3 rounded-lg">
              <div
                className="w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-square"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[#1b0e0e] text-sm font-medium leading-normal">
                    {product.name}
                  </p>
                  <p className="text-[#994d51] text-xs font-normal leading-normal">
                    {product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#994d51] hover:bg-[#f3e7e8] hover:text-[#994d51] text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet and Desktop: Grid */}
      <div className="hidden grid-cols-2 gap-4 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg w-[200px] mx-auto"
          >
            <div
              className="w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-square"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#1b0e0e] text-sm md:text-base font-medium leading-normal">
                  {product.name}
                </p>
                <p className="text-[#994d51] text-xs md:text-sm font-normal leading-normal">
                  {product.price}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#994d51] hover:bg-[#f3e7e8] hover:text-[#994d51] text-white  text-xs md:text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalProducts;
