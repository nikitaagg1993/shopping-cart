//components/ShowCourseComponent.js
import React from "react";
import { Course, Courses } from "../types";

type ShowCourseComponentProps = {
  filterCourseFunction: Courses;
  addCourseToCartFunction: (course: Course) => void;
};

function ShowCourseComponent({
  filterCourseFunction,
  addCourseToCartFunction,
}: ShowCourseComponentProps) {
  return (
    <div className="product-list">
      {filterCourseFunction.length === 0 ? (
        <p className="no-results">Sorry Geek, No matching Product found.</p>
      ) : (
        filterCourseFunction.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addCourseToCartFunction(product)}
            >
              Add to Shopping Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowCourseComponent;
