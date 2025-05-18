import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import img1 from "../../../assets/Home/banner/banner1.jpg";
import img2 from "../../../assets/Home/banner/banner2.jpg";
import img3 from "../../../assets/Home/banner/banner3.jpg";
import img from "../../../assets/Home/banner/banner.jpg";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const bannerData = [
  {
    bg: img,
    title: "Enjoy Our",
    highlight: "Delicious",
    desc: "Price: $10.50",
    orderNum: "123-59794069",
    cta: "Order Now",
    img: img1,
  },
  {
    bg: img,
    title: "Savor Every",
    highlight: "Bite",
    desc: "Only $12.99 Today!",
    orderNum: "987-24512123",
    cta: "Try Now",
    img: img2,
  },
  {
    bg: img,
    title: "Fresh &",
    highlight: "Authentic",
    desc: "From farm to plate.",
    orderNum: "111-24567789",
    cta: "Grab Yours",
    img: img3,
  },
];

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <AutoplaySlider
        className="h-[600px] max-w-screen-2xl"
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        bullets={false}
        organicArrows={false}
      >
        {bannerData.map((item, index) => (
          <div key={index}>
            <div className="relative h-[600px] w-full">
              {/* Actual Background Image */}
              <img
                src={item.bg}
                alt="Banner Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

              {/* Content */}
              <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-32 h-full gap-6">
                {/* Text */}
                <div className="flex-1 text-white space-y-4 max-w-xl mb-10 lg:mb-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {item.title} <br />
                    <span className="text-yellow-400">{item.highlight}</span> Food
                  </h1>
                  <div className="inline-flex text-sm font-medium rounded overflow-hidden">
                    <span className="bg-white text-black px-4 py-2">Buy One. Get One</span>
                    <span className="bg-red-500 text-white px-4 py-2">FREE</span>
                  </div>
                  <p className="text-lg">
                    {item.desc.includes("$") ? (
                      <>
                        Price: <span className="text-yellow-400 font-bold">{item.desc.split(":")[1]}</span>
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                  <p className="text-sm">
                    🛵 Delivery Order Num:{" "}
                    <span className="text-red-400 font-medium">{item.orderNum}</span>
                  </p>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                  <Link to="/products">{item.cta} </Link>  
                  </button>
                </div>

                {/* Product Image */}
                <div className="flex-1 flex justify-center ">
                  <img
                    src={item.img}
                    alt="Dish"
                    className="lg:w-full h-auto object-contain rounded-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
