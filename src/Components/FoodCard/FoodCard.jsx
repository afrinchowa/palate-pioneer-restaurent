const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  const handleAddToCart = (food) => {
    console.log(food);
  };
  return (
    <div className="max-w-md rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <p className=" right-0 mr-4 mt-4 px-4 bg-[#96705B]">{price}</p>
      <div className="flex flex-col items-center justify-between p-6 space-y-8">
        <div
          className="space-y-2 text-center
        "
        >
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-[#1A1423]">{recipe}</p>
        </div>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn bg-[#AB8476] btn-outline border-0 border-b-4 mt-4 bg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
