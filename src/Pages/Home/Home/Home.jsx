import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-screen-xl mx-auto'>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Upcoming></Upcoming>
      <Testimonials></Testimonials>
      </div>
      
    </div>
  );
};

export default Home;
