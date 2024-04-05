import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import upcomming1 from "../../../assets/Home/menu/up-1.jpg";
import upcomming2 from "../../../assets/Home/menu/up-2.jpg";
import upcomming3 from "../../../assets/Home/menu/up-3.jpg";
import upcomming4 from "../../../assets/Home/menu/up-4.jpg";

const Upcoming = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Upcoming Events"}
      ></SectionTitle>
      <div className="md:flex space-x-10 items-center ">
      
        <div className="w-2/3">
          <p className="text-4xl font-semibold text-[#96705B] ">
          07/09/2024 — 08/09/2024
          </p>
          <p className="text-4xl font-bold hover:underline mt-5 ">
            Desert Festive
          </p>
          <p className="mt-5 ">
          Indulge in the magic of the season with our array of festive desserts. From classic favorites to innovative creations, each bite is a celebration of sweetness. Join us in savoring the joy of the holidays with every delicious treat
          </p>
          <div className="flex justify-between">
            <p className="mt-8">Dessert</p>
            <button className="btn btn-outline mt-5 ">VIEW</button>
          </div>
        </div>
        <div className="w-1/3">
          <img src={upcomming4} alt="" />
        </div>
      </div>
      <div className="md:flex space-x-10 items-center ">
        <div className="w-1/3">
          <img src={upcomming2} alt="" />
        </div>
        <div className="w-2/3">
          <p className="text-4xl font-semibold text-[#96705B] ">
            06/08/2024 — 12/08/2024
          </p>
          <p className="text-4xl font-bold hover:underline mt-5 ">
            Taste the Old and New Napa Valley
          </p>
          <p className="mt-5 ">
            If the fruit in a pan, adding chopped shallot, a little soda to
            sweeten it the carrots, and then chopping fine, and the size of
            recipes for at my best; and well cooked, taking on the sauce and let
            it thickens; add …
          </p>
          <div className="flex justify-between">
            <p className="mt-8">Napa Valley</p>
            <button className="btn btn-outline mt-5 ">VIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
