import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Import Skeleton styles
import useMenu from "../../hooks/useMenu";

const Products = () => {
  const [menu] = useMenu();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtering Logic
  useEffect(() => {
    let result = [...menu];

    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1] &&
        (item.rating || 0) >= rating
    );

    setFiltered(result);
  }, [menu, search, category, priceRange, rating]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-4">
      {/* Sidebar Filters */}
      <div className="w-full lg:w-1/4 space-y-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Desserts">Desserts</option>
          <option value="Curries">Curries</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Appetizers">Appetizers</option>
          <option value="Soups">Soups</option>
          <option value="Drinks">Drinks</option>
          <option value="Pasta">Pasta</option>
          <option value="Poultry">Poultry</option>
          <option value="Burgers">Burgers</option>
        </select>
        <div>
          <label>Price Range:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="range"
          />
          <div className="text-sm">Up to ${priceRange[1]}</div>
        </div>
        <div>
          <label>Minimum Rating:</label>
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="range"
          />
          <div className="text-sm">{rating} Stars</div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full lg:w-3/4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.length === 0
            ? // Skeleton Loading for each product card
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <Skeleton height={200} />
                  <div className="card-body">
                    <Skeleton width="60%" height={30} />
                    <Skeleton width="80%" height={20} />
                    <div className="flex justify-between items-center mt-4">
                      <Skeleton width={50} height={20} />
                      <Skeleton width={60} height={30} />
                    </div>
                  </div>
                </div>
              ))
            : currentItems.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn mx-1 ${currentPage === i + 1 ? "btn-active" : "btn-outline"}`}
            >
              {i + 1}
            </button>



          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
