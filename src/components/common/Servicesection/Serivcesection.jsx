import React from "react";
import "./Servicesection.css";

const services = [
  {
    id: 1,
    icon: "ri-customer-service-2-fill",
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind.",
  },
  {
    id: 2,
    icon: "ri-user-3-fill",
    title: "Personal Account",
    description:
      "With big discounts, free delivery and a dedicated support specialist.",
  },
  {
    id: 3,
    icon: "ri-price-tag-3-fill",
    title: "Amazing Savings",
    description:
      "Up to 70% off new Products, you can be sure of the best price.",
  },
];

const Servicesection = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicesection;