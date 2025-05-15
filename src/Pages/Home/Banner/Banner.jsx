import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Banner.css"; // Import the CSS file for banner styles
import img1 from '../../../assets/Home/banner/banner1.jpg';
import img2 from '../../../assets/Home/banner/banner2.jpg';
import img3 from '../../../assets/Home/banner/banner3.jpg';
import img4 from '../../../assets/Home/banner/banner4.jpg';
import img5 from '../../../assets/Home/banner/banner5.jpg';
import img6 from '../../../assets/Home/banner/banner6.jpg';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="max-w-screen-2xl">
     <AutoplaySlider
  className="h-[600px] max-w-screen-2xl"
  play={true}
  cancelOnInteraction={false}
  interval={3000}
  bullets={false}
  organicArrows={false}
>
  <div className="relative">
    <img src={img1} alt="Slider 1" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      Savor Every Bite – Where Flavor Meets Elegance
    </div>
  </div>

  <div className="relative">
    <img src={img2} alt="Slider 2" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      Fresh Ingredients. Authentic Taste.
    </div>
  </div>

  <div className="relative">
    <img src={img3} alt="Slider 3" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      Your Culinary Adventure Begins Here
    </div>
  </div>

  <div className="relative">
    <img src={img4} alt="Slider 4" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      Delight in Every Dish – Crafted with Passion
    </div>
  </div>

  <div className="relative">
    <img src={img5} alt="Slider 5" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      A Perfect Blend of Taste & Ambience
    </div>
  </div>

  <div className="relative">
    <img src={img6} alt="Slider 6" className="w-full h-[600px] object-cover" />
    <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-96 lg:left-32 text-white text-lg md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 md:px-6 md:py-4 rounded-md max-w-[90%] md:max-w-md">
      Reserve Your Table Today – Experience Excellence
    </div>
  </div>
</AutoplaySlider>

    </div>
  );
};

export default Banner;
