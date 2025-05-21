import { useState } from "react";
import orderCover from "../../../assets/Home/banner/banner4.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "Desserts",
    "Curries",
    "Vegetarian",
    "Appetizers",
    "Soups",
    "Drinks",
    "Pasta",
    "Poultry",
    "Burgers",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [menu] = useMenu();

  // Filter menu items by category
  const filteredMenus = {
    Desserts: menu.filter((item) => item.category === "Desserts"),
    Curries: menu.filter((item) => item.category === "Curries"),
    Vegetarian: menu.filter((item) => item.category === "Vegetarian"),
    Appetizers: menu.filter((item) => item.category === "Appetizers"),
    Soups: menu.filter((item) => item.category === "Soups"),
    Drinks: menu.filter((item) => item.category === "Drinks"),
    Pasta: menu.filter((item) => item.category === "Pasta"),
    Poultry: menu.filter((item) => item.category === "Poultry"),
    Burgers: menu.filter((item) => item.category === "Burgers"),
  };

  return (
    <div className="px-4 sm:px-10 max-w-screen-xl mx-auto">
      <Helmet>
        <title>Palate Pioneer | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food" />

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-8"
      >
        {/* Responsive Tab List */}
        <TabList className="flex overflow-x-auto space-x-6 border-b border-gray-300 scrollbar-hide">
          {categories.map((cat, idx) => (
            <Tab
              key={idx}
              className="py-3 px-5 cursor-pointer text-gray-600 whitespace-nowrap
              focus:outline-none
              rounded-md
              transition
              duration-300
              hover:text-red-600
              hover:bg-red-100
              "
              selectedClassName="border-b-4 border-red-600 text-red-600 font-semibold"
            >
              {cat}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        {categories.map((cat, idx) => (
          <TabPanel key={idx} className="mt-6">
            <OrderTab items={filteredMenus[cat]} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;
