import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const events = [
  {
    title: "Valentine’s Candlelight Dinner",
    date: "February 14, 2025",
    image: "https://i.ibb.co/Wg5NHnG/valentine.jpg",
    description:
      "Celebrate love with a 5-course candlelit dinner, live acoustic music, and a complimentary dessert for couples.",
  },
  {
    title: "Chef’s Table: Gourmet Night",
    date: "March 10, 2025",
    image: "https://i.ibb.co/bXmrSTs/chef.jpg",
    description:
      "An exclusive evening hosted by our head chef with a curated 7-course tasting menu and wine pairing.",
  },
  {
    title: "Spring Garden Brunch",
    date: "April 7, 2025",
    image: "https://i.ibb.co/p1X1P65/garden.jpg",
    description:
      "Join us in our outdoor garden for a fresh seasonal brunch, live jazz, and floral mocktails.",
  },
  {
    title: "Family Fiesta Weekend",
    date: "May 18–19, 2025",
    image: "https://i.ibb.co/Jr9kgB6/family.jpg",
    description:
      "Games, kids’ meals, and group offers – a fun-filled weekend for the whole family!",
  },
];

const EventPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-12">
      <Fade direction="up" triggerOnce>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Upcoming Events at Our Restaurant
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Experience unforgettable culinary moments. Reserve your seat today!
          </p>
        </div>
      </Fade>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-full flex flex-col">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-sm text-red-600 font-semibold">
                      {event.date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 text-base">
                      {event.description}
                    </p>
                  </div>
                  <button
                    onClick={() => alert("Booking confirmed! 🎉")}
                    className="mt-6 w-fit bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default EventPage;
