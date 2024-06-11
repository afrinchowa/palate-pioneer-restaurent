import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({ item }) => {
  const { image, price, name, recipe,_id } = item;
  const {user} = useAuth();
const navigate = useNavigate();
const location = useLocation();
const axiosSecure =useAxiosSecure();
const [, refetch]= useCart();


  const handleAddToCart = () => {
if(user && user.email){
  // send cart item to the database
const cartItem ={
menuId:_id,
email:user.email,
name,
image,
price
}
axiosSecure.post('/carts',cartItem)
.then(res=> {
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to your cart`,
      showConfirmButton: false,
      timer: 1500
    });
// refetch cart to update the cart items count 
refetch();



  }
})
}else{
  Swal.fire({
    title: "You are not logged in",
    text: "Please log in to add to the cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Log in!"
  }).then((result) => {
    if (result.isConfirmed) {
    //  send the user to the log in page
navigate('/login',{state: {from:location} })
    }
  });
}

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
          onClick={ handleAddToCart}
          className="btn bg-[#AB8476] btn-outline border-0 border-b-4 mt-4 bg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
