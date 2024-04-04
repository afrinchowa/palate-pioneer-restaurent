import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
 <div className="">
       <AutoplaySlider className="h-[600px]"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1500}
      media={[
    
        {
          source:
            "https://i.ibb.co/SsshTjT/kyle-head-PW8-K-W-Kni0-unsplash.jpg",
        },
        {
          source:
            "https://i.ibb.co/KbdGJrR/louis-hansel-w-Xk-Gv-QJWI-Y-unsplash.jpg",
        },
        {
          source:
            "https://i.ibb.co/4WHB4Xr/edward-franklin-Nb-Q-M3-Cdzg-unsplash.jpg",
        },
        {
          source:
            "https://i.ibb.co/x6rwQL1/alexandru-bogdan-ghita-Ue-Ykq-Qh4-Po-I-unsplash.jpg",
        },
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
