import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import "./AddItems.css";
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
      <div className="m-6 p-20 bg-[#3D314A] text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text  text-white">Recipe name*</span>
            </div>
            <input
              {...register("name" , {required:true})}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-4">
              <div className="label">
                <span className="label-text  text-white">Category*</span>
              </div>
              <select
                {...register("category" , {required:true})}
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
            </label>

            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text  text-white">Price*</span>
              </div>
              <input
                {...register("price" , {required:true})}
                type="number"
                placeholder="Recipe Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text  text-white">Recipe Details</span>
            </div>
            <textarea  {...register("recipe" , {required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          {/* file Input */}
          <div className="form-control w-full my-6">
            <input
              type="file"  {...register("image" , {required:true})}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn btn-grad ">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
