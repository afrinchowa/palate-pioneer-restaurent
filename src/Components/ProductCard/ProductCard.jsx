import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";

Modal.setAppElement("#root");

const ProductCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-yellow-400">${price}</span>
            <button
              onClick={handleAddToCart}
              className="btn bg-yellow-400 btn-outline border-0 border-b-4 mt-4 bg ml-1"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setModalIsOpen(true)}
              className="btn bg-yellow-400 btn-outline border-0 border-b-4 mt-4 bg ml-1"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Product Details"
        className="w-full h-full md:w-4/5 md:h-5/6 overflow-y-auto bg-white p-8 rounded-lg shadow-xl relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex flex-col gap-4">
          <img
            src={image}
            alt={name}
            className="rounded w-full h-64 object-cover"
          />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{recipe}</p>

          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </span>
            <span className="text-sm text-gray-600">
              (4.5 avg from 87 reviews)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="btn bg-yellow-400 text-white"
            >
              Add to Cart
            </button>
            <button onClick={handleAddToCart} className="btn btn-outline">
              Add to Wishlist
            </button>
          </div>

          {/* Suggested Products Placeholder */}
          <div>
            <h3 className="text-lg font-semibold mt-4">Suggested Products:</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {/* You can map real suggested items here */}
              <div className="p-2 border rounded">Suggested 1</div>
              <div className="p-2 border rounded">Suggested 2</div>
            </div>
          </div>

          <button
            onClick={() => setModalIsOpen(false)}
            className="btn btn-sm btn-error self-end mt-4"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
