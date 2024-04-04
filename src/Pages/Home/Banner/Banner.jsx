import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
 <div className="">
       <AutoplaySlider className="h-96"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1500}
      media={[
    
        {
          source:
            "https://i.ibb.co/wLYkfTr/lex-sirikiat-ymt-Ph-YNK49-A-unsplash.jpg",
        },
        {
          source:
            "https://i.ibb.co/jzKDcYX/volodymyr-proskurovskyi-Xh-S0-Ykp-QI2-M-unsplash.jpg",
        },
      ]}
    />
 </div>
  );
};

export default Banner;
