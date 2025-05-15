import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Upcoming from "../Upcoming/Upcoming";
import Newsletter from "../Newsletter/Newsletter";
import OfferSection from "../Offer/Offer";
import BlogSection from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Palate Pioneer | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Upcoming></Upcoming>
        <OfferSection/>
        <Newsletter/>
        <BlogSection/>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
