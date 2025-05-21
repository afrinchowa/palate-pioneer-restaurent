import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Upcomming.css";
import upcomming1 from "../../../assets/Home/menu/up-1.jpg";

import upcomming4 from "../../../assets/Home/menu/up-4.jpg";

const Upcoming = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Upcoming Events"}
      ></SectionTitle>

      <div className="text-black bg-fixed upComingImg md:flex space-x-10 items-center pb-20 py-8 px-16 ">
        <div className="w-2/3 mr-10  bg-gray-300 bg-opacity-40 p-10">
          <p className="text-4xl font-semibold text-yellow-600 ">
            07/09/2024 — 08/09/2024
          </p>
          <p className="text-4xl font-bold hover:underline mt-5 ">
            Desert Festive
          </p>
          <p className="mt-5 ">
            Indulge in the magic of the season with our array of festive
            desserts. From classic favorites to innovative creations, each bite
            is a celebration of sweetness. Join us in savoring the joy of the
            holidays with every delicious treat
          </p>
          <div className="flex justify-between">
            <p className="mt-8">Dessert</p>
            <button className="btn btn-outline border-0 border-b-4 bg-yellow-400  mt-5">
              VIEW
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <img src={upcomming4} alt="" />
        </div>
      </div>
      <div className="text-white bg-fixed upComingImg2 md:flex space-x-10 items-center pb-20 py-8 px-16   ">
        <div className="w-1/3 mr-10 p-8  ">
          <img src={upcomming1} alt="" />
        </div>
        <div className="w-2/3 mr-10  bg-gray-300 bg-opacity-40 p-10 ">
          <p className="text-4xl font-semibold text-yellow-600 ">
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
            <button className="btn btn-outline border-0 border-b-4 bg-yellow-400  mt-5 ">
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
