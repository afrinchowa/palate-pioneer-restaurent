import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const Banner = () => {
    return (
      
        <AwesomeSlider
        media={[
          {
            source: 'https://i.ibb.co/D965gkW/mohammad-saifullah-NEq-PK-b-F3-HQ-unsplash.jpg',
          },
          {
            source: '   https://i.ibb.co/wLYkfTr/lex-sirikiat-ymt-Ph-YNK49-A-unsplash.jpg',
          },
          {
            source: 'https://i.ibb.co/jzKDcYX/volodymyr-proskurovskyi-Xh-S0-Ykp-QI2-M-unsplash.jpg',
          },
        ]}
      />
    );
};

export default Banner;