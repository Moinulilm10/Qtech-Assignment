import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="px-4">
      <style jsx>{`
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
        .slick-prev:before,
        .slick-next:before {
          color: #994d51;
          font-size: 20px;
        }
        .slick-prev {
          left: -30px;
          z-index: 1;
        }
        .slick-next {
          right: -30px;
          z-index: 1;
        }
      `}</style>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className="flex flex-col gap-3 rounded-lg w-[200px] mx-auto">
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
                  className="w-full bg-[#994d51] hover:bg-[#f3e7e8] hover:text-[#994d51] text-white text-xs md:text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalProducts;
