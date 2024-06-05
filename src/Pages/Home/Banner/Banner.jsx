
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
              "https://i.ibb.co/SsshTjT/kyle-head-PW8-K-W-Kni0-unsplash.jpg",
            alt: "Slider 1",
         
          },
          {
            source:
              "https://i.ibb.co/KbdGJrR/louis-hansel-w-Xk-Gv-QJWI-Y-unsplash.jpg",
            alt: "Slider 2",
          },
          {
            source:
              "https://i.ibb.co/4WHB4Xr/edward-franklin-Nb-Q-M3-Cdzg-unsplash.jpg",
            alt: "Slider 3",
          },
          {
            source:
              "https://i.ibb.co/x6rwQL1/alexandru-bogdan-ghita-Ue-Ykq-Qh4-Po-I-unsplash.jpg",
            alt: "Slider 4",
          },
          {
            source:
              "https://i.ibb.co/wLYkfTr/lex-sirikiat-ymt-Ph-YNK49-A-unsplash.jpg",
            alt: "Slider 5",
          },
          {
            source:
              "https://i.ibb.co/jzKDcYX/volodymyr-proskurovskyi-Xh-S0-Ykp-QI2-M-unsplash.jpg",
            alt: "Slider 6",
          },
        ]}
      />
    </div>
  );
};

export default Banner;
