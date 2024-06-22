import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

<div>
    {/* category */}
    <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

    {/* price */}
    <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

</div>





          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a category
            </option>
            <option value="Dessert">Dessert</option>
            <option value="Pizza">Pizza</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Soup">Soup</option>
            <option value="Drinks">Drinks</option>
            <option value="Pasta">Pasta</option>
            <option value="Poultry">Poultry</option>
            <option value="Burger">Burger</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
