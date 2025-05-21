import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * OrderTab: A component that renders a grid of FoodCards from an array of items
 * 
 * @param {object[]} items - An array of objects, each containing the props for a FoodCard
 * @returns {JSX.Element} A JSX element representing the OrderTab component
 */
/*******  fe5b3f85-969b-4634-8dde-214b4165ead1  *******/  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
