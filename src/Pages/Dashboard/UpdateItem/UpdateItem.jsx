import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        // show success pop-up
        Swal.fire({
          title: "Good job!",
          text: `${data.name} is updated to the menu`,
          icon: "success",
          timer: 1500,
        });
      }
    }

    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Update item"
        subHeading="Refresh Info"
      ></SectionTitle>
      <div className="m-6 p-20 bg-[#3D314A] text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text  text-white">Recipe name*</span>
            </div>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
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
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="default">
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
                defaultValue={price}
                {...register("price", { required: true })}
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
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          {/* file Input */}
          <div className="form-control w-full my-6">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn btn-grad ">
            Confirm<FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
