import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
const [menu,setMenu] = useState([]);
    useEffect(() => {
fetch(' menu.json')
.then(res => res.json())
.then(data =>{
    const popularItems = data.filter(item => item.category === 'Desserts')
    setMenu(popularItems)})  
    },[])

  return (
    <section>
      <SectionTitle
        subHeading={" Our Popular Items Makes Your Day"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 p-10">
        {
            menu.map(item =><MenuItem key={item._id} item={item}></MenuItem> )
        }
      </div>
    </section>
  );
};

export default PopularMenu;
