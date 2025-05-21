import { Fade, Slide } from "react-awesome-reveal";
import { FaUtensils, FaCocktail } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const offers = [
  {
    icon: <FaUtensils className="text-[#5f3627] text-5xl mb-4" />,
    title: "Weekend Feast",
    description: "Enjoy 25% off on all Italian dishes this Friday–Sunday!",
    badge: "25% OFF",
    bg: "bg-red-50",
  },
  {
    icon: <FaCocktail className="text-[#141948] text-5xl mb-4" />,
    title: "Happy Hour",
    description: "Buy 1 Get 1 Free on drinks from 4–6 PM every day!",
    badge: "BOGO",
    bg: "bg-green-50",
  },
];

const OfferSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <Fade cascade direction="up" damping={0.2}>
        <SectionTitle
          subHeading={"Grab these mouth-watering deals before they’re gone!"}
          heading={"🎉 Unmissable Offers"}
        ></SectionTitle>
      </Fade>

      <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <Slide direction="up" triggerOnce key={index}>
            <div
              className={`p-8 rounded-xl shadow-lg text-left ${offer.bg} dark:bg-gray-800`}
            >
              {offer.icon}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {offer.description}
              </p>
              <span className="inline-block bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {offer.badge}
              </span>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
