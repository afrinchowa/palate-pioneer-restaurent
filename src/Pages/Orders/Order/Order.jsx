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
    "Dessert",
    "Curries",
    "Vegetarian",
    "Appetizers",
    "Soups",
    "Drinks",
    "Pasta",
    "Poultry",
    "Burgers"
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const Desserts = menu.filter((item) => item.category === "Desserts");
  const Curries = menu.filter((item) => item.category === "Curries");
  const Vegetarian = menu.filter((item) => item.category === "Vegetarian");
  const Appetizers = menu.filter((item) => item.category === "Appetizers");
  const Soups = menu.filter((item) => item.category === "Soups");
  const Drinks = menu.filter((item) => item.category === "Drinks");
  const Pasta = menu.filter((item) => item.category === "Pasta");
  const Poultry = menu.filter((item) => item.category === "Poultry");
  const Burgers = menu.filter((item) => item.category === "Burgers");
  return (
    <div>
       <Helmet>
                <title>Palate Pioneer | Order Food</title>
            </Helmet>
      <Cover img={orderCover} title="order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Curries</Tab>
          <Tab>Vegetarian</Tab>
          <Tab>Appetizers</Tab>
          <Tab>Soups</Tab>
          <Tab>Drinks</Tab>
          <Tab>Pasta</Tab>
          <Tab>Poultry</Tab>
          <Tab>Burgers</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={Desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Curries}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Vegetarian}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Appetizers}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Pasta}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Poultry}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Burgers}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
