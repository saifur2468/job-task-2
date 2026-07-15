import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const categories = ["All", "Panjabi", "Kurti", "T-shirt", "Polo"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
        (product) => product.category === selectedCategory
      );

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Explore Our Fashion Collection
        </h2>

        <p className="text-gray-500 mt-3">
          Find the latest Panjabi, Kurti, T-Shirt & Polo collections.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-lg border transition font-semibold ${selectedCategory === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-black hover:bg-primary hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* No Product Found */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl font-bold text-red-500">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-3">
            There are no products available in this category.
          </p>
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <figure className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover hover:scale-105 transition duration-500"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>

                <p className="text-gray-500">{product.category}</p>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-primary">
                    ৳ {product.price}
                  </p>

                  {product.rating && (
                    <span className="badge badge-warning flex justify-center gap-2 items-center">
                      <FaStar ></FaStar>  {product.rating}
                    </span>
                  )}
                </div>

                <Link to={`/product/${product.id}`}>
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;