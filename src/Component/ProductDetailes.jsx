import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetailes = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const product = data.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h2>
      </div>
    );
  }

  const {
    name,
    category,
    price,
    image,
    rating,
    colors,
    sizes,
    inStock,
    description,
  } = product;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Image */}
        <div className="w-full rounded-xl bg-slate-50 " >
          <img
            src={image}
            alt={name}
            className="w-[350px] h-[450px] rounded-xl mx-auto p-4"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>

          <p className="text-gray-500 mt-2">
            Category: {category}
          </p>

          <p className="text-3xl text-primary font-bold mt-4">
            ৳ {price}
          </p>

          <p className="mt-3 flex  gap-2">
            <FaStar></FaStar> {rating}
          </p>

          <p className="mt-5">
            {description}
          </p>

          <p className="mt-4">
            <strong>Available Sizes:</strong>{" "}
            {sizes?.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Colors:</strong>{" "}
            {colors?.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Status:</strong>{" "}
            {inStock ? "In Stock" : "Out of Stock"}
          </p>

          <button className="btn btn-primary mt-6">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailes;