// Category.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom"; // ✅ Add this

const categories = [
  { title: "Desserts", img: "https://i.ibb.co/Pr9pnRR/lorena-samponi-Ju-Ae7-UZs68s-unsplash.jpg" },
  { title: "Curries", img: "https://i.ibb.co/P4s8pqt/stella-de-smit-ra-E26-Th7-Nw-E-unsplash.jpg" },
  { title: "Vegetarian", img: "https://i.ibb.co/61NG84v/jonathan-borba-5-E0d3lfo-C1w-unsplash.jpg" },
  { title: "Appetizers", img: "https://i.ibb.co/SVnyxpL/slide2.jpg" },
  { title: "Soups", img: "https://i.ibb.co/C9pfGyQ/slide3.jpg" },
  { title: "Drinks", img: "https://i.ibb.co/17YShDS/slide5.jpg" },
  { title: "Pasta", img: "https://i.ibb.co/DYxk8RD/slide4.jpg" },
  { title: "Poultry", img: "https://i.ibb.co/8mqry6L/the-nix-company-ljvm17b-H-e0-unsplash.jpg" },
  { title: "Burgers", img: "https://i.ibb.co/PTDkcpR/slide6.jpg" },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Format category if needed
    navigate(`/order/${category}`);
  };

  return (
    <section className="p-10">
      <SectionTitle
        subHeading="Delight in Culinary Creations Crafted with Passion"
        heading="Explore Our Menu"
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative cursor-pointer"
              onClick={() => handleCategoryClick(item.title)}
            >
              <img
                className="transition duration-300 ease-in-out hover:scale-110 brightness-50 hover:brightness-75"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute bottom-4 left-0 w-full">
                <h3 className={`text-white text-3xl uppercase ml-10 -mt-12`}>
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
