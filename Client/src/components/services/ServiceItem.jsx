import React from "react";

const ServiceItem = ({ service }) => {
  const { name, description, price } = service;

  return (
    <div className="service-item">
      <h3 className="service-name">{name}</h3>
      <p className="service-description">{description}</p>
      <p className="service-price">Price: ${price}</p>
    </div>
  );
};

export default ServiceItem;
