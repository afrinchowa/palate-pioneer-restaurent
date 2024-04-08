const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="max-w-md rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <p className=" right-0 mr-4 mt-4 px-4 bg-[#96705B]">{price}</p>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2 text-center
        ">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">{recipe}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
