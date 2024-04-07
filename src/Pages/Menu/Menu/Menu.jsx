
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/Home/menu/menu.jpg"
import dessertImg from "../../../assets/Home/menu/Chocolate Lava Cake.jpg"
import CurriesImg from "../../../assets/Home/menu/clem-onojeghuo-zlABb6Gke24-unsplash.jpg"
import VegetarianImg from "../../../assets/Home/menu/Caesar Salad.jpg"
import AppetizersImg from "../../../assets/Home/menu/BBQ Ribs.jpg"
import SoupsImg from "../../../assets/Home/menu/Miso Soup.jpg"
import DrinksImg from "../../../assets/Home/menu/Key Lime Pie.jpg"
import PoultryImg from "../../../assets/Home/menu/Chicken Tikka Masala.jpg"
import BurgersImg from "../../../assets/Home/menu/veg burger.jpg"

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] =useMenu();
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
                <title>Palate Pioneer | Menu</title>
            </Helmet>
           <Cover img={menuImg} title="Our Menu"></Cover>
           {/* main cover */}
          <SectionTitle subHeading="Dont miss todays offer" heading="todays offer" ></SectionTitle>
          {/* offered */}
          <MenuCategory items={Desserts}></MenuCategory>
          {/* dessert */}
          <MenuCategory items={Desserts} title="Dessert" img={dessertImg}></MenuCategory>
          <MenuCategory items={Curries} title="Curries" img={CurriesImg}></MenuCategory>
          <MenuCategory items={Vegetarian} title="Vegetarian" img={VegetarianImg}></MenuCategory>
          <MenuCategory items={Appetizers} title="Appetizers" img={AppetizersImg}></MenuCategory>
          <MenuCategory items={Soups} title="Soups" img={SoupsImg}></MenuCategory>
          <MenuCategory items={Drinks} title="Drinks" img={DrinksImg}></MenuCategory>
          {/* <MenuCategory items={Pasta} title="Pasta" img={PastaImg}></MenuCategory> */}
          <MenuCategory items={Poultry} title="Poultry" img={PoultryImg}></MenuCategory>
          <MenuCategory items={Burgers} title="Burgers" img={BurgersImg}></MenuCategory>
        </div>
    );
};

export default Menu;
