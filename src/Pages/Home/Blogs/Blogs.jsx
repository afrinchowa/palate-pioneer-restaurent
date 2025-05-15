import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const blogs = [
  {
    id: 1,
    title: "Top 5 Signature Dishes You Must Try",
    image: "https://i.ibb.co/CtZBzHW/banner6.jpg",
    snippet: "Explore our chef’s handpicked dishes that have made our restaurant a local favorite.",
  },
  {
    id: 2,
    title: "Behind the Scenes: Our Kitchen Story",
    image: "https://i.ibb.co/P4s8pqt/stella-de-smit-ra-E26-Th7-Nw-E-unsplash.jpg",
    snippet: "Discover how we prepare our dishes from scratch, with love and the freshest ingredients.",
  },
  {
    id: 3,
    title: "Customer Spotlight: Why They Keep Coming Back",
    image: "https://i.ibb.co/kmDC10b/molly-keesling-H-2f-VMiq-JF8-unsplash.jpg",
    snippet: "Real stories from our loyal customers about their favorite meals and memories.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <Fade direction="up" triggerOnce>
          <SectionTitle heading={"📚 Our Latest Blogs"} subHeading={"Get a taste of our culture, recipes, and food journeys."} ></SectionTitle>
        
      </Fade>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <Fade key={blog.id} direction="up" cascade damping={0.1} triggerOnce>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.snippet}</p>
                <button className="inline-block px-4 py-2 bg-[#AB8476] text-white text-sm font-semibold rounded hover:bg-[#101135] transition">
                  Read More
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
