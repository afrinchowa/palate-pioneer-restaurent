
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Banner.css"; // Import the CSS file for banner styles

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="max-w-screen-2xl">
      <AutoplaySlider
        className="h-[600px] max-w-screen-2xl"
        play={true} // Autoplay is set to true
        cancelOnInteraction={false} // Should stop playing on user interaction
        interval={3000} // Interval between slides in milliseconds
        bullets={false} // Hide the bullets navigation
        organicArrows={false} // Hide the arrow navigation
        media={[
          {
            source:
              "https://i.ibb.co/CzgvGbn/banner1.jpg",
            alt: "Slider 1",
         
          },
          {
            source:
              "https://i.ibb.co/xMRPWkZ/banner2.jpg",
            alt: "Slider 2",
          },
          {
            source:
              "https://i.ibb.co/vz15ScK/banner3.jpg",
            alt: "Slider 3",
          },
          {
            source:
              "https://i.ibb.co/64s6mcK/banner4.jpg",
            alt: "Slider 4",
          },
          {
            source:
              "https://i.ibb.co/k1RhbQf/banner5.jpg",
            alt: "Slider 5",
          },
          {
            source:
              "https://i.ibb.co/CtZBzHW/banner6.jpg",
            alt: "Slider 6",
          },
        ]}
      />
    </div>
  );
};

export default Banner;
