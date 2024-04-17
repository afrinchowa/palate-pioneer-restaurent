import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "Desserts");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch(" menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter(
  //         (item) => item.category === "Desserts"
  //       );
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={" Our Popular Items Makes Your Day"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button  className="btn bg-[#AB8476] btn-outline border-0 border-b-4  mt-5 ">
        VIEW Our Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
