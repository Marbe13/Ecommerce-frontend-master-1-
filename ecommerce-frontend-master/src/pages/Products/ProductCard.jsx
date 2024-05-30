import React from "react";

export const ProductCard = ({ data }) => {
  return (
    <div className="card h-100">
      <img src={data.image} alt={data.name} /> 
      <div className="product-card-body"/>
      <div className="card-body">
      <h3>{data.name}</h3>
        <p>{data.description}</p>
        <button>Add to Cart</button>
        <div className="card-title">{data.name}</div>
        <div className="card-text">{data.price}</div>
      </div>
    </div>
  );
};
